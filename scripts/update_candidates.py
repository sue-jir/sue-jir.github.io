#!/usr/bin/env python3
"""Update data/candidate-jobs.json from imported Wuhan cross-border job text.

The GitHub Pages site is static, so this script does not scrape recruiting apps.
It ingests approved text sources, parses them into the app's company schema,
deduplicates by company name, and writes the candidate pool JSON.
"""

from __future__ import annotations

import json
import os
import re
import sys
from datetime import datetime, timedelta, timezone
from pathlib import Path
from typing import Any


ROOT = Path(__file__).resolve().parents[1]
KEYWORDS_PATH = ROOT / "keywords.json"
DATA_DIR = ROOT / "data"
CANDIDATES_PATH = DATA_DIR / "candidate-jobs.json"
IMPORTED_TEXT_PATH = DATA_DIR / "imported-job-texts.txt"
SEARCH_RESULTS_DIR = DATA_DIR / "search-results"

ROLE_KEYWORDS = [
    "跨境电商",
    "亚马逊",
    "Amazon",
    "Shopee",
    "Lazada",
    "运营助理",
    "产品开发助理",
]
BENEFIT_KEYWORDS = ["双休", "五险一金", "五险", "一金", "社保"]
HARD_RISK_WORDS = ["销售", "客服", "外贸业务员", "电话开发", "客户开发", "单休", "大小周"]
SOFT_RISK_WORDS = ["英语流利", "口语流利", "六级", "专八", "2年以上", "两年以上", "3年以上", "三年以上"]
COMPANY_MARKERS = ["公司", "集团", "科技", "电子商务", "贸易", "商贸", "网络", "供应链", "电商"]


def today_china() -> str:
    return datetime.now(timezone(timedelta(hours=8))).date().isoformat()


def load_json(path: Path, fallback: Any) -> Any:
    if not path.exists():
        return fallback
    with path.open("r", encoding="utf-8") as file:
        return json.load(file)


def write_json_if_changed(path: Path, payload: Any) -> bool:
    path.parent.mkdir(parents=True, exist_ok=True)
    text = json.dumps(payload, ensure_ascii=False, indent=2) + "\n"
    old_text = path.read_text(encoding="utf-8") if path.exists() else ""
    if old_text == text:
        return False
    path.write_text(text, encoding="utf-8")
    return True


def load_keywords() -> list[str]:
    raw = load_json(KEYWORDS_PATH, [])
    if isinstance(raw, dict):
        raw = raw.get("keywords", [])
    if not isinstance(raw, list):
        raise ValueError("keywords.json must be a JSON array or an object with a keywords array")
    keywords = [str(item).strip() for item in raw if str(item).strip()]
    if not keywords:
        raise ValueError("keywords.json is empty")
    return keywords


def iter_text_sources() -> list[tuple[str, str]]:
    sources: list[tuple[str, str]] = []
    env_text = os.environ.get("AUTO_JOB_TEXTS", "").strip()
    if env_text:
        sources.extend(iter_job_lines(env_text, "AUTO_JOB_TEXTS"))

    if IMPORTED_TEXT_PATH.exists():
        sources.extend(iter_job_lines(IMPORTED_TEXT_PATH.read_text(encoding="utf-8"), str(IMPORTED_TEXT_PATH)))

    if SEARCH_RESULTS_DIR.exists():
        for path in sorted(SEARCH_RESULTS_DIR.glob("*.txt")):
            sources.extend(iter_job_lines(path.read_text(encoding="utf-8"), str(path)))

    return sources


def iter_job_lines(text: str, source: str) -> list[tuple[str, str]]:
    lines: list[tuple[str, str]] = []
    for raw_line in text.splitlines():
        line = raw_line.strip()
        if not line or line.startswith("#"):
            continue
        lines.append((line, source))
    return lines


def split_parts(text: str) -> list[str]:
    return [part.strip() for part in re.split(r"[｜|\t,，;；]+", text) if part.strip()]


def contains_any(text: str, words: list[str]) -> bool:
    lower = text.lower()
    return any(word.lower() in lower for word in words)


def infer_company_name(parts: list[str], text: str) -> str:
    if parts and contains_any(parts[0], COMPANY_MARKERS) and not contains_any(parts[0], ROLE_KEYWORDS):
        return parts[0]
    for part in parts:
        if contains_any(part, COMPANY_MARKERS) and not contains_any(part, ROLE_KEYWORDS):
            return part
    match = re.search(r"([\u4e00-\u9fa5A-Za-z0-9（）()·]{2,40}(?:公司|集团|科技|电子商务|贸易|商贸|网络|供应链))", text)
    return match.group(1) if match else ""


def infer_role(parts: list[str], text: str) -> str:
    for part in parts:
        if contains_any(part, ROLE_KEYWORDS):
            return part
    match = re.search(r"([\u4e00-\u9fa5A-Za-z0-9/+ -]*(?:跨境电商|亚马逊|Amazon|Shopee|Lazada|运营助理|产品开发助理)[\u4e00-\u9fa5A-Za-z0-9/+ -]*)", text, re.I)
    return match.group(1).strip() if match else ""


def infer_city(text: str) -> str:
    return "武汉" if "武汉" in text else ""


def infer_district(parts: list[str], text: str) -> str:
    districts = [
        "洪山",
        "江夏",
        "武昌",
        "汉阳",
        "江汉",
        "江岸",
        "硚口",
        "东西湖",
        "东湖高新",
        "光谷",
        "蔡甸",
        "黄陂",
        "青山",
        "新洲",
        "经开",
    ]
    for part in parts:
        if "武汉" in part:
            return part
    for district in districts:
        if district in text:
            return f"武汉{district}"
    return "武汉" if "武汉" in text else "待核验"


def infer_salary(text: str) -> str:
    patterns = [
        r"\d+(?:\.\d+)?\s*-\s*\d+(?:\.\d+)?\s*[Kk]",
        r"\d+(?:\.\d+)?\s*[Kk]\s*-\s*\d+(?:\.\d+)?\s*[Kk]",
        r"\d+\s*千\s*-\s*\d+\s*千",
        r"\d+\s*-\s*\d+\s*千",
        r"面议",
    ]
    for pattern in patterns:
        match = re.search(pattern, text)
        if match:
            return re.sub(r"\s+", "", match.group(0))
    return "待核验"


def extract_benefits(text: str) -> list[str]:
    benefits: list[str] = []
    if "五险一金" in text:
        benefits.extend(["五险", "一金"])
    elif "五险" in text or "社保" in text:
        benefits.append("五险")
    if "一金" in text and "一金" not in benefits:
        benefits.append("一金")
    if "双休" in text or "周末双休" in text:
        benefits.append("双休")
    return list(dict.fromkeys(benefits))


def infer_company_scale(text: str) -> str:
    scale_patterns = ["20人以下", "20-99人", "100-499人", "500人以上"]
    for scale in scale_patterns:
        if scale in text:
            return scale
    return "未知"


def infer_platform(text: str) -> str:
    lower = text.lower()
    if "amazon" in lower or "亚马逊" in text:
        return "Amazon"
    if "shopee" in lower or "lazada" in lower:
        return "Shopee/Lazada"
    return "跨境电商"


def infer_role_level(text: str) -> str:
    lower = text.lower()
    if "amazon" in lower or "亚马逊" in text:
        return "amazon"
    if "shopee" in lower:
        return "shopee"
    if "lazada" in lower:
        return "lazada"
    if "产品开发" in text or "选品" in text:
        return "product_assistant"
    return "crossborder_assistant"


def infer_source_platform(source: str, text: str) -> str:
    joined = f"{source} {text}".lower()
    if "boss" in joined or "zhipin" in joined:
        return "BOSS"
    if "zhaopin" in joined or "智联" in text:
        return "智联"
    if "liepin" in joined or "猎聘" in text:
        return "猎聘"
    if "shixiseng" in joined or "实习僧" in text:
        return "实习僧"
    return "批量导入"


def infer_experience_years(text: str) -> int:
    explicit = re.search(r"(\d+)\s*年(?:以上)?(?:经验|工作经验)", text)
    if explicit:
        return int(explicit.group(1))
    if "三年以上" in text or "3年以上" in text:
        return 3
    if "两年以上" in text or "2年以上" in text:
        return 2
    if "一年以上" in text or "1年以上" in text:
        return 1
    return 0


def infer_english_level(text: str) -> int:
    lower = text.lower()
    if "英语流利" in text or "口语流利" in text or "专八" in text:
        return 5
    if "六级" in text or "cet-6" in lower or "cet6" in lower:
        return 4
    if "四级" in text or "cet-4" in lower or "cet4" in lower:
        return 3
    return 2


def has_hard_risk(text: str) -> bool:
    for risk in HARD_RISK_WORDS:
        if risk not in text:
            continue
        if risk == "销售" and "销售额" in text and not re.search(r"(销售岗|销售专员|电话销售|销售代表|外贸销售|销售助理|客户开发|业务员)", text):
            continue
        return True
    return False


def infer_risk_tags(text: str) -> list[str]:
    tags: list[str] = []
    risk_labels = {
        "销售": "销售风险",
        "客服": "客服风险",
        "外贸业务员": "外贸业务员风险",
        "电话开发": "电话开发风险",
        "客户开发": "客户开发风险",
        "单休": "单休风险",
        "大小周": "大小周风险",
    }
    for word, label in risk_labels.items():
        if word in text and label not in tags:
            tags.append(label)
    for word in SOFT_RISK_WORDS:
        if word in text:
            if "英语" in word or word in {"六级", "专八"}:
                tags.append("英语过高")
            if "年以上" in word:
                tags.append("经验过高")
    if "武汉" not in text:
        tags.append("不在武汉")
    if not extract_benefits(text):
        tags.append("福利待核验")
    return list(dict.fromkeys(tags))


def infer_target_type(scale: str) -> str:
    if scale == "500人以上":
        return "大型企业"
    if scale in {"20-99人", "100-499人"}:
        return "靠谱中小"
    if scale == "20人以下":
        return "小而美"
    return "备选"


def slugify(text: str) -> str:
    slug = re.sub(r"[^\u4e00-\u9fa5A-Za-z0-9]+", "-", text.lower()).strip("-")
    return f"auto-{slug[:48] or 'candidate'}"


def score_candidate(candidate: dict[str, Any]) -> int:
    score = 54
    scale = candidate.get("companyScale")
    benefits = set(candidate.get("benefits", []))
    if "五险" in benefits:
        score += 8
    if "一金" in benefits:
        score += 8
    if "双休" in benefits:
        score += 10
    if scale in {"20-99人", "100-499人"}:
        score += 8
    if scale == "500人以上":
        score += 6
    if candidate.get("isActiveHiring"):
        score += 12
    if candidate.get("isSingleRest"):
        score -= 18
    if candidate.get("isBigSmallWeek"):
        score -= 15
    if candidate.get("isSalesRisk"):
        score -= 20
    if candidate.get("isCustomerServiceRisk"):
        score -= 12
    if candidate.get("isNoSocialInsurance"):
        score -= 25
    if candidate.get("requiresExperienceYears", 0) >= 2:
        score -= 12
    if candidate.get("englishLevel", 0) >= 4:
        score -= 8
    return max(0, min(100, score))


def parse_job_text(text: str, source: str = "批量导入") -> dict[str, Any] | None:
    parts = split_parts(text)
    name = infer_company_name(parts, text)
    role = infer_role(parts, text)
    city = infer_city(text)
    if not name or not role:
        return None

    benefits = extract_benefits(text)
    scale = infer_company_scale(text)
    risk_tags = infer_risk_tags(text)
    source_platform = infer_source_platform(source, text)
    experience_years = infer_experience_years(text)
    english_level = infer_english_level(text)
    candidate: dict[str, Any] = {
        "id": slugify(name),
        "name": name,
        "city": city or "待核验",
        "district": infer_district(parts, text),
        "role": role,
        "platform": infer_platform(text),
        "companyScale": scale,
        "targetType": infer_target_type(scale),
        "companyType": "small",
        "roleLevel": infer_role_level(text),
        "benefits": benefits,
        "salary": infer_salary(text),
        "sourcePlatform": source_platform,
        "status": "pending_review",
        "action": "待核验",
        "riskTags": risk_tags,
        "lastChecked": today_china(),
        "isActiveHiring": True,
        "activeCheckMethod": source_platform,
        "reliabilityLevel": "待核验",
        "requiresExperienceYears": experience_years,
        "englishLevel": english_level,
        "isSalesRisk": "销售风险" in risk_tags,
        "isForeignTradeRisk": "外贸业务员风险" in risk_tags,
        "isCustomerServiceRisk": "客服风险" in risk_tags,
        "isNoSocialInsurance": "无社保风险" in risk_tags,
        "isNonWuhan": city != "武汉",
        "isSingleRest": "单休风险" in risk_tags,
        "isBigSmallWeek": "大小周风险" in risk_tags,
        "isExpired": False,
        "dataFit": 3,
        "amazonFit": 4 if infer_platform(text) == "Amazon" else 2,
        "stableFit": 4 if set(benefits) & {"双休", "一金"} else 2,
        "fit": "来自自动更新脚本解析的候选岗位，适合用 App 再核验武汉跨境运营职责、福利和是否仍在招。",
        "evidence": ["文本包含武汉和跨境运营相关关键词。", "岗位来源为批量导入或搜索结果文本，需进招聘 App 复核。"],
        "mustAsk": ["是否双休？", "是否入职缴纳五险一金？", "是否有人带？", "是否偏销售/客服？", "是否武汉坐班？"],
        "historyUrl": "",
    }
    candidate["baseScore"] = score_candidate(candidate)
    return candidate


def should_keep_candidate(candidate: dict[str, Any], raw_text: str = "") -> bool:
    text = f"{raw_text} {candidate.get('name', '')} {candidate.get('role', '')} {' '.join(candidate.get('benefits', []))}"
    if candidate.get("city") != "武汉":
        return False
    if not contains_any(str(candidate.get("role", "")), ROLE_KEYWORDS) and not contains_any(text, ROLE_KEYWORDS):
        return False
    if not set(candidate.get("benefits", [])) & {"双休", "五险", "一金"}:
        return False
    if has_hard_risk(text):
        return False
    return True


def normalize_name(name: str) -> str:
    return re.sub(r"\s+", "", name).replace("（", "(").replace("）", ")").lower()


def merge_list(old_values: Any, new_values: Any) -> list[Any]:
    old_list = old_values if isinstance(old_values, list) else []
    new_list = new_values if isinstance(new_values, list) else []
    return list(dict.fromkeys([*old_list, *new_list]))


def merge_candidates(existing: list[dict[str, Any]], incoming: list[dict[str, Any]]) -> list[dict[str, Any]]:
    merged: dict[str, dict[str, Any]] = {}
    for item in existing:
        name = str(item.get("name", "")).strip()
        if name:
            merged[normalize_name(name)] = item

    for item in incoming:
        key = normalize_name(str(item.get("name", "")))
        if not key:
            continue
        if key not in merged:
            merged[key] = item
            continue

        old = merged[key]
        combined = {**old, **item}
        combined["id"] = old.get("id") or item.get("id")
        combined["benefits"] = merge_list(old.get("benefits"), item.get("benefits"))
        combined["riskTags"] = merge_list(old.get("riskTags"), item.get("riskTags"))
        combined["evidence"] = merge_list(old.get("evidence"), item.get("evidence"))
        combined["mustAsk"] = merge_list(old.get("mustAsk"), item.get("mustAsk"))
        combined["lastChecked"] = item.get("lastChecked") or old.get("lastChecked")
        combined["status"] = old.get("status") if old.get("status") not in {None, "expired"} else item.get("status")
        combined["action"] = old.get("action") if old.get("action") not in {None, "删除"} else item.get("action")
        combined["baseScore"] = score_candidate(combined)
        merged[key] = combined

    return sorted(
        merged.values(),
        key=lambda item: (str(item.get("lastChecked", "")), int(item.get("baseScore", 0)), str(item.get("name", ""))),
        reverse=True,
    )


def main() -> int:
    keywords = load_keywords()
    existing = load_json(CANDIDATES_PATH, [])
    if not isinstance(existing, list):
        raise ValueError("data/candidate-jobs.json must contain a JSON array")

    parsed: list[dict[str, Any]] = []
    excluded = 0
    unparsed = 0
    sources = iter_text_sources()
    for text, source in sources:
        candidate = parse_job_text(text, source)
        if not candidate:
            unparsed += 1
            continue
        if should_keep_candidate(candidate, text):
            parsed.append(candidate)
        else:
            excluded += 1

    merged = merge_candidates(existing, parsed)
    changed = write_json_if_changed(CANDIDATES_PATH, merged)
    print(
        json.dumps(
            {
                "keywords": len(keywords),
                "sourceTexts": len(sources),
                "parsedCandidates": len(parsed),
                "excluded": excluded,
                "unparsed": unparsed,
                "totalCandidates": len(merged),
                "updated": changed,
                "target": str(CANDIDATES_PATH.relative_to(ROOT)).replace("\\", "/"),
            },
            ensure_ascii=False,
        )
    )
    return 0


if __name__ == "__main__":
    try:
        raise SystemExit(main())
    except Exception as exc:
        print(f"update_candidates.py failed: {exc}", file=sys.stderr)
        raise

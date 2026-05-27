import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const app = readFileSync(new URL("./app.js", import.meta.url), "utf8");
const html = readFileSync(new URL("./index.html", import.meta.url), "utf8");
const companiesJson = readFileSync(new URL("./data/companies.json", import.meta.url), "utf8");
const candidatesJson = readFileSync(new URL("./data/candidate-jobs.json", import.meta.url), "utf8");
const rejectedJson = readFileSync(new URL("./data/rejected-companies.json", import.meta.url), "utf8");
const keywordsJson = readFileSync(new URL("./keywords.json", import.meta.url), "utf8");
const updateScript = readFileSync(new URL("./scripts/update_candidates.py", import.meta.url), "utf8");
const updateWorkflow = readFileSync(new URL("./.github/workflows/update-candidates.yml", import.meta.url), "utf8");

assert.match(app, /function buildJobSearchUrl\(platform, keyword = DAILY_SEARCH_QUERY\)/, "buildJobSearchUrl must own App scheme URL construction");
assert.match(app, /function openAppSearch\(platform, companyName = ""\)/, "openAppSearch must be the only app-search click handler");
assert.match(app, /window\.location\.href = url;/, "app search must navigate in the same tab for mobile App handoff");
assert.doesNotMatch(app, /window\.open\(getAppSearchUrl/, "platform search buttons must not open a new tab");
assert.doesNotMatch(app, /navigator\.clipboard\.writeText\(query\)/, "platform search buttons must not copy search terms");
assert.doesNotMatch(app, /copy-search-btn|copy-btn|复制公司名|复制搜索词|复制打招呼/, "copy buttons must be removed from company cards and search entrances");
assert.doesNotMatch(app, /getCompanySearchQuery|openPlatformSearch|getAppSearchUrl/, "old company-search helpers must be removed");
assert.match(app, /function openBossApp\(keyword\)/, "BOSS App scheme function is required");
assert.match(app, /bosszhipin:\/\/search\/job\?query=\$\{encoded\}&city=101200100/, "BOSS button must use bosszhipin scheme");
assert.match(app, /function openZhaopinApp\(keyword\)/, "Zhaopin App scheme function is required");
assert.match(app, /zhaopin:\/\/search\/job\?keyword=\$\{encoded\}&city=武汉/, "Zhaopin button must use zhaopin scheme");
assert.match(app, /function openLiepinApp\(keyword\)/, "Liepin App scheme function is required");
assert.match(app, /liepin:\/\/search\?key=\$\{encoded\}&city=武汉/, "Liepin button must use liepin scheme");
assert.doesNotMatch(app, /https:\/\/www\.zhipin\.com\/web\/geek\/job|https:\/\/www\.zhaopin\.com\/sou|https:\/\/www\.liepin\.com\/zhaopin/, "main search logic must not use recruitment web URLs");

["BOSS搜武汉跨境岗", "智联搜武汉跨境岗", "猎聘搜武汉跨境岗"].forEach((label) => {
  assert.doesNotMatch(app, new RegExp(label), `${label} old button label must be removed`);
});
["BOSS App搜", "智联 App搜", "猎聘 App搜"].forEach((label) => {
  assert.ok(app.includes(label), `${label} button label is required`);
});

assert.match(app, /const DAILY_SEARCH_QUERY = "武汉 跨境电商运营 双休 五险一金";/, "daily search query must be fixed");
["boss", "zhaopin", "liepin", "shixiseng"].forEach((platform) => {
  assert.match(app, new RegExp(`platform: "${platform}"[\\s\\S]*query: DAILY_SEARCH_QUERY`), `${platform} daily entrance must use the fixed welfare search query`);
});

[
  "BOSS：武汉 跨境电商运营 双休 五险一金",
  "BOSS：武汉 亚马逊运营 双休",
  "BOSS：武汉 Shopee运营 双休",
  "BOSS：武汉 Lazada运营",
  "智联：武汉 跨境电商运营 五险一金",
  "猎聘：武汉 Amazon运营 双休",
  "实习僧：武汉 跨境运营实习"
].forEach((label) => assert.ok(app.includes(label), `${label} daily search entry is required`));

assert.ok(html.includes("今日找新岗位"), "page must expose today's job discovery module");
assert.ok(html.includes("App跳转测试"), "page must expose App scheme test module");
["打开 BOSS App", "打开智联 App", "打开猎聘 App"].forEach((label) => assert.ok(html.includes(label), `${label} test button required`));
assert.ok(html.includes("本工具不再依赖固定岗位详情页"), "page copy must explain no fixed job detail dependency");
assert.ok(html.includes("本页面使用 App Scheme 尝试直跳招聘 App"), "page copy must explain App Scheme behavior");
assert.match(html, /app\.js\?v=20260527-app-scheme-only/, "script cache version must change for deployment");
assert.doesNotMatch(app + html, /target="_blank"|复制公司名|复制搜索词/, "cards and buttons must not use blank targets or copy buttons");

assert.doesNotMatch(app, /const companies = \[/, "confirmed companies must be loaded from data/companies.json, not hardcoded in app.js");
assert.match(app, /loadDataPools\(\)/, "app must load data pools from JSON files");
assert.match(app, /parseImportedJobLine/, "batch import parser is required");
assert.match(app, /mergeImportedJobs/, "batch import must dedupe and merge candidates");
assert.match(app, /localImportedCandidates/, "static site imports must persist to localStorage");
assert.ok(html.includes("手动导入候选企业"), "page must expose manual import");
assert.ok(html.includes("主投企业"), "page must have a confirmed companies section");
assert.ok(html.includes("待核验候选企业"), "page must have a candidate section");
assert.ok(html.includes("已排除企业"), "page must have a rejected section");
["excludeForeignTrade", "excludeNonWuhan", "标记主投", "标记待核验", "标记排除"].forEach((needle) => {
  assert.ok((app + html).includes(needle), `${needle} is required`);
});

const confirmed = JSON.parse(companiesJson);
const candidates = JSON.parse(candidatesJson);
const rejected = JSON.parse(rejectedJson);
const keywords = JSON.parse(keywordsJson);
[confirmed, candidates, rejected].forEach((pool) => assert.ok(Array.isArray(pool), "data files must contain arrays"));
confirmed.forEach((item) => {
  ["name", "city", "role", "platform", "companyScale", "benefits", "sourcePlatform", "status", "action", "riskTags", "lastChecked"].forEach((key) => {
    assert.ok(key in item, `confirmed company missing ${key}`);
  });
});

[
  "武汉 跨境电商运营 双休 五险一金",
  "武汉 亚马逊运营 双休",
  "武汉 Amazon运营 五险一金",
  "武汉 Shopee运营",
  "武汉 Lazada运营",
  "武汉 跨境运营助理",
  "武汉 跨境电商 产品开发助理"
].forEach((keyword) => {
  assert.ok(keywords.includes(keyword), `${keyword} keyword is required for automatic updates`);
});
assert.match(updateScript, /def load_keywords\(/, "updater must read keywords.json");
assert.match(updateScript, /def parse_job_text\(/, "updater must parse imported or searched job text");
assert.match(updateScript, /def should_keep_candidate\(/, "updater must filter valid Wuhan cross-border roles");
assert.match(updateScript, /def has_hard_risk\(/, "updater must reject hard risk words");
assert.match(updateScript, /def merge_candidates\(/, "updater must dedupe by company name");
assert.match(updateScript, /candidate-jobs\.json/, "updater must write data/candidate-jobs.json");
["销售", "客服", "外贸业务员", "电话开发", "客户开发", "单休", "大小周"].forEach((risk) => {
  assert.ok(updateScript.includes(risk), `${risk} risk word must be filtered by updater`);
});
assert.match(updateWorkflow, /schedule:/, "GitHub Actions workflow must run on a schedule");
assert.match(updateWorkflow, /python scripts\/update_candidates\.py/, "workflow must run the candidate updater");
assert.match(updateWorkflow, /data\/candidate-jobs\.json/, "workflow must commit candidate job updates");

console.log("radar behavior checks passed");

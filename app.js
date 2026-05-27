const STORAGE_KEY = "zzl_crossborder_ops_radar_v4";
const CHECKED_AT = "2026-05-27";
const DAILY_SEARCH_QUERY = "武汉 跨境电商运营 双休 五险一金";
const LOCAL_IMPORTED_CANDIDATES_KEY = "localImportedCandidates";
const LOCAL_IMPORTED_REJECTED_KEY = "localImportedRejectedCompanies";

const searchEntrances = [
  { id: "boss-crossborder-benefits", platform: "boss", label: "BOSS：武汉 跨境电商运营 双休 五险一金", query: DAILY_SEARCH_QUERY },
  { id: "boss-amazon-weekend", platform: "boss", label: "BOSS：武汉 亚马逊运营 双休", query: DAILY_SEARCH_QUERY },
  { id: "boss-shopee-weekend", platform: "boss", label: "BOSS：武汉 Shopee运营 双休", query: DAILY_SEARCH_QUERY },
  { id: "boss-lazada", platform: "boss", label: "BOSS：武汉 Lazada运营", query: DAILY_SEARCH_QUERY },
  { id: "zhaopin-crossborder-benefits", platform: "zhaopin", label: "智联：武汉 跨境电商运营 五险一金", query: DAILY_SEARCH_QUERY },
  { id: "liepin-amazon-weekend", platform: "liepin", label: "猎聘：武汉 Amazon运营 双休", query: DAILY_SEARCH_QUERY },
  { id: "shixiseng-crossborder", platform: "shixiseng", label: "实习僧：武汉 跨境运营实习", query: DAILY_SEARCH_QUERY }
];

const statusOptions = ["未投递", "已收藏", "已沟通", "已发简历", "面试中", "暂缓", "删除"];

const platformAliases = {
  amazon: ["amazon", "亚马逊"],
  sea: ["shopee", "lazada", "虾皮", "东南亚"],
  multi: ["多平台", "跨境电商", "跨境运营"],
  dtc: ["独立站", "dtc"],
  ecosystem: ["产业生态", "产业园", "企业服务", "卖家服务"]
};

const roleAliases = {
  amazon: ["amazon", "亚马逊运营", "亚马逊"],
  shopee: ["shopee", "虾皮"],
  lazada: ["lazada"],
  crossborder_assistant: ["跨境运营助理", "跨境电商运营助理", "运营助理", "跨境电商运营", "运营专员"],
  product_assistant: ["产品开发助理", "产品开发", "选品助理", "选品"]
};

const el = {
  search: document.querySelector("#searchInput"),
  platform: document.querySelector("#platformFilter"),
  type: document.querySelector("#typeFilter"),
  english: document.querySelector("#englishFilter"),
  role: document.querySelector("#roleFilter"),
  scale: document.querySelector("#scaleFilter"),
  welfare: document.querySelector("#welfareFilter"),
  targetType: document.querySelector("#targetTypeFilter"),
  status: document.querySelector("#statusFilter"),
  excludeSales: document.querySelector("#excludeSales"),
  excludeCustomerService: document.querySelector("#excludeCustomerService"),
  excludeForeignTrade: document.querySelector("#excludeForeignTrade"),
  excludeSingleRest: document.querySelector("#excludeSingleRest"),
  excludeBigSmallWeek: document.querySelector("#excludeBigSmallWeek"),
  excludeNoSocialInsurance: document.querySelector("#excludeNoSocialInsurance"),
  excludeNonWuhan: document.querySelector("#excludeNonWuhan"),
  amazonWeight: document.querySelector("#amazonWeight"),
  englishWeight: document.querySelector("#englishWeight"),
  stabilityWeight: document.querySelector("#stabilityWeight"),
  dataWeight: document.querySelector("#dataWeight"),
  quickLinks: document.querySelector("#quickLinks"),
  resultCount: document.querySelector("#resultCount"),
  confirmedGrid: document.querySelector("#confirmedGrid"),
  candidateGrid: document.querySelector("#candidateGrid"),
  rejectedGrid: document.querySelector("#rejectedGrid"),
  confirmedCount: document.querySelector("#confirmedCount"),
  candidateCount: document.querySelector("#candidateCount"),
  rejectedCount: document.querySelector("#rejectedCount"),
  chart: document.querySelector("#fitChart"),
  jdInput: document.querySelector("#jdInput"),
  jdResult: document.querySelector("#jdResult"),
  analyzeBtn: document.querySelector("#analyzeBtn"),
  bulkImportInput: document.querySelector("#bulkImportInput"),
  importBtn: document.querySelector("#importBtn"),
  importResult: document.querySelector("#importResult"),
  exportBtn: document.querySelector("#exportBtn"),
  resetStatusBtn: document.querySelector("#resetStatusBtn")
};

const state = loadState();
const pools = {
  confirmed: [],
  candidates: [],
  rejected: []
};

function loadState() {
  try {
    const parsed = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
    return { statuses: {}, notes: {}, poolMarks: {}, ...parsed };
  } catch {
    return { statuses: {}, notes: {}, poolMarks: {} };
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function loadLocalPool(key) {
  try {
    return JSON.parse(localStorage.getItem(key)) || [];
  } catch {
    return [];
  }
}

function saveLocalPool(key, items) {
  localStorage.setItem(key, JSON.stringify(items));
}

async function fetchJson(path) {
  const response = await fetch(path, { cache: "no-store" });
  if (!response.ok) throw new Error(`Failed to load ${path}`);
  return response.json();
}

async function loadDataPools() {
  const [confirmed, candidates, rejected] = await Promise.all([
    fetchJson("./data/companies.json"),
    fetchJson("./data/candidate-jobs.json"),
    fetchJson("./data/rejected-companies.json")
  ]);
  pools.confirmed = confirmed.map((item) => normalizeCompany(item, "confirmed"));
  pools.candidates = mergeByName(
    candidates.map((item) => normalizeCompany(item, "candidate")),
    loadLocalPool(LOCAL_IMPORTED_CANDIDATES_KEY).map((item) => normalizeCompany(item, "candidate"))
  );
  pools.rejected = mergeByName(
    rejected.map((item) => normalizeCompany(item, "rejected")),
    loadLocalPool(LOCAL_IMPORTED_REJECTED_KEY).map((item) => normalizeCompany(item, "rejected"))
  );
}

function normalizeCompany(company, poolName) {
  const benefits = Array.isArray(company.benefits) ? company.benefits : [];
  const text = `${company.name || ""} ${company.role || ""} ${company.platform || ""} ${company.city || ""} ${company.district || ""} ${benefits.join(" ")} ${company.riskTags?.join(" ") || ""}`;
  const isRejected = poolName === "rejected" || company.status === "rejected" || company.action === "不建议";
  const hasFiveInsurance = company.hasFiveInsurance ?? benefits.some((item) => /五险|社保|五险一金/.test(item));
  const hasHousingFund = company.hasHousingFund ?? benefits.some((item) => /一金|公积金|五险一金/.test(item));
  const isWeekendOff = company.isWeekendOff ?? benefits.some((item) => /双休|周末双休/.test(item));
  const isSingleRest = company.isSingleRest ?? /单休|月休4天|月休6天/.test(text);
  const isBigSmallWeek = company.isBigSmallWeek ?? /大小周/.test(text);
  const isForeignTradeRisk = company.isForeignTradeRisk ?? /外贸业务员|外贸销售|外贸业务/.test(text);
  const isSalesRisk = company.isSalesRisk ?? /销售|客户开发|电话开发|业务员/.test(text);
  const isCustomerServiceRisk = company.isCustomerServiceRisk ?? /客服|售后|客诉|工单|英语客服/.test(text);
  const isNoSocialInsurance = company.isNoSocialInsurance ?? /无社保|不缴社保|社保待确认/.test(text);
  const isNonWuhan = company.isNonWuhan ?? (!/武汉/.test(`${company.city || ""} ${company.district || ""} ${text}`));
  const normalized = {
    id: company.id || slugify(company.name || company.role || String(Date.now())),
    name: company.name || "未识别公司",
    city: company.city || (text.includes("武汉") ? "武汉" : "待核验"),
    district: company.district || company.city || "待核验",
    role: company.role || "待核验岗位",
    platform: company.platform || inferPlatform(text),
    companyScale: company.companyScale || "未知",
    targetType: company.targetType || inferTargetType(company.companyScale),
    companyType: company.companyType || "small",
    roleLevel: company.roleLevel || inferRoleLevel(text),
    benefits,
    salary: company.salary || "待核验",
    sourcePlatform: company.sourcePlatform || "手动导入",
    status: company.status || (poolName === "candidate" ? "pending_review" : poolName === "rejected" ? "rejected" : "active"),
    action: company.action || (poolName === "candidate" ? "待核验" : poolName === "rejected" ? "不建议" : "可试"),
    riskTags: Array.from(new Set(company.riskTags || inferRiskTags(text))),
    lastChecked: company.lastChecked || CHECKED_AT,
    isActiveHiring: company.isActiveHiring ?? poolName !== "rejected",
    activeCheckMethod: company.activeCheckMethod || company.sourcePlatform || "App待核验",
    reliabilityLevel: company.reliabilityLevel || "待核验",
    requiresExperienceYears: company.requiresExperienceYears ?? inferExperienceYears(text),
    englishLevel: company.englishLevel ?? inferEnglishLevel(text),
    isSalesRisk,
    isForeignTradeRisk,
    isCustomerServiceRisk,
    isNoSocialInsurance,
    isNonWuhan,
    isSingleRest,
    isBigSmallWeek,
    isExpired: company.isExpired ?? false,
    baseScore: company.baseScore ?? (poolName === "confirmed" ? 64 : poolName === "candidate" ? 54 : 20),
    dataFit: company.dataFit ?? 3,
    amazonFit: company.amazonFit ?? (/amazon|亚马逊/i.test(text) ? 4 : 2),
    stableFit: company.stableFit ?? (hasHousingFund || isWeekendOff ? 4 : 2),
    fit: company.fit || "待核验岗位与武汉跨境运营方向相关，需进App确认职责、福利和是否仍在招。",
    evidence: company.evidence || ["来自批量导入或待核验线索。", "需要进招聘App确认最新岗位。"],
    mustAsk: company.mustAsk || ["是否双休？", "是否入职缴纳五险一金？", "是否有人带？", "是否偏销售/客服？", "是否武汉坐班？"],
    historyUrl: company.historyUrl || ""
  };
  if (isRejected) normalized.status = "rejected";
  return normalized;
}

function slugify(text) {
  return `c-${String(text).toLowerCase().replace(/[^\u4e00-\u9fa5a-z0-9]+/gi, "-").replace(/^-|-$/g, "").slice(0, 48)}`;
}

function inferTargetType(scale = "未知") {
  if (scale === "500人以上") return "大型企业";
  if (scale === "20-99人" || scale === "100-499人") return "靠谱中小";
  return "备选";
}

function inferRoleLevel(text) {
  const lower = text.toLowerCase();
  if (/amazon|亚马逊/.test(lower)) return "amazon";
  if (/shopee|虾皮/.test(lower)) return "shopee";
  if (/lazada/.test(lower)) return "lazada";
  if (/产品开发|选品/.test(lower)) return "product_assistant";
  return "crossborder_assistant";
}

function inferPlatform(text) {
  const lower = text.toLowerCase();
  if (/amazon|亚马逊/.test(lower)) return "Amazon";
  if (/shopee|lazada|虾皮/.test(lower)) return "Shopee/Lazada";
  if (/独立站|dtc/.test(lower)) return "DTC";
  return "跨境电商";
}

function inferRiskTags(text) {
  const tags = [];
  if (/销售|客户开发|电话开发|业务员/.test(text)) tags.push("销售风险");
  if (/外贸业务员|外贸销售|外贸业务/.test(text)) tags.push("外贸业务员风险");
  if (/客服|售后|客诉|工单|英语客服/.test(text)) tags.push("客服风险");
  if (/单休|月休4天|月休6天/.test(text)) tags.push("单休风险");
  if (/大小周/.test(text)) tags.push("大小周风险");
  if (/无社保|不缴社保/.test(text)) tags.push("无社保风险");
  if (/英语流利|六级|专八|口语流利/.test(text)) tags.push("英语过高");
  if (/2年以上|两年以上|3年以上|三年以上/.test(text)) tags.push("经验过高");
  if (!/武汉/.test(text)) tags.push("非武汉风险");
  return tags;
}

function inferExperienceYears(text) {
  if (/3年以上|三年以上/.test(text)) return 3;
  if (/2年以上|两年以上/.test(text)) return 2;
  if (/1年以上|一年以上/.test(text)) return 1;
  return 0;
}

function inferEnglishLevel(text) {
  if (/英语流利|口语流利|专八/.test(text)) return 5;
  if (/六级|cet-6|cet6/i.test(text)) return 4;
  if (/四级|cet-4|cet4/i.test(text)) return 3;
  return 2;
}

function buildJobSearchKeyword(companyName = "") {
  return companyName ? `${companyName} 武汉 跨境电商运营` : DAILY_SEARCH_QUERY;
}

function buildJobSearchUrl(platform, keyword = DAILY_SEARCH_QUERY) {
  const encoded = encodeURIComponent(keyword);
  if (platform === "boss") return `bosszhipin://search/job?query=${encoded}&city=101200100`;
  if (platform === "zhaopin") return `zhaopin://search/job?keyword=${encoded}&city=武汉`;
  if (platform === "liepin") return `liepin://search?key=${encoded}&city=武汉`;
  if (platform === "shixiseng") return `shixiseng://search?keyword=${encoded}&city=武汉`;
  return "";
}

function openBossApp(keyword) {
  const encoded = encodeURIComponent(keyword);
  window.location.href = `bosszhipin://search/job?query=${encoded}&city=101200100`;
}

function openZhaopinApp(keyword) {
  const encoded = encodeURIComponent(keyword);
  window.location.href = `zhaopin://search/job?keyword=${encoded}&city=武汉`;
}

function openLiepinApp(keyword) {
  const encoded = encodeURIComponent(keyword);
  window.location.href = `liepin://search?key=${encoded}&city=武汉`;
}

function openAppSearch(platform, companyName = "") {
  const keyword = buildJobSearchKeyword(companyName);
  if (platform === "boss") {
    openBossApp(keyword);
    return;
  }
  if (platform === "zhaopin") {
    openZhaopinApp(keyword);
    return;
  }
  if (platform === "liepin") {
    openLiepinApp(keyword);
    return;
  }
  const url = buildJobSearchUrl(platform, keyword);
  if (url) window.location.href = url;
}

function getWeights() {
  return {
    amazon: Number(el.amazonWeight.value),
    english: Number(el.englishWeight.value),
    stability: Number(el.stabilityWeight.value),
    data: Number(el.dataWeight.value)
  };
}

function scoreCompany(company) {
  const weights = getWeights();
  let score = company.baseScore;

  score += company.hasFiveInsurance ? 8 : 0;
  score += company.hasHousingFund ? 8 : 0;
  score += company.isWeekendOff ? 10 : 0;
  score += company.companyScale === "20-99人" || company.companyScale === "100-499人" ? 8 : 0;
  score += company.companyScale === "500人以上" ? 6 : 0;
  score += company.isActiveHiring ? 12 : 0;

  score -= company.isSingleRest ? 18 : 0;
  score -= company.isBigSmallWeek ? 15 : 0;
  score -= company.isSalesRisk ? 20 : 0;
  score -= company.isForeignTradeRisk ? 18 : 0;
  score -= company.isCustomerServiceRisk ? 12 : 0;
  score -= company.isNoSocialInsurance ? 25 : 0;
  score -= company.isNonWuhan ? 30 : 0;
  score -= company.isExpired ? 30 : 0;
  score -= company.englishLevel >= 4 ? 8 : 0;
  score -= company.requiresExperienceYears >= 2 ? 12 : 0;

  score += (company.amazonFit - 3) * weights.amazon * 0.2;
  score += (6 - company.englishLevel - 3) * weights.english * 0.2;
  score += (company.stableFit - 3) * weights.stability * 0.25;
  score += (company.dataFit - 3) * weights.data * 0.2;

  if (company.action === "主投") score += 8;
  if (company.action === "可试") score += 3;
  if (company.action === "待核验") score -= 2;
  if (company.action === "只关注") score -= 12;
  if (company.action === "不建议") score -= 40;

  return Math.max(0, Math.min(98, Math.round(score)));
}

function platformMatches(company) {
  const value = el.platform.value;
  if (value === "all") return true;
  const text = `${company.platform} ${company.role}`.toLowerCase();
  return platformAliases[value]?.some((alias) => text.includes(alias.toLowerCase())) ?? true;
}

function roleMatches(company) {
  const value = el.role.value;
  if (value === "all") return true;
  const text = `${company.role} ${company.roleLevel}`.toLowerCase();
  return company.roleLevel === value || (roleAliases[value]?.some((alias) => text.includes(alias.toLowerCase())) ?? false);
}

function welfareMatches(company) {
  const value = el.welfare.value;
  if (value === "all") return true;
  if (value === "five") return company.hasFiveInsurance;
  if (value === "fund") return company.hasFiveInsurance && company.hasHousingFund;
  if (value === "weekend") return company.isWeekendOff;
  if (value === "fund_weekend") return company.hasFiveInsurance && company.hasHousingFund && company.isWeekendOff;
  return true;
}

function statusMatches(company) {
  const value = el.status.value;
  if (value === "all") return true;
  if (value === "today") return company.isActiveHiring && !company.isExpired && company.status !== "rejected";
  if (value === "app") return company.status === "pending_review" || company.activeCheckMethod === "App待核验";
  if (value === "watch") return company.action === "只关注";
  if (value === "expired") return company.isExpired || company.status === "rejected";
  return true;
}

function riskExcluded(company) {
  return (
    (el.excludeSales.checked && company.isSalesRisk) ||
    (el.excludeCustomerService.checked && company.isCustomerServiceRisk) ||
    (el.excludeForeignTrade.checked && company.isForeignTradeRisk) ||
    (el.excludeSingleRest.checked && company.isSingleRest) ||
    (el.excludeBigSmallWeek.checked && company.isBigSmallWeek) ||
    (el.excludeNoSocialInsurance.checked && company.isNoSocialInsurance) ||
    (el.excludeNonWuhan.checked && company.isNonWuhan)
  );
}

function filterCompanies(items, includeRejected = false) {
  const keyword = el.search.value.trim().toLowerCase();
  return items
    .filter((company) => {
      const haystack = [
        company.name,
        company.role,
        company.city,
        company.district,
        company.platform,
        company.targetType,
        company.companyScale,
        company.action,
        company.status,
        company.benefits.join(" "),
        company.riskTags.join(" ")
      ]
        .join(" ")
        .toLowerCase();
      if (keyword && !haystack.includes(keyword)) return false;
      if (!platformMatches(company)) return false;
      if (el.type.value !== "all" && company.companyType !== el.type.value) return false;
      if (el.english.value === "low" && company.englishLevel > 2) return false;
      if (el.english.value === "cet4" && company.englishLevel > 3) return false;
      if (el.english.value === "high" && company.englishLevel < 4) return false;
      if (!roleMatches(company)) return false;
      if (el.scale.value !== "all" && company.companyScale !== el.scale.value) return false;
      if (el.targetType.value !== "all" && company.targetType !== el.targetType.value) return false;
      if (!welfareMatches(company)) return false;
      if (!statusMatches(company)) return false;
      if (!includeRejected && riskExcluded(company)) return false;
      return true;
    })
    .map((company) => ({ ...company, score: scoreCompany(company) }))
    .sort((a, b) => b.score - a.score);
}

function collectMarkedCompanies() {
  return [
    ...pools.confirmed.map((company) => applyPoolMark(company, "confirmed")),
    ...pools.candidates.map((company) => applyPoolMark(company, "candidate")),
    ...pools.rejected.map((company) => applyPoolMark(company, "rejected"))
  ];
}

function applyPoolMark(company, originalPool) {
  const storageId = `${originalPool}:${company.id}`;
  const targetPool = state.poolMarks[storageId] || originalPool;
  const actionByPool = {
    confirmed: "主投",
    candidate: "待核验",
    rejected: "不建议"
  };
  const statusByPool = {
    confirmed: "active",
    candidate: "pending_review",
    rejected: "rejected"
  };
  return {
    ...company,
    originalPool,
    displayPool: targetPool,
    storageId,
    action: actionByPool[targetPool] || company.action,
    status: statusByPool[targetPool] || company.status
  };
}

function renderAll() {
  const marked = collectMarkedCompanies();
  const confirmed = filterCompanies(marked.filter((company) => company.displayPool === "confirmed"));
  const candidates = filterCompanies(marked.filter((company) => company.displayPool === "candidate"));
  const rejected = filterCompanies(marked.filter((company) => company.displayPool === "rejected"), true);
  el.confirmedCount.textContent = `${confirmed.length} 个已确认目标`;
  el.candidateCount.textContent = `${candidates.length} 个待核验候选`;
  el.rejectedCount.textContent = `${rejected.length} 个已排除/高风险`;
  el.resultCount.textContent = `主投 ${confirmed.length} 个，候选 ${candidates.length} 个，排除 ${rejected.length} 个；每日App入口 ${searchEntrances.length} 个`;
  el.confirmedGrid.innerHTML = confirmed.length ? confirmed.map(renderCompanyCard).join("") : emptyCard("当前没有匹配的主投企业。");
  el.candidateGrid.innerHTML = candidates.length ? candidates.map(renderCompanyCard).join("") : emptyCard("当前没有匹配的待核验候选。");
  el.rejectedGrid.innerHTML = rejected.length ? rejected.map(renderCompanyCard).join("") : emptyCard("当前没有匹配的已排除企业。");
  renderQuickLinks();
  drawChart([...confirmed, ...candidates, ...rejected]);
}

function emptyCard(text) {
  return `<div class="empty">${text}</div>`;
}

function badgeClass(score) {
  if (score >= 78) return "";
  if (score >= 60) return "mid";
  return "risk";
}

function tagClass(tag) {
  if (/主投|五险|双休|靠谱|稳定/.test(tag)) return "green";
  if (/Amazon|亚马逊|Shopee|Lazada|品牌/.test(tag)) return "blue";
  if (/先问|可试|待确认|App|待核验/.test(tag)) return "amber";
  if (/客服|销售|单休|大小周|小作坊|无社保|风险|不建议|排除/.test(tag)) return "red";
  return "";
}

function actionClass(action) {
  if (action === "主投") return "green";
  if (action === "可试" || action === "待核验" || action === "先问") return "amber";
  if (action === "不建议") return "red";
  return "neutral";
}

function renderCompanyCard(company) {
  const storageId = company.storageId;
  const status = state.statuses[storageId] || "未投递";
  const note = state.notes[storageId] || "";
  const welfareTags = [
    company.hasFiveInsurance ? "五险" : "",
    company.hasHousingFund ? "一金" : "",
    company.isWeekendOff ? "双休" : "",
    company.isSingleRest ? "单休风险" : "",
    company.isBigSmallWeek ? "大小周风险" : "",
    company.isNoSocialInsurance ? "无社保风险" : "",
    company.isForeignTradeRisk ? "外贸业务员风险" : "",
    company.isNonWuhan ? "非武汉风险" : ""
  ].filter(Boolean);
  const stateText = company.status === "pending_review" ? "待核验候选" : company.status === "rejected" ? "已排除/高风险" : "已确认目标";
  const actionText = company.action === "主投"
    ? "优先在App核验当前岗位并投递。"
    : company.action === "待核验"
      ? "先点App搜索，确认武汉岗位、福利和岗位边界后再投。"
      : company.action === "不建议"
        ? "默认不投；除非App里出现明显更好的福利和职责。"
        : "可试，但要先问清双休、五险一金、客服/销售占比。";

  return `
    <article class="company-card" data-id="${storageId}">
      <div class="card-top">
        <div>
          <h3>${escapeHtml(company.name)}</h3>
          <div class="meta">${escapeHtml(company.city)} · ${escapeHtml(company.targetType)} · ${escapeHtml(company.companyScale)}</div>
          <div class="status-row">
            <span class="active-status ${company.status === "rejected" ? "watch" : "active"}">${stateText} · ${escapeHtml(company.sourcePlatform)}</span>
            <span class="checked-pill">核验：${escapeHtml(company.lastChecked)}</span>
          </div>
        </div>
        <div class="score-badge ${badgeClass(company.score)}">${company.score}</div>
      </div>

      <div class="tag-row">
        <span class="action-pill ${actionClass(company.action)}">${escapeHtml(company.action)}</span>
        <span class="tag ${tagClass(company.targetType)}">${escapeHtml(company.targetType)}</span>
        <span class="tag">${escapeHtml(company.companyScale)}</span>
        ${welfareTags.map((tag) => `<span class="tag ${tagClass(tag)}">${escapeHtml(tag)}</span>`).join("")}
        ${company.riskTags.map((tag) => `<span class="tag ${tagClass(tag)}">${escapeHtml(tag)}</span>`).join("")}
      </div>

      <p class="fit-text"><strong>适合岗位：</strong>${escapeHtml(company.role)}</p>
      <p class="fit-text"><strong>岗位状态：</strong>${escapeHtml(stateText)} · ${escapeHtml(company.activeCheckMethod)}</p>
      <p class="fit-text"><strong>推荐动作：</strong>${escapeHtml(actionText)}</p>
      <p class="fit-text"><strong>为什么适合你：</strong>${escapeHtml(company.fit)}</p>

      <ul class="evidence-list">
        ${company.evidence.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
      </ul>

      <p class="fit-text"><strong>投递前必须问：</strong>${company.mustAsk.map(escapeHtml).join("；")}</p>

      <div class="app-actions">
        <button class="platform-btn" type="button" data-platform="boss" data-company="${escapeAttr(company.name)}">BOSS App搜</button>
        <button class="platform-btn" type="button" data-platform="zhaopin" data-company="${escapeAttr(company.name)}">智联 App搜</button>
        <button class="platform-btn" type="button" data-platform="liepin" data-company="${escapeAttr(company.name)}">猎聘 App搜</button>
        <button class="mark-btn" type="button" data-mark="confirmed" data-storage-id="${escapeAttr(storageId)}">标记主投</button>
        <button class="mark-btn" type="button" data-mark="candidate" data-storage-id="${escapeAttr(storageId)}">标记待核验</button>
        <button class="mark-btn danger" type="button" data-mark="rejected" data-storage-id="${escapeAttr(storageId)}">标记排除</button>
      </div>

      <div class="card-foot">
        <div class="card-actions">
          <select class="status-select" aria-label="${escapeAttr(company.name)} 投递状态">
            ${statusOptions.map((option) => `<option value="${option}" ${option === status ? "selected" : ""}>${option}</option>`).join("")}
          </select>
          <input class="notes-input" value="${escapeAttr(note)}" placeholder="备注" aria-label="${escapeAttr(company.name)} 备注" />
        </div>
      </div>
    </article>
  `;
}

function renderQuickLinks() {
  el.quickLinks.innerHTML = searchEntrances
    .map(
      (entry) => `
        <div class="entrance-item">
          <span>${escapeHtml(entry.label)}</span>
          <button type="button" class="open-search-btn" data-platform="${entry.platform}">打开搜索</button>
        </div>
      `
    )
    .join("");
}

function drawChart(items) {
  const ctx = el.chart.getContext("2d");
  ctx.clearRect(0, 0, el.chart.width, el.chart.height);
  const buckets = [
    { label: "主投", color: "#176f6b", count: items.filter((item) => item.action === "主投").length },
    { label: "候选", color: "#2f6db0", count: items.filter((item) => item.status === "pending_review").length },
    { label: "达标", color: "#3e7f4f", count: items.filter((item) => item.hasFiveInsurance && (item.hasHousingFund || item.isWeekendOff)).length },
    { label: "排除", color: "#ad463f", count: items.filter((item) => item.status === "rejected" || item.action === "不建议").length }
  ];
  const max = Math.max(1, ...buckets.map((bucket) => bucket.count));
  const startX = 38;
  const barW = 34;
  const gap = 26;
  const baseY = 140;
  const maxH = 88;

  ctx.fillStyle = "#172026";
  ctx.font = "700 14px Microsoft YaHei, Arial";
  ctx.fillText("当前筛选结构", 20, 28);
  buckets.forEach((bucket, index) => {
    const x = startX + index * (barW + gap);
    const h = (bucket.count / max) * maxH;
    ctx.fillStyle = bucket.color;
    ctx.fillRect(x, baseY - h, barW, h);
    ctx.fillStyle = "#172026";
    ctx.font = "700 16px Microsoft YaHei, Arial";
    ctx.fillText(String(bucket.count), x + 9, baseY - h - 8);
    ctx.fillStyle = "#5b6871";
    ctx.font = "12px Microsoft YaHei, Arial";
    ctx.fillText(bucket.label, x - 2, baseY + 22);
  });
  ctx.strokeStyle = "#d9e0e4";
  ctx.beginPath();
  ctx.moveTo(20, baseY + 0.5);
  ctx.lineTo(238, baseY + 0.5);
  ctx.stroke();
}

function parseImportedJobLine(line) {
  const raw = line.trim();
  if (!raw) return null;
  const parts = raw.split(/[｜|\t]/).map((item) => item.trim()).filter(Boolean);
  const name = parts[0] || "未识别公司";
  const role = parts.find((item) => /运营|亚马逊|amazon|shopee|lazada|产品开发|选品|刊登/i.test(item)) || parts[1] || "待核验岗位";
  const salary = parts.find((item) => /\d+\s*[-~—]\s*\d+\s*k|薪|面议/i.test(item)) || "待核验";
  const cityPart = parts.find((item) => /武汉|洪山|光谷|江夏|武昌|汉口|汉阳|硚口|东西湖/.test(item)) || "";
  const benefits = parts.filter((item) => /五险|一金|公积金|双休|周末|社保/.test(item)).flatMap(splitBenefits);
  const text = `${raw} ${role} ${benefits.join(" ")}`;
  const city = /武汉/.test(text) || cityPart ? "武汉" : "非武汉";
  const riskTags = inferRiskTags(text);
  const hasTargetRole = /跨境电商|跨境运营|亚马逊|amazon|shopee|lazada|运营助理|产品开发助理|产品开发|刊登运营|账号运营/i.test(text);
  const hasHardReject = !/武汉/.test(text) || /外贸业务员|销售|电话开发|客户开发|客服|售后|英语客服|单休|大小周/.test(text);
  const status = city === "武汉" && hasTargetRole && !hasHardReject ? "pending_review" : "rejected";
  const action = status === "pending_review" ? "待核验" : "不建议";
  return normalizeCompany(
    {
      id: slugify(name),
      name,
      city,
      district: cityPart || city,
      role,
      platform: inferPlatform(text),
      companyScale: "未知",
      targetType: "备选",
      companyType: "small",
      roleLevel: inferRoleLevel(text),
      benefits,
      salary,
      sourcePlatform: inferSourcePlatform(text),
      status,
      action,
      riskTags,
      lastChecked: CHECKED_AT,
      fit: status === "pending_review" ? "批量导入的武汉跨境岗位线索，适合先进入App核验。" : "批量导入后被规则判定为高风险或不符合武汉跨境岗位底线。",
      evidence: ["来自批量导入文本。", "系统已按城市、岗位和风险词初筛。"],
      mustAsk: ["是否武汉坐班？", "是否双休？", "是否入职缴纳五险一金？", "是否偏销售/客服？", "是否有人带？"]
    },
    status === "pending_review" ? "candidate" : "rejected"
  );
}

function splitBenefits(text) {
  const benefits = [];
  if (/五险一金/.test(text)) benefits.push("五险", "一金");
  else {
    if (/五险|社保/.test(text)) benefits.push("五险");
    if (/一金|公积金/.test(text)) benefits.push("一金");
  }
  if (/双休|周末双休/.test(text)) benefits.push("双休");
  return benefits;
}

function inferSourcePlatform(text) {
  if (/boss|BOSS|直聘/.test(text)) return "BOSS";
  if (/智联/.test(text)) return "智联";
  if (/猎聘/.test(text)) return "猎聘";
  if (/实习僧/.test(text)) return "实习僧";
  return "手动导入";
}

function mergeByName(baseItems, newItems) {
  const map = new Map();
  [...baseItems, ...newItems].forEach((item) => {
    const key = item.name.trim().toLowerCase();
    const old = map.get(key);
    map.set(key, old ? { ...old, ...item, lastChecked: CHECKED_AT } : item);
  });
  return [...map.values()];
}

function mergeImportedJobs(imported) {
  const candidates = imported.filter((item) => item.status === "pending_review");
  const rejected = imported.filter((item) => item.status === "rejected");
  const existingCandidateLocal = loadLocalPool(LOCAL_IMPORTED_CANDIDATES_KEY).map((item) => normalizeCompany(item, "candidate"));
  const existingRejectedLocal = loadLocalPool(LOCAL_IMPORTED_REJECTED_KEY).map((item) => normalizeCompany(item, "rejected"));
  const nextCandidates = mergeByName(existingCandidateLocal, candidates);
  const nextRejected = mergeByName(existingRejectedLocal, rejected);
  saveLocalPool(LOCAL_IMPORTED_CANDIDATES_KEY, nextCandidates);
  saveLocalPool(LOCAL_IMPORTED_REJECTED_KEY, nextRejected);
  pools.candidates = mergeByName(pools.candidates, candidates);
  pools.rejected = mergeByName(pools.rejected, rejected);
  return { candidates: candidates.length, rejected: rejected.length };
}

function markCompany(storageId, targetPool) {
  state.poolMarks[storageId] = targetPool;
  saveState();
  renderAll();
}

function handleImport() {
  const lines = el.bulkImportInput.value.split(/\r?\n/);
  const parsed = lines.map(parseImportedJobLine).filter(Boolean);
  if (!parsed.length) {
    el.importResult.textContent = "没有识别到可导入的岗位。";
    return;
  }
  const result = mergeImportedJobs(parsed);
  el.importResult.textContent = `已导入 ${result.candidates} 个待核验候选，${result.rejected} 个高风险/已排除。新数据保存在当前浏览器本地。`;
  el.bulkImportInput.value = "";
  renderAll();
}

function analyzeJD() {
  const text = el.jdInput.value.trim();
  if (!text) {
    el.jdResult.textContent = "先粘贴岗位描述，再点分析。";
    return;
  }
  const lower = text.toLowerCase();
  const positives = [
    { name: "Amazon/Listing", keys: ["amazon", "亚马逊", "listing", "asin", "关键词"] },
    { name: "PPC/广告复盘", keys: ["ppc", "acos", "roas", "广告", "投放", "cpc"] },
    { name: "库存/供应链", keys: ["fba", "库存", "补货", "可售天数"] },
    { name: "Shopee/Lazada", keys: ["shopee", "lazada", "虾皮", "东南亚"] },
    { name: "商品/数据运营", keys: ["sku", "商品运营", "excel", "数据", "周报", "gmv", "roi"] }
  ];
  const risks = [
    { name: "销售风险", keys: ["销售", "客户开发", "电话开发", "陌拜", "高提成", "外贸业务"] },
    { name: "客服风险", keys: ["客服", "售后", "客诉", "工单", "邮件回复"] },
    { name: "单休/大小周风险", keys: ["单休", "大小周", "月休4天", "月休6天"] },
    { name: "无社保风险", keys: ["无社保", "试用期不缴", "转正缴纳"] },
    { name: "英语过高", keys: ["英语流利", "六级", "专八", "口语流利"] },
    { name: "经验过高", keys: ["2年以上", "两年以上", "3年以上", "三年以上"] }
  ];
  const matched = positives.filter((group) => group.keys.some((key) => lower.includes(key.toLowerCase())));
  const riskHits = risks.filter((group) => group.keys.some((key) => lower.includes(key.toLowerCase()))).map((group) => group.name);
  const score = Math.max(0, Math.min(96, 50 + matched.length * 8 - riskHits.length * 12));
  let advice = "建议投";
  if (score < 68 || riskHits.length >= 2) advice = "先问";
  if (score < 45 || riskHits.includes("销售风险") || riskHits.includes("无社保风险")) advice = "不建议投";
  const questions = ["是否双休？", "是否入职缴纳五险一金？", "是否有人带？", "岗位是否偏客服/销售？", "店铺是精品运营还是铺货？"];
  if (riskHits.includes("英语过高")) questions.push("英语主要是资料读写还是口语沟通？");
  if (riskHits.includes("经验过高")) questions.push("作品集和电商运营经历能否替代平台年限？");
  el.jdResult.innerHTML = `
    <strong>${advice}｜适配分 ${score}/100。</strong>
    <div>匹配点：${matched.length ? matched.map((item) => item.name).join("、") : "未看到明显运营核心动作"}。</div>
    <div>风险词：${riskHits.length ? riskHits.join("、") : "暂未发现明显风险词"}。</div>
    <div>建议问HR：${questions.slice(0, 6).join("；")}</div>
  `;
}

function exportList() {
  const marked = collectMarkedCompanies();
  const rows = [
    ...filterCompanies(marked.filter((item) => item.displayPool === "confirmed")).map((item) => ({ ...item, poolLabel: "主投企业" })),
    ...filterCompanies(marked.filter((item) => item.displayPool === "candidate")).map((item) => ({ ...item, poolLabel: "待核验候选企业" })),
    ...filterCompanies(marked.filter((item) => item.displayPool === "rejected"), true).map((item) => ({ ...item, poolLabel: "已排除企业" }))
  ].map((company) => {
    const storageId = company.storageId;
    const status = state.statuses[storageId] || "未投递";
    const note = state.notes[storageId] || "";
    return [
      company.poolLabel,
      company.score,
      company.action,
      company.name,
      company.targetType,
      company.companyScale,
      company.role,
      company.benefits.join("/"),
      company.riskTags.join("/"),
      status,
      note,
      buildJobSearchKeyword(company.name)
    ].join("\t");
  });
  const content = ["池子\t匹配分\t推荐动作\t公司\t公司类型\t规模\t岗位\t福利\t风险\t投递状态\t备注\tBOSS搜索词", ...rows].join("\n");
  navigator.clipboard
    .writeText(content)
    .then(() => {
      el.exportBtn.textContent = "已复制";
      setTimeout(() => (el.exportBtn.textContent = "导出名单"), 1400);
    })
    .catch(() => {
      const encoded = encodeURIComponent(content);
      window.location.href = `data:text/plain;charset=utf-8,${encoded}`;
    });
}

function resetStatus() {
  if (!confirm("确认清空本地保存的投递状态、备注和批量导入候选吗？")) return;
  state.statuses = {};
  state.notes = {};
  state.poolMarks = {};
  saveState();
  localStorage.removeItem(LOCAL_IMPORTED_CANDIDATES_KEY);
  localStorage.removeItem(LOCAL_IMPORTED_REJECTED_KEY);
  loadDataPools().then(renderAll).catch(showLoadError);
}

function escapeHtml(value) {
  return String(value).replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
}

function escapeAttr(value) {
  return escapeHtml(value).replaceAll('"', "&quot;");
}

function bindEvents() {
  [
    el.search,
    el.platform,
    el.type,
    el.english,
    el.role,
    el.scale,
    el.welfare,
    el.targetType,
    el.status,
    el.excludeSales,
    el.excludeCustomerService,
    el.excludeForeignTrade,
    el.excludeSingleRest,
    el.excludeBigSmallWeek,
    el.excludeNoSocialInsurance,
    el.excludeNonWuhan,
    el.amazonWeight,
    el.englishWeight,
    el.stabilityWeight,
    el.dataWeight
  ].forEach((node) => node.addEventListener("input", renderAll));

  document.addEventListener("click", (event) => {
    const platformButton = event.target.closest(".platform-btn, .open-search-btn, .app-test-btn");
    if (platformButton) {
      openAppSearch(platformButton.dataset.platform, platformButton.dataset.company || "");
      return;
    }
    const markButton = event.target.closest(".mark-btn");
    if (markButton) {
      markCompany(markButton.dataset.storageId, markButton.dataset.mark);
    }
  });

  document.addEventListener("change", (event) => {
    const card = event.target.closest(".company-card");
    if (!card || !event.target.classList.contains("status-select")) return;
    state.statuses[card.dataset.id] = event.target.value;
    saveState();
  });

  document.addEventListener("input", (event) => {
    const card = event.target.closest(".company-card");
    if (!card || !event.target.classList.contains("notes-input")) return;
    state.notes[card.dataset.id] = event.target.value;
    saveState();
  });

  el.analyzeBtn.addEventListener("click", analyzeJD);
  el.importBtn.addEventListener("click", handleImport);
  el.exportBtn.addEventListener("click", exportList);
  el.resetStatusBtn.addEventListener("click", resetStatus);
}

function showLoadError(error) {
  console.error(error);
  const message = "数据加载失败。线上页面会正常读取 data/*.json；本地直接双击打开时，浏览器可能会拦截 JSON 读取，请用本地静态服务器或访问 GitHub Pages。";
  el.resultCount.textContent = message;
  el.confirmedGrid.innerHTML = emptyCard(message);
}

bindEvents();
loadDataPools().then(renderAll).catch(showLoadError);

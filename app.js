const STORAGE_KEY = "zzl_crossborder_ops_radar_v3";
const CHECKED_AT = "2026-05-27";

const searchEntrances = [
  { id: "boss-amazon", platform: "boss", label: "BOSS：武汉 亚马逊运营", query: "武汉 亚马逊运营" },
  { id: "boss-crossborder-assistant", platform: "boss", label: "BOSS：武汉 跨境电商运营助理", query: "武汉 跨境电商运营助理" },
  { id: "boss-shopee", platform: "boss", label: "BOSS：武汉 Shopee运营", query: "武汉 Shopee运营" },
  { id: "boss-lazada", platform: "boss", label: "BOSS：武汉 Lazada运营", query: "武汉 Lazada运营" },
  { id: "boss-product-ops", platform: "boss", label: "BOSS：武汉 电商运营 商品运营", query: "武汉 电商运营 商品运营" },
  { id: "zhaopin-amazon", platform: "zhaopin", label: "智联：武汉 亚马逊运营", query: "武汉 亚马逊运营" },
  { id: "zhaopin-crossborder", platform: "zhaopin", label: "智联：武汉 跨境电商运营", query: "武汉 跨境电商运营" },
  { id: "liepin-amazon", platform: "liepin", label: "猎聘：武汉 Amazon运营", query: "武汉 Amazon运营" },
  { id: "shixiseng-ecom", platform: "shixiseng", label: "实习僧：武汉 电商运营实习", query: "武汉 电商运营实习" },
  { id: "baidu-company-check", platform: "baidu", label: "百度：公司真实性核验", query: "公司名 武汉 跨境电商 招聘" }
];

const companies = [
  {
    id: "senhe-amazon",
    name: "武汉森合科技有限公司",
    pool: "activeJobs",
    companyScale: "20-99人",
    targetType: "靠谱中小",
    companyType: "small",
    platform: "amazon",
    roleLevel: "assistant",
    district: "武汉",
    role: "亚马逊运营专员 / 运营助理 / 产品开发助理",
    roleKeyword: "亚马逊运营",
    salary: "约5.5K-8K区间优先核验",
    hasFiveInsurance: true,
    hasHousingFund: false,
    isWeekendOff: false,
    isSingleRest: false,
    isBigSmallWeek: false,
    isActiveHiring: true,
    activeCheckMethod: "App待核验",
    reliabilityLevel: "中",
    requiresExperienceYears: 0,
    englishLevel: 2,
    isSalesRisk: false,
    isCustomerServiceRisk: false,
    isNoSocialInsurance: false,
    isExpired: false,
    riskTags: ["福利待确认"],
    status: "today",
    lastChecked: CHECKED_AT,
    statusText: "有亚马逊运营/助理方向线索，建议以App搜索核验最新在招。",
    action: "主投",
    actionText: "马上用BOSS/智联搜公司，投运营助理或亚马逊运营方向。",
    baseScore: 72,
    dataFit: 5,
    amazonFit: 5,
    stableFit: 3,
    historyUrl: "https://www.91wllm.cn/job/view/id/2338134",
    fit: "能对上你的Amazon作品集、SKU维护、Listing优化、PPC复盘和库存周报。",
    evidence: ["岗位方向与亚马逊运营助理接近。", "对初级运营作品集友好。", "公司规模需用App或面试核验。"],
    mustAsk: ["是否双休？", "是否入职缴纳五险一金？", "是否有人带？", "是精品运营还是铺货？", "岗位是否偏客服/销售？"],
    tags: ["Amazon", "主投", "运营助理", "福利待确认"]
  },
  {
    id: "zhongjiezekang",
    name: "武汉中杰泽康科技有限公司",
    pool: "activeJobs",
    companyScale: "20-99人",
    targetType: "靠谱中小",
    companyType: "small",
    platform: "amazon",
    roleLevel: "assistant",
    district: "武汉",
    role: "亚马逊运营 / 运营助理 / 产品开发",
    roleKeyword: "亚马逊运营",
    salary: "以App实时岗位为准",
    hasFiveInsurance: true,
    hasHousingFund: false,
    isWeekendOff: false,
    isSingleRest: false,
    isBigSmallWeek: false,
    isActiveHiring: true,
    activeCheckMethod: "BOSS",
    reliabilityLevel: "中",
    requiresExperienceYears: 0,
    englishLevel: 2,
    isSalesRisk: false,
    isCustomerServiceRisk: false,
    isNoSocialInsurance: false,
    isExpired: false,
    riskTags: ["双休待确认", "一金待确认"],
    status: "app",
    lastChecked: CHECKED_AT,
    statusText: "BOSS企业页曾可见，需要进App核验当前岗位。",
    action: "主投",
    actionText: "主投，但投前先确认是否接受应届和是否有人带。",
    baseScore: 72,
    dataFit: 4,
    amazonFit: 4,
    stableFit: 3,
    historyUrl: "https://www.zhipin.com/gongsi/0c6bd5fc8428d4bb1XB63tS8E1BU.html",
    fit: "亚马逊运营方向明确，适合用作品集争取初级岗位。",
    evidence: ["BOSS企业入口可作为核验来源。", "岗位方向与Amazon运营相关。", "适合先问HR是否接受应届。"],
    mustAsk: ["是否接受应届/初级运营？", "是否双休？", "是否缴纳五险一金？", "是否有人带？", "客服或销售占比多少？"],
    tags: ["Amazon", "主投", "App待核验", "靠谱中小"]
  },
  {
    id: "hanrui",
    name: "汉睿集团 / 汉睿云联",
    pool: "activeJobs",
    companyScale: "100-499人",
    targetType: "靠谱中小",
    companyType: "platform",
    platform: "sea",
    roleLevel: "assistant",
    district: "武汉洪山",
    role: "Shopee运营专员 / Lazada运营",
    roleKeyword: "Shopee运营",
    salary: "5K-8K区间线索",
    hasFiveInsurance: true,
    hasHousingFund: false,
    isWeekendOff: false,
    isSingleRest: false,
    isBigSmallWeek: false,
    isActiveHiring: true,
    activeCheckMethod: "App待核验",
    reliabilityLevel: "中",
    requiresExperienceYears: 0,
    englishLevel: 3,
    isSalesRisk: false,
    isCustomerServiceRisk: true,
    isNoSocialInsurance: false,
    isExpired: false,
    riskTags: ["客服风险", "双休待确认"],
    status: "app",
    lastChecked: CHECKED_AT,
    statusText: "Shopee/Lazada运营线索明确，但售前售后占比需问清。",
    action: "先问",
    actionText: "先问HR售前售后占比，客服占比低再投。",
    baseScore: 68,
    dataFit: 4,
    amazonFit: 2,
    stableFit: 4,
    historyUrl: "https://www.10100.com/job/10046",
    fit: "与你的Shopee/Lazada活动池、上架、活动报名和数据复盘作品匹配。",
    evidence: ["平台方向适配。", "规模比小作坊更稳。", "客服风险需要面试前确认。"],
    mustAsk: ["是否双休？", "售前售后占比多少？", "是否有五险一金？", "是否有人带？", "店铺是精品还是铺货？"],
    tags: ["Shopee/Lazada", "先问HR", "客服风险", "靠谱中小"]
  },
  {
    id: "yibai",
    name: "深圳市易佰网络科技有限公司武汉分公司",
    pool: "watchCompanies",
    companyScale: "500人以上",
    targetType: "大型企业",
    companyType: "medium",
    platform: "multi",
    roleLevel: "assistant",
    district: "武汉",
    role: "跨境电商运营 / 账号运营 / 刊登运营",
    roleKeyword: "跨境电商运营",
    salary: "以App实时岗位为准",
    hasFiveInsurance: true,
    hasHousingFund: true,
    isWeekendOff: false,
    isSingleRest: false,
    isBigSmallWeek: false,
    isActiveHiring: false,
    activeCheckMethod: "智联",
    reliabilityLevel: "高",
    requiresExperienceYears: 0,
    englishLevel: 3,
    isSalesRisk: false,
    isCustomerServiceRisk: true,
    isNoSocialInsurance: false,
    isExpired: false,
    riskTags: ["客服风险", "岗位细分需筛"],
    status: "watch",
    lastChecked: CHECKED_AT,
    statusText: "公司较稳，但必须筛掉英语客服/邮件客服，只投运营类。",
    action: "可试",
    actionText: "只投账号运营、刊登运营、数据运营，避开英语客服。",
    baseScore: 66,
    dataFit: 4,
    amazonFit: 3,
    stableFit: 5,
    historyUrl: "https://www.zhaopin.com/companydetail/CC375970138.htm",
    fit: "流程训练价值高，适合投账号运营、刊登运营、数据运营。",
    evidence: ["规模和社保稳定性更好。", "岗位可能更细。", "客服岗风险较高。"],
    mustAsk: ["岗位是否纯运营？", "是否要处理英文邮件客服？", "是否双休？", "是否五险一金？", "新人是否有人带？"],
    tags: ["大型企业", "可试", "客服风险", "五险一金"]
  },
  {
    id: "svakom",
    name: "SVAKOM 司沃康",
    pool: "watchCompanies",
    companyScale: "100-499人",
    targetType: "小而美",
    companyType: "brand",
    platform: "amazon",
    roleLevel: "assistant",
    district: "武汉/多地",
    role: "亚马逊运营 / 跨境品牌运营",
    roleKeyword: "亚马逊运营",
    salary: "以App实时岗位为准",
    hasFiveInsurance: true,
    hasHousingFund: true,
    isWeekendOff: true,
    isSingleRest: false,
    isBigSmallWeek: false,
    isActiveHiring: false,
    activeCheckMethod: "猎聘",
    reliabilityLevel: "中",
    requiresExperienceYears: 1,
    englishLevel: 3,
    isSalesRisk: false,
    isCustomerServiceRisk: false,
    isNoSocialInsurance: false,
    isExpired: false,
    riskTags: ["城市需确认", "经验需确认"],
    status: "watch",
    lastChecked: CHECKED_AT,
    statusText: "品牌型公司值得蹲，但需确认武汉是否有初级岗。",
    action: "可试",
    actionText: "可试品牌运营方向，先确认城市、经验和英语门槛。",
    baseScore: 64,
    dataFit: 4,
    amazonFit: 4,
    stableFit: 4,
    historyUrl: "https://www.jobui.com/company/2381076/jobs/",
    fit: "品牌型跨境方向更适合长期发展，但门槛可能高于助理岗。",
    evidence: ["品牌型/产品型更符合小而美。", "福利线索较好。", "岗位地点和经验需核验。"],
    mustAsk: ["武汉是否有岗位？", "是否接受初级运营？", "是否双休和五险一金？", "是否偏品牌运营还是客服？", "是否需要较强英语口语？"],
    tags: ["小而美", "品牌型", "双休", "五险一金"]
  },
  {
    id: "changmao",
    name: "武汉长贸数字产业有限公司 / 长江国贸跨境电商产业园",
    pool: "watchCompanies",
    companyScale: "100-499人",
    targetType: "产业园生态",
    companyType: "state",
    platform: "ecosystem",
    roleLevel: "ecosystem",
    district: "武汉",
    role: "产业园运营 / 企业服务 / 卖家服务支持",
    roleKeyword: "运营助理",
    salary: "以官方招聘为准",
    hasFiveInsurance: true,
    hasHousingFund: true,
    isWeekendOff: true,
    isSingleRest: false,
    isBigSmallWeek: false,
    isActiveHiring: false,
    activeCheckMethod: "官网",
    reliabilityLevel: "高",
    requiresExperienceYears: 0,
    englishLevel: 1,
    isSalesRisk: false,
    isCustomerServiceRisk: false,
    isNoSocialInsurance: false,
    isExpired: false,
    riskTags: ["暂无明确岗位"],
    status: "watch",
    lastChecked: CHECKED_AT,
    statusText: "公司可靠度高，但当前更适合蹲园区/企业服务岗位。",
    action: "只关注",
    actionText: "只蹲不投，等出现运营助理或企业服务运营入口。",
    baseScore: 58,
    dataFit: 3,
    amazonFit: 3,
    stableFit: 5,
    historyUrl: "https://whcmsc.com/about/",
    fit: "适合稳定偏好，但不是当前最直接的运营助理入口。",
    evidence: ["产业园/国资属性更稳。", "英语压力较低。", "当前公开岗位不明确。"],
    mustAsk: ["是否有园区运营/企业服务岗位？", "是否接受应届？", "是否双休？", "是否五险一金？", "是否能接触跨境卖家服务？"],
    tags: ["产业园生态", "只关注", "低英语", "稳定"]
  },
  {
    id: "sier",
    name: "思迩电子商务（武汉）",
    pool: "activeJobs",
    companyScale: "20人以下",
    targetType: "备选",
    companyType: "small",
    platform: "multi",
    roleLevel: "assistant",
    district: "武汉",
    role: "跨境电商运营专员",
    roleKeyword: "跨境电商运营",
    salary: "以App实时岗位为准",
    hasFiveInsurance: false,
    hasHousingFund: false,
    isWeekendOff: false,
    isSingleRest: false,
    isBigSmallWeek: false,
    isActiveHiring: true,
    activeCheckMethod: "App待核验",
    reliabilityLevel: "待核验",
    requiresExperienceYears: 0,
    englishLevel: 2,
    isSalesRisk: false,
    isCustomerServiceRisk: true,
    isNoSocialInsurance: true,
    isExpired: false,
    riskTags: ["小作坊风险", "客服风险", "社保待确认"],
    status: "app",
    lastChecked: CHECKED_AT,
    statusText: "可作为练面/备选，福利和岗位边界必须先问清。",
    action: "先问",
    actionText: "当练面或备选，福利和带教不清楚就不正式投。",
    baseScore: 48,
    dataFit: 3,
    amazonFit: 3,
    stableFit: 1,
    historyUrl: "https://www.job5156.com/wuhan/job_278358187",
    fit: "跨境运营标题接近，但福利稳定性不明。",
    evidence: ["岗位方向相关。", "规模和福利不确定。", "适合作为练面而非主投。"],
    mustAsk: ["是否缴纳五险？", "是否双休？", "是否一个人兼客服/美工/仓库？", "是否有人带？", "是否铺货乱招？"],
    tags: ["备选", "小作坊风险", "先问", "客服风险"]
  },
  {
    id: "gudao-shopee",
    name: "上海古道商务咨询有限公司武汉岗位",
    pool: "activeJobs",
    companyScale: "20-99人",
    targetType: "备选",
    companyType: "small",
    platform: "sea",
    roleLevel: "assistant",
    district: "武汉",
    role: "Shopee虾皮运营专员",
    roleKeyword: "Shopee运营",
    salary: "以App实时岗位为准",
    hasFiveInsurance: true,
    hasHousingFund: false,
    isWeekendOff: false,
    isSingleRest: false,
    isBigSmallWeek: false,
    isActiveHiring: true,
    activeCheckMethod: "智联",
    reliabilityLevel: "待核验",
    requiresExperienceYears: 0,
    englishLevel: 2,
    isSalesRisk: false,
    isCustomerServiceRisk: true,
    isNoSocialInsurance: false,
    isExpired: false,
    riskTags: ["客服风险", "外地公司武汉岗"],
    status: "app",
    lastChecked: CHECKED_AT,
    statusText: "岗位方向相关，但公司主体和武汉办公情况需核验。",
    action: "先问",
    actionText: "先问客服/售后占比和双休社保，合格再投。",
    baseScore: 52,
    dataFit: 3,
    amazonFit: 1,
    stableFit: 2,
    historyUrl: "https://www.zhaopin.com/jobdetail/CC465445210J40776413105.htm",
    fit: "Shopee方向匹配你的活动运营作品。",
    evidence: ["平台方向匹配。", "适合用来询问东南亚运营岗位。", "客服占比需确认。"],
    mustAsk: ["是否武汉坐班？", "是否双休？", "是否五险一金？", "客服占比多少？", "是否有成熟店铺？"],
    tags: ["Shopee", "先问", "客服风险", "备选"]
  }
];

const platformLabels = {
  amazon: "Amazon主线",
  sea: "Shopee/Lazada",
  multi: "多平台",
  dtc: "独立站/DTC",
  ecosystem: "产业生态"
};

const typeLabels = {
  state: "国资/产业园",
  platform: "平台/服务商",
  medium: "中型公司",
  small: "小而美",
  brand: "品牌/产品型"
};

const statusOptions = ["未投递", "已收藏", "已沟通", "已发简历", "面试中", "暂缓", "删除"];
const state = loadState();

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
  excludeSingleRest: document.querySelector("#excludeSingleRest"),
  excludeBigSmallWeek: document.querySelector("#excludeBigSmallWeek"),
  excludeNoSocialInsurance: document.querySelector("#excludeNoSocialInsurance"),
  amazonWeight: document.querySelector("#amazonWeight"),
  englishWeight: document.querySelector("#englishWeight"),
  stabilityWeight: document.querySelector("#stabilityWeight"),
  dataWeight: document.querySelector("#dataWeight"),
  grid: document.querySelector("#companyGrid"),
  count: document.querySelector("#resultCount"),
  chart: document.querySelector("#fitChart"),
  quickLinks: document.querySelector("#quickLinks"),
  jdInput: document.querySelector("#jdInput"),
  jdResult: document.querySelector("#jdResult"),
  analyzeBtn: document.querySelector("#analyzeBtn"),
  exportBtn: document.querySelector("#exportBtn"),
  resetStatusBtn: document.querySelector("#resetStatusBtn")
};

function loadState() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || { statuses: {}, notes: {} };
  } catch {
    return { statuses: {}, notes: {} };
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function getAppSearchUrl(platform, query) {
  const encoded = encodeURIComponent(query);
  if (platform === "boss") return `https://www.zhipin.com/web/geek/job?query=${encoded}&city=101200100`;
  if (platform === "zhaopin") return `https://www.zhaopin.com/sou/jl736/kw${encoded}`;
  if (platform === "liepin") return `https://www.liepin.com/zhaopin/?city=170020&dq=170020&key=${encoded}`;
  if (platform === "shixiseng") return `https://www.shixiseng.com/interns?keyword=${encoded}`;
  return `https://www.baidu.com/s?wd=${encoded}`;
}

function copyText(text, button) {
  navigator.clipboard
    .writeText(text)
    .then(() => flashButton(button, "已复制"))
    .catch(() => flashButton(button, "复制失败"));
}

function flashButton(button, text) {
  if (!button) return;
  const oldText = button.textContent;
  button.textContent = text;
  setTimeout(() => {
    button.textContent = oldText;
  }, 1200);
}

function getCompanySearchQuery(company, platform) {
  const keyword = platform === "boss" ? company.roleKeyword : "跨境电商运营";
  return `${company.name} ${keyword}`;
}

function openPlatformSearch(platform, query, button) {
  navigator.clipboard.writeText(query).catch(() => {});
  flashButton(button, "已复制并打开");
  window.open(getAppSearchUrl(platform, query), "_blank", "noopener,noreferrer");
}

function getGreeting(company) {
  return `您好，我是电子商务专业应届生，有电商运营经历和跨境运营作品集训练。看到贵司${company.role}方向，想确认是否接受初级运营/运营助理。我做过SKU维护、Listing优化、PPC复盘、库存周报和Shopee/Lazada活动运营作品，想进一步了解岗位是否双休、是否缴纳五险一金、是否有人带。`;
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
  score -= company.isCustomerServiceRisk ? 12 : 0;
  score -= company.isNoSocialInsurance ? 25 : 0;
  score -= company.isExpired ? 30 : 0;
  score -= company.englishLevel >= 4 ? 8 : 0;
  score -= company.requiresExperienceYears >= 2 ? 12 : 0;

  score += (company.amazonFit - 3) * weights.amazon * 0.2;
  score += (6 - company.englishLevel - 3) * weights.english * 0.2;
  score += (company.stableFit - 3) * weights.stability * 0.25;
  score += (company.dataFit - 3) * weights.data * 0.2;

  if (company.action === "主投") score += 8;
  if (company.action === "可试") score += 3;
  if (company.action === "先问") score -= 4;
  if (company.action === "只关注") score -= 12;
  if (company.action === "不建议") score -= 40;

  return Math.max(0, Math.min(98, Math.round(score)));
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
  if (value === "today") return company.isActiveHiring && !company.isExpired;
  if (value === "app") return company.activeCheckMethod === "App待核验" || company.status === "app";
  if (value === "watch") return company.action === "只关注" || company.pool === "watchCompanies";
  if (value === "expired") return company.isExpired;
  return true;
}

function riskExcluded(company) {
  return (
    (el.excludeSales.checked && company.isSalesRisk) ||
    (el.excludeCustomerService.checked && company.isCustomerServiceRisk) ||
    (el.excludeSingleRest.checked && company.isSingleRest) ||
    (el.excludeBigSmallWeek.checked && company.isBigSmallWeek) ||
    (el.excludeNoSocialInsurance.checked && company.isNoSocialInsurance)
  );
}

function getFilteredCompanies() {
  const keyword = el.search.value.trim().toLowerCase();
  return companies
    .filter((company) => {
      const haystack = [
        company.name,
        company.role,
        company.district,
        company.targetType,
        company.companyScale,
        company.action,
        company.statusText,
        company.tags.join(" "),
        company.riskTags.join(" ")
      ]
        .join(" ")
        .toLowerCase();
      if (keyword && !haystack.includes(keyword)) return false;
      if (el.platform.value !== "all" && company.platform !== el.platform.value) return false;
      if (el.type.value !== "all" && company.companyType !== el.type.value) return false;
      if (el.english.value === "low" && company.englishLevel > 2) return false;
      if (el.english.value === "cet4" && company.englishLevel > 3) return false;
      if (el.english.value === "high" && company.englishLevel < 4) return false;
      if (el.role.value !== "all" && company.roleLevel !== el.role.value) return false;
      if (el.scale.value !== "all" && company.companyScale !== el.scale.value) return false;
      if (el.targetType.value !== "all" && company.targetType !== el.targetType.value) return false;
      if (!welfareMatches(company)) return false;
      if (!statusMatches(company)) return false;
      if (riskExcluded(company)) return false;
      return true;
    })
    .map((company) => ({ ...company, score: scoreCompany(company) }))
    .sort((a, b) => b.score - a.score);
}

function badgeClass(score) {
  if (score >= 78) return "";
  if (score >= 60) return "mid";
  return "risk";
}

function tagClass(tag) {
  if (/主投|五险|双休|靠谱|稳定/.test(tag)) return "green";
  if (/Amazon|Shopee|Lazada|品牌/.test(tag)) return "blue";
  if (/先问|可试|待确认|App/.test(tag)) return "amber";
  if (/客服|销售|单休|小作坊|无社保|风险/.test(tag)) return "red";
  return "";
}

function actionClass(action) {
  if (action === "主投") return "green";
  if (action === "可试" || action === "先问") return "amber";
  if (action === "不建议") return "red";
  return "neutral";
}

function renderCompanies() {
  const items = getFilteredCompanies();
  const mainCount = companies.filter((company) => company.action === "主投").length;
  const tryCount = companies.filter((company) => company.action === "可试").length;
  el.count.textContent = `当前 ${items.length} 个匹配项；主投 ${mainCount} 个，可试 ${tryCount} 个，每日App入口 ${searchEntrances.length} 个`;
  renderQuickLinks();
  drawChart(items);
  el.grid.innerHTML = items.length ? items.map(renderCompanyCard).join("") : `<div class="empty">没有匹配项。放宽福利或风险筛选再试。</div>`;
}

function renderCompanyCard(company) {
  const status = state.statuses[company.id] || "未投递";
  const note = state.notes[company.id] || "";
  const welfare = [
    company.hasFiveInsurance ? "五险" : "",
    company.hasHousingFund ? "一金" : "",
    company.isWeekendOff ? "双休" : "",
    company.isSingleRest ? "单休风险" : "",
    company.isBigSmallWeek ? "大小周风险" : "",
    company.isNoSocialInsurance ? "无社保风险" : ""
  ].filter(Boolean);

  return `
    <article class="company-card" data-id="${company.id}">
      <div class="card-top">
        <div>
          <h3>${company.name}</h3>
          <div class="meta">${company.district} · ${company.targetType} · ${company.companyScale}</div>
          <div class="status-row">
            <span class="active-status ${company.isActiveHiring ? "active" : "watch"}">${company.statusText}</span>
            <span class="checked-pill">核验：${company.lastChecked}</span>
          </div>
        </div>
        <div class="score-badge ${badgeClass(company.score)}">${company.score}</div>
      </div>

      <div class="tag-row">
        <span class="action-pill ${actionClass(company.action)}">${company.action}</span>
        <span class="tag ${tagClass(company.targetType)}">${company.targetType}</span>
        <span class="tag">${company.companyScale}</span>
        ${welfare.map((tag) => `<span class="tag ${tagClass(tag)}">${tag}</span>`).join("")}
        ${company.riskTags.map((tag) => `<span class="tag ${tagClass(tag)}">${tag}</span>`).join("")}
      </div>

      <p class="fit-text"><strong>适合岗位：</strong>${company.role}</p>
      <p class="fit-text"><strong>岗位状态：</strong>${company.isActiveHiring ? "当前可投/需App核验" : "只关注/等新岗位"} · ${company.activeCheckMethod}</p>
      <p class="fit-text"><strong>推荐动作：</strong>${company.actionText}</p>
      <p class="fit-text"><strong>为什么适合你：</strong>${company.fit}</p>

      <ul class="evidence-list">
        ${company.evidence.map((item) => `<li>${item}</li>`).join("")}
      </ul>

      <div>
        <p class="fit-text"><strong>投递前必须问：</strong>${company.mustAsk.join("；")}</p>
      </div>

      <div class="app-actions">
        <button class="platform-btn" type="button" data-platform="boss" data-query="${escapeAttr(getCompanySearchQuery(company, "boss"))}">BOSS搜公司</button>
        <button class="platform-btn" type="button" data-platform="zhaopin" data-query="${escapeAttr(getCompanySearchQuery(company, "zhaopin"))}">智联搜公司</button>
        <button class="platform-btn" type="button" data-platform="liepin" data-query="${escapeAttr(getCompanySearchQuery(company, "liepin"))}">猎聘搜公司</button>
        <button class="copy-btn" type="button" data-copy="${escapeAttr(company.name)}">复制公司名</button>
        <button class="copy-btn" type="button" data-copy="${escapeAttr(getGreeting(company))}">复制打招呼</button>
        ${company.historyUrl ? `<a class="source-ref history-link" href="${company.historyUrl}" target="_blank" rel="noreferrer">历史岗位参考</a>` : ""}
      </div>

      <div class="card-foot">
        <div class="card-actions">
          <select class="status-select" aria-label="${company.name} 投递状态">
            ${statusOptions.map((option) => `<option value="${option}" ${option === status ? "selected" : ""}>${option}</option>`).join("")}
          </select>
          <input class="notes-input" value="${escapeAttr(note)}" placeholder="备注" aria-label="${company.name} 备注" />
        </div>
      </div>
    </article>
  `;
}

function escapeAttr(value) {
  return String(value).replaceAll("&", "&amp;").replaceAll('"', "&quot;").replaceAll("<", "&lt;");
}

function renderQuickLinks() {
  el.quickLinks.innerHTML = searchEntrances
    .map(
      (entry) => `
        <div class="entrance-item">
          <span>${entry.label}</span>
          <button type="button" class="copy-search-btn" data-copy="${escapeAttr(entry.query)}">复制关键词</button>
          <button type="button" class="open-search-btn" data-platform="${entry.platform}" data-query="${escapeAttr(entry.query)}">打开搜索</button>
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
    { label: "可试", color: "#2f6db0", count: items.filter((item) => item.action === "可试").length },
    { label: "达标", color: "#3e7f4f", count: items.filter((item) => item.hasFiveInsurance && item.hasHousingFund && item.isWeekendOff).length },
    { label: "风险", color: "#ad463f", count: items.filter((item) => item.isSalesRisk || item.isCustomerServiceRisk || item.isNoSocialInsurance || item.isSingleRest || item.isBigSmallWeek).length }
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
  const questions = [
    "是否双休？",
    "是否入职缴纳五险一金？",
    "是否有人带？",
    "岗位是否偏客服/销售？",
    "店铺是精品运营还是铺货？"
  ];
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
  const rows = getFilteredCompanies().map((company) => {
    const status = state.statuses[company.id] || "未投递";
    const note = state.notes[company.id] || "";
    return [
      company.score,
      company.action,
      company.name,
      company.targetType,
      company.companyScale,
      company.role,
      company.hasFiveInsurance ? "五险" : "",
      company.hasHousingFund ? "一金" : "",
      company.isWeekendOff ? "双休" : "",
      company.isSalesRisk ? "销售风险" : "",
      company.isCustomerServiceRisk ? "客服风险" : "",
      status,
      note,
      getCompanySearchQuery(company, "boss")
    ].join("\t");
  });
  const content = [
    "匹配分\t推荐动作\t公司\t公司类型\t规模\t岗位\t五险\t一金\t双休\t销售风险\t客服风险\t投递状态\t备注\tBOSS搜索词",
    ...rows
  ].join("\n");
  navigator.clipboard
    .writeText(content)
    .then(() => {
      el.exportBtn.textContent = "已复制";
      setTimeout(() => (el.exportBtn.textContent = "导出名单"), 1400);
    })
    .catch(() => {
      const encoded = encodeURIComponent(content);
      window.open(`data:text/plain;charset=utf-8,${encoded}`, "_blank");
    });
}

function resetStatus() {
  if (!confirm("确认清空本地保存的投递状态和备注吗？")) return;
  state.statuses = {};
  state.notes = {};
  saveState();
  renderCompanies();
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
    el.excludeSingleRest,
    el.excludeBigSmallWeek,
    el.excludeNoSocialInsurance,
    el.amazonWeight,
    el.englishWeight,
    el.stabilityWeight,
    el.dataWeight
  ].forEach((node) => node.addEventListener("input", renderCompanies));

  document.addEventListener("click", (event) => {
    const platformButton = event.target.closest(".platform-btn, .open-search-btn");
    if (platformButton) {
      openPlatformSearch(platformButton.dataset.platform, platformButton.dataset.query, platformButton);
      return;
    }
    const copyButton = event.target.closest(".copy-btn, .copy-search-btn");
    if (copyButton) {
      copyText(copyButton.dataset.copy, copyButton);
    }
  });

  el.grid.addEventListener("change", (event) => {
    const card = event.target.closest(".company-card");
    if (!card || !event.target.classList.contains("status-select")) return;
    state.statuses[card.dataset.id] = event.target.value;
    saveState();
  });

  el.grid.addEventListener("input", (event) => {
    const card = event.target.closest(".company-card");
    if (!card || !event.target.classList.contains("notes-input")) return;
    state.notes[card.dataset.id] = event.target.value;
    saveState();
  });

  el.analyzeBtn.addEventListener("click", analyzeJD);
  el.exportBtn.addEventListener("click", exportList);
  el.resetStatusBtn.addEventListener("click", resetStatus);
}

bindEvents();
renderCompanies();

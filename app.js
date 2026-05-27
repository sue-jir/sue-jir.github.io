const STORAGE_KEY = "zzl_crossborder_ops_radar_v2";
const CHECKED_AT = "2026-05-27";

const activeJobs = [
  {
    id: "hanrui-shopee-lazada",
    pool: "activeJobs",
    name: "汉睿集团 / 汉睿云联",
    companyType: "platform",
    platform: "sea",
    roleLevel: "assistant",
    district: "武汉洪山",
    role: "Shopee运营专员 / Lazada运营",
    salary: "5-8K",
    english: "英语四级或以上，偏基础读写",
    englishLevel: 3,
    requiresExperienceYears: 0,
    isSalesRisk: false,
    isCustomerServiceRisk: true,
    isExpired: false,
    status: "active",
    lastChecked: CHECKED_AT,
    statusText: "岗位页可打开，职责含Shopee/Lazada店铺运营、上下架、关键词、广告、补货。",
    action: "ask_hr",
    actionText: "先问HR：是否接受应届、客服占比多高、是否有带教。",
    baseScore: 86,
    dataFit: 4,
    amazonFit: 2,
    stableFit: 4,
    jobUrl: "https://www.10100.com/job/10046",
    companyUrl: "https://www.10100.com/job/10046",
    sourceLabel: "大数跨境岗位页",
    fit: "与你的Shopee/Lazada活动池、商品上架、活动报名和数据复盘训练匹配。",
    evidence: [
      "职责包含产品上下架、关键词优化、广告促销、补货计划。",
      "经验要求显示1年以内，对初级运营相对友好。",
      "英语要求是四级，低于外企高英语岗位。"
    ],
    risks: "岗位描述包含售前售后服务，需确认客服工作占比。",
    tags: ["Shopee/Lazada", "四级可试", "运营助理", "先问HR"],
    pitch: "我有Shopee/Lazada活动运营作品，能从商品维护、活动报名、基础复盘开始。"
  },
  {
    id: "wtbu-shopee",
    pool: "activeJobs",
    name: "武汉Shopee运营岗位（就业网线索）",
    companyType: "small",
    platform: "sea",
    roleLevel: "assistant",
    district: "武汉",
    role: "Shopee运营",
    salary: "以岗位页为准",
    english: "未见高英语硬门槛，需面试确认",
    englishLevel: 2,
    requiresExperienceYears: 0,
    isSalesRisk: false,
    isCustomerServiceRisk: true,
    isExpired: false,
    status: "active",
    lastChecked: CHECKED_AT,
    statusText: "岗位页可打开，适合用于投递或练面，但需要确认企业主体和在招状态。",
    action: "practice",
    actionText: "当练面：先确认公司主体、店铺规模、是否纯客服。",
    baseScore: 76,
    dataFit: 3,
    amazonFit: 1,
    stableFit: 2,
    jobUrl: "https://wtbu.91wllm.cn/job/view/id/2322420",
    companyUrl: "https://wtbu.91wllm.cn/job/view/id/2322420",
    sourceLabel: "校园就业网岗位页",
    fit: "Shopee方向与你的活动池作品匹配，但企业信息需要二次核验。",
    evidence: [
      "岗位页可直接打开。",
      "岗位标题与Shopee运营直接相关。",
      "适合用作低门槛面试入口。"
    ],
    risks: "就业网岗位可能滞后；必须问清是否仍在招。",
    tags: ["Shopee", "练面", "低英语", "需核验"],
    pitch: "我做过Shopee/Lazada活动池，能承担商品上架、页面优化和基础数据复盘。"
  },
  {
    id: "senhe-amazon",
    pool: "activeJobs",
    name: "武汉森合科技有限公司",
    companyType: "small",
    platform: "amazon",
    roleLevel: "assistant",
    district: "武汉",
    role: "亚马逊运营专员 / 实习生 / 产品开发",
    salary: "以岗位页为准",
    english: "基础英文商品资料处理，需确认",
    englishLevel: 2,
    requiresExperienceYears: 0,
    isSalesRisk: false,
    isCustomerServiceRisk: false,
    isExpired: false,
    status: "active",
    lastChecked: CHECKED_AT,
    statusText: "岗位页可打开，方向覆盖亚马逊运营/实习/产品开发。",
    action: "apply_now",
    actionText: "马上投：用Amazon作品集作为主材料。",
    baseScore: 88,
    dataFit: 5,
    amazonFit: 5,
    stableFit: 2,
    jobUrl: "https://www.91wllm.cn/job/view/id/2338134",
    companyUrl: "https://www.91wllm.cn/job/view/id/2338134",
    sourceLabel: "就业网岗位页",
    fit: "与你的Amazon选品、Listing SEO、PPC复盘和FBA库存周报作品匹配。",
    evidence: [
      "岗位方向包含亚马逊运营和产品开发。",
      "你的作品集覆盖选品、Listing、广告、库存。",
      "适合应届/初级运营切入。"
    ],
    risks: "确认岗位是否仍在招、是否铺货、是否有人带。",
    tags: ["Amazon", "运营助理", "产品开发", "马上投"],
    pitch: "我有Amazon Home Storage类目的选品、Listing、PPC和FBA库存复盘作品。"
  },
  {
    id: "sier-crossborder",
    pool: "activeJobs",
    name: "思迩电子商务（武汉）",
    companyType: "small",
    platform: "multi",
    roleLevel: "assistant",
    district: "武汉",
    role: "跨境电商运营专员",
    salary: "以岗位页为准",
    english: "基础英文，需确认平台和职责",
    englishLevel: 2,
    requiresExperienceYears: 0,
    isSalesRisk: false,
    isCustomerServiceRisk: true,
    isExpired: false,
    status: "active",
    lastChecked: CHECKED_AT,
    statusText: "岗位页可打开，标题为跨境电商运营专员。",
    action: "ask_hr",
    actionText: "先问HR：具体平台、客服占比、是否有运营数据复盘。",
    baseScore: 78,
    dataFit: 3,
    amazonFit: 3,
    stableFit: 2,
    jobUrl: "https://www.job5156.com/wuhan/job_278358187",
    companyUrl: "https://www.job5156.com/wuhan/job_278358187",
    sourceLabel: "智通直聘岗位页",
    fit: "平台未完全明确，但跨境运营标题与你的目标接近。",
    evidence: [
      "岗位页可直接打开。",
      "岗位标题为跨境电商运营专员。",
      "适合询问是否涉及Amazon/Shopee/Lazada。"
    ],
    risks: "职责可能混入客服或销售，需要问清平台和KPI。",
    tags: ["跨境运营", "多平台", "先问HR", "客服风险"],
    pitch: "我有电商运营数据复盘和跨境运营作品集，可以承担基础运营执行和周报。"
  },
  {
    id: "zhipin-zhongjiezekang",
    pool: "activeJobs",
    name: "武汉中杰泽康科技有限公司",
    companyType: "small",
    platform: "amazon",
    roleLevel: "assistant",
    district: "武汉",
    role: "亚马逊运营 / 运营助理 / 产品开发",
    salary: "以BOSS企业页实时岗位为准",
    english: "基础英文，需逐条确认",
    englishLevel: 2,
    requiresExperienceYears: 0,
    isSalesRisk: false,
    isCustomerServiceRisk: false,
    isExpired: false,
    status: "active",
    lastChecked: CHECKED_AT,
    statusText: "企业页可打开，需在页面内查看当前在招岗位。",
    action: "apply_now",
    actionText: "马上投：优先投运营助理/亚马逊运营相关岗位。",
    baseScore: 84,
    dataFit: 4,
    amazonFit: 4,
    stableFit: 2,
    jobUrl: "https://www.zhipin.com/gongsi/0c6bd5fc8428d4bb1XB63tS8E1BU.html",
    companyUrl: "https://www.zhipin.com/gongsi/0c6bd5fc8428d4bb1XB63tS8E1BU.html",
    sourceLabel: "BOSS企业页",
    fit: "亚马逊运营方向明确，适合用Listing、PPC和SKU复盘作品集投递。",
    evidence: [
      "BOSS企业页可打开。",
      "适合从企业页进入查看最新岗位。",
      "你的作品集能支撑初级亚马逊运营面试。"
    ],
    risks: "BOSS页面可能需要登录；确认岗位是否仍在武汉。",
    tags: ["Amazon", "企业页", "马上投", "低英语优先"],
    pitch: "我能展示Amazon选品表、关键词表、PPC复盘表和库存周报。"
  },
  {
    id: "zhaopin-shopee-gudao",
    pool: "activeJobs",
    name: "上海古道商务咨询有限公司武汉岗位",
    companyType: "medium",
    platform: "sea",
    roleLevel: "assistant",
    district: "武汉",
    role: "Shopee虾皮运营专员",
    salary: "以智联岗位页为准",
    english: "基础英文，需确认是否要求四级",
    englishLevel: 2,
    requiresExperienceYears: 0,
    isSalesRisk: false,
    isCustomerServiceRisk: true,
    isExpired: false,
    status: "active",
    lastChecked: CHECKED_AT,
    statusText: "岗位页可打开，标题为Shopee虾皮运营专员。",
    action: "ask_hr",
    actionText: "先问HR：是否武汉坐班、客服占比、店铺类目。",
    baseScore: 80,
    dataFit: 3,
    amazonFit: 1,
    stableFit: 3,
    jobUrl: "https://www.zhaopin.com/jobdetail/CC465445210J40776413105.htm",
    companyUrl: "https://www.zhaopin.com/jobdetail/CC465445210J40776413105.htm",
    sourceLabel: "智联岗位页",
    fit: "Shopee平台与你的东南亚活动运营作品匹配。",
    evidence: [
      "智联岗位页可打开。",
      "岗位标题直接指向Shopee运营。",
      "适合用活动池和商品优化案例沟通。"
    ],
    risks: "岗位可能含客服处理；必须确认工作地点和职责边界。",
    tags: ["Shopee", "智联岗位", "先问HR", "客服风险"],
    pitch: "我做过Shopee/Lazada 20个商品活动池和主推SKU活动节奏。"
  }
];

const watchCompanies = [
  {
    id: "yibai-wh",
    pool: "watchCompanies",
    name: "深圳市易佰网络科技有限公司武汉分公司",
    companyType: "medium",
    platform: "multi",
    roleLevel: "assistant",
    district: "武汉",
    role: "跨境电商运营 / 账号运营 / 数据运营",
    salary: "以企业页实时岗位为准",
    english: "部分岗位需要英文读写，客服岗风险较高",
    englishLevel: 3,
    requiresExperienceYears: 0,
    isSalesRisk: false,
    isCustomerServiceRisk: true,
    isExpired: false,
    status: "watch",
    lastChecked: CHECKED_AT,
    statusText: "企业页可打开，但当前适合岗位需进入企业页逐条筛。",
    action: "watch_only",
    actionText: "只蹲不投：看到运营助理/账号运营再投，避开英语客服。",
    baseScore: 76,
    dataFit: 4,
    amazonFit: 3,
    stableFit: 4,
    jobUrl: "https://www.zhaopin.com/companydetail/CC375970138.htm",
    companyUrl: "https://www.zhaopin.com/companydetail/CC375970138.htm",
    sourceLabel: "智联企业页",
    fit: "大公司流程训练价值高，但岗位容易混入客服和邮件处理。",
    evidence: [
      "企业页可打开。",
      "跨境多平台公司，适合蹲账号运营、刊登、数据类岗位。",
      "你的SKU维护和周报能力可迁移。"
    ],
    risks: "英语邮件客服不建议主投；优先筛运营助理、刊登、账号运营。",
    tags: ["多平台", "中型公司", "只蹲不投", "客服风险"],
    pitch: "我有SKU维护、页面承接优化和GMV/ROI复盘经验。"
  },
  {
    id: "changmao-park",
    pool: "watchCompanies",
    name: "武汉长贸数字产业有限公司 / 长江国贸跨境电商产业园",
    companyType: "state",
    platform: "ecosystem",
    roleLevel: "ecosystem",
    district: "武汉",
    role: "产业园运营 / 企业服务 / 卖家服务支持",
    salary: "官网未直接列社招薪资",
    english: "偏企业服务和运营协调，英语压力相对低",
    englishLevel: 1,
    requiresExperienceYears: 0,
    isSalesRisk: false,
    isCustomerServiceRisk: false,
    isExpired: false,
    status: "watch",
    lastChecked: CHECKED_AT,
    statusText: "官网可打开，但未见稳定公开社招页。",
    action: "watch_only",
    actionText: "只蹲不投：关注公众号/园区活动/入驻企业机会。",
    baseScore: 70,
    dataFit: 3,
    amazonFit: 3,
    stableFit: 5,
    jobUrl: "",
    companyUrl: "https://whcmsc.com/about/",
    sourceLabel: "公司官网",
    fit: "适合找稳定、产业园、企业服务或卖家培训支持岗位。",
    evidence: [
      "官网可打开。",
      "国资/产业园属性更稳。",
      "跨境生态可能带来入驻企业岗位。"
    ],
    risks: "没有明确社招岗位页，不能当作当前可投岗位。",
    tags: ["国资", "产业园", "只蹲不投", "低英语"],
    pitch: "我有Amazon作品集和跨境平台基础认知，可支持卖家服务和案例整理。"
  },
  {
    id: "amazon-global-selling-wh",
    pool: "watchCompanies",
    name: "亚马逊全球开店武汉生态",
    companyType: "platform",
    platform: "ecosystem",
    roleLevel: "ecosystem",
    district: "武汉",
    role: "卖家服务 / 活动运营 / 生态合作",
    salary: "以官方招聘为准",
    english: "平台外企，英语要求可能中高",
    englishLevel: 4,
    requiresExperienceYears: 2,
    isSalesRisk: false,
    isCustomerServiceRisk: false,
    isExpired: false,
    status: "watch",
    lastChecked: CHECKED_AT,
    statusText: "公开信息可确认武汉生态，但直接初级岗位少。",
    action: "watch_only",
    actionText: "只蹲不投：关注活动、培训、服务商和合作卖家名单。",
    baseScore: 62,
    dataFit: 4,
    amazonFit: 5,
    stableFit: 4,
    jobUrl: "",
    companyUrl: "https://www.wuhan.gov.cn/sy/whyw/202312/t20231212_2318078.shtml",
    sourceLabel: "武汉政府公开信息",
    fit: "更适合作为生态入口，不是现阶段最容易拿面试的目标。",
    evidence: [
      "武汉有亚马逊全球开店华中区域相关公开信息。",
      "能带动服务商和卖家岗位。",
      "适合长期关注。"
    ],
    risks: "英语和综合能力要求较高；不要作为第一批主投。",
    tags: ["Amazon生态", "英语偏高", "只蹲不投", "长期目标"],
    pitch: "我有Amazon运营作品集，可关注卖家服务和生态活动岗位。"
  },
  {
    id: "svakom",
    pool: "watchCompanies",
    name: "SVAKOM 司沃康",
    companyType: "brand",
    platform: "amazon",
    roleLevel: "assistant",
    district: "武汉/多地",
    role: "亚马逊运营 / 跨境运营",
    salary: "以岗位页实时显示为准",
    english: "品牌出海岗位，英语要求可能中等",
    englishLevel: 3,
    requiresExperienceYears: 1,
    isSalesRisk: false,
    isCustomerServiceRisk: false,
    isExpired: false,
    status: "watch",
    lastChecked: CHECKED_AT,
    statusText: "岗位聚合页可打开，但需确认是否武汉岗位。",
    action: "ask_hr",
    actionText: "先问HR：是否武汉岗位、是否接受初级运营。",
    baseScore: 68,
    dataFit: 4,
    amazonFit: 4,
    stableFit: 3,
    jobUrl: "https://www.jobui.com/company/2381076/jobs/",
    companyUrl: "https://www.jobui.com/company/2381076/jobs/",
    sourceLabel: "职友集岗位聚合页",
    fit: "品牌型出海公司，适合作为中期提升目标。",
    evidence: [
      "公司岗位聚合页可打开。",
      "岗位方向包含跨境/亚马逊运营。",
      "品牌型岗位更看重商品和数据复盘。"
    ],
    risks: "多地招聘；英语和经验要求可能高于小团队。",
    tags: ["品牌出海", "Amazon", "先问HR", "四级可试"],
    pitch: "我可以展示Amazon选品、Listing和PPC复盘作品。"
  }
];

const searchEntrances = [
  {
    id: "zhaopin-crossborder-assistant",
    label: "智联：武汉跨境运营助理",
    platform: "智联",
    url: "https://www.zhaopin.com/zhaopin/0ff0936bb1764556a0426fa0114c4e12/",
    note: "只作为搜索入口，不作为企业卡片。"
  },
  {
    id: "zhipin-amazon",
    label: "BOSS：武汉亚马逊运营",
    platform: "BOSS",
    url: "https://www.zhipin.com/web/geek/job?query=%E6%AD%A6%E6%B1%89%20%E4%BA%9A%E9%A9%AC%E9%80%8A%E8%BF%90%E8%90%A5&city=101200100",
    note: "适合每天刷，需登录后看最新。"
  },
  {
    id: "zhipin-shopee-lazada",
    label: "BOSS：Shopee/Lazada运营",
    platform: "BOSS",
    url: "https://www.zhipin.com/web/geek/job?query=%E6%AD%A6%E6%B1%89%20Shopee%20Lazada%20%E8%BF%90%E8%90%A5&city=101200100",
    note: "东南亚平台低英语岗位优先。"
  },
  {
    id: "liepin-amazon",
    label: "猎聘：武汉Amazon运营",
    platform: "猎聘",
    url: "https://www.liepin.com/zhaopin/?city=170020&dq=170020&key=Amazon%E8%BF%90%E8%90%A5",
    note: "经验门槛偏高，适合筛选企业。"
  },
  {
    id: "baidu-company-check",
    label: "百度：公司真实性核验",
    platform: "百度",
    url: "https://www.baidu.com/s?wd=%E5%85%AC%E5%8F%B8%E5%90%8D%20%E6%AD%A6%E6%B1%89%20%E8%B7%A8%E5%A2%83%E7%94%B5%E5%95%86%20%E6%8B%9B%E8%81%98",
    note: "百度只放搜索入口区，不进入企业卡片。"
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

const actionLabels = {
  apply_now: "马上投",
  ask_hr: "先问HR",
  watch_only: "只蹲不投",
  delete: "删除",
  practice: "当练面"
};

const statusOptions = ["未投递", "已收藏", "已沟通", "已发简历", "面试中", "暂缓", "删除"];
const allCompanyRecords = activeJobs.concat(watchCompanies);
const state = loadState();

const el = {
  search: document.querySelector("#searchInput"),
  platform: document.querySelector("#platformFilter"),
  type: document.querySelector("#typeFilter"),
  english: document.querySelector("#englishFilter"),
  role: document.querySelector("#roleFilter"),
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
  const lowEnglishFit = 6 - company.englishLevel;
  let score =
    company.baseScore +
    (company.amazonFit - 3) * weights.amazon * 0.45 +
    (lowEnglishFit - 3) * weights.english * 0.45 +
    (company.stableFit - 3) * weights.stability * 0.35 +
    (company.dataFit - 3) * weights.data * 0.4;

  if (company.pool === "watchCompanies") score -= 8;
  if (company.status === "search_only") score -= 25;
  if (company.status === "watch") score -= 8;
  if (company.status === "stale") score -= 16;
  if (company.isExpired) score -= 60;
  if (!company.jobUrl) score -= 10;
  if (company.requiresExperienceYears >= 2) score -= 14;
  if (company.requiresExperienceYears >= 3) score -= 8;
  if (company.englishLevel >= 4) score -= 14;
  if (company.englishLevel >= 5) score -= 8;
  if (company.isSalesRisk) score -= 14;
  if (company.isCustomerServiceRisk) score -= 10;

  const actionAdjustments = {
    apply_now: 8,
    ask_hr: -3,
    watch_only: -14,
    delete: -60,
    practice: -8
  };
  score += actionAdjustments[company.action] || 0;
  return Math.max(0, Math.min(98, Math.round(score)));
}

function getFilteredCompanies() {
  const keyword = el.search.value.trim().toLowerCase();
  const platform = el.platform.value;
  const type = el.type.value;
  const english = el.english.value;
  const role = el.role.value;

  return allCompanyRecords
    .filter((company) => {
      const haystack = [
        company.name,
        company.role,
        company.district,
        company.statusText,
        company.actionText,
        company.tags.join(" ")
      ]
        .join(" ")
        .toLowerCase();
      const matchKeyword = !keyword || haystack.includes(keyword);
      const matchPlatform = platform === "all" || company.platform === platform;
      const matchType = type === "all" || company.companyType === type;
      const matchRole = role === "all" || company.roleLevel === role;
      const matchEnglish =
        english === "all" ||
        (english === "low" && company.englishLevel <= 2) ||
        (english === "cet4" && company.englishLevel <= 3) ||
        (english === "high" && company.englishLevel >= 4);
      return matchKeyword && matchPlatform && matchType && matchRole && matchEnglish;
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
  if (/马上投|低英语|稳定|国资/.test(tag)) return "green";
  if (/Amazon|Shopee|Lazada|数据/.test(tag)) return "blue";
  if (/先问|练面|四级|需核验/.test(tag)) return "amber";
  if (/客服|销售|英语偏高|删除/.test(tag)) return "red";
  return "";
}

function actionClass(action) {
  if (action === "apply_now") return "green";
  if (action === "ask_hr" || action === "practice") return "amber";
  if (action === "delete") return "red";
  return "neutral";
}

function renderCompanies() {
  const items = getFilteredCompanies();
  const activeCount = activeJobs.length;
  const watchCount = watchCompanies.length;
  el.count.textContent = `当前 ${items.length} 个匹配项；可投岗位 ${activeCount} 个，关注公司 ${watchCount} 个，搜索入口 ${searchEntrances.length} 个`;
  renderQuickLinks();
  drawChart(items);

  if (!items.length) {
    el.grid.innerHTML = `<div class="empty">没有匹配项。放宽筛选条件再试。</div>`;
    return;
  }

  el.grid.innerHTML = items.map(renderCompanyCard).join("");
}

function renderCompanyCard(company) {
  const status = state.statuses[company.id] || "未投递";
  const note = state.notes[company.id] || "";
  const jobLink = company.jobUrl
    ? `<a class="job-direct-link" href="${company.jobUrl}" target="_blank" rel="noreferrer">在招岗位</a>`
    : `<span class="job-direct-link disabled">暂无岗位页</span>`;
  const companyLink = company.companyUrl
    ? `<a class="profile-link" href="${company.companyUrl}" target="_blank" rel="noreferrer">企业直达</a>`
    : "";
  const riskTags = [
    company.requiresExperienceYears >= 2 ? `${company.requiresExperienceYears}年经验` : "",
    company.englishLevel >= 4 ? "英语偏高" : "",
    company.isSalesRisk ? "销售风险" : "",
    company.isCustomerServiceRisk ? "客服风险" : "",
    company.isExpired ? "链接失效" : ""
  ].filter(Boolean);

  return `
    <article class="company-card" data-id="${company.id}">
      <div class="card-top">
        <div>
          <h3><a class="company-name-link" href="${company.companyUrl || company.jobUrl}" target="_blank" rel="noreferrer">${company.name}</a></h3>
          <div class="meta">${company.district} · ${typeLabels[company.companyType]} · ${platformLabels[company.platform]}</div>
          <div class="status-row">
            <span class="active-status ${company.status === "active" ? "active" : "watch"}">${company.statusText}</span>
            <span class="checked-pill">核验：${company.lastChecked}</span>
          </div>
        </div>
        <div class="score-badge ${badgeClass(company.score)}">${company.score}</div>
      </div>

      <div class="tag-row">
        <span class="action-pill ${actionClass(company.action)}">${actionLabels[company.action] || company.action}</span>
        ${company.tags.map((tag) => `<span class="tag ${tagClass(tag)}">${tag}</span>`).join("")}
        ${riskTags.map((tag) => `<span class="tag red">${tag}</span>`).join("")}
      </div>

      <p class="fit-text"><strong>适配岗位：</strong>${company.role}</p>
      <p class="fit-text"><strong>推荐动作：</strong>${company.actionText}</p>

      <ul class="evidence-list">
        ${company.evidence.map((item) => `<li>${item}</li>`).join("")}
      </ul>

      <div>
        <p class="fit-text"><strong>怎么讲你自己：</strong>${company.pitch}</p>
        <p class="risk-text"><strong>风险确认：</strong>${company.risks}</p>
      </div>

      <div class="card-foot">
        <div class="source-row">
          ${companyLink}
          ${jobLink}
          <span class="source-ref">${company.sourceLabel}</span>
        </div>
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
    .map((link) => `<a href="${link.url}" target="_blank" rel="noreferrer" title="${link.note}">${link.label}</a>`)
    .join("");
}

function drawChart(items) {
  const ctx = el.chart.getContext("2d");
  ctx.clearRect(0, 0, el.chart.width, el.chart.height);
  const buckets = [
    { label: "可投", color: "#176f6b", count: items.filter((item) => item.pool === "activeJobs").length },
    { label: "关注", color: "#a7641a", count: items.filter((item) => item.pool === "watchCompanies").length },
    { label: "低英语", color: "#3e7f4f", count: items.filter((item) => item.englishLevel <= 2).length },
    { label: "风险", color: "#ad463f", count: items.filter((item) => item.isSalesRisk || item.isCustomerServiceRisk || item.englishLevel >= 4 || item.requiresExperienceYears >= 2).length }
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
  const positiveBuckets = [
    { name: "Amazon/Listing", keys: ["amazon", "亚马逊", "listing", "asin", "关键词", "search terms", "五点", "a+"] },
    { name: "PPC/广告复盘", keys: ["ppc", "acos", "roas", "广告", "投放", "cpc", "ctr", "cvr"] },
    { name: "库存/供应链", keys: ["fba", "库存", "补货", "可售天数", "滞销"] },
    { name: "Shopee/Lazada", keys: ["shopee", "lazada", "虾皮", "东南亚", "活动报名"] },
    { name: "数据分析", keys: ["excel", "power bi", "sql", "数据", "周报", "复盘", "gmv", "roi"] }
  ];
  const riskRules = [
    { label: "英语要求高", keys: ["英语流利", "六级", "专八", "口语流利", "海外客户"] },
    { label: "销售风险", keys: ["外贸业务员", "电话开发", "陌拜", "客户开发", "高提成", "销售"] },
    { label: "客服风险", keys: ["客服", "售前售后", "处理客诉", "工单", "邮件回复"] },
    { label: "经验门槛", keys: ["2年以上", "两年以上", "3年以上", "三年以上", "1-3年"] },
    { label: "链接/岗位风险", keys: ["长期招聘", "无责底薪", "招商", "培训收费"] }
  ];
  const matched = positiveBuckets.filter((bucket) => bucket.keys.some((key) => lower.includes(key.toLowerCase())));
  const risks = riskRules
    .filter((rule) => rule.keys.some((key) => lower.includes(key.toLowerCase())))
    .map((rule) => rule.label);
  const rawScore = 48 + matched.length * 9 - risks.length * 10;
  const score = Math.max(0, Math.min(96, rawScore));
  let recommendation = "建议投";
  if (score < 65 || risks.length >= 2) recommendation = "先问";
  if (score < 45 || risks.includes("销售风险") && risks.includes("英语要求高")) recommendation = "不建议投";

  const questions = buildHrQuestions(risks, matched);
  el.jdResult.innerHTML = `
    <strong>${recommendation}｜适配分 ${score}/100。</strong>
    <div>匹配点：${matched.length ? matched.map((bucket) => bucket.name).join("、") : "未看到明显跨境运营核心动作"}。</div>
    <div>风险词：${risks.length ? risks.join("、") : "暂未发现明显高风险词"}。</div>
    <div>建议问HR：${questions.join("；")}。</div>
  `;
}

function buildHrQuestions(risks, matched) {
  const questions = [
    "岗位是否接受应届/初级运营",
    "日常工作中运营、客服、销售各占多少比例"
  ];
  if (risks.includes("英语要求高")) questions.push("英语主要用于资料读写还是口语沟通");
  if (risks.includes("销售风险")) questions.push("是否有客户开发或销售KPI");
  if (risks.includes("客服风险")) questions.push("是否需要长期处理售后/客诉/工单");
  if (risks.includes("经验门槛")) questions.push("作品集和电商运营经历能否替代平台实操年限");
  if (matched.some((bucket) => bucket.name.includes("PPC"))) questions.push("新人是否能接触广告复盘和预算调整");
  return questions.slice(0, 5);
}

function exportList() {
  const rows = getFilteredCompanies().map((company) => {
    const status = state.statuses[company.id] || "未投递";
    const note = state.notes[company.id] || "";
    return [
      company.score,
      company.pool,
      company.name,
      company.role,
      actionLabels[company.action] || company.action,
      company.statusText,
      company.lastChecked,
      company.requiresExperienceYears,
      company.isSalesRisk ? "是" : "否",
      company.isCustomerServiceRisk ? "是" : "否",
      status,
      note,
      company.jobUrl || company.companyUrl
    ].join("\t");
  });
  const content = [
    "匹配分\t池子\t公司\t岗位\t推荐动作\t当前状态\t最后核验\t经验要求\t销售风险\t客服风险\t投递状态\t备注\t链接",
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
    el.amazonWeight,
    el.englishWeight,
    el.stabilityWeight,
    el.dataWeight
  ].forEach((node) => node.addEventListener("input", renderCompanies));

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

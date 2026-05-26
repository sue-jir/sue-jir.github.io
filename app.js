const STORAGE_KEY = "zzl_crossborder_ops_radar_v1";

const companies = [
  {
    id: "senhe-amazon",
    name: "武汉森合科技有限公司",
    companyType: "small",
    platform: "amazon",
    roleLevel: "assistant",
    district: "武汉",
    role: "亚马逊运营专员 / 实习生 / 产品开发",
    salary: "公开页曾见 5-10K 产品开发线索",
    english: "未见高英语硬门槛，产品开发岗可能需要英文资料阅读",
    englishLevel: 2,
    baseScore: 90,
    dataFit: 5,
    amazonFit: 5,
    stableFit: 2,
    sourceLabel: "91wllm / 智联招聘",
    sourceUrl: "https://www.91wllm.cn/job/view/id/2338134",
    extraUrl: "https://www.zhaopin.com/jobdetail/CCL1303195960J40672112211.htm",
    fit: "你的 Amazon 作品集、PPC 复盘、Listing SEO 和 FBA 周报能直接讲给这类公司听。",
    evidence: [
      "岗位线索覆盖亚马逊运营专员，且含实习生口径。",
      "招聘页需求专业包含电子商务类、工商管理类、物流管理等。",
      "智联产品开发岗位描述强调亚马逊市场研究、产品潜力判断。"
    ],
    risks: "小团队要问清楚是否有人带、是否铺货/精品、是否强制加班和提成结构。",
    tags: ["Amazon", "运营助理", "产品开发", "低英语优先"],
    pitch: "我做过 Home Storage 类目的 12 个 SKU 选品、30 个竞品 ASIN 拆解，以及 PPC ACOS/ROAS 复盘，可以从运营助理或产品开发助理切入。"
  },
  {
    id: "hanrui-sea",
    name: "汉睿集团 / 汉睿云联",
    companyType: "platform",
    platform: "sea",
    roleLevel: "assistant",
    district: "武汉",
    role: "Shopee运营专员 / Lazada运营助理",
    salary: "招聘页未稳定显示",
    english: "部分岗位写英语四级或以上",
    englishLevel: 3,
    baseScore: 86,
    dataFit: 4,
    amazonFit: 2,
    stableFit: 4,
    sourceLabel: "大数跨境 / 武汉商务局媒体报道",
    sourceUrl: "https://www.10100.com/job/10046",
    extraUrl: "https://sw.wuhan.gov.cn/xwdt/mtbd/202201/t20220112_1894156.shtml",
    fit: "你简历里有 Shopee/Lazada 活动池、活动报名节奏、优惠券和组合装案例，能对上东南亚运营助理岗位。",
    evidence: [
      "招聘线索写明 Shopee 运营专员，优先 Shopee/Lazada 平台经验。",
      "汉睿集团定位跨境电商一站式综合服务平台和人才培养孵化。",
      "武汉商务局公开信息提到汉睿参与跨境电商职业教育与本地生态建设。"
    ],
    risks: "英语四级可能是筛选项；你需要把英文能力表述成“可借助工具处理基础商品资料”。",
    tags: ["Shopee", "Lazada", "平台服务商", "四级可试"],
    pitch: "我做过 Shopee/Lazada 20 个商品活动池和 8 个主推 SKU 活动节奏，能先从上架、页面编辑、活动报名和数据复盘做起。"
  },
  {
    id: "yibai-wh",
    name: "深圳市易佰网络科技有限公司武汉分公司",
    companyType: "medium",
    platform: "multi",
    roleLevel: "assistant",
    district: "武汉",
    role: "跨境电商运营 / 英语邮件客服 / 数据分析",
    salary: "校招见习信息未作为薪资承诺",
    english: "英语邮件客服会有英文读写；运营岗需确认具体门槛",
    englishLevel: 3,
    baseScore: 82,
    dataFit: 4,
    amazonFit: 4,
    stableFit: 4,
    sourceLabel: "智联招聘 / 武科大就业网 / 武汉人社见习表",
    sourceUrl: "https://www.zhaopin.com/companydetail/CC375970138.htm",
    extraUrl: "https://wust.91wllm.cn/teachin/view/id/100750/mark/wust",
    fit: "适合你用“多平台账号运营、刊登优化、关键词、调价、备货”去匹配，但要避开纯英语客服。",
    evidence: [
      "公司公开介绍为跨境电商科技型企业，武汉设有分公司。",
      "校园就业网岗位列出跨境电商运营。",
      "武汉人社见习表曾列 Amazon/eBay/Walmart/Wish/Lazada/Shopee 等平台账号运营职责。"
    ],
    risks: "泛品类大公司流程较细，岗位可能更标准化；你要问清楚是运营、客服还是供应链。",
    tags: ["多平台", "Amazon/eBay", "中型公司", "流程训练"],
    pitch: "我有 40+SKU 商品维护、关键词与页面承接优化、GMV/ROI 周复盘经验，适合从账号运营和刊登优化切入。"
  },
  {
    id: "laizanbao",
    name: "来赞宝集团",
    companyType: "small",
    platform: "sea",
    roleLevel: "assistant",
    district: "洪山区",
    role: "Shopee/Lazada运营助理",
    salary: "公开页未稳定显示",
    english: "JD 未突出高英语，重平台兴趣和执行力",
    englishLevel: 1,
    baseScore: 88,
    dataFit: 3,
    amazonFit: 1,
    stableFit: 2,
    sourceLabel: "超级简历 WonderCV",
    sourceUrl: "https://www.wondercv.com/jobs/eqTQc0Y.html",
    extraUrl: "",
    fit: "岗位动作和你的简历动作高度重合：产品上传、页面编辑、推广、活动报名、客服留言。",
    evidence: [
      "公开 JD 写 Shopee/Lazada 产品上传、页面编辑、持续优化和产品推广。",
      "岗位地点显示湖北省武汉市洪山区。",
      "要求对跨境电商感兴趣，未来长期发展，适合应届生讲学习曲线。"
    ],
    risks: "要问清楚是否有成熟店铺、是否有人带、试用期目标和工作时间。",
    tags: ["Shopee/Lazada", "低英语", "助理", "洪山"],
    pitch: "我已做过 Shopee/Lazada 活动池和活动页面节奏，可以快速承担上架、页面优化、活动报名和基础数据复盘。"
  },
  {
    id: "changmao-park",
    name: "武汉长贸数字产业有限公司 / 长江国贸跨境电商产业园",
    companyType: "state",
    platform: "ecosystem",
    roleLevel: "ecosystem",
    district: "武汉",
    role: "产业园运营 / 企业服务 / 亚马逊培训服务支持",
    salary: "需在官网、公众号或社招平台确认",
    english: "通常更偏企业服务和运营协调，英语压力相对可控",
    englishLevel: 1,
    baseScore: 78,
    dataFit: 3,
    amazonFit: 4,
    stableFit: 5,
    sourceLabel: "公司官网 / 武汉市商务局",
    sourceUrl: "https://whcmsc.com/about/",
    extraUrl: "https://sw.wuhan.gov.cn/xwdt/gzdt/202508/t20250822_2636531.shtml",
    fit: "如果你更想要稳定、国资背景和跨境生态资源，这条比纯销售型外贸公司更值得盯。",
    evidence: [
      "官网显示公司为武汉市国资委下属武汉金控集团、长江国贸集团一级子公司。",
      "园区聚焦跨境多平台发展和一站式跨境电商综合服务。",
      "武汉商务局信息显示园区获亚马逊 SPN 服务商官方认证。"
    ],
    risks: "不一定长期公开招运营助理，适合公众号、园区活动、校招和内推多线追踪。",
    tags: ["国资", "产业园", "Amazon生态", "稳定优先"],
    pitch: "我有 Amazon 运营作品集和跨境平台基础认知，可以支持园区卖家培训、活动组织、案例整理和企业服务运营。"
  },
  {
    id: "amazon-gs-wh",
    name: "亚马逊全球开店武汉办公室",
    companyType: "platform",
    platform: "ecosystem",
    roleLevel: "ecosystem",
    district: "光谷/武汉",
    role: "卖家服务生态 / 活动运营 / 实习线索",
    salary: "需以 Amazon 官方招聘为准",
    english: "平台外企，英语要求可能中等以上",
    englishLevel: 4,
    baseScore: 68,
    dataFit: 4,
    amazonFit: 5,
    stableFit: 4,
    sourceLabel: "武汉市人民政府 / 大数跨境",
    sourceUrl: "https://www.wuhan.gov.cn/sy/whyw/202312/t20231212_2318078.shtml",
    extraUrl: "https://www.10100.com/article/221781",
    fit: "品牌很强，但对你更像长期目标或生态活动入口，不一定是当前最容易进的岗位。",
    evidence: [
      "武汉市政府门户提到亚马逊全球开店将在汉设立华中区域中心。",
      "公开报道显示武汉办公室围绕卖家服务、特色产业带和跨境人才培育。",
      "武汉本地 Amazon 生态增强，会带动服务商和卖家岗位。"
    ],
    risks: "直接岗位少且英语/综合能力要求更高；更适合用于找活动、培训、合作企业名单。",
    tags: ["Amazon生态", "外企平台", "长期目标", "高门槛"],
    pitch: "我已围绕 Amazon 选品、Listing、PPC、FBA 做完整作品集，适合关注卖家培训、运营支持和生态活动岗位。"
  },
  {
    id: "yiyoubei-dtc",
    name: "武汉易优贝贸易有限公司",
    companyType: "brand",
    platform: "dtc",
    roleLevel: "assistant",
    district: "江汉区",
    role: "独立站 / DTC / 跨境运营助理",
    salary: "公开公司页未稳定显示",
    english: "面向欧美独立站，英文素材阅读可能较多",
    englishLevel: 4,
    baseScore: 70,
    dataFit: 3,
    amazonFit: 1,
    stableFit: 2,
    sourceLabel: "外语人才网",
    sourceUrl: "https://www.jobeast.com/companyhome/697444.html",
    extraUrl: "",
    fit: "如果你想从 Amazon 扩到独立站和 Facebook/Google 渠道，可以作为第二梯队。",
    evidence: [
      "公开介绍称公司位于武汉江汉区中央商务区泛海国际 SOHO 城。",
      "业务通过 Facebook、Google、独立站等渠道销售到欧美。",
      "品类涉及 3C、户外、服装、家居、日用品。"
    ],
    risks: "英语和广告投放要求可能比平台运营更高；确认是不是偏客服/销售。",
    tags: ["独立站", "DTC", "欧美市场", "英语偏高"],
    pitch: "我有商品承接、卖点表达、数据复盘经验，可以从商品页优化和活动复盘切入独立站运营。"
  },
  {
    id: "baomao-product",
    name: "武汉豹猫科技有限公司",
    companyType: "small",
    platform: "amazon",
    roleLevel: "product",
    district: "洪山区",
    role: "跨境电商产品开发专员",
    salary: "公开页曾见 5-10K/月",
    english: "公开页写英语熟练，需谨慎",
    englishLevel: 5,
    baseScore: 64,
    dataFit: 4,
    amazonFit: 4,
    stableFit: 2,
    sourceLabel: "外语人才网",
    sourceUrl: "https://www.jobeast.com/jobs/273456.html",
    extraUrl: "",
    fit: "选品和竞品分析能对上，但英语熟练是明显门槛。",
    evidence: [
      "岗位写亚马逊市场调查和分析，开发适合外贸平台销售的新产品。",
      "地点为武汉洪山区。",
      "岗位强调供应链寻找、品类拓展和上架。"
    ],
    risks: "英语要求高，适合作为练面或补充，不建议第一批主投。",
    tags: ["Amazon", "产品开发", "英语高", "备选"],
    pitch: "我做过 30 个竞品 ASIN 拆解、价格带和 Review 分析，能支持选品表、竞品表和新品上架前研究。"
  },
  {
    id: "meishen-product",
    name: "魅绅科技武汉",
    companyType: "brand",
    platform: "amazon",
    roleLevel: "product",
    district: "武汉",
    role: "跨境电商产品开发专员",
    salary: "猎聘页曾见双休福利线索",
    english: "要求可无障碍浏览英语网页，且偏 2 年经验",
    englishLevel: 5,
    baseScore: 60,
    dataFit: 4,
    amazonFit: 4,
    stableFit: 3,
    sourceLabel: "猎聘",
    sourceUrl: "https://www.liepin.com/job/1965382741.shtml",
    extraUrl: "",
    fit: "工作内容有产品生命周期、数据分析、供应链资源，和你的选品作品有关，但经验门槛偏高。",
    evidence: [
      "岗位强调产品生命周期跟进、数据分析、优化和风险控制。",
      "要求了解跨境电商市场行情及热销产品分析开发。",
      "福利线索含双休、五险一金、定期体检。"
    ],
    risks: "2 年经验和英文网页无障碍浏览不太适合应届主投。",
    tags: ["产品开发", "双休线索", "经验偏高", "备选"],
    pitch: "我可以把 Amazon 家居收纳选品作品作为产品开发案例，重点讲竞品 ASIN、价格带、Review 和关键词拆解。"
  },
  {
    id: "zhaopin-pool",
    name: "智联武汉跨境电商运营岗位池",
    companyType: "medium",
    platform: "multi",
    roleLevel: "assistant",
    district: "武汉",
    role: "跨境电商运营 / 运营专员 / 运营助理",
    salary: "随具体公司变化",
    english: "从低到高都有，需逐条筛",
    englishLevel: 2,
    baseScore: 76,
    dataFit: 4,
    amazonFit: 3,
    stableFit: 2,
    sourceLabel: "智联招聘搜索页",
    sourceUrl: "https://www.zhaopin.com/zhaopin/fc3b7a01a91a4eb1bb87febb141aeb4c/",
    extraUrl: "",
    fit: "适合每天固定筛 20 分钟，把低英语、运营助理、Amazon/Shopee 关键词岗位捞出来。",
    evidence: [
      "公开搜索页显示武汉跨境电商运营相关招聘信息。",
      "岗位动作通常包括上架、推广、客服、销售数据分析、供应商协作。",
      "可用你的 SKU、PPC、库存周报经历逐条匹配。"
    ],
    risks: "列表里会混入司机、销售、客服等不匹配岗位，要用本工具粘 JD 快速排雷。",
    tags: ["岗位池", "日常搜索", "多平台", "需筛选"],
    pitch: "我会优先搜索标题含亚马逊运营、运营助理、Listing、PPC、Shopee/Lazada、产品开发助理的岗位。"
  },
  {
    id: "wuhan-park-network",
    name: "武汉跨境电商产业园/汉正街/经开综保区生态",
    companyType: "state",
    platform: "ecosystem",
    roleLevel: "ecosystem",
    district: "武汉",
    role: "商家运营 / 园区活动 / 企业服务 / 供应链支持",
    salary: "需逐个园区或入驻企业确认",
    english: "通常低于外贸业务岗",
    englishLevel: 1,
    baseScore: 72,
    dataFit: 3,
    amazonFit: 3,
    stableFit: 4,
    sourceLabel: "湖北日报 / 长江日报 / 武汉商务公开信息",
    sourceUrl: "https://epaper.hubeidaily.net/pc/attachment/202504/08/65726dca-4cb2-4cc4-91bc-d1cf63f89906.pdf",
    extraUrl: "https://www.app.dawuhanapp.com/p/225262.html",
    fit: "如果你想找本地资源和小而美团队，园区活动和入驻企业名单比普通招聘平台更好用。",
    evidence: [
      "湖北日报提到武汉经开综合保税区跨境电商产业园建设。",
      "长江日报曾报道汉正街商户通过跨境电商资源中心出海。",
      "这类生态适合挖掘运营助理、商家运营、活动运营岗位。"
    ],
    risks: "岗位不一定集中公开发布，需要主动搜公众号、园区活动和企业名录。",
    tags: ["园区生态", "小而美入口", "低英语", "主动挖掘"],
    pitch: "我可以把自己的 Amazon 作品集当作敲门砖，问园区是否有入驻企业需要运营助理或商品运营。"
  },
  {
    id: "xianyu-domestic",
    name: "武汉本地电商/健康/家居品牌运营岗",
    companyType: "brand",
    platform: "multi",
    roleLevel: "assistant",
    district: "武汉",
    role: "商品运营 / 电商运营 / 投放复盘",
    salary: "随具体公司变化",
    english: "低",
    englishLevel: 1,
    baseScore: 80,
    dataFit: 5,
    amazonFit: 1,
    stableFit: 2,
    sourceLabel: "简历迁移方向",
    sourceUrl: "https://www.zhipin.com/web/geek/job?query=%E6%AD%A6%E6%B1%89%20%E5%95%86%E5%93%81%E8%BF%90%E8%90%A5%20%E7%94%B5%E5%95%86%E8%BF%90%E8%90%A5&city=101200100",
    extraUrl: "",
    fit: "如果跨境岗位短期回复少，用国内商品运营/投放复盘做兜底，最能承接你在狼群健康的真实工作经历。",
    evidence: [
      "你的工作经历里有 40+SKU、详情页承接、CTR、GMV、ROI 周复盘。",
      "国内电商运营岗位对英语要求最低。",
      "后续可再跳跨境运营，路径更稳。"
    ],
    risks: "不是跨境主线，但能保住运营经验连续性。",
    tags: ["兜底", "商品运营", "低英语", "投放复盘"],
    pitch: "我在健康类电商做过商品信息维护、页面承接优化和投放复盘，能快速接手商品运营周报和活动复盘。"
  }
];

const platformLabels = {
  amazon: "Amazon 主线",
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

const statusOptions = ["未投递", "已收藏", "已沟通", "已发简历", "面试中", "暂缓"];

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
  const raw =
    company.baseScore +
    (company.amazonFit - 3) * weights.amazon * 0.45 +
    (lowEnglishFit - 3) * weights.english * 0.45 +
    (company.stableFit - 3) * weights.stability * 0.35 +
    (company.dataFit - 3) * weights.data * 0.4;
  return Math.max(45, Math.min(98, Math.round(raw)));
}

function getFilteredCompanies() {
  const keyword = el.search.value.trim().toLowerCase();
  const platform = el.platform.value;
  const type = el.type.value;
  const english = el.english.value;
  const role = el.role.value;

  return companies
    .filter((company) => {
      const haystack = [
        company.name,
        company.role,
        company.district,
        company.fit,
        company.english,
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
  if (score >= 80) return "";
  if (score >= 68) return "mid";
  return "risk";
}

function tagClass(tag) {
  if (/低英语|稳定|国资|低/.test(tag)) return "green";
  if (/Amazon|数据|PPC|平台/.test(tag)) return "blue";
  if (/四级|备选|经验|产品/.test(tag)) return "amber";
  if (/英语高|高门槛/.test(tag)) return "red";
  return "";
}

function renderCompanies() {
  const items = getFilteredCompanies();
  el.count.textContent = `当前 ${items.length} 个匹配项，已按简历适配度排序`;
  renderQuickLinks();
  drawChart(items);

  if (!items.length) {
    el.grid.innerHTML = `<div class="empty">没有匹配项。放宽英语门槛或清空搜索词再试。</div>`;
    return;
  }

  el.grid.innerHTML = items
    .map((company) => {
      const status = state.statuses[company.id] || "未投递";
      const note = state.notes[company.id] || "";
      const extra = company.extraUrl
        ? `<a href="${company.extraUrl}" target="_blank" rel="noreferrer">补充来源</a>`
        : "";
      return `
        <article class="company-card" data-id="${company.id}">
          <div class="card-top">
            <div>
              <h3>${company.name}</h3>
              <div class="meta">${company.district} · ${typeLabels[company.companyType]} · ${platformLabels[company.platform]}</div>
            </div>
            <div class="score-badge ${badgeClass(company.score)}">${company.score}</div>
          </div>
          <div class="tag-row">
            ${company.tags.map((tag) => `<span class="tag ${tagClass(tag)}">${tag}</span>`).join("")}
          </div>
          <p class="fit-text"><strong>适配岗位：</strong>${company.role}</p>
          <ul class="evidence-list">
            ${company.evidence.map((item) => `<li>${item}</li>`).join("")}
          </ul>
          <div>
            <p class="fit-text"><strong>怎么讲你自己：</strong>${company.pitch}</p>
            <p class="risk-text"><strong>要确认：</strong>${company.risks}</p>
          </div>
          <div class="card-foot">
            <div class="source-row">
              <a href="${company.sourceUrl}" target="_blank" rel="noreferrer">${company.sourceLabel}</a>
              ${extra}
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
    })
    .join("");
}

function escapeAttr(value) {
  return String(value).replaceAll("&", "&amp;").replaceAll('"', "&quot;").replaceAll("<", "&lt;");
}

function renderQuickLinks() {
  const links = [
    {
      label: "BOSS: 亚马逊运营",
      url: "https://www.zhipin.com/web/geek/job?query=%E6%AD%A6%E6%B1%89%20%E4%BA%9A%E9%A9%AC%E9%80%8A%E8%BF%90%E8%90%A5&city=101200100"
    },
    {
      label: "BOSS: 跨境运营助理",
      url: "https://www.zhipin.com/web/geek/job?query=%E6%AD%A6%E6%B1%89%20%E8%B7%A8%E5%A2%83%E8%BF%90%E8%90%A5%E5%8A%A9%E7%90%86&city=101200100"
    },
    {
      label: "智联: 跨境电商运营",
      url: "https://www.zhaopin.com/sou/jl736/kw%E8%B7%A8%E5%A2%83%E7%94%B5%E5%95%86%E8%BF%90%E8%90%A5"
    },
    {
      label: "猎聘: Amazon运营",
      url: "https://www.liepin.com/zhaopin/?city=170020&dq=170020&key=Amazon%E8%BF%90%E8%90%A5"
    }
  ];
  el.quickLinks.innerHTML = links
    .map((link) => `<a href="${link.url}" target="_blank" rel="noreferrer">${link.label}</a>`)
    .join("");
}

function drawChart(items) {
  const ctx = el.chart.getContext("2d");
  ctx.clearRect(0, 0, el.chart.width, el.chart.height);

  const buckets = [
    { label: "Amazon", color: "#2f6db0", count: items.filter((item) => item.platform === "amazon").length },
    { label: "东南亚", color: "#3e7f4f", count: items.filter((item) => item.platform === "sea").length },
    { label: "生态", color: "#a7641a", count: items.filter((item) => item.platform === "ecosystem").length },
    { label: "低英语", color: "#176f6b", count: items.filter((item) => item.englishLevel <= 2).length }
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
    ctx.fillText(bucket.label, x - 5, baseY + 22);
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

  const buckets = [
    { name: "Amazon/Listing", keys: ["amazon", "亚马逊", "listing", "asin", "关键词", "search terms", "五点", "a+"] },
    { name: "PPC/广告复盘", keys: ["ppc", "acos", "roas", "广告", "投放", "cpc", "ctr", "cvr"] },
    { name: "库存/供应链", keys: ["fba", "库存", "补货", "可售天数", "供应链", "滞销"] },
    { name: "Shopee/Lazada", keys: ["shopee", "lazada", "虾皮", "东南亚", "活动报名"] },
    { name: "数据分析", keys: ["excel", "power bi", "sql", "数据", "周报", "复盘", "gmv", "roi"] }
  ];
  const riskKeys = ["英语流利", "六级", "专八", "外贸业务员", "电话开发", "陌拜", "纯销售", "高提成", "欧美客户开发"];
  const lower = text.toLowerCase();
  const matched = buckets.filter((bucket) => bucket.keys.some((key) => lower.includes(key.toLowerCase())));
  const risks = riskKeys.filter((key) => lower.includes(key.toLowerCase()));
  const score = Math.min(96, 48 + matched.length * 9 + (risks.length ? -8 : 8));
  const advice =
    matched.length > 0
      ? `简历切入点：${matched.map((bucket) => bucket.name).join("、")}。`
      : "简历切入点不明显，可能不是跨境运营核心岗。";
  const riskText = risks.length ? `风险词：${risks.join("、")}。建议先问清是否偏销售/客服/高英语。` : "暂未发现明显高英语或纯销售风险词。";
  el.jdResult.innerHTML = `<strong>适配分 ${score}/100。</strong> ${advice} ${riskText}`;
}

function exportList() {
  const rows = getFilteredCompanies().map((company) => {
    const status = state.statuses[company.id] || "未投递";
    const note = state.notes[company.id] || "";
    return [
      company.score,
      company.name,
      company.role,
      platformLabels[company.platform],
      typeLabels[company.companyType],
      company.english,
      status,
      note,
      company.sourceUrl
    ].join("\t");
  });
  const content = ["匹配分\t公司\t岗位\t平台\t类型\t英语门槛\t状态\t备注\t来源", ...rows].join("\n");
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

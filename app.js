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

const extraCompanies = [
  {
    id: "sitoer-amazon",
    name: "武汉思拓尔贸易有限公司",
    companyType: "small",
    platform: "amazon",
    roleLevel: "assistant",
    district: "武汉",
    role: "亚马逊运营助理 / Amazon运营",
    salary: "公开招聘聚合页曾出现 4-6K 线索",
    english: "通常需要基础英文商品资料处理，未按高英语优先",
    englishLevel: 2,
    baseScore: 84,
    dataFit: 4,
    amazonFit: 5,
    stableFit: 2,
    sourceLabel: "招聘聚合搜索线索",
    sourceUrl: "https://www.baidu.com/s?wd=%E6%AD%A6%E6%B1%89%E6%80%9D%E6%8B%93%E5%B0%94%E8%B4%B8%E6%98%93%20%E4%BA%9A%E9%A9%AC%E9%80%8A%E8%BF%90%E8%90%A5",
    extraUrl: "",
    fit: "更贴你的 Amazon 主线，适合用 Listing、PPC、库存周报作品集去沟通。",
    evidence: [
      "公开搜索中出现武汉思拓尔与亚马逊运营岗位线索。",
      "岗位关键词与 Amazon Listing、PPC、SKU 维护相关。",
      "适合应届/初级运营先做店铺基础执行和数据复盘。"
    ],
    risks: "详情页可能过期，优先用卡片里的 BOSS/智联/猎聘搜索入口重新确认。",
    tags: ["Amazon", "运营助理", "低英语优先", "需二次确认"],
    pitch: "我有 Amazon 家居收纳类目选品、Listing SEO、PPC ACOS/ROAS 复盘和 FBA 库存周报作品，可以先从运营助理做起。"
  },
  {
    id: "yafei-tech",
    name: "武汉亚飞科技有限公司",
    companyType: "small",
    platform: "amazon",
    roleLevel: "assistant",
    district: "武汉",
    role: "亚马逊运营 / 跨境电商运营",
    salary: "随实时招聘变化",
    english: "多为基础读写，需看具体 JD",
    englishLevel: 2,
    baseScore: 82,
    dataFit: 4,
    amazonFit: 4,
    stableFit: 2,
    sourceLabel: "招聘平台搜索入口",
    sourceUrl: "https://www.baidu.com/s?wd=%E6%AD%A6%E6%B1%89%E4%BA%9A%E9%A3%9E%E7%A7%91%E6%8A%80%20%E4%BA%9A%E9%A9%AC%E9%80%8A%E8%BF%90%E8%90%A5",
    extraUrl: "",
    fit: "可作为 Amazon 运营初级岗扩展目标，重点讲你的 SKU、转化漏斗和广告复盘。",
    evidence: [
      "公开招聘搜索中与武汉、亚马逊运营、跨境电商关键词相关。",
      "岗位通常会涉及商品刊登、关键词、订单和推广复盘。",
      "你的简历已有商品运营和投放复盘迁移证据。"
    ],
    risks: "先确认是否为真实运营岗，避免偏客服或纯销售。",
    tags: ["Amazon", "运营专员", "小团队", "需二次确认"],
    pitch: "我之前维护 40+SKU，并能按曝光、点击、下单、GMV、ROI 做周复盘，适合做店铺基础运营。"
  },
  {
    id: "yingjiang-ecom",
    name: "武汉瀛江电子商务有限公司",
    companyType: "small",
    platform: "amazon",
    roleLevel: "assistant",
    district: "武汉",
    role: "亚马逊运营 / 跨境电商运营助理",
    salary: "随实时招聘变化",
    english: "需确认是否要求四级或基础读写",
    englishLevel: 3,
    baseScore: 80,
    dataFit: 4,
    amazonFit: 4,
    stableFit: 2,
    sourceLabel: "招聘平台搜索入口",
    sourceUrl: "https://www.baidu.com/s?wd=%E6%AD%A6%E6%B1%89%E7%80%9B%E6%B1%9F%E7%94%B5%E5%AD%90%E5%95%86%E5%8A%A1%20%E8%B7%A8%E5%A2%83%E7%94%B5%E5%95%86",
    extraUrl: "",
    fit: "适合放进第二批主动搜索名单，用作品集判断对方是否重视运营数据。",
    evidence: [
      "公司名在武汉跨境电商相关招聘搜索中出现。",
      "适合搜索亚马逊运营、跨境电商运营助理、产品刊登等岗位。",
      "与你的 Listing、PPC、FBA 库存周报方向可对齐。"
    ],
    risks: "招聘详情不稳定，使用实时搜索入口核验。",
    tags: ["Amazon", "跨境运营", "四级可试", "需二次确认"],
    pitch: "我能把 Amazon 作品集里的选品表、关键词表、广告复盘表直接作为面试材料。"
  },
  {
    id: "pinghua-yishun",
    name: "武汉市平华易顺贸易有限公司",
    companyType: "small",
    platform: "amazon",
    roleLevel: "assistant",
    district: "武汉",
    role: "跨境电商运营 / 亚马逊运营助理",
    salary: "随实时招聘变化",
    english: "基础英文商品资料处理为主，需核验",
    englishLevel: 2,
    baseScore: 81,
    dataFit: 3,
    amazonFit: 4,
    stableFit: 2,
    sourceLabel: "招聘平台搜索入口",
    sourceUrl: "https://www.baidu.com/s?wd=%E6%AD%A6%E6%B1%89%E5%B8%82%E5%B9%B3%E5%8D%8E%E6%98%93%E9%A1%BA%E8%B4%B8%E6%98%93%20%E8%B7%A8%E5%A2%83%E7%94%B5%E5%95%86",
    extraUrl: "",
    fit: "属于可主动挖掘的小公司目标，适合用低英语、强执行、可上手运营表格去沟通。",
    evidence: [
      "公开搜索与武汉跨境电商运营岗位关键词相关。",
      "贸易型公司可能需要商品刊登、运营助理、订单跟进等执行岗。",
      "你的 SKU 维护和商品信息结构优化经历可迁移。"
    ],
    risks: "贸易公司容易混入外贸销售，先问清是否负责平台店铺运营。",
    tags: ["跨境运营", "低英语", "小团队", "需二次确认"],
    pitch: "我能做商品上架、标题和卖点优化、基础数据周报，也能借助翻译工具处理英文商品资料。"
  },
  {
    id: "meihanchen",
    name: "武汉美汉辰科技有限公司",
    companyType: "small",
    platform: "amazon",
    roleLevel: "assistant",
    district: "武汉",
    role: "亚马逊运营助理 / 产品刊登",
    salary: "随实时招聘变化",
    english: "基础英文读写，需看具体 JD",
    englishLevel: 2,
    baseScore: 79,
    dataFit: 3,
    amazonFit: 4,
    stableFit: 2,
    sourceLabel: "招聘平台搜索入口",
    sourceUrl: "https://www.baidu.com/s?wd=%E6%AD%A6%E6%B1%89%E7%BE%8E%E6%B1%89%E8%BE%B0%E7%A7%91%E6%8A%80%20%E4%BA%9A%E9%A9%AC%E9%80%8A%E8%BF%90%E8%90%A5",
    extraUrl: "",
    fit: "适合作为小而美备选，先判断是否有成熟店铺和带教。",
    evidence: [
      "公开搜索与武汉亚马逊运营招聘关键词相关。",
      "初级岗位常见工作包括 Listing、产品上架、广告和活动协助。",
      "你的作品集能弥补真实 Amazon 工作年限不足。"
    ],
    risks: "问清底薪、绩效、培训周期和是否有老运营带。",
    tags: ["Amazon", "运营助理", "小而美", "需二次确认"],
    pitch: "我已做完整 Amazon 模拟运营链路，能快速理解 Listing SEO、PPC 复盘和库存风险。"
  },
  {
    id: "fuxin-huizhong",
    name: "武汉孚信惠众信息技术有限公司",
    companyType: "small",
    platform: "multi",
    roleLevel: "assistant",
    district: "武汉",
    role: "跨境电商运营 / 电商运营助理",
    salary: "随实时招聘变化",
    english: "需看岗位是否偏跨境客服",
    englishLevel: 3,
    baseScore: 76,
    dataFit: 4,
    amazonFit: 3,
    stableFit: 2,
    sourceLabel: "招聘平台搜索入口",
    sourceUrl: "https://www.baidu.com/s?wd=%E6%AD%A6%E6%B1%89%E5%AD%9A%E4%BF%A1%E6%83%A0%E4%BC%97%E4%BF%A1%E6%81%AF%E6%8A%80%E6%9C%AF%20%E8%B7%A8%E5%A2%83%E7%94%B5%E5%95%86",
    extraUrl: "",
    fit: "如果岗位偏数据整理、店铺维护、推广复盘，你的履历能接住。",
    evidence: [
      "公开搜索与武汉跨境电商运营相关。",
      "信息技术类公司可能存在平台运营、数据运营、客服运营混合岗位。",
      "你的 Excel、Power BI、漏斗分析能力可作为差异化。"
    ],
    risks: "重点排除纯客服、销售邀约或电话开发。",
    tags: ["多平台", "数据复盘", "四级可试", "需二次确认"],
    pitch: "我可以承担运营日报/周报、商品数据整理、低效 SKU 排查和广告效果复盘。"
  },
  {
    id: "kefeite",
    name: "武汉柯飞特信息技术有限公司",
    companyType: "small",
    platform: "multi",
    roleLevel: "assistant",
    district: "武汉",
    role: "跨境电商运营 / 店铺运营助理",
    salary: "随实时招聘变化",
    english: "需确认是否为基础英文",
    englishLevel: 3,
    baseScore: 75,
    dataFit: 3,
    amazonFit: 3,
    stableFit: 2,
    sourceLabel: "招聘平台搜索入口",
    sourceUrl: "https://www.baidu.com/s?wd=%E6%AD%A6%E6%B1%89%E6%9F%AF%E9%A3%9E%E7%89%B9%E4%BF%A1%E6%81%AF%E6%8A%80%E6%9C%AF%20%E8%B7%A8%E5%A2%83%E7%94%B5%E5%95%86",
    extraUrl: "",
    fit: "适合作为每日搜索名单里的普通目标，先看 JD 动作是否和你的运营表格匹配。",
    evidence: [
      "公开搜索与武汉跨境运营、亚马逊运营关键词相关。",
      "如果岗位包括上架、优化、活动和数据复盘，可以投。",
      "你的跨境作品集能证明你不是零认知转岗。"
    ],
    risks: "未核验最新在招，使用搜索入口确认。",
    tags: ["跨境运营", "店铺运营", "需二次确认"],
    pitch: "我能从商品维护、Listing 字段检查、活动复盘和基础库存表做起。"
  },
  {
    id: "yifeng-tech",
    name: "武汉羿风科技有限公司",
    companyType: "small",
    platform: "amazon",
    roleLevel: "product",
    district: "武汉",
    role: "亚马逊产品开发 / 选品助理",
    salary: "随实时招聘变化",
    english: "产品开发岗可能要求英文资料检索",
    englishLevel: 4,
    baseScore: 68,
    dataFit: 4,
    amazonFit: 4,
    stableFit: 2,
    sourceLabel: "招聘平台搜索入口",
    sourceUrl: "https://www.baidu.com/s?wd=%E6%AD%A6%E6%B1%89%E7%BE%BF%E9%A3%8E%E7%A7%91%E6%8A%80%20%E4%BA%9A%E9%A9%AC%E9%80%8A%20%E4%BA%A7%E5%93%81%E5%BC%80%E5%8F%91",
    extraUrl: "",
    fit: "你的 30 个竞品 ASIN、价格带、Review、关键词拆解能匹配选品助理。",
    evidence: [
      "公开搜索与亚马逊产品开发、武汉关键词相关。",
      "选品岗会看市场研究和竞品分析能力。",
      "你的作品集有类目研究和核心 SKU 重写案例。"
    ],
    risks: "英语和经验要求可能偏高，不作为第一主投。",
    tags: ["产品开发", "Amazon", "英语偏高", "备选"],
    pitch: "我可以展示 Home Storage 类目选品表和竞品 ASIN 拆解，说明我会做新品前期调研。"
  },
  {
    id: "jingwei-amazon",
    name: "京韦互通 / 武汉相关岗位",
    companyType: "medium",
    platform: "amazon",
    roleLevel: "assistant",
    district: "武汉",
    role: "Amazon运营助理 / 跨境电商运营",
    salary: "随实时招聘变化",
    english: "需看具体岗位，通常需基础英文",
    englishLevel: 3,
    baseScore: 74,
    dataFit: 4,
    amazonFit: 4,
    stableFit: 3,
    sourceLabel: "招聘平台搜索入口",
    sourceUrl: "https://www.baidu.com/s?wd=%E4%BA%AC%E9%9F%A6%E4%BA%92%E9%80%9A%20%E6%AD%A6%E6%B1%89%20Amazon%E8%BF%90%E8%90%A5%E5%8A%A9%E7%90%86",
    extraUrl: "",
    fit: "适合作为中型团队备选，看看是否有标准化培训和成熟运营 SOP。",
    evidence: [
      "公开搜索中出现 Amazon 运营助理相关线索。",
      "中型团队通常更看重执行稳定和表格复盘。",
      "你的投放复盘和销售周报能力可迁移。"
    ],
    risks: "公司/岗位地域需实时核验，避免投到非武汉岗位。",
    tags: ["Amazon", "中型团队", "四级可试", "需二次确认"],
    pitch: "我可以用运营复盘表说明自己会根据 CTR、CVR、ACOS、ROAS 调整运营动作。"
  },
  {
    id: "hanzheng-resource",
    name: "汉正街跨境电商资源中心相关企业",
    companyType: "state",
    platform: "ecosystem",
    roleLevel: "ecosystem",
    district: "汉正街/硚口",
    role: "商家运营 / 活动运营 / 直播与平台运营",
    salary: "需按入驻企业确认",
    english: "通常低于外贸业务岗",
    englishLevel: 1,
    baseScore: 77,
    dataFit: 3,
    amazonFit: 2,
    stableFit: 4,
    sourceLabel: "产业生态搜索入口",
    sourceUrl: "https://www.baidu.com/s?wd=%E6%B1%89%E6%AD%A3%E8%A1%97%20%E8%B7%A8%E5%A2%83%E7%94%B5%E5%95%86%20%E8%B5%84%E6%BA%90%E4%B8%AD%E5%BF%83%20%E6%8B%9B%E8%81%98",
    extraUrl: "",
    fit: "不是单一公司，但适合你找武汉本地小而美出海商家和运营入口。",
    evidence: [
      "汉正街跨境电商生态有本地商户出海和资源中心相关公开报道。",
      "更容易出现低英语、执行型运营和活动运营岗位。",
      "你的商品运营和活动复盘能力比纯 Amazon 年限更好讲。"
    ],
    risks: "需要主动加公众号、参加活动、问入驻企业名单。",
    tags: ["园区生态", "低英语", "小而美入口", "主动挖掘"],
    pitch: "我可以从商品运营、活动排期、平台资料整理和销售周报支持入手。"
  },
  {
    id: "wuhan-free-trade-park",
    name: "武汉经开综保区跨境电商产业园相关企业",
    companyType: "state",
    platform: "ecosystem",
    roleLevel: "ecosystem",
    district: "经开/综保区",
    role: "园区运营 / 仓储运营 / 商家服务 / 供应链支持",
    salary: "需按园区和入驻企业确认",
    english: "低到中，偏运营协调",
    englishLevel: 2,
    baseScore: 76,
    dataFit: 3,
    amazonFit: 2,
    stableFit: 4,
    sourceLabel: "产业生态搜索入口",
    sourceUrl: "https://www.baidu.com/s?wd=%E6%AD%A6%E6%B1%89%E7%BB%8F%E5%BC%80%E7%BB%BC%E4%BF%9D%E5%8C%BA%20%E8%B7%A8%E5%A2%83%E7%94%B5%E5%95%86%E4%BA%A7%E4%B8%9A%E5%9B%AD%20%E6%8B%9B%E8%81%98",
    extraUrl: "",
    fit: "如果你想要更稳一点，可以盯园区、保税仓、供应链和商家服务岗位。",
    evidence: [
      "武汉经开综保区跨境电商产业园有公开建设和产业报道。",
      "园区相关岗位可能更偏流程、表格、对接和执行。",
      "你的库存周报和补货风险判断可迁移。"
    ],
    risks: "岗位名称可能不是跨境运营，要用 JD 快速判断功能筛。",
    tags: ["园区生态", "供应链", "稳定优先", "低英语"],
    pitch: "我做过 FBA SKU 可售天数、补货点、滞销和毛利率复盘，适合做库存与供应链运营支持。"
  },
  {
    id: "tiktok-shop-pool",
    name: "武汉 TikTok Shop / Temu / SHEIN 运营岗位池",
    companyType: "medium",
    platform: "multi",
    roleLevel: "assistant",
    district: "武汉",
    role: "跨境平台运营助理 / 商品运营 / 活动运营",
    salary: "随具体公司变化",
    english: "通常低于外贸业务，高于国内电商",
    englishLevel: 2,
    baseScore: 78,
    dataFit: 4,
    amazonFit: 1,
    stableFit: 2,
    sourceLabel: "实时搜索入口",
    sourceUrl: "https://www.zhipin.com/web/geek/job?query=%E6%AD%A6%E6%B1%89%20TikTok%20Shop%20%E8%BF%90%E8%90%A5%20Temu%20SHEIN&city=101200100",
    extraUrl: "",
    fit: "如果 Amazon 回复少，可以用你的活动运营和商品运营能力切到新平台。",
    evidence: [
      "TikTok Shop、Temu、SHEIN 等岗位更重商品、活动和节奏执行。",
      "你的 Shopee/Lazada 活动池和商品复盘可迁移。",
      "英语要求通常比传统外贸业务员更可控。"
    ],
    risks: "平台规则变化快，要问清是否偏客服、达人BD或纯销售。",
    tags: ["新平台", "活动运营", "低英语", "岗位池"],
    pitch: "我做过活动池、优惠券、组合装、限时折扣和点击率复盘，可以快速迁移到 TikTok Shop/Temu 商品运营。"
  },
  {
    id: "amazon-search-pool",
    name: "武汉 Amazon 运营实时岗位池",
    companyType: "medium",
    platform: "amazon",
    roleLevel: "assistant",
    district: "武汉",
    role: "亚马逊运营助理 / Amazon运营专员 / Listing运营",
    salary: "随具体公司变化",
    english: "从低到高都有，优先筛低英语和助理岗",
    englishLevel: 2,
    baseScore: 83,
    dataFit: 4,
    amazonFit: 5,
    stableFit: 2,
    sourceLabel: "实时搜索入口",
    sourceUrl: "https://www.zhipin.com/web/geek/job?query=%E6%AD%A6%E6%B1%89%20%E4%BA%9A%E9%A9%AC%E9%80%8A%E8%BF%90%E8%90%A5%20%E8%BF%90%E8%90%A5%E5%8A%A9%E7%90%86&city=101200100",
    extraUrl: "",
    fit: "这是你每天最该刷的主线入口，不绑定单个过期详情页。",
    evidence: [
      "关键词直接对应你的简历主线。",
      "用实时搜索比保存单个岗位详情页更不容易失效。",
      "可用 JD 快速判断功能排除高英语、纯客服和纯销售。"
    ],
    risks: "同一公司可能多平台重复发布，注意去重。",
    tags: ["Amazon", "实时岗位池", "运营助理", "低英语优先"],
    pitch: "我的投递关键词是 Amazon Listing SEO、PPC 复盘、FBA 库存周报、SKU 维护和销售周报。"
  },
  {
    id: "sea-search-pool",
    name: "武汉 Shopee/Lazada 运营实时岗位池",
    companyType: "medium",
    platform: "sea",
    roleLevel: "assistant",
    district: "武汉",
    role: "Shopee运营助理 / Lazada运营 / 东南亚平台运营",
    salary: "随具体公司变化",
    english: "低到中，东南亚平台岗位相对友好",
    englishLevel: 2,
    baseScore: 82,
    dataFit: 3,
    amazonFit: 1,
    stableFit: 2,
    sourceLabel: "实时搜索入口",
    sourceUrl: "https://www.zhipin.com/web/geek/job?query=%E6%AD%A6%E6%B1%89%20Shopee%20Lazada%20%E8%BF%90%E8%90%A5%E5%8A%A9%E7%90%86&city=101200100",
    extraUrl: "",
    fit: "比 Amazon 更容易找到低英语、执行型岗位，与你的活动运营作品匹配。",
    evidence: [
      "你的简历有 Shopee/Lazada 20 个商品活动池案例。",
      "东南亚平台运营常见工作包括上架、活动报名、页面优化、客服协同。",
      "适合作为第一批并行投递方向。"
    ],
    risks: "问清是否需要小语种或夜班客服。",
    tags: ["Shopee/Lazada", "实时岗位池", "低英语", "活动运营"],
    pitch: "我做过 Shopee/Lazada 活动池和主推 SKU 活动节奏，可以先承担上架、报名、页面优化和基础复盘。"
  },
  {
    id: "domestic-brand-pool",
    name: "武汉本地商品运营/投放复盘岗位池",
    companyType: "brand",
    platform: "multi",
    roleLevel: "assistant",
    district: "武汉",
    role: "商品运营 / 电商运营助理 / 投放复盘",
    salary: "随具体公司变化",
    english: "低",
    englishLevel: 1,
    baseScore: 80,
    dataFit: 5,
    amazonFit: 1,
    stableFit: 2,
    sourceLabel: "实时搜索入口",
    sourceUrl: "https://www.zhipin.com/web/geek/job?query=%E6%AD%A6%E6%B1%89%20%E5%95%86%E5%93%81%E8%BF%90%E8%90%A5%20%E6%8A%95%E6%94%BE%E5%A4%8D%E7%9B%98%20%E7%94%B5%E5%95%86%E8%BF%90%E8%90%A5&city=101200100",
    extraUrl: "",
    fit: "这是低英语兜底池，能最大化复用你在武汉狼群健康的真实工作经历。",
    evidence: [
      "你有商品信息维护、详情页承接、CTR、GMV、ROI 的真实经历。",
      "国内商品运营岗位英语门槛最低。",
      "可作为先入行运营、后续转跨境的稳妥路径。"
    ],
    risks: "不是跨境主线，投递时要控制比例，不要完全偏离 Amazon 目标。",
    tags: ["兜底", "商品运营", "低英语", "投放复盘"],
    pitch: "我能快速接手 SKU 维护、商品页优化、投放周报和低效商品排查。"
  },
  {
    id: "campus-intern-pool",
    name: "武汉应届/实习运营岗位池",
    companyType: "medium",
    platform: "multi",
    roleLevel: "intern",
    district: "武汉",
    role: "运营实习生 / 电商运营助理 / 跨境运营实习",
    salary: "随具体公司变化",
    english: "低到中",
    englishLevel: 2,
    baseScore: 79,
    dataFit: 4,
    amazonFit: 3,
    stableFit: 2,
    sourceLabel: "实时搜索入口",
    sourceUrl: "https://www.shixiseng.com/interns?keyword=%E6%AD%A6%E6%B1%89%20%E8%B7%A8%E5%A2%83%E7%94%B5%E5%95%86%E8%BF%90%E8%90%A5",
    extraUrl: "",
    fit: "如果正式岗卡经验，实习/见习入口更容易打开面试。",
    evidence: [
      "你的毕业时间和作品集适合投运营助理/实习生。",
      "实习岗更看重执行力、表格能力和学习速度。",
      "可以用作品集证明你能独立做运营拆解。"
    ],
    risks: "确认是否有转正机会、薪资和通勤成本。",
    tags: ["实习", "应届", "运营助理", "低英语"],
    pitch: "我可以从数据整理、商品上架、活动报名和周报复盘做起，已有完整跨境运营作品集。"
  }
];

const directLinkOverrides = {
  "senhe-amazon": {
    profileUrl: "https://www.91wllm.cn/job/view/id/2338134",
    jobUrl: "https://www.91wllm.cn/job/view/id/2338134",
    activeStatus: "在招线索：亚马逊运营专员/实习生",
    activeTone: "active"
  },
  "hanrui-sea": {
    profileUrl: "https://www.10100.com/job/10046",
    jobUrl: "https://www.10100.com/job/10046",
    activeStatus: "在招线索：Shopee/Lazada运营",
    activeTone: "active"
  },
  "yibai-wh": {
    profileUrl: "https://www.zhaopin.com/companydetail/CC375970138.htm",
    jobUrl: "https://www.zhaopin.com/companydetail/CC375970138.htm",
    activeStatus: "企业页：可查看在招职位",
    activeTone: "active"
  },
  "laizanbao": {
    profileUrl: "https://www.wondercv.com/jobs/eqTQc0Y.html",
    jobUrl: "https://www.wondercv.com/jobs/eqTQc0Y.html",
    activeStatus: "在招线索：Shopee/Lazada运营助理",
    activeTone: "active"
  },
  "changmao-park": {
    profileUrl: "https://whcmsc.com/about/",
    jobUrl: "",
    activeStatus: "官网直达：未见公开社招页",
    activeTone: "watch"
  },
  "yiyoubei-dtc": {
    profileUrl: "https://www.jobeast.com/companyhome/697444.html",
    jobUrl: "https://www.jobeast.com/companyhome/697444.html",
    activeStatus: "企业页：可查看岗位动态",
    activeTone: "watch"
  },
  "baomao-product": {
    profileUrl: "https://www.jobeast.com/jobs/273456.html",
    jobUrl: "https://www.jobeast.com/jobs/273456.html",
    activeStatus: "在招线索：跨境电商产品开发",
    activeTone: "active"
  },
  "meishen-product": {
    profileUrl: "https://www.liepin.com/job/1965382741.shtml",
    jobUrl: "https://www.liepin.com/job/1965382741.shtml",
    activeStatus: "在招线索：产品开发，经验要求偏高",
    activeTone: "watch"
  },
  "sitoer-amazon": {
    profileUrl: "https://www.zhaopin.com/jobdetail/CC672507520J40704688606.htm",
    jobUrl: "https://www.zhaopin.com/jobdetail/CC672507520J40704688606.htm",
    activeStatus: "在招线索：亚马逊运营助理",
    activeTone: "active"
  },
  "yafei-tech": {
    profileUrl: "https://m.liepin.com/company/7983269/",
    jobUrl: "https://www.zhaopin.com/companydetail/CC230083683.htm",
    activeStatus: "企业页：猎聘/智联可看武汉岗位",
    activeTone: "active"
  },
  "jingwei-amazon": {
    profileUrl: "https://d2j6e5.gllue.com/portal/jobs/list",
    jobUrl: "https://d2j6e5.gllue.com/portal/jobs/list",
    activeStatus: "官方招聘页：可筛运营/跨境岗位",
    activeTone: "active"
  }
};

const directCompanies = [
  {
    id: "zhongjiezekang",
    name: "武汉中杰泽康科技有限公司",
    companyType: "small",
    platform: "amazon",
    roleLevel: "assistant",
    district: "武汉",
    role: "亚马逊运营 / 运营助理 / 产品开发",
    salary: "以企业页实时显示为准",
    english: "岗位页多为基础英文读写，需逐条确认",
    englishLevel: 2,
    baseScore: 84,
    dataFit: 4,
    amazonFit: 4,
    stableFit: 2,
    sourceLabel: "BOSS企业页",
    sourceUrl: "https://www.zhipin.com/gongsi/0c6bd5fc8428d4bb1XB63tS8E1BU.html",
    profileUrl: "https://www.zhipin.com/gongsi/0c6bd5fc8428d4bb1XB63tS8E1BU.html",
    jobUrl: "https://www.zhipin.com/gongsi/0c6bd5fc8428d4bb1XB63tS8E1BU.html",
    activeStatus: "企业页：BOSS显示多个在招岗位",
    activeTone: "active",
    fit: "亚马逊运营方向明确，适合用你的 Listing、PPC 和 SKU 复盘作品集投递。",
    evidence: [
      "BOSS企业页可直达，页面显示公司和在招岗位。",
      "岗位方向与亚马逊运营、选品、店铺执行相关。",
      "你的商品运营和 Amazon 作品集可以直接作为面试材料。"
    ],
    risks: "逐条确认岗位是否在武汉、是否偏销售或客服。",
    tags: ["Amazon", "企业页直达", "在招", "低英语优先"],
    pitch: "我有 Amazon Listing SEO、PPC 复盘、FBA 库存周报和 40+SKU 商品维护经历，能从运营助理做起。"
  },
  {
    id: "sizhuangge",
    name: "武汉斯状格商贸有限公司",
    companyType: "small",
    platform: "amazon",
    roleLevel: "assistant",
    district: "武汉",
    role: "亚马逊运营专员 / 跨境电商运营",
    salary: "以智联实时显示为准",
    english: "通常需要基础英文资料处理",
    englishLevel: 2,
    baseScore: 82,
    dataFit: 3,
    amazonFit: 4,
    stableFit: 2,
    sourceLabel: "智联岗位页",
    sourceUrl: "https://www.zhaopin.com/jobdetail/CCL1387791180J40701557913.htm",
    profileUrl: "https://www.zhaopin.com/jobdetail/CCL1387791180J40701557913.htm",
    jobUrl: "https://www.zhaopin.com/jobdetail/CCL1387791180J40701557913.htm",
    activeStatus: "在招线索：亚马逊运营专员",
    activeTone: "active",
    fit: "岗位动作偏店铺运营，与你的商品上架、页面优化和复盘表匹配。",
    evidence: [
      "智联岗位页可直达查看企业与岗位。",
      "岗位关键词包含亚马逊运营和跨境电商。",
      "适合应届/初级运营讲执行力和数据意识。"
    ],
    risks: "确认底薪、提成、工作时间和是否有带教。",
    tags: ["Amazon", "岗位页直达", "在招", "运营专员"],
    pitch: "我能做 SKU 信息维护、标题/卖点优化、PPC 基础复盘和销售周报。"
  },
  {
    id: "xingshang-ecom",
    name: "武汉星商电子商务中心",
    companyType: "small",
    platform: "amazon",
    roleLevel: "assistant",
    district: "武汉",
    role: "亚马逊运营助理 / 电商运营",
    salary: "以就业网岗位页为准",
    english: "基础英文，需核验",
    englishLevel: 2,
    baseScore: 78,
    dataFit: 3,
    amazonFit: 4,
    stableFit: 1,
    sourceLabel: "就业网岗位页",
    sourceUrl: "https://www.91wllm.com/job/view/id/2402433",
    profileUrl: "https://www.91wllm.com/job/view/id/2402433",
    jobUrl: "https://www.91wllm.com/job/view/id/2402433",
    activeStatus: "在招线索：亚马逊运营助理",
    activeTone: "active",
    fit: "小团队/个人商户属性更强，适合作为练手面试或低门槛入口。",
    evidence: [
      "就业网岗位页可直达查看岗位。",
      "岗位方向与亚马逊运营助理相关。",
      "你的作品集能补足真实平台年限。"
    ],
    risks: "确认主体规模、社保、岗位稳定性和是否长期招人。",
    tags: ["Amazon", "助理", "低门槛", "需谨慎"],
    pitch: "我可以先承担商品上架、关键词整理、竞品记录和基础周报。"
  },
  {
    id: "jimiaoyun",
    name: "吉喵云（武汉）数字科技有限公司",
    companyType: "small",
    platform: "multi",
    roleLevel: "assistant",
    district: "武汉",
    role: "电商客服/运营支持 / 跨境相关岗位",
    salary: "以岗位页实时显示为准",
    english: "客服岗可能需要基础英文或平台话术",
    englishLevel: 2,
    baseScore: 70,
    dataFit: 2,
    amazonFit: 1,
    stableFit: 2,
    sourceLabel: "岗位页",
    sourceUrl: "https://cn.bebee.com/job/648209753bdd4e6480122fb1a63984df",
    profileUrl: "https://cn.bebee.com/job/648209753bdd4e6480122fb1a63984df",
    jobUrl: "https://cn.bebee.com/job/648209753bdd4e6480122fb1a63984df",
    activeStatus: "在招线索：岗位页可直达，偏客服需筛",
    activeTone: "watch",
    fit: "可作为运营支持备选，不建议优先于 Amazon/Shopee 主线岗位。",
    evidence: [
      "岗位页可直达查看企业和岗位。",
      "与电商平台支持、客服或运营辅助相关。",
      "适合用低英语和执行经验兜底。"
    ],
    risks: "可能偏客服，投递前用 JD 快速判断排除纯客服。",
    tags: ["备选", "运营支持", "低英语", "需筛选"],
    pitch: "我有商品运营和数据复盘经验，希望优先承担运营支持而不是纯客服。"
  },
  {
    id: "daisite",
    name: "武汉戴斯特电子商务有限公司",
    companyType: "small",
    platform: "amazon",
    roleLevel: "assistant",
    district: "武汉",
    role: "亚马逊运营 / 跨境电商运营",
    salary: "以岗位页实时显示为准",
    english: "基础英文，需核验",
    englishLevel: 2,
    baseScore: 76,
    dataFit: 3,
    amazonFit: 3,
    stableFit: 2,
    sourceLabel: "58岗位页",
    sourceUrl: "https://wh.58.com/dianzishangwuyy/60878361197625x.shtml",
    profileUrl: "https://wh.58.com/dianzishangwuyy/60878361197625x.shtml",
    jobUrl: "https://wh.58.com/dianzishangwuyy/60878361197625x.shtml",
    activeStatus: "在招线索：跨境/亚马逊运营",
    activeTone: "active",
    fit: "适合做小团队运营入口，但要重点核验公司质量。",
    evidence: [
      "岗位页可直达查看企业和岗位。",
      "方向与亚马逊/跨境电商运营相关。",
      "你的 SKU 和投放复盘经历可迁移。"
    ],
    risks: "58岗位质量差异大，要确认合同主体、社保、工作时间和实际职责。",
    tags: ["Amazon", "岗位页直达", "在招", "需谨慎"],
    pitch: "我能做商品维护、页面优化、广告复盘和库存表，想从平台运营切入。"
  },
  {
    id: "svakom",
    name: "SVAKOM 司沃康",
    companyType: "brand",
    platform: "multi",
    roleLevel: "assistant",
    district: "武汉/多地",
    role: "亚马逊运营 / 跨境电商运营",
    salary: "以公司招聘页实时显示为准",
    english: "品牌出海岗位，英语要求可能中等",
    englishLevel: 3,
    baseScore: 72,
    dataFit: 4,
    amazonFit: 4,
    stableFit: 3,
    sourceLabel: "公司岗位聚合页",
    sourceUrl: "https://www.jobui.com/company/2381076/jobs/",
    profileUrl: "https://www.jobui.com/company/2381076/jobs/",
    jobUrl: "https://www.jobui.com/company/2381076/jobs/",
    activeStatus: "公司岗位页：可查看多地在招",
    activeTone: "watch",
    fit: "品牌型跨境公司，适合作为提升目标；武汉岗位需逐条确认。",
    evidence: [
      "公司岗位页可直达查看在招职位。",
      "岗位包含亚马逊运营/跨境电商运营方向。",
      "品牌出海更重商品、广告和数据复盘。"
    ],
    risks: "多地招聘，确认是否武汉岗位；英语要求可能高于小团队。",
    tags: ["品牌出海", "Amazon", "岗位页直达", "四级可试"],
    pitch: "我有 Amazon 选品、Listing、PPC 和库存复盘作品，适合先投运营助理或初级运营。"
  }
];

const verifiedIds = new Set(Object.keys(directLinkOverrides));
const companyPool = companies
  .concat(extraCompanies)
  .filter((company) => verifiedIds.has(company.id))
  .map((company) => ({ ...company, ...directLinkOverrides[company.id] }))
  .concat(directCompanies);

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

  return companyPool
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
      const profileUrl = getCompanyProfileUrl(company);
      const profileLabel = getCompanyProfileLabel(company);
      const jobLink = company.jobUrl
        ? `<a class="job-direct-link" href="${company.jobUrl}" target="_blank" rel="noreferrer">在招岗位</a>`
        : `<span class="job-direct-link disabled">暂无岗位页</span>`;
      const extra = company.extraUrl
        ? `<a class="source-ref" href="${company.extraUrl}" target="_blank" rel="noreferrer">参考</a>`
        : "";
      const sourceRef =
        company.sourceUrl && company.sourceUrl !== profileUrl
          ? `<a class="source-ref" href="${company.sourceUrl}" target="_blank" rel="noreferrer">参考</a>`
          : "";
      return `
        <article class="company-card" data-id="${company.id}">
          <div class="card-top">
            <div>
              <h3><a class="company-name-link" href="${profileUrl}" target="_blank" rel="noreferrer">${company.name}</a></h3>
              <div class="meta">${company.district} · ${typeLabels[company.companyType]} · ${platformLabels[company.platform]}</div>
              <div class="active-status ${company.activeTone || "watch"}">${company.activeStatus || "直达页待核验"}</div>
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
              <a class="profile-link" href="${profileUrl}" target="_blank" rel="noreferrer">${profileLabel}</a>
              ${jobLink}
              ${sourceRef}
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

function makeSearchUrl(platform, query) {
  const encoded = encodeURIComponent(query);
  if (platform === "boss") {
    return `https://www.zhipin.com/web/geek/job?query=${encoded}&city=101200100`;
  }
  if (platform === "zhaopin") {
    return `https://www.zhaopin.com/sou/jl736/kw${encoded}`;
  }
  if (platform === "liepin") {
    return `https://www.liepin.com/zhaopin/?city=170020&dq=170020&key=${encoded}`;
  }
  return `https://www.baidu.com/s?wd=${encoded}`;
}

function getCompanyProfileUrl(company) {
  return company.profileUrl || company.jobUrl || company.sourceUrl;
}

function getCompanyProfileLabel(company) {
  return company.jobUrl ? "企业直达" : "企业官网";
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
      company.jobUrl || company.profileUrl || company.sourceUrl
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

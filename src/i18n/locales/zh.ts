// Metatron.ad 中文（简体）词典 — 与 ru.ts 结构完全一致

import type { Dictionary } from "./ru";

export const zh: Dictionary = {
  brand: {
    name: "Metatron.ad",
    tagline: "知识的神圣几何",
    description:
      "聚焦科技、生物能源及中哈合作桥梁的科学分析媒体",
  },
  nav: {
    home: "首页",
    news: "资讯",
    science: "科学",
    bridge: "中哈桥梁",
    services: "服务",
    forecasts: "预测",
    about: "关于媒体",
    contact: "联系我们",
    search: "搜索",
  },
  hero: {
    badge: "已注册网络媒体",
    title: "Metatron",
    titleAccent: ".ad",
    subtitle:
      "一家立足科技、生物能源及中哈国际合作的科普与分析媒体。我们发布文章、分析及 AI 预测。",
    ctaPrimary: "阅读文章",
    ctaSecondary: "了解服务",
    stats: [
      { label: "语言", value: "4" },
      { label: "文章", value: "10+" },
      { label: "国家", value: "2" },
      { label: "主题", value: "6" },
    ],
  },
  categories: {
    title: "主题栏目",
    all: "全部",
    sciPop: "科普",
    sciTech: "科技",
    sulametrix: "Sulametrix.ai",
    bioenergy: "生物能源",
    bridge: "中哈桥梁",
    analytics: "分析",
  },
  news: {
    title: "最新发布",
    subtitle: "四种语言的文章与分析 — 请选择栏目",
    readMore: "阅读更多",
    readArticle: "阅读文章",
    minRead: "分钟阅读",
    featured: "头条",
    latest: "最新",
    popular: "热门",
    noResults: "该栏目暂无文章",
    by: "作者",
    back: "返回列表",
    share: "分享",
    relatedArticles: "相关文章",
    publishedOn: "发布于",
  },
  bridge: {
    badge: "国际桥梁",
    title: "连接哈萨克斯坦与中国的桥梁",
    subtitle:
      "我们连接两国的商业生态：帮助哈萨克斯坦企业进入中国市场，协助中国企业利用税收优惠和特殊经济区在哈萨克斯坦落地发展。",
    kzToChina: {
      title: "进入中国",
      desc: "为哈萨克斯坦企业进入中国市场提供全程支持",
      points: [
        "在中国注册代表处及公司",
        "为您所在行业匹配中国特殊经济区",
        "寻找合作伙伴与供应商",
        "交易支持及文件翻译",
      ],
    },
    chinaToKz: {
      title: "进入哈萨克斯坦",
      desc: "协助中国企业完成在哈萨克斯坦的注册与发展",
      points: [
        "在特殊经济区和 Astana Hub 注册",
        "税收优惠与减免",
        "本地化与人员招聘",
        "外贸、海关及认证",
      ],
    },
    cta: "洽谈合作",
  },
  services: {
    badge: "商务服务",
    title: "我们能提供什么",
    subtitle:
      "在两国提供全周期商务支持 — 从注册到知识产权保护",
    items: [
      {
        icon: "Building2",
        title: "公司注册",
        desc: "在哈萨克斯坦及中国注册法人实体，包括特殊经济区、Astana Hub 及科技园区",
      },
      {
        icon: "Landmark",
        title: "税收优惠",
        desc: "选择最优司法辖区，在特殊经济区办理优惠及居民身份",
      },
      {
        icon: "ShieldCheck",
        title: "专利与商标",
        desc: "在两国注册发明专利、商标，并保护知识产权",
      },
      {
        icon: "Languages",
        title: "翻译与公证",
        desc: "为商务活动提供专业翻译与文件公证",
      },
      {
        icon: "Handshake",
        title: "寻找合作伙伴",
        desc: "在哈萨克斯坦及中国甄选可靠的合作伙伴、供应商与经销商",
      },
      {
        icon: "Briefcase",
        title: "外贸支持",
        desc: "对外经济活动：海关、认证、物流、外汇管理",
      },
    ],
    kzPrefs: {
      title: "哈萨克斯坦优惠",
      items: [
        { name: "Astana Hub", desc: "国际科技园：0% 企业所得税、简化签证政策" },
        { name: "«阿斯塔纳» SEZ", desc: "最长 49 年免征企业所得税、土地及财产税" },
        { name: "«霍尔果斯» SEZ", desc: "通往中国的门户：享受税收优惠的物流、贸易及制造" },
        { name: "«萨里亚尔卡» SEZ", desc: "位于卡拉干达，提供优惠的冶金与机械制造区" },
      ],
    },
    chinaPrefs: {
      title: "中国优惠",
      items: [
        { name: "深圳 SEZ", desc: "科技之都：对 IT、生物技术及制造业提供优惠" },
        { name: "上海 FTZ", desc: "自由贸易区：简化外资公司注册流程" },
        { name: "海南 FTP", desc: "自由贸易港：对特定行业实行零关税" },
        { name: "虹桥 SEZ", desc: "位于上海的创新园区，面向初创企业及 R&D" },
      ],
    },
    cta: "申请咨询",
  },
  forecasts: {
    badge: "AI 分析",
    title: "基于经济资讯的预测",
    subtitle:
      "我们的 AI 智能体每日分析数千篇经济与金融资讯，为企业和投资者生成概率性预测。部分预测免费开放，深度分析需订阅。",
    free: "免费",
    premium: "高级",
    subscribe: "订阅",
    learnMore: "了解方法学详情",
    sample: [
      {
        title: "亚太地区生物燃料需求动态",
        summary:
          "基于对 1,200+ 篇资讯的分析，预计未来 12 个月亚太地区生物乙醇需求将增长 18–24%。",
        confidence: "82%",
      },
      {
        title: "中国对哈萨克斯坦直接投资流量",
        summary:
          "预计第二至第三季度中国对哈萨克斯坦农业及能源领域的直接投资将增加。关键驱动因素来自 930 个来源。",
        confidence: "76%",
      },
      {
        title: "稀土金属价格",
        summary:
          "模型显示未来 6 个月钕和镨价格将温和上涨，概率为 71%，与中国出口配额政策相关。",
        confidence: "71%",
      },
    ],
    disclaimer:
      "预测具有概率性，不构成个人投资建议。方法学基于对公开来源的分析。",
    pricingTitle: "订阅套餐",
    pricingPlans: [
      {
        name: "Free",
        price: "0 $",
        period: "永久",
        features: ["每周 3 个公开预测", "市场综述", "邮件摘要"],
      },
      {
        name: "Business",
        price: "49 $",
        period: "每月",
        features: ["实时获取所有预测", "行业筛选", "导出 PDF/Excel", "API 访问（100 次/天）"],
        popular: true,
      },
      {
        name: "Enterprise",
        price: "按需定价",
        period: "每年",
        features: ["针对您的需求定制模型", "无限制 API", "专属分析师", "与您的数据集成"],
      },
    ],
  },
  contact: {
    badge: "联系我们",
    title: "反馈",
    subtitle:
      "通过表单、WeChat 或 Telegram 机器人留言 — 所有咨询将发送至编辑部邮箱。我们将在一个工作日内回复。",
    name: "您的姓名",
    namePlaceholder: "张三",
    email: "电子邮箱",
    emailPlaceholder: "you@example.com",
    phone: "电话 / WeChat ID",
    phonePlaceholder: "+7 700 000 00 00",
    subject: "主题",
    subjectPlaceholder: "合作、公司注册、文章投稿...",
    message: "留言内容",
    messagePlaceholder: "请描述您的问题或建议...",
    send: "发送",
    sending: "发送中...",
    success: "消息已发送！我们将在一个工作日内与您联系。",
    error: "发送失败。请重试，或通过 Telegram 联系我们。",
    wechat: "WeChat",
    wechatId: "metatron_ad",
    telegram: "Telegram",
    telegramBot: "@metatron_ad_bot",
    orChannels: "或直接联系我们：",
    responseTime: "1 个工作日内回复",
  },
  about: {
    badge: "关于本媒体",
    title: "关于 Metatron.ad 媒体",
    subtitle:
      "Metatron.ad 是依据《哈萨克斯坦共和国大众媒体法》注册的网络媒体。",
    founder: "创办人",
    founderValue: "Metatron Media 有限责任公司（注册中）",
    chiefEditor: "总编辑",
    chiefEditorValue: "_____________",
    editorialBoard: "编辑委员会",
    editorialBoardValue:
      "编辑团队正在组建中。编辑部联系方式见「联系我们」版块。",
    registration: "媒体注册",
    registrationValue:
      "向哈萨克斯坦共和国授权机构提交的注册申请正在审核中。",
    address: "编辑部地址",
    addressValue: "哈萨克斯坦共和国阿斯塔纳（注册完成后将提供具体地址）",
    mission: "媒体使命",
    missionText:
      "Metatron.ad 致力于普及科学技术，报道生物能源与可持续发展议题，推动哈萨克斯坦与中国之间的商务与文化交流。",
    ethics: "编辑伦理",
    ethicsText:
      "编辑部秉持真实、客观、公正的原则。所有内容在事实核查后发布。作者对发布内容负责。编辑部不发布违反哈萨克斯坦共和国法律的内容。",
  },
  footer: {
    aboutTitle: "关于我们",
    aboutText:
      "Metatron.ad 是聚焦科技、生物能源及中哈合作的科学分析网络媒体。支持四种语言：俄语、哈萨克语、中文、英语。",
    sectionsTitle: "栏目",
    contactsTitle: "联系方式",
    legalTitle: "法律信息",
    legalLinks: [
      "编辑政策",
      "隐私政策",
      "用户协议",
      "Cookie 政策",
    ],
    copyright: "© 2025 Metatron.ad。版权所有。",
    disclaimer:
      "Metatron.ad 网络媒体。媒体注册申请正在哈萨克斯坦共和国授权机构审核中。转载本站内容请注明出处。",
    developedBy: "用 ❤️ 开发",
  },
  common: {
    loading: "加载中...",
    close: "关闭",
    menu: "菜单",
    language: "语言",
    toggleTheme: "主题",
    newsletter: "邮件订阅",
    newsletterPlaceholder: "您的邮箱",
    subscribe: "订阅",
    subscribed: "订阅成功！",
    allRightsReserved: "版权所有",
    privacyPolicy: "隐私政策",
    termsOfUse: "用户协议",
    editorialPolicy: "编辑政策",
    cookiePolicy: "Cookie 政策",
  },
};

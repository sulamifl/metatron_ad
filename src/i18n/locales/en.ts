// English dictionary for Metatron.ad — mirrors the structure of ru.ts

import type { Dictionary } from "./ru";

export const en: Dictionary = {
  brand: {
    name: "Metatron.ad",
    tagline: "Sacred geometry of knowledge",
    description:
      "A scientific and analytical publication about technology, bioenergy, and the bridge between Kazakhstan and China",
  },
  nav: {
    home: "Home",
    news: "News",
    science: "Science",
    bridge: "KZ ↔ China Bridge",
    services: "Services",
    forecasts: "Forecasts",
    about: "About Media",
    contact: "Contacts",
    search: "Search",
  },
  hero: {
    badge: "Registered online media",
    title: "Metatron",
    titleAccent: ".ad",
    subtitle:
      "A popular-science and analytical publication at the intersection of technology, bioenergy, and Kazakhstan–China international cooperation. We publish articles, analytics, and AI-powered forecasts.",
    ctaPrimary: "Read articles",
    ctaSecondary: "Explore services",
    stats: [
      { label: "Languages", value: "4" },
      { label: "Articles", value: "10+" },
      { label: "Countries", value: "2" },
      { label: "Topics", value: "6" },
    ],
  },
  categories: {
    title: "Thematic categories",
    all: "All",
    sciPop: "Popular science",
    sciTech: "Science & technology",
    sulametrix: "Sulametrix.ai",
    bioenergy: "Bioenergy",
    bridge: "KZ–China Bridge",
    analytics: "Analytics",
  },
  news: {
    title: "Latest publications",
    subtitle: "Articles and analytics in four languages — choose a category",
    readMore: "Read more",
    readArticle: "Read article",
    minRead: "min read",
    featured: "Featured",
    latest: "Latest",
    popular: "Popular",
    noResults: "No articles in this category yet",
    by: "By",
    back: "Back to list",
    share: "Share",
    relatedArticles: "Related articles",
    publishedOn: "Published on",
  },
  bridge: {
    badge: "International bridge",
    title: "The bridge between Kazakhstan and China",
    subtitle:
      "We connect the business ecosystems of the two countries: helping Kazakhstani companies enter the Chinese market, and helping Chinese companies expand into Kazakhstan, leveraging tax incentives and special economic zones.",
    kzToChina: {
      title: "Entering China",
      desc: "Supporting Kazakhstani companies entering the PRC market",
      points: [
        "Registration of representative offices and companies in the PRC",
        "Selecting a Chinese SEZ for your industry",
        "Finding partners and suppliers",
        "Deal support and document translation",
      ],
    },
    chinaToKz: {
      title: "Entering Kazakhstan",
      desc: "Helping Chinese companies register and grow in the RK",
      points: [
        "Registration in SEZs and Astana Hub",
        "Tax incentives and benefits",
        "Localization and staff hiring",
        "Foreign trade, customs, and certification",
      ],
    },
    cta: "Discuss cooperation",
  },
  services: {
    badge: "Business services",
    title: "How we help",
    subtitle:
      "Full-cycle business support in both countries — from registration to intellectual property protection",
    items: [
      {
        icon: "Building2",
        title: "Company registration",
        desc: "Registration of legal entities in Kazakhstan and China, including SEZs, Astana Hub, and technology parks",
      },
      {
        icon: "Landmark",
        title: "Tax incentives",
        desc: "Selecting the optimal jurisdiction, arranging benefits and residency in special economic zones",
      },
      {
        icon: "ShieldCheck",
        title: "Patents and trademarks",
        desc: "Registration of invention patents, trademarks, and intellectual property protection in both countries",
      },
      {
        icon: "Languages",
        title: "Translation and legalization",
        desc: "Professional translation and notarization of documents for doing business",
      },
      {
        icon: "Handshake",
        title: "Partner search",
        desc: "Selecting reliable partners, suppliers, and distributors in Kazakhstan and China",
      },
      {
        icon: "Briefcase",
        title: "Foreign trade support",
        desc: "Foreign economic activity: customs, certification, logistics, and currency control",
      },
    ],
    kzPrefs: {
      title: "Incentives in Kazakhstan",
      items: [
        { name: "Astana Hub", desc: "International tech park: 0% corporate tax, simplified visa regime" },
        { name: "SEZ «Astana»", desc: "Exemption from corporate income tax, land and property taxes for up to 49 years" },
        { name: "SEZ «Khorgos»", desc: "Gateway to China: logistics, trade, and manufacturing with tax benefits" },
        { name: "SEZ «Saryarka»", desc: "Metallurgy and machine building in Karaganda with incentives" },
      ],
    },
    chinaPrefs: {
      title: "Incentives in China",
      items: [
        { name: "Shenzhen SEZ", desc: "Technology capital: incentives for IT, biotech, and manufacturing" },
        { name: "Shanghai FTZ", desc: "Free trade zone: simplified registration of foreign companies" },
        { name: "Hainan FTP", desc: "Free port: zero tariffs for targeted industries" },
        { name: "Hongqiao SEZ", desc: "Innovation park in Shanghai for startups and R&D" },
      ],
    },
    cta: "Request a consultation",
  },
  forecasts: {
    badge: "AI analytics",
    title: "Forecasts based on economic news",
    subtitle:
      "Our AI agent analyzes thousands of economic and financial publications daily and generates probabilistic forecasts for businesses and investors. Some forecasts are available for free, while extended analytics requires a subscription.",
    free: "Free",
    premium: "Premium",
    subscribe: "Subscribe",
    learnMore: "Learn more about the methodology",
    sample: [
      {
        title: "Biofuel demand dynamics in the Asia-Pacific region",
        summary:
          "Bioethanol demand in the Asia-Pacific region is forecast to grow by 18–24% over the next 12 months, based on an analysis of 1,200+ publications.",
        confidence: "82%",
      },
      {
        title: "PRC → Kazakhstan FDI flows",
        summary:
          "Chinese FDI in the agro-industrial and energy sectors of the RK is expected to increase in Q2–Q3. Key drivers were identified across 930 sources.",
        confidence: "76%",
      },
      {
        title: "Rare earth metal prices",
        summary:
          "The model indicates a moderate rise in neodymium and praseodymium prices over the next 6 months with 71% probability, correlating with PRC export quota policy.",
        confidence: "71%",
      },
    ],
    disclaimer:
      "Forecasts are probabilistic in nature and do not constitute individual investment advice. The methodology is based on the analysis of open sources.",
    pricingTitle: "Subscription plans",
    pricingPlans: [
      {
        name: "Free",
        price: "0 $",
        period: "forever",
        features: ["3 public forecasts per week", "Market summaries", "Email digest"],
      },
      {
        name: "Business",
        price: "49 $",
        period: "per month",
        features: ["All forecasts in real time", "Industry filters", "PDF/Excel export", "API access (100 requests/day)"],
        popular: true,
      },
      {
        name: "Enterprise",
        price: "on request",
        period: "per year",
        features: ["Custom models for your task", "Unlimited API", "Personal analyst", "Integration with your data"],
      },
    ],
  },
  contact: {
    badge: "Contact us",
    title: "Feedback",
    subtitle:
      "Write to us via the form, WeChat, or Telegram bot — all inquiries go to the editorial email. We respond within one business day.",
    name: "Your name",
    namePlaceholder: "John Smith",
    email: "Email",
    emailPlaceholder: "you@example.com",
    phone: "Phone / WeChat ID",
    phonePlaceholder: "+7 700 000 00 00",
    subject: "Subject",
    subjectPlaceholder: "Cooperation, company registration, article...",
    message: "Message",
    messagePlaceholder: "Describe your question or proposal...",
    send: "Send",
    sending: "Sending...",
    success: "Message sent! We'll contact you within one business day.",
    error: "Failed to send. Try again or message us on Telegram.",
    wechat: "WeChat",
    wechatId: "metatron_ad",
    telegram: "Telegram",
    telegramBot: "@metatron_ad_bot",
    orChannels: "Or reach us directly:",
    responseTime: "Response within 1 business day",
  },
  about: {
    badge: "About the publication",
    title: "About Metatron.ad Media",
    subtitle:
      "Metatron.ad is an online publication registered in accordance with the Law of the Republic of Kazakhstan «On Mass Media».",
    founder: "Founder",
    founderValue: "LLP «Metatron Media» (in the process of registration)",
    chiefEditor: "Editor-in-Chief",
    chiefEditorValue: "_____________",
    editorialBoard: "Editorial Board",
    editorialBoardValue:
      "The editorial board is being formed. Contact information for the editorial office is provided in the «Contacts» section.",
    registration: "Media registration",
    registrationValue:
      "An application for registration with the authorized body of the Republic of Kazakhstan is under review.",
    address: "Editorial address",
    addressValue: "Republic of Kazakhstan, Astana (exact address will be specified after registration)",
    mission: "Publication mission",
    missionText:
      "Metatron.ad aims to popularize science and technology, cover bioenergy and sustainable development issues, and foster business and cultural cooperation between Kazakhstan and China.",
    ethics: "Editorial ethics",
    ethicsText:
      "The editorial team adheres to the principles of accuracy, objectivity, and impartiality. Materials are published after fact-checking. The author is responsible for the content of the publication. The editorial team does not publish materials that violate the legislation of the RK.",
  },
  footer: {
    aboutTitle: "About us",
    aboutText:
      "Metatron.ad is a scientific and analytical online publication about technology, bioenergy, and Kazakhstan–China cooperation. Four languages: Russian, Kazakh, Chinese, English.",
    sectionsTitle: "Sections",
    contactsTitle: "Contacts",
    legalTitle: "Legal information",
    legalLinks: [
      "Editorial policy",
      "Privacy policy",
      "Terms of use",
      "Cookie policy",
    ],
    copyright: "© 2025 Metatron.ad. All rights reserved.",
    disclaimer:
      "Online publication Metatron.ad. An application for media registration is under review by the authorized body of the Republic of Kazakhstan. Use of materials is permitted with a reference to the source.",
    developedBy: "Developed with ❤️",
  },
  common: {
    loading: "Loading...",
    close: "Close",
    menu: "Menu",
    language: "Language",
    toggleTheme: "Theme",
    newsletter: "Email newsletter",
    newsletterPlaceholder: "Your email",
    subscribe: "Subscribe",
    subscribed: "You're subscribed!",
    allRightsReserved: "All rights reserved",
    privacyPolicy: "Privacy policy",
    termsOfUse: "Terms of use",
    editorialPolicy: "Editorial policy",
    cookiePolicy: "Cookie policy",
  },
};

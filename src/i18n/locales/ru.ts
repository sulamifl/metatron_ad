// Типы и словарь интерфейса Metatron.ad — 4 языка: RU, KK, ZH, EN
// Русский — основной (определяет ключи)

export type Locale = "ru" | "kk" | "zh" | "en";

export const LOCALES: Locale[] = ["ru", "kk", "zh", "en"];

export const LOCALE_META: Record<Locale, { label: string; flag: string; nativeName: string }> = {
  ru: { label: "RU", flag: "🇷🇺", nativeName: "Русский" },
  kk: { label: "KZ", flag: "🇰🇿", nativeName: "Қазақша" },
  zh: { label: "ZH", flag: "🇨🇳", nativeName: "中文" },
  en: { label: "EN", flag: "🇬🇧", nativeName: "English" },
};

export interface Dictionary {
  brand: {
    name: string;
    tagline: string;
    description: string;
  };
  nav: {
    home: string;
    news: string;
    science: string;
    bridge: string;
    services: string;
    forecasts: string;
    about: string;
    contact: string;
    search: string;
  };
  hero: {
    badge: string;
    title: string;
    titleAccent: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    stats: { label: string; value: string }[];
  };
  categories: {
    title: string;
    all: string;
    sciPop: string;
    sciTech: string;
    sulametrix: string;
    bioenergy: string;
    bridge: string;
    analytics: string;
  };
  news: {
    title: string;
    subtitle: string;
    readMore: string;
    readArticle: string;
    minRead: string;
    featured: string;
    latest: string;
    popular: string;
    noResults: string;
    by: string;
    back: string;
    share: string;
    relatedArticles: string;
    publishedOn: string;
  };
  bridge: {
    badge: string;
    title: string;
    subtitle: string;
    kzToChina: {
      title: string;
      desc: string;
      points: string[];
    };
    chinaToKz: {
      title: string;
      desc: string;
      points: string[];
    };
    cta: string;
  };
  services: {
    badge: string;
    title: string;
    subtitle: string;
    items: { icon: string; title: string; desc: string }[];
    kzPrefs: {
      title: string;
      items: { name: string; desc: string }[];
    };
    chinaPrefs: {
      title: string;
      items: { name: string; desc: string }[];
    };
    cta: string;
  };
  forecasts: {
    badge: string;
    title: string;
    subtitle: string;
    free: string;
    premium: string;
    subscribe: string;
    learnMore: string;
    sample: { title: string; summary: string; confidence: string }[];
    disclaimer: string;
    pricingTitle: string;
    pricingPlans: { name: string; price: string; period: string; features: string[]; popular?: boolean }[];
  };
  contact: {
    badge: string;
    title: string;
    subtitle: string;
    name: string;
    namePlaceholder: string;
    email: string;
    emailPlaceholder: string;
    phone: string;
    phonePlaceholder: string;
    subject: string;
    subjectPlaceholder: string;
    message: string;
    messagePlaceholder: string;
    send: string;
    sending: string;
    success: string;
    error: string;
    wechat: string;
    wechatId: string;
    telegram: string;
    telegramBot: string;
    orChannels: string;
    responseTime: string;
  };
  about: {
    badge: string;
    title: string;
    subtitle: string;
    founder: string;
    founderValue: string;
    chiefEditor: string;
    chiefEditorValue: string;
    editorialBoard: string;
    editorialBoardValue: string;
    registration: string;
    registrationValue: string;
    address: string;
    addressValue: string;
    mission: string;
    missionText: string;
    ethics: string;
    ethicsText: string;
  };
  footer: {
    aboutTitle: string;
    aboutText: string;
    sectionsTitle: string;
    contactsTitle: string;
    legalTitle: string;
    legalLinks: string[];
    copyright: string;
    disclaimer: string;
    developedBy: string;
  };
  common: {
    loading: string;
    close: string;
    menu: string;
    language: string;
    toggleTheme: string;
    newsletter: string;
    newsletterPlaceholder: string;
    subscribe: string;
    subscribed: string;
    allRightsReserved: string;
    privacyPolicy: string;
    termsOfUse: string;
    editorialPolicy: string;
    cookiePolicy: string;
  };
}

export const ru: Dictionary = {
  brand: {
    name: "Metatron.ad",
    tagline: "Сакральная геометрия знаний",
    description:
      "Научно-аналитическое издание о технологиях, биоэнергетике и мосте между Казахстаном и Китаем",
  },
  nav: {
    home: "Главная",
    news: "Новости",
    science: "Наука",
    bridge: "Мост КЗ ↔ Китай",
    services: "Услуги",
    forecasts: "Прогнозы",
    about: "О СМИ",
    contact: "Контакты",
    search: "Поиск",
  },
  hero: {
    badge: "Зарегистрированное интернет-СМИ",
    title: "Metatron",
    titleAccent: ".ad",
    subtitle:
      "Научно-популярное и аналитическое издание на стыке технологий, биоэнергетики и международного сотрудничества Казахстана и Китая. Публикуем статьи, аналитику и ИИ-прогнозы.",
    ctaPrimary: "Читать статьи",
    ctaSecondary: "Узнать об услугах",
    stats: [
      { label: "Языков", value: "4" },
      { label: "Статей", value: "10+" },
      { label: "Стран", value: "2" },
      { label: "Тематик", value: "6" },
    ],
  },
  categories: {
    title: "Тематические рубрики",
    all: "Все",
    sciPop: "Науч-поп",
    sciTech: "Научно-технические",
    sulametrix: "Sulametrix.ai",
    bioenergy: "Биоэнергетика",
    bridge: "Мост КЗ-Китай",
    analytics: "Аналитика",
  },
  news: {
    title: "Свежие публикации",
    subtitle: "Статьи и аналитика на четырёх языках — выбирайте рубрику",
    readMore: "Читать далее",
    readArticle: "Читать статью",
    minRead: "мин чтения",
    featured: "Главное",
    latest: "Свежее",
    popular: "Популярное",
    noResults: "В этой рубрике пока нет статей",
    by: "Автор",
    back: "Назад к списку",
    share: "Поделиться",
    relatedArticles: "Похожие статьи",
    publishedOn: "Опубликовано",
  },
  bridge: {
    badge: "Международный мост",
    title: "Мост между Казахстаном и Китаем",
    subtitle:
      "Мы соединяем деловые экосистемы двух стран: помогаем казахстанским компаниям выйти на рынок Китая, а китайским — развернуть бизнес в Казахстане с использованием налоговых преференций и специальных экономических зон.",
    kzToChina: {
      title: "Выход в Китай",
      desc: "Сопровождение казахстанских компаний при выходе на рынок КНР",
      points: [
        "Регистрация представительств и компаний в КНР",
        "Подбор китайской СЭЗ под вашу отрасль",
        "Поиск партнёров и поставщиков",
        "Сопровождение сделок и перевод документов",
      ],
    },
    chinaToKz: {
      title: "Выход в Казахстан",
      desc: "Помощь китайским компаниям в регистрации и развитии в РК",
      points: [
        "Регистрация в СЭЗ и Астана Хаб",
        "Налоговые преференции и льготы",
        "Локализация и найм персонала",
        "ВЭД, таможня и сертификация",
      ],
    },
    cta: "Обсудить сотрудничество",
  },
  services: {
    badge: "Деловые услуги",
    title: "Чем мы помогаем",
    subtitle:
      "Полный цикл сопровождения бизнеса в обеих странах — от регистрации до защиты интеллектуальной собственности",
    items: [
      {
        icon: "Building2",
        title: "Регистрация компаний",
        desc: "Регистрация юридических лиц в Казахстане и Китае, включая СЭЗ, Астана Хаб и технологические парки",
      },
      {
        icon: "Landmark",
        title: "Налоговые преференции",
        desc: "Подбор оптимальной юрисдикции, оформление льгот и резидентства в специальных экономических зонах",
      },
      {
        icon: "ShieldCheck",
        title: "Патенты и trademark",
        desc: "Регистрация патентов на изобретения, товарных знаков и защита интеллектуальной собственности в обеих странах",
      },
      {
        icon: "Languages",
        title: "Перевод и легализация",
        desc: "Профессиональный перевод и нотариальное заверение документов для ведения бизнеса",
      },
      {
        icon: "Handshake",
        title: "Поиск партнёров",
        desc: "Подбор надёжных партнёров, поставщиков и дистрибьюторов в Казахстане и Китае",
      },
      {
        icon: "Briefcase",
        title: "Сопровождение ВЭД",
        desc: "Внешнеэкономическая деятельность: таможня, сертификация, логистика, валютный контроль",
      },
    ],
    kzPrefs: {
      title: "Преференции в Казахстане",
      items: [
        { name: "Астана Хаб", desc: "Международный технопарк: 0% корпоративного налога, упрощённый визовый режим" },
        { name: "СЭЗ «Астана»", desc: "Освобождение от КПН, земельного и имущественного налогов до 49 лет" },
        { name: "СЭЗ «Хоргос»", desc: "Ворота в Китай: логистика, торговля, производство с налоговыми льготами" },
        { name: "СЭЗ «Сарыарк»", desc: "Металлургия и машиностроение в Караганде с преференциями" },
      ],
    },
    chinaPrefs: {
      title: "Преференции в Китае",
      items: [
        { name: "Шэньчжэнь SEZ", desc: "Технологическая столица: льготы для IT, биотеха и производства" },
        { name: "Шанхай FTZ", desc: "Свободная торговая зона: упрощённая регистрация иностранных компаний" },
        { name: "Хайнань FTP", desc: "Свободный порт: нулевые тарифы для целевых отраслей" },
        { name: "Хунцяо SEZ", desc: "Инновационный парк в Шанхае для стартапов и R&D" },
      ],
    },
    cta: "Запросить консультацию",
  },
  forecasts: {
    badge: "ИИ-аналитика",
    title: "Прогнозы на основе экономических новостей",
    subtitle:
      "Наш ИИ-агент анализирует тысячи экономических и финансовых публикаций ежедневно и формирует вероятностные прогнозы для бизнеса и инвесторов. Часть прогнозов доступна бесплатно, расширенная аналитика — по подписке.",
    free: "Бесплатно",
    premium: "Премиум",
    subscribe: "Оформить подписку",
    learnMore: "Подробнее о методологии",
    sample: [
      {
        title: "Динамика спроса на биотопливо в АТР",
        summary: "Прогнозируется рост спроса на биоэтанол в Азиатско-Тихоокеанском регионе на 18–24% в течение 12 месяцев на основе анализа 1 200+ публикаций.",
        confidence: "82%",
      },
      {
        title: "Поток прямых инвестиций КНР → Казахстан",
        summary: "Ожидается увеличение китайских ПИИ в агропромышленный и энергетический секторы РК во II–III кварталах. Ключевые драйверы выявлены в 930 источниках.",
        confidence: "76%",
      },
      {
        title: "Цены на редкоземельные металлы",
        summary: "Модель указывает на умеренный рост цен на неодим и празеодим в ближайшие 6 месяцев с вероятностью 71%, корреляция с политикой экспортных квот КНР.",
        confidence: "71%",
      },
    ],
    disclaimer:
      "Прогнозы носят вероятностный характер и не являются индивидуальной инвестиционной рекомендацией. Методология основана на анализе открытых источников.",
    pricingTitle: "Тарифы подписки",
    pricingPlans: [
      {
        name: "Free",
        price: "0 $",
        period: "навсегда",
        features: ["3 публичных прогноза в неделю", "Сводка по рынкам", "Email-дайджест"],
      },
      {
        name: "Business",
        price: "49 $",
        period: "в месяц",
        features: ["Все прогнозы в реальном времени", "Отраслевые фильтры", "Экспорт в PDF/Excel", "API-доступ (100 запросов/день)"],
        popular: true,
      },
      {
        name: "Enterprise",
        price: "по запросу",
        period: "в год",
        features: ["Кастомные модели под задачу", "Безлимитный API", "Персональный аналитик", "Интеграция с вашими данными"],
      },
    ],
  },
  contact: {
    badge: "Связаться с нами",
    title: "Обратная связь",
    subtitle:
      "Напишите нам через форму, WeChat или Telegram-бота — все обращения поступают на электронную почту редакции. Мы отвечаем в течение одного рабочего дня.",
    name: "Ваше имя",
    namePlaceholder: "Иван Иванов",
    email: "Электронная почта",
    emailPlaceholder: "you@example.com",
    phone: "Телефон / WeChat ID",
    phonePlaceholder: "+7 700 000 00 00",
    subject: "Тема обращения",
    subjectPlaceholder: "Сотрудничество, регистрация компании, статья...",
    message: "Сообщение",
    messagePlaceholder: "Опишите ваш вопрос или предложение...",
    send: "Отправить",
    sending: "Отправляем...",
    success: "Сообщение отправлено! Мы свяжемся с вами в течение рабочего дня.",
    error: "Не удалось отправить. Попробуйте ещё раз или напишите в Telegram.",
    wechat: "WeChat",
    wechatId: "metatron_ad",
    telegram: "Telegram",
    telegramBot: "@metatron_ad_bot",
    orChannels: "Или напишите напрямую:",
    responseTime: "Ответ в течение 1 рабочего дня",
  },
  about: {
    badge: "О издании",
    title: "О СМИ Metatron.ad",
    subtitle:
      "Metatron.ad — сетевое издание, зарегистрированное в соответствии с Законом Республики Казахстан «О средствах массовой информации».",
    founder: "Учредитель",
    founderValue: "ТОО «Метатрон Медиа» (в процессе регистрации)",
    chiefEditor: "Главный редактор",
    chiefEditorValue: "_____________",
    editorialBoard: "Редакционный совет",
    editorialBoardValue: "Редакционная коллегия формируется. Контактные данные редакции указаны в разделе «Контакты».",
    registration: "Регистрация СМИ",
    registrationValue: "Заявка на регистрацию в уполномоченном органе Республики Казахстан находится на рассмотрении.",
    address: "Адрес редакции",
    addressValue: "Республика Казахстан, г. Астана (точный адрес будет указан после регистрации)",
    mission: "Миссия издания",
    missionText:
      "Metatron.ad ставит целью популяризацию науки и технологий, освещение вопросов биоэнергетики и устойчивого развития, а также содействие деловому и культурному сотрудничеству между Казахстаном и Китаем.",
    ethics: "Редакционная этика",
    ethicsText:
      "Редакция придерживается принципов достоверности, объективности и беспристрастности. Материалы публикуются после проверки фактов. Автор несёт ответственность за содержание публикации. Редакция не публикует материалы, нарушающие законодательство РК.",
  },
  footer: {
    aboutTitle: "О нас",
    aboutText:
      "Metatron.ad — научно-аналитическое сетевое издание о технологиях, биоэнергетике и сотрудничестве Казахстана и Китая. Четыре языка: русский, казахский, китайский, английский.",
    sectionsTitle: "Разделы",
    contactsTitle: "Контакты",
    legalTitle: "Правовая информация",
    legalLinks: [
      "Редакционная политика",
      "Политика конфиденциальности",
      "Пользовательское соглашение",
      "Политика cookies",
    ],
    copyright: "© 2025 Metatron.ad. Все права защищены.",
    disclaimer:
      "Сетевое издание Metatron.ad. Заявка на регистрацию СМИ находится на рассмотрении в уполномоченном органе Республики Казахстан. Использование материалов возможно со ссылкой на источник.",
    developedBy: "Разработано с ❤️",
  },
  common: {
    loading: "Загрузка...",
    close: "Закрыть",
    menu: "Меню",
    language: "Язык",
    toggleTheme: "Тема",
    newsletter: "Email-рассылка",
    newsletterPlaceholder: "Ваш email",
    subscribe: "Подписаться",
    subscribed: "Вы подписаны!",
    allRightsReserved: "Все права защищены",
    privacyPolicy: "Политика конфиденциальности",
    termsOfUse: "Пользовательское соглашение",
    editorialPolicy: "Редакционная политика",
    cookiePolicy: "Политика cookies",
  },
};

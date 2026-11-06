// Статьи Metatron.ad — часть 2 (материалы 5–7 в 4 языках: ru, kk, zh, en)
import type { Article } from "./types";

export const articlesPart2: Article[] = [
  // ===================================================================
  // 5. AI in scientific research
  // ===================================================================
  {
    slug: "ai-in-scientific-research",
    category: "sciTech",
    cover: "/images/seal-archangels.webp",
    coverAlt: "AI in scientific research",
    date: "2025-01-12",
    readTime: 7,
    translations: {
      ru: {
        title: "Искусственный интеллект в научных исследованиях: новые горизонты",
        excerpt:
          "От предсказания структуры белков до открытия новых материалов и дизайна лекарств — ИИ меняет то, как делается наука. Обзор ключевых прорывов и направлений.",
        author: "Редакция Metatron.ad",
        content: `<h2>Прорывы последних лет</h2>
<p>В 2020 году система <strong>AlphaFold</strong> от DeepMind решила 50-летнюю задачу предсказания трёхмерной структуры белков по аминокислотной последовательности. К 2024 году база AlphaFold содержала структуры более 200 миллионов белков — это больше, чем за всю предыдущую историю экспериментальной кристаллографии. За это достижение создатели AlphaFold получили Нобелевскую премию по химии в 2024 году.</p>
<p>Параллельно ИИ-модели научились предсказывать свойства новых материалов. Система <strong>GNoME</strong> от Google DeepMind открыла 2,2 миллиона новых кристаллических структур, эквивалентных почти 800 годам экспериментальной работы. В физике плазмы нейросети помогают управлять термоядерными реакторами, а в астрономии — обнаруживать экзопланеты в шумных данных телескопов.</p>
<p>ИИ проник и в саму работу учёного: модели автоматически извлекают данные из тысяч статей, строят обзоры литературы и даже предлагают гипотезы. Появились первые журналы, принимающие препринты с заявленным вкладом ИИ при условии прозрачного описания методологии.</p>

<h2>Как это работает</h2>
<p>Современные научные ИИ-системы — это не один алгоритм, а комбинация подходов, каждый из которых закрывает свою задачу:</p>
<ul>
<li><strong>Графовые нейросети</strong> для молекул и материалов (узлы — атомы, рёбра — связи);</li>
<li><strong>Трансформеры</strong> для последовательностей (белки, ДНК, тексты научных статей);</li>
<li><strong>Генеративные модели</strong> для дизайна новых молекул (диффузионные и авторегрессивные);</li>
<li><strong>Обучение с подкреплением</strong> для оптимизации путей синтеза;</li>
<li><strong>Активное обучение</strong> для замыкания цикла «модель — эксперимент — модель».</li>
</ul>
<blockquote><p>«ИИ не заменяет эксперимент — он сужает пространство поиска от миллионов кандидатов к десяткам, которые стоит синтезировать», — подчёркивает наш научный обозреватель.</p></blockquote>

<h2>Дизайн лекарств и научные публикации</h2>
<p>В фармацевтике ИИ сокращает ранние стадии разработки с 4–5 лет до 12–18 месяцев. Команды генерируют виртуальные библиотеки из миллиардов молекул, отбирают кандидатов по докингу к мишени и токсичности, а активное обучение замыкает цикл: экспериментальные данные возвращаются в модель и улучшают её. Уже несколько кандидатов, отобранных ИИ, прошли вторую фазу клинических испытаний.</p>
<p>Прорыв 2024 года — <strong>AlphaFold 3</strong>, способная предсказывать не только структуру белков, но и комплексы с ДНК, РНК и малыми молекулами. Это открывает путь к рациональному дизайну лекарств, где учёный формулирует желаемое свойство, а модель предлагает молекулу. Параллельно растёт число ИИ-ассистированных научных статей — и вместе с ним вопросы верификации, авторства и воспроизводимости, которые научное сообщество только начинает осмыслять.</p>`,
      },
      kk: {
        title: "Ғылыми зерттеулердегі жасанды интеллект: жаңа көкжиектер",
        excerpt:
          "Ақуыз құрылымын болжаудан жаңа материалдарды ашқанға және дәрілік заттарды жобалауға дейін — жасанды интеллект ғылым жасалатын тәсілді өзгертуде. Негізгі жетістіктер мен бағыттарға шолу.",
        author: "Metatron.ad редакциясы",
        content: `<h2>Соңғы жылдардағы жетістіктер</h2>
<p>2020 жылы DeepMind-тың <strong>AlphaFold</strong> жүйесі аминқышқылдық тізбегі бойынша ақуыздың үш өлшемді құрылымын болжау мәселесін — 50 жылдық мәселені шешті. 2024 жылға қарай AlphaFold дерекқоры 200 миллионнан астам ақуыз құрылымын қамтыды — бұл бұрынғы эксперименттік кристаллография тарихынан көп. Осы жетістік үшін AlphaFold жасаушылары 2024 жылы химия бойынша Нобель сыйлығын алды.</p>
<p>Парапар, ИИ-модельдер жаңа материалдардың қасиеттерін болжауды үйренді. Google DeepMind-тың <strong>GNoME</strong> жүйесі 2,2 миллион жаңа кристалдық құрылымды ашты, бұл эксперименттік жұмыстың 800 жылына балама. Плазма физикасында нейрожелілер термоядролық реакторларды басқаруға көмектессе, астрономияда телескоп деректеріндегі шуылдан экзопланеталарды табады.</p>
<p>ИИ ғалымның өз жұмысына да еніп кетті: модельдер мыңдаған мақаладан деректерді автоматты түрде алып, әдебиет шолуларын құрып, тіпті гипотезалар ұсынады. ИИ үлесін әдістемесін ашық сипаттау шартымен қабылдайтын алғашқы журналдар пайда болды.</p>

<h2>Бұл қалай жұмыс істейді</h2>
<p>Заманауи ғылыми ИИ-жүйелер — бір алгоритм емес, тәсілдердің жиынтығы, әрқайсысы өз мәселесін шешеді:</p>
<ul>
<li>Молекулалар мен материалдар үшін <strong>графтық нейрожелілер</strong> (түйіндер — атомдар, жиектер — байланыстар);</li>
<li>Тізбектер үшін <strong>трансформаторлар</strong> (ақуыздар, ДНҚ, ғылыми мақалалар мәтіні);</li>
<li>Жаңа молекулаларды жобалау үшін <strong>генеративті модельдер</strong> (диффузиялық және авторегрессивті);</li>
<li>Синтез жолдарын оңтайландыру үшін <strong>күшейтілген оқыту</strong>;</li>
<li>«Модель — эксперимент — модель» циклін жабу үшін <strong>белсенді оқыту</strong>.</li>
</ul>
<blockquote><p>«ИИ экспериментті алмастырмайды — ол іздену кеңістігін миллиондаған үміткерден синтездеуге тұрарлық ондағанға дейін тарылтады», — біздің ғылыми тілші атап көрсетеді.</p></blockquote>

<h2>Дәрі жобалау және ғылыми жарияланымдар</h2>
<p>Фармацевтикада ИИ ерте даму кезеңдерін 4–5 жылдан 12–18 айға қысқартады. Топтар миллиардтаған молекулалардан тұратын виртуалды кітапханаларды жасайды, үміткерлерді нысанға докинг және уыттылығы бойынша іріктейді, ал белсенді оқыту циклді жабады: эксперименттік деректер модельге оралады және оны жақсартады. ИИ таңдаған бірнеше үміткер екінші фаза клиникалық сынақтан өтті.</p>
<p>2024 жылғы жетістік — ақуыз құрылымын ғана емес, ДНҚ, РНҚ және кіші молекулалармен кешендерді де болжай алатын <strong>AlphaFold 3</strong>. Бұл ғалым қалаған қасиетті тұжырымдап, модель молекуланы ұсынатын рационалды дәрі жобалауға жол ашады. Сонымен қатар ИИ көмегімен жазылған ғылыми мақалалар көбейіп келеді — және онымен бірге тексеру, авторлық және қайталанатындық мәселелері де күшейуде, оны ғылыми қауымдастық енді ғана түсініп келеді.</p>`,
      },
      zh: {
        title: "人工智能在科学研究中的应用：新视野",
        excerpt:
          "从预测蛋白质结构到发现新材料与药物设计——人工智能正在改变科学研究的方式。本文回顾关键突破与方向。",
        author: "Metatron.ad 编辑部",
        content: `<h2>近年来的突破</h2>
<p>2020 年，DeepMind 的 <strong>AlphaFold</strong> 系统破解了困扰科学界 50 年的难题：根据氨基酸序列预测蛋白质的三维结构。到 2024 年，AlphaFold 数据库已收录超过 2 亿种蛋白质结构，远超以往实验晶体学的全部积累，其开发者获 2024 年诺贝尔化学奖。</p>
<p>AI 也学会预测新材料属性。Google DeepMind 的 <strong>GNoME</strong> 发现了 220 万种新晶体结构，相当于近 800 年的实验工作量。AI 还深入科研本身：从数千篇论文中提取数据、构建综述，甚至提出假设。</p>

<h2>它如何工作</h2>
<p>现代科研 AI 并非单一算法，而是多种方法的组合：</p>
<ul>
<li>面向分子与材料的<strong>图神经网络</strong>（节点为原子，边为化学键）；</li>
<li>面向序列的<strong>Transformer</strong>（蛋白质、DNA、论文文本）；</li>
<li>新分子设计的<strong>生成式模型</strong>（扩散与自回归）；</li>
<li>合成路径优化的<strong>强化学习</strong>；</li>
<li>闭合"模型—实验—模型"循环的<strong>主动学习</strong>。</li>
</ul>
<blockquote><p>"AI 并不取代实验，它将搜索空间从数百万候选物压缩到值得合成的数十个"，我们的科学评论员强调。</p></blockquote>

<h2>药物设计与科学论文</h2>
<p>在制药领域，AI 将早期研发阶段从 4–5 年缩短至 12–18 个月。团队生成数十亿分子的虚拟库，按对接与毒性筛选候选物，主动学习形成闭环：实验数据回流模型，使其持续改进。数个 AI 筛选的候选物已进入二期临床。</p>
<p>2024 年的突破是 <strong>AlphaFold 3</strong>——可预测蛋白质与 DNA、RNA 及小分子的复合物，为"理性药物设计"开路：科学家提属性，模型出分子。</p>`,
      },
      en: {
        title: "Artificial Intelligence in Scientific Research: New Horizons",
        excerpt:
          "From predicting protein structures to discovering new materials and designing drugs — AI is transforming how science is done. A review of key breakthroughs and directions.",
        author: "Metatron.ad Editorial",
        content: `<h2>Recent Breakthroughs</h2>
<p>In 2020 DeepMind's <strong>AlphaFold</strong> solved a 50-year-old grand challenge: predicting the 3D structure of proteins from their amino-acid sequence. By 2024 the AlphaFold database contained structures for over 200 million proteins — more than the entire prior history of experimental crystallography. For this achievement the creators of AlphaFold received the Nobel Prize in Chemistry in 2024.</p>
<p>In parallel, AI models learned to predict the properties of new materials. Google DeepMind's <strong>GNoME</strong> discovered 2.2 million new crystalline structures, equivalent to nearly 800 years of experimental work. In plasma physics, neural networks help control fusion reactors; in astronomy, they dig exoplanets out of noisy telescope data.</p>
<p>AI has also entered the scientist's daily craft: models automatically extract data from thousands of articles, build literature reviews and even propose hypotheses. The first journals now accept preprints with a declared AI contribution, provided the methodology is transparently described.</p>

<h2>How It Works</h2>
<p>Modern scientific AI systems are not a single algorithm but a combination of approaches, each covering its own task:</p>
<ul>
<li><strong>Graph neural networks</strong> for molecules and materials (nodes — atoms, edges — bonds);</li>
<li><strong>Transformers</strong> for sequences (proteins, DNA, scientific text);</li>
<li><strong>Generative models</strong> for new-molecule design (diffusion and autoregressive);</li>
<li><strong>Reinforcement learning</strong> for synthesis-path optimisation;</li>
<li><strong>Active learning</strong> to close the model–experiment–model loop.</li>
</ul>
<blockquote><p>"AI does not replace the experiment — it narrows the search space from millions of candidates to the dozens worth synthesising," our science correspondent emphasises.</p></blockquote>

<h2>Drug Design and Scientific Papers</h2>
<p>In pharma, AI compresses early-stage development from 4–5 years to 12–18 months. Teams generate virtual libraries of billions of molecules, filter candidates by docking to the target and toxicity, and active learning closes the loop: experimental data flows back into the model and improves it. Several AI-selected candidates have already completed phase II clinical trials.</p>
<p>The 2024 breakthrough is <strong>AlphaFold 3</strong>, which can predict not just protein structures but their complexes with DNA, RNA and small molecules. This opens the path to rational drug design, where the scientist specifies a desired property and the model proposes a molecule. At the same time, the number of AI-assisted scientific papers is growing — and with it questions of verification, authorship and reproducibility that the scientific community is only beginning to confront.</p>`,
      },
    },
  },

  // ===================================================================
  // 6. Astana Hub
  // ===================================================================
  {
    slug: "astana-hub-opportunities",
    category: "bridge",
    cover: "/images/seal-aurum.webp",
    coverAlt: "Astana Hub tech park",
    date: "2025-01-10",
    readTime: 6,
    translations: {
      ru: {
        title: "Астана Хаб: ворота для технологических компаний в Казахстане",
        excerpt:
          "Международный технопарк Astana Hub предлагает резидентам 0% корпоративного налога, упрощённый визовый режим и доступ к рынку ЕАЭС. Как стать резидентом — и кому это выгодно.",
        author: "Редакция Metatron.ad",
        content: `<h2>Что такое Astana Hub</h2>
<p><strong>Astana Hub</strong> — международный технопарк в Астане, созданный в 2018 году для развития IT-сектора Казахстана. Он предоставляет резидентам пакет налоговых и визовых льгот, инфраструктуру и доступ к государственным программам поддержки. К 2024 году число резидентов превысило 1500 компаний, а суммарная выручка участников технопарка достигла 1,2 трлн тенге. Технопарк работает под эгидой Министерства цифрового развития и интегрирован с национальной программой «Цифровой Казахстан».</p>
<p>Технопарк ориентирован на стартапы, аутсорсинговые компании и R&D-подразделения — особенно в областях AI, fintech, биотехнологий и e-commerce. Резиденты получают коворкинг, переговорные комнаты, дата-центр и доступ к акселерационным программам, а также к грантовой поддержке фонда «Даму» и других государственных инструментов.</p>

<h2>Налоговые и визовые льготы</h2>
<p>Резиденты Astana Hub освобождаются от ключевых налогов:</p>
<ul>
<li><strong>Корпоративный подоходный налог (КПН)</strong> — 0%;</li>
<li><strong>НДС</strong> — 0% по международным услугам;</li>
<li><strong>Индивидуальный подоходный налог</strong> для иностранных специалистов — 0%;</li>
<li><strong>Социальный налог</strong> — 0%;</li>
<li>Освобождение от налога на транспорт и землю для имущества технопарка.</li>
</ul>
<blockquote><p>«Astana Hub — это не просто налоговая гавань, а экосистема: акселератор, инвесторы, менторы и выход на рынок ЕАЭС объёмом 180 миллионов потребителей», — отмечает наш аналитик.</p></blockquote>

<p>Для иностранных основателей и сотрудников действует упрощённый визовый режим: виза инвестора, цифровая residency и безвизовый въезд для граждан 80+ стран. Процедура регистрации компании занимает до 5 рабочих дней, а открытие банковского счёта для нерезидентов возможно через удалённую идентификацию.</p>

<h2>Как стать резидентом</h2>
<p>Процедура состоит из трёх шагов: <strong>подача заявки</strong> онлайн с бизнес-планом, <strong>экспертная оценка</strong> комиссией и <strong>заключение договора</strong>. Требование — соответствие одному из критериев: IT-профиль, экспорт услуг или R&D. Заявка рассматривается в среднем 10 рабочих дней.</p>
<p>Astana Hub особенно привлекателен для китайских компаний как «мост» в рынок ЕАЭС и Центральной Азии с понятной юрисдикцией и англоязычной средой. Прямое авиасообщение Астаны с Пекином, Шанхаем и Сианем упрощает логистику для команд из Китая. Команда Metatron.ad сопровождает компании на всех этапах — от выбора организационно-правовой формы и подготовки бизнес-плана до открытия счёта и найма первых сотрудников.</p>`,
      },
      kk: {
        title: "Astana Hub: Қазақстандағы технологиялық компанияларға арналған қақпа",
        excerpt:
          "Халықаралық Astana Hub технопаркі резиденттерге 0% корпоративтік салық, оңайлатылған визалық режим және ЕАЭО нарығына қол жеткізуді ұсынады. Резидент қалай болады — және кімге тиімді.",
        author: "Metatron.ad редакциясы",
        content: `<h2>Astana Hub дегеніміз не</h2>
<p><strong>Astana Hub</strong> — Астанадағы халықаралық технопарк, 2018 жылы Қазақстанның IT-секторын дамыту үшін құрылған. Ол резиденттерге салықтық және визалық жеңілдіктер, инфрақұрылым және мемлекеттік қолдау бағдарламаларына қол жеткізуді ұсынады. 2024 жылға қарай резиденттер саны 1500 компаниядан асты, ал технопарк қатысушыларының жалпы кірісі 1,2 трлн теңгеге жетті. Технопарк Цифрлық даму министрлігінің қамқорлығында жұмыс істейді және «Цифрлық Қазақстан» ұлттық бағдарламасымен біріктірілген.</p>
<p>Технопарк стартаптарға, аутсорсингтік компанияларға және R&D-бөлімшелерге бағытталған — әсіресе AI, fintech, биотехнологиялар және e-commerce салаларында. Резиденттер коворкинг, келіссөз бөлмелері, деректер орталығы және акселерациялық бағдарламаларға, сондай-ақ «Даму» қоры мен басқа да мемлекеттік құралдардың гранттық қолдауына қол жеткізеді.</p>

<h2>Салықтық және визалық жеңілдіктер</h2>
<p>Astana Hub резиденттері негізгі салықтардан босатылады:</p>
<ul>
<li><strong>Корпоративтік табыс салығы</strong> — 0%;</li>
<li><strong>ҚҚС</strong> — халықаралық қызметтер бойынша 0%;</li>
<li>Шетелдік мамандар үшін <strong>жеке табыс салығы</strong> — 0%;</li>
<li><strong>Әлеуметтік салық</strong> — 0%;</li>
<li>Технопарк мүлкі үшін көлік пен жер салығынан босату.</li>
</ul>
<blockquote><p>«Astana Hub — жай салық гаваны емес, экожүйе: акселератор, инвесторлар, менторлар және 180 миллион тұтынушылық ЕАЭО нарығына шығу», — біздің аналитик атап өтеді.</p></blockquote>

<p>Шетелдік құрылтайшылар мен қызметкерлер үшін оңайлатылған визалық режим қолданылады: инвестор визасы, сандық резиденттік және 80+ ел азаматтары үшін визасыз кіру. Компанияны тіркеу рәсімі 5 жұмыс күніне дейін созылады, ал бейрезиденттер үшін банк шотын қашықтан сәйкестендіру арқылы ашу мүмкін.</p>

<h2>Резидент қалай болады</h2>
<p>Рәсім үш қадамнан тұрады: бизнес-жоспармен онлайн <strong>өтініш беру</strong>, комиссиямен <strong>сараптамалық бағалау</strong> және <strong>шарт жасасу</strong>. Талап — бір критерийге сәйкес келу: IT-профиль, қызметтер экспорты немесе R&D. Өтініш орташа 10 жұмыс күнінде қаралады.</p>
<p>Astana Hub Қытай компаниялары үшін түсінікті юрисдикциясы және ағылшынтілді ортасы бар ЕАЭО және Орталық Азия нарығына «көпір» ретінде өте тартымды. Астананың Бейжің, Шанхай және Сианьмен тікелей әуе қатынасы Қытай командаларының логистикасын жеңілдетеді. Сондай-ақ, Astana Hub резиденттеріне арнайы білім беру бағдарламалары мен нарыққа шығу қолдауы көрсетіледі. Metatron.ad командасы компанияларға ұйымдық-құқықтық нысанды таңдаудан бастап бизнес-жоспар дайындау, шот ашу және алғашқы қызметкерлерді жалдауға дейінгі барлық кезеңде жолдамдық жасайды.</p>`,
      },
      zh: {
        title: "阿斯塔纳枢纽：哈萨克斯坦科技公司门户",
        excerpt:
          "国际科技园区 Astana Hub 为入驻企业提供 0% 企业所得税、简化签证制度与进入欧亚经济联盟市场的通道。如何成为居民——以及谁将获益。",
        author: "Metatron.ad 编辑部",
        content: `<h2>什么是 Astana Hub</h2>
<p><strong>Astana Hub</strong> 是位于阿斯塔纳的国际科技园，2018 年成立，旨在发展哈萨克斯坦的 IT 产业。它为入驻企业提供税收与签证优惠、基础设施及政府扶持通道。截至 2024 年，入驻企业超过 1500 家，参与企业总收入达 1.2 万亿坚戈。园区面向初创、外包及研发部门，聚焦 AI、金融科技、生物技术与电商，提供共享办公、数据中心与加速器计划，以及"Даму"基金的资助。</p>

<h2>税收与签证优惠</h2>
<p>入驻企业可享受核心税种的豁免：</p>
<ul>
<li><strong>企业所得税</strong>——0%；</li>
<li><strong>增值税</strong>——对国际服务为 0%；</li>
<li>外籍专家的<strong>个人所得税</strong>——0%；</li>
<li><strong>社会税</strong>——0%；</li>
<li>科技园资产免征车辆税与土地税。</li>
</ul>
<blockquote><p>"Astana Hub 并非单纯的税务避风港，而是生态系统：加速器、投资人、导师，以及通往 1.8 亿消费者的欧亚经济联盟市场"，我们的分析师指出。</p></blockquote>

<p>外籍创始人与员工适用简化签证制度：投资人签证、数字居民身份，以及面向 80+ 国家的免签入境。注册最长 5 个工作日，非居民可通过远程身份认证开户。</p>

<h2>如何成为入驻企业</h2>
<p>流程分三步：在线提交附商业计划书的<strong>申请</strong>、委员会<strong>专家评审</strong>、签署<strong>协议</strong>。门槛是符合 IT 业务、服务出口或研发之一。申请平均 10 个工作日内完成审核。</p>
<p>对中国企业而言，Astana Hub 尤具"桥梁"价值——以清晰法域与英文环境通向欧亚经济联盟与中亚市场。Metatron.ad 团队全程陪跑：从选择公司形式、准备商业计划书，到开户与招聘首批员工。</p>`,
      },
      en: {
        title: "Astana Hub: Gateway for Tech Companies in Kazakhstan",
        excerpt:
          "The Astana Hub international tech park offers residents 0% corporate tax, a simplified visa regime and access to the EAEU market. How to become a resident — and who benefits.",
        author: "Metatron.ad Editorial",
        content: `<h2>What Astana Hub Is</h2>
<p><strong>Astana Hub</strong> is an international tech park in Astana, established in 2018 to develop Kazakhstan's IT sector. It provides residents with a package of tax and visa incentives, infrastructure and access to state support programmes. By 2024 the number of residents exceeded 1,500 companies, and the combined revenue of tech park participants reached 1.2 trillion tenge.</p>
<p>The tech park targets startups, outsourcing firms and R&D divisions — particularly in AI, fintech, biotechnology and e-commerce. Residents get co-working space, meeting rooms, a data centre and access to accelerator programmes, as well as grant support from the Damu Fund and other state instruments.</p>

<h2>Tax and Visa Incentives</h2>
<p>Residents of Astana Hub are exempt from the core taxes:</p>
<ul>
<li><strong>Corporate income tax</strong> — 0%;</li>
<li><strong>VAT</strong> — 0% on international services;</li>
<li><strong>Personal income tax</strong> for foreign specialists — 0%;</li>
<li><strong>Social tax</strong> — 0%;</li>
<li>Exemption from vehicle and land tax for tech park property.</li>
</ul>
<blockquote><p>"Astana Hub is not just a tax haven but an ecosystem: an accelerator, investors, mentors and access to the 180-million-consumer EAEU market," notes our analyst.</p></blockquote>

<p>Foreign founders and employees enjoy a simplified visa regime: investor visa, digital residency and visa-free entry for citizens of 80+ countries. Company registration takes up to 5 working days, and non-residents can open a bank account through remote identification.</p>

<h2>How to Become a Resident</h2>
<p>The procedure has three steps: <strong>online application</strong> with a business plan, <strong>expert review</strong> by a commission and <strong>contract signing</strong>. The requirement is to meet one of the criteria: an IT profile, export of services or R&D. Applications are reviewed on average within 10 working days.</p>
<p>Astana Hub is particularly attractive to Chinese companies as a "bridge" into the EAEU and Central Asian markets, with a clear jurisdiction and an English-speaking environment. The Metatron.ad team accompanies companies through every stage — from choosing the legal form and preparing the business plan to opening an account and hiring the first employees.</p>`,
      },
    },
  },

  // ===================================================================
  // 7. China SEZ for foreign companies
  // ===================================================================
  {
    slug: "china-sez-for-foreign-companies",
    category: "bridge",
    cover: "/images/seal-star.webp",
    coverAlt: "China Special Economic Zones",
    date: "2025-01-08",
    readTime: 6,
    translations: {
      ru: {
        title: "Специальные экономические зоны Китая: возможности для иностранных компаний",
        excerpt:
          "Шэньчжэнь, Шанхайская зона свободной торговли и Хайнань — три модели СЭЗ Китая. Что они предлагают иностранным бизнесам и как казахстанским компаниям там зарегистрироваться.",
        author: "Редакция Metatron.ad",
        content: `<h2>Три модели СЭЗ</h2>
<p>Китай развивает около <strong>20 специальных экономических зон</strong> разного типа. Каждая зона управляется собственной администрацией и имеет свой регламент, что создаёт разные условия даже внутри одной страны. Для иностранных компаний наиболее интересны три:</p>
<ul>
<li><strong>Шэньчжэнь</strong> — центр аппаратного обеспечения и электроники, режим «зоны инноваций»;</li>
<li><strong>Шанхайская ЗСТ (Pudong)</strong> — финансовый и логистический хаб, свободная конвертация юаня;</li>
<li><strong>Хайнань — свободный порт</strong> (Hainan FTP) — нулевые пошлины на импорт оборудования и товаров.</li>
</ul>
<p>Каждая зона специализируется на своих отраслях: Шэньчжэнь — IoT и полупроводники, Шанхай — финансовые услуги и биотех, Хайнань — туризм, медицина и сельское хозяйство. В 2025 году Хайнань должен завершить переход к режиму полного свободного порта с упрощённым перемещением капитала, товаров и людей.</p>

<h2>Льготы для иностранных компаний</h2>
<p>В СЭЗ действуют преференции по сравнению с общим режимом:</p>
<ul>
<li><strong>Корпоративный налог</strong> 15% (вместо 25%), а для high-tech — 15% по всей стране;</li>
<li><strong>Налог на прибыль</strong> — освобождение первых 2 лет, 50% снижение следующих 3 лет для high-tech;</li>
<li><strong>Таможенные пошлины</strong> — 0% на ввоз оборудования в Хайнани;</li>
<li><strong>Негативный список</strong> — сокращённый перечень закрытых для иностранцев отраслей;</li>
<li>Упрощённые процедуры найма иностранных специалистов и виды на жительство.</li>
</ul>
<blockquote><p>«СЭЗ Китая — это не только налоги, но и доступ к цепочкам поставок: за один день в Шэньчжэне можно найти производителя для любого компонента», — подчёркивает наш аналитик по Китаю.</p></blockquote>

<h2>Как зарегистрировать компанию</h2>
<p>Иностранная компания учреждает <strong>Wholly Foreign-Owned Enterprise (WFOE)</strong> — 100%-е дочернее общество. Процедура занимает 30–60 дней: подача устава в SAMR (Государственное управление по регулированию рынка), открытие капитального счёта в банке, регистрация в налоговой и таможне, получение лицензий на деятельность.</p>
<p>Минимальный уставный капитал зависит от отрасли и составляет от 100 000 до 1 000 000 юаней. После регистрации компания обязана ежемесячно подавать налоговую отчётность и проходить ежегодный аудит. Открытие счетов в WeChat Pay и Alipay для приёма платежей от местных клиентов — отдельный шаг, требующий бизнес-лицензии. Команда Metatron.ad помогает казахстанским компаниям пройти весь цикл — от выбора зоны и формы компании до аренды офиса и найма персонала.</p>`,
      },
      kk: {
        title: "Қытайдың арнайы экономикалық аймақтары: шетелдік компанияларға мүмкіндіктер",
        excerpt:
          "Шэньчжэнь, Шанхай еркін сауда аймағы және Хайнань — Қытай АЭА-ның үш моделі. Олар шетелдік бизнеске не ұсынады және қазақстандық компаниялар онда қалай тіркеледі.",
        author: "Metatron.ad редакциясы",
        content: `<h2>АЭА-ның үш моделі</h2>
<p>Қытай шамамен <strong>20 арнайы экономикалық аймақты</strong> (АЭА) әртүрлі типте дамытады. Әр аймақ өз әкімшілігімен басқарылады және өз регламентіне ие, бұл бір ел ішінде де әртүрлі жағдайларды жасайды. Шетелдік компаниялар үшін ең қызықты үшеуі:</p>
<ul>
<li><strong>Шэньчжэнь</strong> — жабдықтау мен электроника орталығы, «инновациялық аймақ» режимі;</li>
<li><strong>Шанхай ЕСА (Pudong)</strong> — қаржылық және логистикалық хаб, юаньдің еркін айырбасталуы;</li>
<li><strong>Хайнань — еркін порт</strong> (Hainan FTP) — жабдық пен тауарлар импортына нөлдік баж.</li>
</ul>
<p>Әр аймақ өз салаларына маманданған: Шэньчжэнь — IoT және жартылай өткізгіштер, Шанхай — қаржылық қызметтер мен биотех, Хайнань — туризм, медицина және ауыл шаруашылығы. 2025 жылы Хайнань капиталдың, тауарлардың және адамдардың қозғалысы оңайлатылған толық еркін порт режиміне өтуді аяқтауы тиіс.</p>

<h2>Шетелдік компаниялар үшін жеңілдіктер</h2>
<p>АЭА-да жалпы режиммен салыстырғанда преференциялар қолданылады:</p>
<ul>
<li><strong>Корпоративтік салық</strong> 15% (25% орнына), ал high-tech үшін — бүкіл елде 15%;</li>
<li><strong>Табыс салығы</strong> — high-tech үшін алғашқы 2 жыл босату, келесі 3 жыл 50% төмендету;</li>
<li><strong>Кеден баждары</strong> — Хайнаньда жабдық әкелуге 0%;</li>
<li><strong>Негативті тізім</strong> — шетелдіктерге жабық салалардың қысқартылған тізімі;</li>
<li>Шетелдік мамандарды жалдау мен тұрғылықты мекен рәсімдері жеңілдетілген.</li>
</ul>
<blockquote><p>«Қытай АЭА — бұл тек салық емес, жеткізу тізбектеріне қол жеткізу де: Шэньчжэньде бір күнде кез келген компонентке өндіруші табуға болады», — біздің Қытай аналитигі атап көрсетеді.</p></blockquote>

<h2>Компанияны қалай тіркеу керек</h2>
<p>Шетелдік компания <strong>Wholly Foreign-Owned Enterprise (WFOE)</strong> — 100%-дық еншілес қоғам құрады. Рәсім 30–60 күн созылады: SAMR-ға (Мемлекеттік нарықты реттеу басқармасы) жарғы беру, банкте капиталдық шот ашу, салық және кеденде тіркеу, қызметке лицензиялар алу.</p>
<p>Минималды жарғылық капитал саланы бөлу бойынша 100 000-нан 1 000 000 юаньға дейін құрайды. Тіркеуден кейін компания ай сайын салықтық есеп беруі және жыл сайынғы аудиттен өтуі міндетті. Жергілікті тұтынушылардан төлемді қабылдау үшін WeChat Pay мен Alipay-да шот ашу — бизнес-лицензияны қажет ететін жеке қадам. Metatron.ad командасы қазақстандық компанияларға аймақ пен компания нысанын таңдаудан бастап офис жалдау, қызметкер жалдау және заңдық кеңес алуға дейінгі толық циклден өтуге көмектеседі.</p>`,
      },
      zh: {
        title: "中国经济特区：外国企业的机遇",
        excerpt:
          "深圳、上海自贸区与海南是中国经济特区的三种模式。它们为外资企业提供了什么——哈萨克斯坦企业如何在那里注册。",
        author: "Metatron.ad 编辑部",
        content: `<h2>三种特区模式</h2>
<p>中国约 <strong>20 个经济特区</strong>，类型各异。对外资最具吸引力的是：</p>
<ul>
<li><strong>深圳</strong>——硬件与电子产业中心，"创新区"制度；</li>
<li><strong>上海自贸区（浦东）</strong>——金融与物流枢纽，人民币自由兑换；</li>
<li><strong>海南自由贸易港</strong>（Hainan FTP）——设备与商品进口零关税。</li>
</ul>
<p>每个特区各有侧重：深圳聚焦物联网与半导体，上海聚焦金融与生物科技，海南聚焦旅游、医疗与农业。2025 年海南将完成向完整自由港制度的过渡，资本、货物与人员流动进一步便利化。</p>

<h2>对外资企业的优惠</h2>
<p>特区内相较一般税制享有以下优惠：</p>
<ul>
<li><strong>企业所得税</strong> 15%（普通为 25%），高新技术企业全国适用 15%；</li>
<li><strong>利润税</strong>——高新技术企业前两年免征，随后三年减半；</li>
<li><strong>关税</strong>——海南设备进口 0%；</li>
<li><strong>负面清单</strong>——对外资限制行业目录已缩减；</li>
<li>外籍专家聘用与居留手续简化。</li>
</ul>
<blockquote><p>"中国经济特区不止是税收，更是供应链可及性：在深圳，一天内即可为任何元器件找到制造商"，我们的中国分析师强调。</p></blockquote>

<h2>如何注册公司</h2>
<p>外资企业设 <strong>外商独资企业（WFOE）</strong>——100% 控股子公司。流程需 30–60 天：向市场监管总局（SAMR）提交章程、开立资本账户、办税务与海关登记并取得许可证。</p>
<p>最低注册资本因行业而异，从 10 万到 100 万元人民币不等。注册后须按月申报纳税并通过年度审计。Metatron.ad 团队协助哈萨克斯坦企业完成从选址、确定形式到租办公室、招聘员工、开通 WeChat Pay 与支付宝的完整周期。</p>`,
      },
      en: {
        title: "China's Special Economic Zones: Opportunities for Foreign Companies",
        excerpt:
          "Shenzhen, the Shanghai FTZ and Hainan are three models of China's SEZs. What they offer foreign businesses — and how Kazakh companies can register there.",
        author: "Metatron.ad Editorial",
        content: `<h2>Three SEZ Models</h2>
<p>China runs about <strong>20 special economic zones</strong> of various types. The three of greatest interest to foreign companies are:</p>
<ul>
<li><strong>Shenzhen</strong> — hardware and electronics hub, "innovation zone" regime;</li>
<li><strong>Shanghai FTZ (Pudong)</strong> — financial and logistics hub, free yuan convertibility;</li>
<li><strong>Hainan Free Trade Port</strong> (Hainan FTP) — zero duties on equipment and goods imports.</li>
</ul>
<p>Each zone specialises in its own sectors: Shenzhen — IoT and semiconductors, Shanghai — financial services and biotech, Hainan — tourism, medicine and agriculture. In 2025 Hainan is scheduled to complete its transition to a full free port regime, with simplified movement of capital, goods and people.</p>

<h2>Incentives for Foreign Companies</h2>
<p>SEZs offer preferences over the general regime:</p>
<ul>
<li><strong>Corporate income tax</strong> 15% (instead of 25%), and 15% nationwide for high-tech;</li>
<li><strong>Profit tax</strong> — exemption for the first 2 years, 50% reduction for the next 3 for high-tech;</li>
<li><strong>Customs duties</strong> — 0% on equipment imports in Hainan;</li>
<li><strong>Negative list</strong> — a shortened list of sectors closed to foreigners;</li>
<li>Simplified hiring and residence procedures for foreign specialists.</li>
</ul>
<blockquote><p>"China's SEZs are not only about taxes but about access to supply chains: in Shenzhen you can find a manufacturer for any component in a single day," our China analyst emphasises.</p></blockquote>

<h2>How to Register a Company</h2>
<p>A foreign company sets up a <strong>Wholly Foreign-Owned Enterprise (WFOE)</strong> — a 100% subsidiary. The procedure takes 30–60 days: filing the charter with SAMR (State Administration for Market Regulation), opening a capital account with a bank, registering with the tax and customs authorities, and obtaining operating licences.</p>
<p>Minimum registered capital depends on the industry and ranges from 100,000 to 1,000,000 yuan. After registration the company must file monthly tax returns and pass an annual audit. The Metatron.ad team helps Kazakh companies through the entire cycle — from selecting a zone and company form to renting an office, hiring staff and opening accounts with WeChat Pay and Alipay.</p>`,
      },
    },
  },
];

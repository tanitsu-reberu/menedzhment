const cards = [
  {
    topic: "Проект",
    priority: "Приоритет 1",
    term: "Что такое проект",
    answer: "Проект - временное предприятие для создания уникального продукта, услуги или результата. У него есть начало, конец и постепенная детализация.",
    color: "#37d4bc"
  },
  {
    topic: "Проект",
    priority: "Приоритет 1",
    term: "Проект и операционная деятельность",
    answer: "Операционная деятельность повторяется постоянно, а проект имеет завершение и создает новое. Проект - это процесс создания продукта, а не сам продукт.",
    color: "#37d4bc"
  },
  {
    topic: "SMART",
    priority: "Приоритет 1",
    term: "Specific",
    answer: "Цель должна быть конкретной: не 'улучшить продажи', а 'увеличить выручку от премиум-подписок'.",
    color: "#ffc857"
  },
  {
    topic: "SMART",
    priority: "Приоритет 1",
    term: "Measurable",
    answer: "Цель должна иметь измеримый критерий успеха: например, рост выручки с 2 млн до 2,5 млн рублей.",
    color: "#ffc857"
  },
  {
    topic: "SMART",
    priority: "Приоритет 1",
    term: "Achievable, Relevant, Time-bound",
    answer: "Цель должна быть реалистичной, соответствовать стратегии и иметь срок. Частая ошибка на экзамене - забыть срок или метрику.",
    color: "#ffc857"
  },
  {
    topic: "Риски",
    priority: "Приоритет 1",
    term: "Риск проекта",
    answer: "Риск - неопределенное событие, которое при наступлении может повлиять на цели проекта положительно или отрицательно.",
    color: "#ff6b6b"
  },
  {
    topic: "Риски",
    priority: "Приоритет 1",
    term: "4 стратегии реагирования",
    answer: "Избегание, снижение, передача и принятие. Активное принятие означает резерв, пассивное - наблюдение без действий.",
    color: "#ff6b6b"
  },
  {
    topic: "Стейкхолдеры",
    priority: "Приоритет 1",
    term: "Матрица Power / Interest",
    answer: "Высокая власть и высокий интерес - управлять тесно. Высокая власть и низкий интерес - держать удовлетворенными. Низкая власть и высокий интерес - информировать.",
    color: "#a78bfa"
  },
  {
    topic: "Scrum",
    priority: "Приоритет 1",
    term: "Agile и Scrum",
    answer: "Agile - философия и принципы, Scrum - конкретный фреймворк реализации Agile с ролями, событиями и артефактами.",
    color: "#4ade80"
  },
  {
    topic: "Scrum",
    priority: "Приоритет 1",
    term: "Product Owner",
    answer: "Product Owner отвечает за максимизацию ценности продукта и решает, что важнее делать в следующем спринте.",
    color: "#4ade80"
  },
  {
    topic: "Scrum",
    priority: "Приоритет 1",
    term: "Scrum Master",
    answer: "Scrum Master помогает команде работать по Scrum, убирает препятствия и защищает фокус команды. Он не менеджер команды.",
    color: "#4ade80"
  },
  {
    topic: "Scrum",
    priority: "Приоритет 1",
    term: "Retrospective",
    answer: "Событие после Sprint Review, где команда анализирует процесс и выбирает улучшения. Это ключевое событие для развития процесса.",
    color: "#4ade80"
  },
  {
    topic: "Команда",
    priority: "Приоритет 2",
    term: "Модель Такмана",
    answer: "4 стадии: Forming, Storming, Norming, Performing. Конфликты на Storming нормальны, а стиль лидерства должен меняться по стадии.",
    color: "#7dd3fc"
  },
  {
    topic: "Команда",
    priority: "Приоритет 2",
    term: "Модель Белбина",
    answer: "9 командных ролей в трех группах: мыслители, действующие и социальные. Важна сбалансированность, а не наличие 'лучшей' роли.",
    color: "#7dd3fc"
  },
  {
    topic: "Планирование",
    priority: "Приоритет 2",
    term: "WBS",
    answer: "Иерархическая декомпозиция всего объема работ на управляемые пакеты. Правило 100%: ничего не забыть и не добавить лишнего.",
    color: "#fb7185"
  },
  {
    topic: "Планирование",
    priority: "Приоритет 2",
    term: "Finish-to-Start",
    answer: "Самая распространенная связь задач: одна задача должна закончиться, прежде чем начнется следующая. Пример: дизайн до верстки.",
    color: "#fb7185"
  },
  {
    topic: "SWOT",
    priority: "Приоритет 2",
    term: "SWOT-анализ",
    answer: "Strengths и Weaknesses - внутренние факторы. Opportunities и Threats - внешние факторы. После SWOT часто строят SO, WO, ST, WT стратегии.",
    color: "#f59e0b"
  },
  {
    topic: "Матрица рисков",
    priority: "Приоритет 2",
    term: "Вероятность x Влияние",
    answer: "Матрица помогает быстро увидеть самые опасные риски. После оценки нужны ответственный и план действий.",
    color: "#ef4444"
  },
  {
    topic: "PMBoK",
    priority: "Кратко",
    term: "Критерии успеха проекта",
    answer: "Цели достигнуты, сроки и бюджет соблюдены, качество приемлемое, заказчик удовлетворен.",
    color: "#38bdf8"
  },
  {
    topic: "PMBoK",
    priority: "Кратко",
    term: "Жизненный цикл проекта",
    answer: "Инициация, планирование, исполнение, мониторинг и контроль, завершение. На инициации создают устав проекта.",
    color: "#38bdf8"
  },
  {
    topic: "Scope",
    priority: "Кратко",
    term: "Scope creep",
    answer: "Неконтролируемое расширение содержания проекта. Новую функцию нужно проводить через контроль изменений.",
    color: "#c084fc"
  },
  {
    topic: "Agile",
    priority: "Кратко",
    term: "Канбан",
    answer: "Канбан строится на визуализации потока, ограничении WIP и pull-системе. Хорош для поддержки и потока незапланированных задач.",
    color: "#22c55e"
  }
];

const questions = [
  {
    topic: "Проект",
    question: "Какая характеристика отличает проект от операционной деятельности?",
    options: ["Временность и уникальный результат", "Постоянное повторение операций", "Отсутствие ограничений по срокам", "Неизменность требований"],
    correct: 0,
    explain: "Проект ограничен во времени и создает уникальный результат."
  },
  {
    topic: "SMART",
    question: "Какой вариант лучше всего соответствует SMART?",
    options: ["Сделать сайт лучше", "Когда-нибудь увеличить продажи", "До 30 сентября снизить время загрузки страницы с 4 до 1,5 секунд", "Развивать продукт активнее"],
    correct: 2,
    explain: "Есть конкретика, метрика и срок."
  },
  {
    topic: "Риски",
    question: "Компания страхует проект от финансовых потерь. Какая это стратегия?",
    options: ["Снижение", "Передача", "Избегание", "Пассивное принятие"],
    correct: 1,
    explain: "Страхование передает часть последствий другой стороне."
  },
  {
    topic: "Риски",
    question: "Команда документирует код и обучает второго разработчика на случай ухода ключевого специалиста. Что это?",
    options: ["Снижение риска", "Избегание риска", "Передача риска", "Игнорирование риска"],
    correct: 0,
    explain: "Вероятность и влияние риска уменьшаются."
  },
  {
    topic: "Стейкхолдеры",
    question: "Спонсор проекта имеет высокую власть и высокий интерес. Какая стратегия работы подходит?",
    options: ["Мониторить", "Информировать", "Управлять тесно", "Не вовлекать"],
    correct: 2,
    explain: "Высокая власть + высокий интерес = Manage Closely."
  },
  {
    topic: "Scrum",
    question: "Кто отвечает за приоритеты Product Backlog и ценность продукта?",
    options: ["Scrum Master", "Product Owner", "Development Team", "Project Sponsor"],
    correct: 1,
    explain: "Product Owner отвечает за ценность и приоритеты."
  },
  {
    topic: "Scrum",
    question: "Какое событие Scrum важнее всего для улучшения процесса?",
    options: ["Daily Scrum", "Sprint Planning", "Sprint Retrospective", "Sprint"],
    correct: 2,
    explain: "На ретроспективе команда выбирает улучшения процесса."
  },
  {
    topic: "Команда",
    question: "На какой стадии Такмана возникают борьба за роли и конфликты?",
    options: ["Forming", "Storming", "Norming", "Performing"],
    correct: 1,
    explain: "Storming - стадия конфликтов и согласования ролей."
  },
  {
    topic: "Команда",
    question: "Что показывает модель Белбина?",
    options: ["Фазы жизненного цикла проекта", "Командные роли и баланс вклада", "Критический путь проекта", "Финансовую окупаемость"],
    correct: 1,
    explain: "Белбин описывает роли: мыслители, действующие, социальные."
  },
  {
    topic: "Планирование",
    question: "Что означает правило 100% в WBS?",
    options: ["Выполнить все задачи за 100 дней", "Покрыть весь объем работ проекта без пропусков и лишнего", "Назначить 100% бюджета", "Сделать 100 задач"],
    correct: 1,
    explain: "WBS должна включать весь объем работ проекта."
  },
  {
    topic: "Планирование",
    question: "Какая связь задач самая распространенная?",
    options: ["Start-to-Finish", "Finish-to-Finish", "Finish-to-Start", "Start-to-Start"],
    correct: 2,
    explain: "FS: сначала завершили одну задачу, потом начали следующую."
  },
  {
    topic: "SWOT",
    question: "Что в SWOT относится к внешним факторам?",
    options: ["Strengths и Weaknesses", "Opportunities и Threats", "Specific и Measurable", "Scope и Cost"],
    correct: 1,
    explain: "Возможности и угрозы приходят из внешней среды."
  },
  {
    topic: "Матрица рисков",
    question: "Что нужно сделать после оценки риска в матрице?",
    options: ["Забыть низкие риски навсегда", "Назначить ответственного и план действий", "Удалить риск из реестра", "Перенести риск в WBS"],
    correct: 1,
    explain: "Оценка без владельца и реакции не управляет риском."
  },
  {
    topic: "PMBoK",
    question: "Что создают на фазе инициации проекта?",
    options: ["Устав проекта", "Полный код продукта", "Финальный отчет", "Retrospective backlog"],
    correct: 0,
    explain: "Устав официально запускает проект и фиксирует ключевые параметры."
  },
  {
    topic: "Agile",
    question: "Почему Канбан часто удобен для поддержки?",
    options: ["Есть фиксированные спринты", "Он запрещает визуализацию", "Он хорошо работает с потоком незапланированных задач", "Он требует Product Owner"],
    correct: 2,
    explain: "Канбан управляет непрерывным потоком через WIP и pull-систему."
  },
  {
    topic: "Инструменты",
    question: "Какой набор инструментов логично использовать при планировании проекта по билетам?",
    options: ["WBS, диаграмма Ганта, матрица стейкхолдеров, матрица рисков, SWOT", "Только прототип интерфейса", "Только финансовый отчет после завершения", "Только ежедневные стендапы"],
    correct: 0,
    explain: "В билетах перечислены WBS, Гант, стейкхолдеры, риски и SWOT как базовые инструменты управления проектом."
  },
  {
    topic: "Классификация",
    question: "По каким признакам в билете предлагается классифицировать проекты?",
    options: ["По географии, промышленному сектору, фазе жизненного цикла и продукту проекта", "Только по числу сотрудников", "Только по используемому языку программирования", "По цвету интерфейса и названию заказчика"],
    correct: 0,
    explain: "Классификация в билете: географическое положение, отрасль, фаза жизненного цикла и продукция проекта."
  },
  {
    topic: "Оценка затрат",
    question: "Какая оценка затрат обычно подходит на ранней фазе, когда деталей еще мало?",
    options: ["Аналоговая оценка по похожему проекту", "Снизу вверх по детальной WBS", "Фактическая стоимость после закрытия проекта", "Оценка по цвету риска"],
    correct: 0,
    explain: "Аналоговая оценка полезна на инициации, когда можно сравнить проект с похожими, но детализация еще низкая."
  },
  {
    topic: "Оценка затрат",
    question: "Что такое оценка затрат снизу вверх?",
    options: ["Суммирование оценок отдельных работ или пакетов WBS", "Умножение бюджета конкурента на два", "Оценка только зарплаты менеджера проекта", "Выбор самой маленькой цифры из вариантов"],
    correct: 0,
    explain: "Метод снизу вверх строится от детальных работ к общей стоимости проекта."
  },
  {
    topic: "PMBoK",
    question: "Что описывают области знаний PMBoK?",
    options: ["Ключевые направления управления проектом: содержание, сроки, стоимость, качество, риски и другие", "Только правила программирования", "Только роли Scrum-команды", "Только бухгалтерскую отчетность"],
    correct: 0,
    explain: "PMBoK группирует управление проектом по областям знаний: интеграция, содержание, сроки, стоимость, качество, ресурсы, коммуникации, риски, закупки, стейкхолдеры."
  },
  {
    topic: "Качество",
    question: "Что входит в управление качеством проекта?",
    options: ["Планирование качества, обеспечение качества и контроль качества", "Только финальная демонстрация продукта", "Только мотивация команды", "Только закупка оборудования"],
    correct: 0,
    explain: "План задает стандарты, обеспечение поддерживает процесс, контроль проверяет результат."
  },
  {
    topic: "Успех проекта",
    question: "Как корректнее оценивать успешность проекта?",
    options: ["По достижению целей, срокам, бюджету, качеству и удовлетворенности заказчика", "Только по тому, понравилась ли презентация", "Только по количеству участников команды", "Только по числу встреч"],
    correct: 0,
    explain: "В билете критерии успеха включают цели, сроки, бюджет, качество и удовлетворенность заказчика."
  },
  {
    topic: "Целевая аудитория",
    question: "Что должен включать портрет пользователя проекта?",
    options: ["Характеристики, потребности, боли, сценарии поведения и критерии выбора", "Только имя пользователя", "Только цвет любимого приложения", "Только зарплату команды проекта"],
    correct: 0,
    explain: "User Persona помогает понять, для кого создается продукт и какие задачи пользователь хочет решить."
  },
  {
    topic: "Жизненный цикл",
    question: "Какая последовательность фаз жизненного цикла проекта наиболее корректна?",
    options: ["Инициация, планирование, исполнение, мониторинг и контроль, завершение", "Тестирование, идея, бюджет, отпуск", "Ретроспектива, Daily, Sprint, Backlog", "Закупка, продажа, реклама, архив"],
    correct: 0,
    explain: "Это классическая последовательность жизненного цикла проекта."
  },
  {
    topic: "Инициация",
    question: "Что обычно относится к фазе инициации и разработки концепта?",
    options: ["Обоснование проекта, цели, стейкхолдеры, высокоуровневые требования и устав", "Детальный код всех модулей", "Финальная приемка продукта", "Постпроектная эксплуатация"],
    correct: 0,
    explain: "На инициации проект официально обосновывается и фиксируется на верхнем уровне."
  },
  {
    topic: "Стоимость",
    question: "Что такое базовый план по стоимости проекта?",
    options: ["Утвержденный бюджет, относительно которого контролируют отклонения", "Список идей без денег", "Матрица власти и интереса", "Описание ролей Scrum"],
    correct: 0,
    explain: "Cost baseline нужен, чтобы сравнивать плановые и фактические затраты."
  },
  {
    topic: "Содержание",
    question: "Что является главной задачей управления содержанием проекта?",
    options: ["Определить, что входит в проект, и контролировать изменения", "Сделать все просьбы заказчика без проверки", "Заменить календарное планирование", "Отменить WBS"],
    correct: 0,
    explain: "Управление содержанием защищает проект от неконтролируемого расширения работ."
  },
  {
    topic: "Сроки",
    question: "Что показывает критический путь проекта?",
    options: ["Последовательность задач, определяющую минимальную длительность проекта", "Самую дешевую задачу проекта", "Список всех стейкхолдеров", "Только дату старта проекта"],
    correct: 0,
    explain: "Если задерживается задача на критическом пути, обычно задерживается весь проект."
  },
  {
    topic: "Устав проекта",
    question: "Зачем нужен устав проекта?",
    options: ["Официально запустить проект и закрепить цели, границы, бюджет, риски и менеджера", "Заменить все планы проекта", "Описать только дизайн интерфейса", "Провести ретроспективу"],
    correct: 0,
    explain: "Без утвержденного устава проект обычно не считается официально начатым."
  },
  {
    topic: "Календарное планирование",
    question: "Что является результатом календарного планирования?",
    options: ["Расписание с датами, длительностями, зависимостями и ресурсами", "Только список идей продукта", "Только матрица SWOT", "Только список ролей Белбина"],
    correct: 0,
    explain: "Календарное планирование переводит работы в конкретное расписание."
  },
  {
    topic: "PESTEL",
    question: "Какие группы факторов анализирует PESTEL?",
    options: ["Political, Economic, Social, Technological, Environmental, Legal", "Product, Sprint, Team, Estimate, Lean", "Plan, Execute, Scope, Test, Earn", "People, Effort, Scrum, Time, Energy"],
    correct: 0,
    explain: "PESTEL помогает увидеть внешнюю среду проекта: политику, экономику, общество, технологии, экологию и право."
  },
  {
    topic: "Команда",
    question: "Что должен делать лидер на стадии Forming по модели Такмана?",
    options: ["Четко задавать цели, роли и правила взаимодействия", "Полностью исчезнуть из процесса", "Игнорировать знакомство команды", "Требовать самоорганизации без контекста"],
    correct: 0,
    explain: "На Forming команда еще осторожна и не понимает роли, поэтому нужен более директивный стиль."
  },
  {
    topic: "Эффективность команды",
    question: "Что помогает управлять эффективностью команды и снижать стресс?",
    options: ["Регулярная обратная связь, мотивация, психологическая безопасность и профилактика выгорания", "Только увеличение количества встреч", "Игнорирование конфликтов", "Запрет на отдых после интенсивного периода"],
    correct: 0,
    explain: "В билете акцент на мотивации, обратной связи, безопасности и работе со стрессом."
  },
  {
    topic: "ИС",
    question: "Какой тренд развития информационных систем указан в материале?",
    options: ["Облака, Low-code, AI, кибербезопасность и data-driven подход", "Отказ от автоматизации", "Запрет гибридных методологий", "Полный отказ от данных"],
    correct: 0,
    explain: "Эти тренды меняют архитектуру проектов и требования к компетенциям команды."
  },
  {
    topic: "COBIT",
    question: "В чем сильная сторона COBIT?",
    options: ["Комплексное управление ИТ и соответствие требованиям compliance", "Максимальная простота для маленьких неформальных команд", "Замена всех Agile-практик", "Отмена документации"],
    correct: 0,
    explain: "COBIT полезен там, где важны контроль, аудит и соответствие регуляторным требованиям."
  },
  {
    topic: "Agile",
    question: "Как корректно различать Agile и Scrum?",
    options: ["Agile - философия и принципы, Scrum - конкретный фреймворк", "Agile - роль, Scrum - документ", "Это одно и то же без различий", "Scrum - только диаграмма Ганта"],
    correct: 0,
    explain: "Scrum является одним из способов реализации Agile-подхода."
  },
  {
    topic: "Scrum",
    question: "Что такое спринт в Scrum?",
    options: ["Фиксированный короткий цикл работы, обычно 2-4 недели, по итогам которого создается Increment", "Разовая встреча с заказчиком", "Бессрочная эксплуатация продукта", "Финансовый отчет проекта"],
    correct: 0,
    explain: "Спринт - основной ритм Scrum-команды."
  },
  {
    topic: "ИС",
    question: "Зачем проводят аудит информационных систем перед стратегией развития ИС?",
    options: ["Чтобы понять текущее состояние, проблемы, риски и направления модернизации", "Чтобы сразу закрыть проект", "Чтобы заменить анализ пользователей", "Чтобы отменить бюджетирование"],
    correct: 0,
    explain: "Аудит дает фактическую базу для стратегии развития ИС."
  },
  {
    topic: "Треугольник проекта",
    question: "Что означает треугольник проекта?",
    options: ["Связь содержания, сроков и стоимости: изменение одного ограничения влияет на другие", "Три роли Scrum-команды", "Три стадии Белбина", "Три цвета матрицы рисков"],
    correct: 0,
    explain: "Если сократить сроки, часто приходится уменьшать содержание или увеличивать стоимость."
  },
  {
    topic: "SMART",
    question: "Какой критерий SMART отвечает на вопрос 'Как понять, что цель достигнута?'",
    options: ["Measurable", "Specific", "Relevant", "Time-bound"],
    correct: 0,
    explain: "Measurable означает измеримость цели."
  },
  {
    topic: "WBS",
    question: "На какой вопрос прежде всего отвечает WBS?",
    options: ["Что нужно сделать в проекте?", "Кто виноват в риске?", "Какой цвет у интерфейса?", "Какая роль у Scrum Master?"],
    correct: 0,
    explain: "WBS описывает состав работ, а не календарь и не способ выполнения."
  },
  {
    topic: "Scrum",
    question: "Что обсуждают на ретроспективе Scrum?",
    options: ["Что в процессе было хорошо, что мешало и какие улучшения взять дальше", "Только финансовый баланс компании", "Только личные оценки сотрудников", "Только список внешних угроз PESTEL"],
    correct: 0,
    explain: "Ретроспектива нужна для улучшения процесса работы команды."
  },
  {
    topic: "Развитие команды",
    question: "Зачем нужен реестр навыков (Skills Matrix)?",
    options: ["Чтобы увидеть компетенции команды, пробелы и план обучения или найма", "Чтобы заменить бюджет проекта", "Чтобы выбрать цвет доски Канбан", "Чтобы отменить индивидуальные планы развития"],
    correct: 0,
    explain: "Skills Matrix показывает, какие навыки есть и каких не хватает для проекта."
  },
  {
    topic: "Ранжирование проектов",
    question: "Что помогает выбрать проект из нескольких кандидатов?",
    options: ["Модели ранжирования: важность/срочность, ROI, портфельный анализ", "Случайный выбор без критериев", "Только длина названия проекта", "Только мнение одного разработчика"],
    correct: 0,
    explain: "Ранжирование дает прозрачные критерии отбора проектов."
  },
  {
    topic: "Стратегия",
    question: "Как конкурентная стратегия связана со стандартизированным управлением проектами?",
    options: ["Проекты должны поддерживать стратегию компании, а стандарты делают управление повторяемым и контролируемым", "Стратегия не влияет на проекты", "Стандартизация запрещает контроль бюджета", "Проекты выбирают без связи с бизнесом"],
    correct: 0,
    explain: "Если стратегия - лидерство по издержкам, проектам нужен сильный контроль стоимости и сроков."
  },
  {
    topic: "Матрица рисков",
    question: "Как рассчитывается уровень риска в матрице рисков?",
    options: ["Через сочетание вероятности наступления и силы влияния на проект", "По количеству участников команды", "По длине описания риска", "По числу встреч в календаре"],
    correct: 0,
    explain: "Матрица рисков сопоставляет вероятность и влияние, чтобы определить приоритет реакции."
  }
];

const achievements = [
  { id: "first_flip", title: "Первый разворот", desc: "Открыта первая карточка.", test: (s) => s.studiedCards.length >= 1 },
  { id: "five_cards", title: "Разогрев", desc: "Изучено 5 карточек.", test: (s) => s.studiedCards.length >= 5 },
  { id: "ten_cards", title: "Каркас знаний", desc: "Изучено 10 карточек.", test: (s) => s.studiedCards.length >= 10 },
  { id: "first_correct", title: "Точный ответ", desc: "Первый правильный ответ в блице.", test: (s) => s.correctAnswers >= 1 },
  { id: "five_correct", title: "Экзаменационный темп", desc: "5 правильных ответов.", test: (s) => s.correctAnswers >= 5 },
  { id: "level_2", title: "Младший PM", desc: "Достигнут 2 уровень.", test: (s) => getLevel(s.xp).level >= 2 },
  { id: "level_3", title: "Спринт-мастер", desc: "Достигнут 3 уровень.", test: (s) => getLevel(s.xp).level >= 3 },
  { id: "all_topics", title: "Широкий охват", desc: "Затронуты все темы карточек.", test: (s) => getStudiedTopics(s).length === getTopics().length }
];

const defaultState = {
  xp: 0,
  studiedCards: [],
  correctAnswers: 0,
  unlocked: []
};

let state = loadState();
let activeMode = "flashcards";
let cardFullscreen = false;
let nativeFullscreenActive = false;
let topicDrawerOpen = false;
let cardIndex = 0;
let quizOrder = shuffle([...questions.keys()]);
let quizIndex = 0;
let answered = false;

const els = {
  xpValue: document.getElementById("xpValue"),
  levelValue: document.getElementById("levelValue"),
  levelTitle: document.getElementById("levelTitle"),
  levelProgressLabel: document.getElementById("levelProgressLabel"),
  levelProgress: document.getElementById("levelProgress"),
  flashModeButton: document.getElementById("flashModeButton"),
  quizModeButton: document.getElementById("quizModeButton"),
  achievementsButton: document.getElementById("achievementsButton"),
  flashcardsView: document.getElementById("flashcardsView"),
  quizView: document.getElementById("quizView"),
  achievementsView: document.getElementById("achievementsView"),
  topicRail: document.getElementById("topicRail"),
  topicList: document.getElementById("topicList"),
  topicCount: document.getElementById("topicCount"),
  topicDrawerToggle: document.getElementById("topicDrawerToggle"),
  topicDrawerBackdrop: document.getElementById("topicDrawerBackdrop"),
  closeTopicDrawerButton: document.getElementById("closeTopicDrawerButton"),
  activeTopicLabel: document.getElementById("activeTopicLabel"),
  cardTopic: document.getElementById("cardTopic"),
  cardCounter: document.getElementById("cardCounter"),
  cardPriority: document.getElementById("cardPriority"),
  cardTerm: document.getElementById("cardTerm"),
  cardAnswer: document.getElementById("cardAnswer"),
  flashcard: document.getElementById("flashcard"),
  prevCardButton: document.getElementById("prevCardButton"),
  nextCardButton: document.getElementById("nextCardButton"),
  toggleFullscreenButton: document.getElementById("toggleFullscreenButton"),
  fullscreenHint: document.getElementById("fullscreenHint"),
  quizTopic: document.getElementById("quizTopic"),
  quizCounter: document.getElementById("quizCounter"),
  questionText: document.getElementById("questionText"),
  answers: document.getElementById("answers"),
  feedback: document.getElementById("feedback"),
  restartQuizButton: document.getElementById("restartQuizButton"),
  nextQuestionButton: document.getElementById("nextQuestionButton"),
  badgeGrid: document.getElementById("badgeGrid"),
  achievementCounter: document.getElementById("achievementCounter"),
  toastStack: document.getElementById("toastStack"),
  xpFloat: document.getElementById("xpFloat"),
  resetButton: document.getElementById("resetButton")
};

function getTopics() {
  return [...new Set(cards.map((card) => card.topic))];
}

function getStudiedTopics(currentState) {
  return [...new Set(currentState.studiedCards.map((index) => cards[index].topic))];
}

function getLevel(xp) {
  const thresholds = [0, 120, 280, 520, 860, 1300];
  let level = 1;
  for (let i = 1; i < thresholds.length; i += 1) {
    if (xp >= thresholds[i]) level = i + 1;
  }

  const current = thresholds[level - 1] ?? thresholds.at(-1);
  const next = thresholds[level] ?? thresholds.at(-1) + 500;
  const titles = ["Новичок проекта", "Младший PM", "Спринт-мастер", "Риск-аналитик", "Архитектор WBS", "Экзамен готов"];

  return {
    level,
    current,
    next,
    title: titles[level - 1] ?? "Экзамен готов",
    progress: Math.min(100, Math.round(((xp - current) / (next - current)) * 100))
  };
}

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem("pmExamState"));
    return { ...defaultState, ...saved };
  } catch {
    return { ...defaultState };
  }
}

function saveState() {
  localStorage.setItem("pmExamState", JSON.stringify(state));
}

function shuffle(items) {
  const result = [...items];
  for (let i = result.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

function addXp(amount) {
  state.xp += amount;
  saveState();
  animateXp(amount);
  renderStats();
  checkAchievements();
}

function animateXp(amount) {
  els.xpFloat.textContent = `+${amount} XP`;
  els.xpFloat.classList.remove("show");
  void els.xpFloat.offsetWidth;
  els.xpFloat.classList.add("show");
}

function renderStats() {
  const level = getLevel(state.xp);
  els.xpValue.textContent = state.xp;
  els.levelValue.textContent = level.level;
  els.levelTitle.textContent = level.title;
  els.levelProgressLabel.textContent = `${state.xp - level.current} / ${level.next - level.current} XP`;
  els.levelProgress.style.width = `${level.progress}%`;
}

function renderTopics() {
  const topics = getTopics();
  els.topicCount.textContent = topics.length;
  els.topicList.innerHTML = "";

  topics.forEach((topic) => {
    const firstCardIndex = cards.findIndex((card) => card.topic === topic);
    const topicCards = cards.filter((card) => card.topic === topic);
    const studied = topicCards.filter((card) => state.studiedCards.includes(cards.indexOf(card))).length;
    const button = document.createElement("button");
    button.className = `topic-button ${cards[cardIndex].topic === topic ? "active" : ""}`;
    button.type = "button";
    button.style.setProperty("--topic-color", cards[firstCardIndex].color);
    button.innerHTML = `
      <span>
        <strong>${topic}</strong>
        <small>${topicCards.length} карточек</small>
      </span>
      <span class="topic-score">${studied}/${topicCards.length}</span>
    `;
    button.addEventListener("click", () => {
      cardIndex = firstCardIndex;
      setMode("flashcards");
      renderCard();
      closeTopicDrawer();
    });
    els.topicList.appendChild(button);
  });
}

function updateActiveTopicLabel() {
  if (els.activeTopicLabel) {
    els.activeTopicLabel.textContent = cards[cardIndex].topic;
  }
}

function isMobileLayout() {
  return window.matchMedia("(max-width: 860px)").matches;
}

function supportsNativeFullscreen() {
  return window.matchMedia("(pointer: fine) and (min-width: 861px)").matches;
}

function mountMobileDrawer() {
  if (!els.topicRail || !els.topicDrawerBackdrop) return;
  const workspace = document.querySelector(".workspace");
  const anchor = els.flashcardsView;
  if (!workspace || !anchor) return;

  if (isMobileLayout()) {
    if (els.topicDrawerBackdrop.parentElement !== document.body) {
      document.body.appendChild(els.topicDrawerBackdrop);
    }
    if (els.topicRail.parentElement !== document.body) {
      document.body.appendChild(els.topicRail);
    }
    return;
  }

  closeTopicDrawer();
  if (els.topicDrawerBackdrop.parentElement !== workspace) {
    workspace.insertBefore(els.topicDrawerBackdrop, anchor);
  }
  if (els.topicRail.parentElement !== workspace) {
    workspace.insertBefore(els.topicRail, anchor);
  }
}

function setTopicDrawer(open) {
  if (topicDrawerOpen === open) return;
  mountMobileDrawer();
  topicDrawerOpen = open;
  document.body.classList.toggle("topic-drawer-open", open);
  if (els.topicRail) els.topicRail.classList.toggle("is-open", open);
  if (els.topicDrawerToggle) els.topicDrawerToggle.setAttribute("aria-expanded", String(open));
  if (els.topicDrawerBackdrop) els.topicDrawerBackdrop.setAttribute("aria-hidden", String(!open));
}

function openTopicDrawer() {
  setTopicDrawer(true);
}

function closeTopicDrawer() {
  setTopicDrawer(false);
}

function toggleTopicDrawer() {
  setTopicDrawer(!topicDrawerOpen);
}

function renderCard() {
  const card = cards[cardIndex];
  els.flashcard.classList.remove("flipped");
  els.cardTopic.textContent = card.topic;
  updateActiveTopicLabel();
  els.cardCounter.textContent = `${cardIndex + 1} / ${cards.length}`;
  els.cardPriority.textContent = card.priority;
  els.cardTerm.textContent = card.term;
  els.cardAnswer.textContent = card.answer;
  els.flashcard.style.setProperty("--topic-color", card.color);
  document.documentElement.style.setProperty("--active-topic", card.color);
  renderTopics();
}

function flipCard() {
  const wasFlipped = els.flashcard.classList.contains("flipped");
  els.flashcard.classList.toggle("flipped");

  if (!wasFlipped && !state.studiedCards.includes(cardIndex)) {
    state.studiedCards.push(cardIndex);
    addXp(10);
    saveState();
    renderTopics();
  }
}

function nextCard() {
  cardIndex = (cardIndex + 1) % cards.length;
  renderCard();
}

function prevCard() {
  cardIndex = (cardIndex - 1 + cards.length) % cards.length;
  renderCard();
}

function currentQuestion() {
  return questions[quizOrder[quizIndex]];
}

function renderQuiz() {
  const question = currentQuestion();
  answered = false;
  els.quizTopic.textContent = question.topic;
  els.quizCounter.textContent = `${quizIndex + 1} / ${questions.length}`;
  els.questionText.textContent = question.question;
  els.feedback.textContent = "";
  els.answers.innerHTML = "";
  els.nextQuestionButton.disabled = true;

  question.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.className = "answer-button";
    button.type = "button";
    button.innerHTML = `<span>${String.fromCharCode(65 + index)}</span><strong>${option}</strong>`;
    button.addEventListener("click", () => answerQuestion(index));
    els.answers.appendChild(button);
  });
}

function answerQuestion(index) {
  if (answered) return;
  answered = true;

  const question = currentQuestion();
  const buttons = [...els.answers.querySelectorAll(".answer-button")];
  buttons.forEach((button, buttonIndex) => {
    button.disabled = true;
    if (buttonIndex === question.correct) button.classList.add("correct");
    if (buttonIndex === index && index !== question.correct) button.classList.add("wrong");
  });

  if (index === question.correct) {
    state.correctAnswers += 1;
    els.feedback.textContent = `Верно. ${question.explain}`;
    addXp(25);
  } else {
    els.feedback.textContent = `Почти. Правильный ответ: ${question.options[question.correct]}. ${question.explain}`;
  }

  els.nextQuestionButton.disabled = false;
  saveState();
  renderBadges();
}

function nextQuestion() {
  quizIndex = (quizIndex + 1) % questions.length;
  renderQuiz();
}

function restartQuiz() {
  quizOrder = shuffle([...questions.keys()]);
  quizIndex = 0;
  renderQuiz();
}

function renderBadges() {
  const unlockedCount = achievements.filter((badge) => state.unlocked.includes(badge.id)).length;
  els.achievementCounter.textContent = `${unlockedCount} / ${achievements.length}`;
  els.badgeGrid.innerHTML = "";

  achievements.forEach((badge) => {
    const item = document.createElement("article");
    item.className = `badge ${state.unlocked.includes(badge.id) ? "unlocked" : ""}`;
    item.innerHTML = `
      <div class="badge-icon"><svg><use href="#icon-trophy"></use></svg></div>
      <div>
        <strong>${badge.title}</strong>
        <small>${badge.desc}</small>
      </div>
    `;
    els.badgeGrid.appendChild(item);
  });
}

function checkAchievements() {
  achievements.forEach((badge) => {
    if (!state.unlocked.includes(badge.id) && badge.test(state)) {
      state.unlocked.push(badge.id);
      saveState();
      showToast(badge);
    }
  });
  renderBadges();
}

function showToast(badge) {
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `
    <div class="badge-icon"><svg><use href="#icon-trophy"></use></svg></div>
    <div>
      <strong>${badge.title}</strong>
      <p>${badge.desc}</p>
    </div>
  `;
  els.toastStack.appendChild(toast);
  setTimeout(() => toast.remove(), 3600);
}

function updateFullscreenUi() {
  const label = els.toggleFullscreenButton.querySelector(".fullscreen-toggle-label");
  if (label) {
    label.textContent = cardFullscreen ? "Выйти" : "На весь экран";
  }
  els.toggleFullscreenButton.setAttribute("aria-pressed", String(cardFullscreen));
  els.toggleFullscreenButton.setAttribute(
    "aria-label",
    cardFullscreen ? "Выйти из полноэкранного режима" : "Открыть карточки на весь экран"
  );
  els.toggleFullscreenButton.title = cardFullscreen ? "Выйти" : "На весь экран";
}

function setCardFullscreen(enabled) {
  if (cardFullscreen === enabled) return;
  if (enabled) closeTopicDrawer();
  cardFullscreen = enabled;
  document.body.classList.toggle("card-fullscreen-active", enabled);
  els.flashcardsView.classList.toggle("is-fullscreen", enabled);
  updateFullscreenUi();

  if (enabled && supportsNativeFullscreen() && els.flashcardsView.requestFullscreen) {
    nativeFullscreenActive = true;
    els.flashcardsView.requestFullscreen().catch(() => {
      nativeFullscreenActive = false;
    });
  } else if (!enabled && document.fullscreenElement) {
    nativeFullscreenActive = false;
    document.exitFullscreen().catch(() => {});
  } else if (!enabled) {
    nativeFullscreenActive = false;
  }
}

function toggleCardFullscreen() {
  setCardFullscreen(!cardFullscreen);
}

function setMode(mode) {
  if (mode !== "flashcards" && cardFullscreen) {
    setCardFullscreen(false);
  }
  closeTopicDrawer();

  activeMode = mode;
  const isFlash = mode === "flashcards";
  const isQuiz = mode === "quiz";
  const isAchievements = mode === "achievements";

  if (els.topicDrawerToggle) els.topicDrawerToggle.hidden = isAchievements;

  els.flashModeButton.classList.toggle("active", isFlash);
  els.quizModeButton.classList.toggle("active", isQuiz);
  els.achievementsButton.classList.toggle("active", isAchievements);
  els.flashModeButton.setAttribute("aria-selected", String(isFlash));
  els.quizModeButton.setAttribute("aria-selected", String(isQuiz));
  els.achievementsButton.setAttribute("aria-selected", String(isAchievements));

  els.flashcardsView.classList.toggle("active", isFlash);
  els.quizView.classList.toggle("active", isQuiz);
  els.achievementsView.classList.toggle("active", isAchievements);
}

function resetProgress() {
  state = { ...defaultState, studiedCards: [], unlocked: [] };
  saveState();
  renderStats();
  renderTopics();
  renderBadges();
  renderCard();
  renderQuiz();
}

els.flashcard.addEventListener("click", flipCard);
els.nextCardButton.addEventListener("click", nextCard);
els.prevCardButton.addEventListener("click", prevCard);
els.toggleFullscreenButton.addEventListener("click", (event) => {
  event.preventDefault();
  toggleCardFullscreen();
});

if (els.topicDrawerToggle) {
  els.topicDrawerToggle.addEventListener("click", (event) => {
    event.preventDefault();
    toggleTopicDrawer();
  });
}

if (els.closeTopicDrawerButton) {
  els.closeTopicDrawerButton.addEventListener("click", (event) => {
    event.preventDefault();
    closeTopicDrawer();
  });
}

if (els.topicDrawerBackdrop) {
  els.topicDrawerBackdrop.addEventListener("click", closeTopicDrawer);
  els.topicDrawerBackdrop.addEventListener("touchend", (event) => {
    event.preventDefault();
    closeTopicDrawer();
  });
}
els.nextQuestionButton.addEventListener("click", nextQuestion);
els.restartQuizButton.addEventListener("click", restartQuiz);
els.flashModeButton.addEventListener("click", () => setMode("flashcards"));
els.quizModeButton.addEventListener("click", () => setMode("quiz"));
els.achievementsButton.addEventListener("click", () => setMode("achievements"));
els.resetButton.addEventListener("click", resetProgress);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && topicDrawerOpen) {
    closeTopicDrawer();
    return;
  }

  if (event.key === "Escape" && cardFullscreen) {
    setCardFullscreen(false);
    return;
  }

  if (activeMode === "flashcards" && event.key === " ") {
    event.preventDefault();
    flipCard();
  }
  if (activeMode === "flashcards" && event.key === "ArrowRight") nextCard();
  if (activeMode === "flashcards" && event.key === "ArrowLeft") prevCard();
  if (activeMode === "flashcards" && (event.key === "f" || event.key === "F")) {
    toggleCardFullscreen();
  }
});

function handleFullscreenChange() {
  if (!nativeFullscreenActive) return;
  if (!document.fullscreenElement) {
    nativeFullscreenActive = false;
    if (cardFullscreen) setCardFullscreen(false);
  }
}

document.addEventListener("fullscreenchange", handleFullscreenChange);
document.addEventListener("webkitfullscreenchange", handleFullscreenChange);

window.addEventListener("resize", mountMobileDrawer);
mountMobileDrawer();

updateFullscreenUi();
renderStats();
renderTopics();
renderCard();
renderQuiz();
checkAchievements();

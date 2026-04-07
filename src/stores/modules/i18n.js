import { defineStore } from 'pinia'

const translations = {
  ru: {
    // Navbar
    nav_main: 'Главная',
    nav_experience: 'Опыт',
    nav_portfolio: 'Портфолио',
    nav_hobby: 'Хобби',
    nav_contacts: 'Контакты',

    // Main page
    date_of_birth: 'Дата рождения',
    age: 'Возраст',
    position: 'Должность',
    position_value: 'full-stack разработчик',
    about_me: 'О себе',
    work_experience: 'Опыт работы',
    job_title: 'Должность',
    from: 'c',
    to: 'по',
    present: 'наст. время',
    education: 'Образование',
    edu_1: 'магистратура СВФУ им. М.К. Аммосова',
    edu_2: 'аспирантура РГПУ им. А.И. Герцена',
    edu_3: 'специалитет РГПУ им. А.И. Герцена',
    edu_4: 'ФТЛ им. В.П. Ларионова',
    download_pdf: 'Скачать в формате PDF (1 лист)',

    // Experience page
    tech_stack: 'Технический стек',
    frontend: 'Frontend',
    backend: 'Backend',
    tools: 'Инструменты',

    // Portfolio
    portfolio_title: 'Портфолио',
    desktop: 'Desktop',
    mobile: 'Mobile',
    open: 'Открыть',
    private_project: 'Закрытый проект',

    // Portfolio projects
    proj_finance_title: 'Сервис учета финансов и планирования',
    proj_finance_desc: 'Учет доходов и расходов, плановое ТО авто, планирование списка покупок',
    proj_tenant_title: 'Личный кабинет арендатора',
    proj_tenant_desc: 'Портал для арендаторов с функциями управления и передачи показаний',
    proj_vpn_title: 'VPN-сервис',
    proj_vpn_desc: 'Управление подпиской к VPN-туннелю: бот, сайт и другие функции',
    proj_accounting_title: 'Внутренний сервис учета',
    proj_accounting_desc: 'Учет документации, имущества и товара для внутреннего пользования',
    proj_backend_title: 'Backend сервиса учета',
    proj_backend_desc: 'Серверная часть внутреннего сервиса: авторизация, API, работа с БД',
    proj_timer_title: 'Таймер',
    proj_timer_desc: 'Pet-проект — интерактивный таймер с адаптивным дизайном',
    proj_stopwatch_title: 'Секундомер',
    proj_stopwatch_desc: 'Pet-проект — приложение-секундомер',
    proj_email_order_title: 'E-mail шаблоны заказов',
    proj_email_order_desc: 'Адаптивные email-рассылки для автоматических уведомлений о заказах',
    proj_email_meter_title: 'E-mail шаблон показаний счетчиков',
    proj_email_meter_desc: 'Адаптивный email-шаблон для передачи показаний приборов учета',

    // Portfolio types
    type_frontend: 'Frontend',
    type_backend: 'Backend',
    type_fullstack: 'Full-stack',
    type_email: 'Email',

    // Contacts
    send_email: 'Написать письмо',
    contact_whatsapp: 'Связаться по WhatsApp',
    navigate_to: 'Направиться по адресу',

    // Hobby
    hobby_title: 'Мои увлечения',

    // Chart tooltips
    chart_html_1: 'базовые теги и стили',
    chart_html_2: 'использование шаблонов',
    chart_html_3: 'перерыв',
    chart_html_4: 'семантическая, адаптивная верстка',
    chart_html_5: 'анимации',
    chart_html_6: 'кросс-браузерная верстка',
    chart_html_7: 'email-шаблоны, продвинутая верстка',
    chart_css_1: 'инлайновые стили',
    chart_css_2: 'flex-box контейнеры',
    chart_css_3: 'перерыв',
    chart_css_4: 'семантическая, адаптивная верстка',
    chart_css_5: 'grid-сетки',
    chart_css_6: 'кросс-браузерная верстка',
    chart_css_7: 'Tailwind CSS, анимации',
    chart_js_1: 'не использовался',
    chart_js_4: 'DOM-дерево, анимации',
    chart_js_5: 'фреймворк vue2/vue3',
    chart_js_6: 'react',
    chart_js_7: 'react + коммерческие проекты',
    chart_ts_6: 'первые проекты',
    chart_ts_7: 'registry20prod, stopwatchapp',
    chart_php_5: 'auth, cookies, SELECT * FROM',
    chart_php_6: 'вложенные запросы',
    chart_php_7: 'поддержка существующих проектов',
    chart_py_7: 'vpn-service: бот, сайт',
    chart_not_used: 'не использовался',
  },

  en: {
    // Navbar
    nav_main: 'Home',
    nav_experience: 'Experience',
    nav_portfolio: 'Portfolio',
    nav_hobby: 'Hobbies',
    nav_contacts: 'Contacts',

    // Main page
    date_of_birth: 'Date of birth',
    age: 'Age',
    position: 'Position',
    position_value: 'Full-stack Developer',
    about_me: 'About me',
    work_experience: 'Work Experience',
    job_title: 'Position',
    from: 'from',
    to: 'to',
    present: 'present',
    education: 'Education',
    edu_1: "Master's — NEFU (M.K. Ammosov)",
    edu_2: 'Postgraduate — Herzen University',
    edu_3: 'Specialist — Herzen University',
    edu_4: 'Physics & Technology Lyceum',
    download_pdf: 'Download PDF (1 page)',

    // Experience page
    tech_stack: 'Tech Stack',
    frontend: 'Frontend',
    backend: 'Backend',
    tools: 'Tools',

    // Portfolio
    portfolio_title: 'Portfolio',
    desktop: 'Desktop',
    mobile: 'Mobile',
    open: 'Open',
    private_project: 'Private project',

    // Portfolio projects
    proj_finance_title: 'Finance & Planning Service',
    proj_finance_desc: 'Income/expense tracking, car maintenance scheduling, shopping list planning',
    proj_tenant_title: 'Tenant Portal',
    proj_tenant_desc: 'Portal for tenants with management features and meter readings',
    proj_vpn_title: 'VPN Service',
    proj_vpn_desc: 'VPN tunnel subscription management: bot, website and more',
    proj_accounting_title: 'Internal Accounting Service',
    proj_accounting_desc: 'Documentation, property and inventory tracking for internal use',
    proj_backend_title: 'Accounting Service Backend',
    proj_backend_desc: 'Server-side: authentication, API, database management',
    proj_timer_title: 'Timer',
    proj_timer_desc: 'Pet project — interactive timer with responsive design',
    proj_stopwatch_title: 'Stopwatch',
    proj_stopwatch_desc: 'Pet project — stopwatch application',
    proj_email_order_title: 'Order Email Templates',
    proj_email_order_desc: 'Responsive email templates for automated order notifications',
    proj_email_meter_title: 'Meter Reading Email Template',
    proj_email_meter_desc: 'Responsive email template for utility meter readings',

    // Portfolio types
    type_frontend: 'Frontend',
    type_backend: 'Backend',
    type_fullstack: 'Full-stack',
    type_email: 'Email',

    // Contacts
    send_email: 'Send an email',
    contact_whatsapp: 'Contact via WhatsApp',
    navigate_to: 'Get directions',

    // Hobby
    hobby_title: 'My Hobbies',

    // Chart tooltips
    chart_html_1: 'basic tags & styles',
    chart_html_2: 'using templates',
    chart_html_3: 'break',
    chart_html_4: 'semantic, responsive layout',
    chart_html_5: 'animations',
    chart_html_6: 'cross-browser development',
    chart_html_7: 'email templates, advanced layout',
    chart_css_1: 'inline styles',
    chart_css_2: 'flexbox containers',
    chart_css_3: 'break',
    chart_css_4: 'semantic, responsive layout',
    chart_css_5: 'CSS grid',
    chart_css_6: 'cross-browser development',
    chart_css_7: 'Tailwind CSS, animations',
    chart_js_1: 'not used',
    chart_js_4: 'DOM tree, animations',
    chart_js_5: 'Vue2/Vue3 frameworks',
    chart_js_6: 'React',
    chart_js_7: 'React + commercial projects',
    chart_ts_6: 'first projects',
    chart_ts_7: 'registry20prod, stopwatchapp',
    chart_php_5: 'auth, cookies, SELECT * FROM',
    chart_php_6: 'nested queries',
    chart_php_7: 'maintaining existing projects',
    chart_py_7: 'vpn-service: bot, website',
    chart_not_used: 'not used',
  }
}

export const useI18nStore = defineStore('i18n', {
  state: () => ({
    locale: 'ru',
  }),
  getters: {
    t: (state) => (key) => translations[state.locale]?.[key] || translations.ru[key] || key,
  },
  actions: {
    toggleLocale() {
      this.locale = this.locale === 'ru' ? 'en' : 'ru';
    },
  },
})

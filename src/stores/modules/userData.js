import { defineStore } from 'pinia'
import { useI18nStore } from './i18n'

const experienceData = {
  ru: [
    {
      organization: 'freelance',
      start_date: '2025',
      end_date: null,
      position: 'full-stack разработчик',
      responsibilities: 'разработка личного кабинета арендателя (React), сервис учета финансов и планирования (TypeScript/Vue), VPN-сервис с ботом и сайтом (Python)'
    },
    {
      organization: 'venture',
      start_date: '2024',
      end_date: '2025',
      position: 'front-end разработчик',
      responsibilities: 'поддержка действующих интернет-магазинов Планета Электро/Юником, доработка портала для внутреннего учета'
    },
    {
      organization: 'образовательные организации',
      start_date: '2021',
      end_date: '2024',
      position: 'преподаватель программирования',
      responsibilities: 'обучение детей школьного возраста программированию по направлениям: HTML/CSS/JS/PHP/MySQL/Java'
    },
  ],
  en: [
    {
      organization: 'freelance',
      start_date: '2025',
      end_date: null,
      position: 'Full-stack Developer',
      responsibilities: 'Tenant portal development (React), finance & planning service (TypeScript/Vue), VPN service with bot and website (Python)'
    },
    {
      organization: 'Venture Group',
      start_date: '2024',
      end_date: '2025',
      position: 'Frontend Developer',
      responsibilities: 'Maintaining e-commerce websites Planeta Electro/Unikom, developing internal accounting portal'
    },
    {
      organization: 'educational organizations',
      start_date: '2021',
      end_date: '2024',
      position: 'Programming Teacher',
      responsibilities: 'Teaching school-age children programming: HTML/CSS/JS/PHP/MySQL/Java'
    },
  ],
}

const hobbyData = {
  ru: [
    {
      name: 'Шитьё',
      description: 'Я приобрела бытовую швейную машинку Brother, а потом и оверлок. Шью для своих бытовых нужд: спортивный костюм, базовые черные кофточки, летние платья',
    },
    {
      name: 'Домашняя косметика',
      description: 'В какой-то период времени серьезно увлекалась варением бальзамов для губ и созданием бомбочек для ванн. Отдала свою продукцию на реализацию и сама стояла на ярмарках города',
    },
    {
      name: 'Водные походы',
      description: 'Однажды сходив на сплав по р. Буотама больше не смогла разлюбить этот вид отдыха, научилась грести веслами на рыбацкой надувной лодке и позже приобрела пакрафт, сходила в самостоятельные сплавы по р. Лена с Хатассов и Табаги до 203 мкр.',
    },
    {
      name: 'В планах',
      description: 'Мечтаю научиться паять, когда-нибудь создать какое-нибудь умное устройство',
    },
  ],
  en: [
    {
      name: 'Sewing',
      description: 'I bought a Brother sewing machine and later a serger. I sew for personal needs: sportswear, basic black tops, summer dresses',
    },
    {
      name: 'Homemade cosmetics',
      description: 'For a while I was seriously into making lip balms and bath bombs. I sold my products at local fairs and markets',
    },
    {
      name: 'River rafting',
      description: 'After my first rafting trip on the Buotama river, I fell in love with this activity. I learned to paddle on an inflatable boat, later bought a packraft, and went on solo trips on the Lena river',
    },
    {
      name: 'Future plans',
      description: 'I dream of learning to solder and someday building a smart device',
    },
  ],
}

export const useUserStore = defineStore('user', {
  state: () => ({
    userData: {
      name: 'Алена',
      last_name: 'Алексеева',
      second_name: 'Викторовна',
      name_en: 'Alena',
      last_name_en: 'Alekseeva',
      date_of_birth: '1991-07-22',
      photo: 'url',
      phone_number: '9142364278',
      email: 'alekseevaalena442@gmail.com',
      location: 'Якутск, мкр. Марха',
      location_en: 'Yakutsk, Russia',
    }
  }),
  actions: {
    // login(userData) {
    //   this.user = userData
    // },
    // logout() {
    //   this.user = null
    // }
  },
  getters: {
    userName: (state) => state.userData?.name,
    experience: () => {
      const i18n = useI18nStore()
      return experienceData[i18n.locale]
    },
    hobby: () => {
      const i18n = useI18nStore()
      return hobbyData[i18n.locale]
    },
    displayName: (state) => {
      const i18n = useI18nStore()
      return i18n.locale === 'en'
        ? `${state.userData.name_en} ${state.userData.last_name_en}`
        : `${state.userData.name} ${state.userData.last_name}`
    },
    displayLocation: (state) => {
      const i18n = useI18nStore()
      return i18n.locale === 'en' ? state.userData.location_en : state.userData.location
    },
  }
})
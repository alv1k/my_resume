import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    userData: {
      name: 'Алена',
      last_name: 'Алексеева',
      second_name: 'Викторовна',
      date_of_birth: '1991-07-22',
      photo: 'url',
      phone_number: '9142364278',
      email: 'alekseevaalena442@gmail.com',
      location: 'Якутск, мкр. Марха',
      experience: [ 
        {
          organization: 'Платформа',
          description: '',
          start_date: '2025',
          end_date: null,
          position: 'front-end разработчик',
          responsibilities: 'разработка личного кабинета арендателя'
        },
        {
          organization: 'venture',
          description: '',
          start_date: '2024',
          end_date: '2025',
          position: 'front-end разработчик',
          responsibilities: 'поддержка действующих интернет-магазинов Планета Электро/Юником, доработка портала для внутреннего учета'
        },     
        {
          organization: 'образовательные огранизации',
          description: '',
          start_date: '2021',
          end_date: '2024',
          position: 'преподаватель программирования',
          responsibilities: 'обучение детей школьного возраста программированию по направлениям: HTML/CSS/JS/PHP/MySQL/Java'
        },     
      ],
      hobby: [
        {
          name: 'Шитьё',
          description: 'Я приобрела бытовую швейную машинку Brother, а потом и оверлок. Шью для своих бытовых нужд: спортивный костюм, базовые черные кофточки, летние платья',
          tool: null,
          samples: null,
          link: null,
        },
        {
          name: 'Домашняя косметика',
          description: 'В какой-то период времени серьезно увелекалась варением бальзамов для губ и созданием бомбочек для ванн. Отдала свою продукцию на реализацию и саама стояла на ярмарках города',
          tool: null,
          samples: null,
          link: null,
        },
        {
          name: 'Водные походы',
          description: 'Однажды сходив на сплав по р. Буотама больше не смогла разлюбить этот вид отдыха, научилась грести веслами на рыбацкой надувной лодке и позже приобрела пакрафт, сходила в самостоятельные сплавы по р. Лена с Хатассов и Табаги до 203 мкр.',
          tool: null,
          samples: null,
          link: null,
        },
        {
          name: 'В планах',
          description: 'Мечтаю научиться паять, когда-нибудь создать какое-нибудь умное устройство',
          tool: null,
          samples: null,
          link: null,
        },
      ]
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
    userName: (state) => state.userData?.name
  }
})
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
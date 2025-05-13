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
          organisation: '',
          description: '',
          start_date: '',
          end_date: '',
          position: '',
          responsibilities: ''
        },      
        {
          organisation: '',
          description: '',
          start_date: '',
          end_date: '',
          position: '',
          responsibilities: ''
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
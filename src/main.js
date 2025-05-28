import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import TheMain from './pages/TheMain.vue'
import TheExperience from './pages/TheExperience.vue'
import TheContacts from './pages/TheContacts.vue'
import ThePortfolio from './pages/ThePortfolio.vue'
import TheHobby from './pages/TheHobby.vue'
const router = createRouter({
  routes: [
    {
      path: '/',
      component: TheMain
    },
    {
      path: '/experience',
      component: TheExperience
    },
    {
      path: '/contacts',
      component: TheContacts
    },
    {
      path: '/portfolio',
      component: ThePortfolio
    },
    {
      path: '/hobby',
      component: TheHobby
    },
  ],
  history: createWebHistory()
})
const pinia = createPinia()
const app = createApp(App)
app.use(router)
app.use(pinia)
app.mount('#app')
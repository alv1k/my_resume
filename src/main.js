import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import TheExperience from './pages/TheExperience.vue'
import TheContacts from './pages/TheContacts.vue'
import ThePortfolio from './pages/ThePortfolio.vue'
const router = createRouter({
  routes: [
    {
      path: '/',
      redirect: '/portfolio'
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
  ],
  history: createWebHistory()
})

const app = createApp(App)
app.use(router)
app.mount('#app')
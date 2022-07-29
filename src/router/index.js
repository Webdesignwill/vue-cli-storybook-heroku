import { createRouter, createWebHashHistory } from 'vue-router'
import LandingPage from '@/views/Landing'

const routes = [
  {
    path: '/',
    name: 'landing',
    component: LandingPage,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router

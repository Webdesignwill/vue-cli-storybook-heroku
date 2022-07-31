import LandingPage from '@/views/Landing'
import ShowPage from '@/views/Show'

const routes = [
  {
    path: '/',
    name: 'landing',
    component: LandingPage,
  },
  {
    path: '/show/:id',
    name: 'show',
    component: ShowPage,
  },
]

export default routes

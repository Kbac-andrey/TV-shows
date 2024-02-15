import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';
import TvShowDetails from '../components/TvShowDetails.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/details/:id/:name/:country/:premiered/:genre/:summary/:image/:rate',
      name: 'details',
      component: TvShowDetails,
    }
  ]
})

export default router

import { createRouter, createWebHistory } from 'vue-router'
import App from '../App.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: App,
      redirect: '/demo',
    },
    {
      path: '/demo',
      name: 'demo',
      component: () => import('../views/demo.vue')
    }
  ]
})

export default router

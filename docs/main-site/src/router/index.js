import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/example',
      name: 'example',
      component: () => import('@/views/Example.vue')
    },
    {
      path: '/documentation',
      name: 'documentation',
      component: () => import('@/views/Documentation.vue')
    }
  ]
})

export default router

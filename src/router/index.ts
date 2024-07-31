import { createRouter, createWebHistory } from 'vue-router'
import Essay from '@/views/EssayItems.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Essay
    },
  ]
})

export default router

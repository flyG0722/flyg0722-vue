import { createRouter, createWebHistory } from 'vue-router'
import room from '@/views/RoomChat.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: room
    },
  ]
})

export default router

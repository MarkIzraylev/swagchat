import { createRouter, createWebHistory } from 'vue-router'
const VHome = () => import('@/pages/home/ui/VHome.vue')

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: VHome,
    },
  ],
})

export default router
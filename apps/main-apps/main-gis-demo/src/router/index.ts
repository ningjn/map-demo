import {createRouter, createWebHashHistory, createWebHistory} from 'vue-router'
import Layout from "@/layout/Layout.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  // history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Layout,
      redirect: '/app/home',
      children: [
        {
          path: '/app/:id',
          name: '微应用',
          component: () => import('@/views/MicroAppView.vue')
        }
      ]
    },
  ]
})

export default router

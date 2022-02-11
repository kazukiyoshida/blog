import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import BlogTop from '../views/BlogTop.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: Home,
    children: [
      {
        path: 'about',
        component: About,
      },
      {
        path: 'blog',
        component: BlogTop,
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

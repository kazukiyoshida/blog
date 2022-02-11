import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import BlogTop from '../views/BlogTop.vue'
import BlogPost from '../views/BlogPost.vue'

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
      },
      {
        path: 'blog/:blogId',
        component: BlogPost,
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const HomeComponent = () => import('@/views/Home.vue')
const PostComponent = () => import('@/views/PostView.vue')
const WorkComponent = () => import('@/views/Works.vue')
const PageNotFound = () => import('@/views/PageNotFound.vue')

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: HomeComponent
  },
  {
    path: '/work',
    name: 'Work',
    component: WorkComponent
  },
  {
    path: '/work/:slug',
    name: 'Post',
    component: PostComponent
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'PageNotFound',
    component: PageNotFound
  }
]

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return savedPosition ? savedPosition : { left: 0, top: 0 }
  }
})

export default router

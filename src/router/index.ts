import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const HomeComponent = () => import('@/views/Home.vue')
const WorkComponent = () => import('@/views/Work.vue')
const PostComponent = () => import('@/views/PostView.vue')

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
    path: '/posts/:slug',
    name: 'post',
    component: PostComponent
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

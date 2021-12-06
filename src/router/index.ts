import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

Vue.use(VueRouter)

const HomeComponent = () => import('@/views/Home.vue')
const WorkComponent = () => import('@/views/Work.vue')
const PostComponent = () => import('@/views/PostView.vue')

const routes: Array<RouteConfig> = [
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

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

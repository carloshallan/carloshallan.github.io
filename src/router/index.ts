import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

Vue.use(VueRouter)

const HomeComponent = () => import('@/views/Home.vue')
const PostComponent = () => import('@/views/PostView.vue')
const WorkComponent = () => import('@/views/Works.vue')
const PageNotFound = () => import('@/views/PageNotFound.vue')

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
    path: '/work/:slug',
    name: 'Post',
    component: PostComponent
  },
  {
    path: '*',
    name: 'PageNotFound',
    component: PageNotFound
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router

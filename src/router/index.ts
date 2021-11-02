import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const HomeComponent = () => import('@/views/Home.vue')

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        component: HomeComponent,
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

export default router

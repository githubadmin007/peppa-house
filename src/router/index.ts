import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        redirect: '/Scheme'
    },
    {
        path: '/Scheme',
        redirect: '/Scheme/Manager'
    },
    {
        path: '/Scheme/Manager',
        component: () => import('../views/scheme/Manager.vue')
    },
    {
        path: '/Scheme/Editor/:schemeName',
        component: () => import('../views/scheme/Editor.vue')
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router

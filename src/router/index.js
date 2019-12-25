import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component: () => import('../views/Home')
    }, {
        path: '/《巨婴国》精选',
        component: () => import('../posts/2019-12-19/《巨婴国》精选')
    }, {
        path: '/《倩女幽魂Ⅱ》讽刺对白',
        component: () => import('../posts/2019-12-25/《倩女幽魂Ⅱ》讽刺对白')
    }
]

const router = new VueRouter({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes
})

export default router

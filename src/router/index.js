import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/About.vue')
  },
  {
    path: '/users',
    name: 'Users',
    component: () => import('@/views/Users.vue')
  },
  // Catch-all route for 404
  {
    path: '*',
    redirect: '/'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: '/',
  routes
})

// Navigation guard để debug
router.beforeEach((to, from, next) => {
  console.log('Router navigation:', { to: to.path, from: from.path })
  next()
})

export default router 
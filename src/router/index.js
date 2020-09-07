import Vue from 'vue'
import VueRouter from 'vue-router'
import Static from '../views/static.vue'
import Relative from '../views/relative.vue'
import Absolute from '../views/absolute.vue'
import Fixed from '../views/fixed.vue'
import Sticky from '../views/sticky.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'static',
    component: Static
  },
  {
    path: '/relative',
    name: 'Relative',
    component: Relative
  },
  {
    path: '/absolute',
    name: 'Absolute',
    component: Absolute
  },
  {
    path: '/fixed',
    name: 'Fixed',
    component: Fixed
  },
  {
    path: '/sticky',
    name: 'Sticky',
    component: Sticky
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

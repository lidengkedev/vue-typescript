import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/home.vue'
import Login from '../views/login.vue'
import Loayout from '../layout/default.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    redirect: '/home',
    component: Loayout,
    children: [
      {
        path: '/home',
        component: () => import('../views/home.vue'),
        meta: { title: '首页' }
      }, {
        path: '/user/list',
        component: () => import('../views/user/user-list.vue'),
        meta: { title: '用户列表', hidden: false, aside: true }
      }
    ]
  },
  {
    path: '/product',
    name: 'Product',
    component: Loayout,
    meta: { title: '商品', hidden: false, aside: false },
    children: [
      {
        path: '/product/list',
        component: () => import('../views/product/product-list.vue'),
        meta: { title: '商品列表', hidden: false, aside: true }
      },
      {
        path: '/product/order',
        component: () => import('../views/product/product-order.vue'),
        meta: { title: '商品订单', hidden: false, aside: true }
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.VUE_APP_WEBSITE_BASE),
  routes,
})

export default router

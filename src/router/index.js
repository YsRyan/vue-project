import { createRouter, createWebHashHistory } from 'vue-router'

import Home from '../pages/Home/Home.vue'
import Mine from '../pages/Mine/Mine.vue'
import Search from '../pages/Search/Search.vue'
import Order from '../pages/Order/Order.vue'
import Login from '../pages/Login/Login.vue'

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/home', component: Home, meta: { isShowFooter: true } },
    { path: '/mine', component: Mine, meta: { isShowFooter: true } },
    { path: '/order', component: Order, meta: { isShowFooter: true } },
    { path: '/search', component: Search, meta: { isShowFooter: true } },
    { path: '/', redirect: '/home' },
    { path: '/login', component: Login }
  ]
})

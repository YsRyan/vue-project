import Vue from 'vue'
import Router from 'vue-router'

import Home from '../pages/Home/Home'
import Mine from '../pages/Mine/Mine'
import Search from '../pages/Search/Search'
import Order from '../pages/Order/Order'
import Login from '../pages/Login/Login'

Vue.use(Router)

export default new Router({
     routes:[
         {
             path:'/home',
             component:Home,
             meta:{
                 isShowFooter:true
             }
         },
         {
            path:'/mine',
            component:Mine,
            meta:{
                isShowFooter:true
            }
        },
        {
            path:'/order',
            component:Order,
            meta:{
                isShowFooter:true
            }
        },
        {
            path:'/search',
            component:Search,
            meta:{
                isShowFooter:true
            }
        },
        {
            path:'/',
            redirect:'/home'
        },
        {
            path:'/login',
            component:Login
        }
     ]
})

// import Vue from 'vue'
// import Router from 'vue-router'
// import home from "../components/home"
// Vue.use(Router)
//
// export default new Router({
//   mode:'history',
//   routes: [
//     {
//       path: '/',
//       name: 'home',
//       component: home,
//       children:[
//
//
//       ]
//     },
//     {
//       path:'/reader/:bookid',
//       name:'reader',
//       component: resolve => require(['@/components/readerPages/reader'], resolve),
//     },
//
//   ]
// })
import Vue from 'vue'
import Router from 'vue-router'
import bookinfo from "../components/pages/bookinfo"
import myBooks from  '../components/myBooks'

import reader from  "../components/readerPages/reader"
import category from "../components/category"
import rank from '../components/bookrank'
import ranklist from '../components/bookranklist'
import categorylist from "../components/categorylist"
import me from "../components/me"
import home from "../components/home"
import search from "../components/search"
Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component:  resolve => require(['@/components/home'], resolve),
      children:[
        {
          path:'/',
          name:'me',
          component: resolve => require(['@/components/me'], resolve),
        },
        {
          path: '/myBooks',
          name: 'myBooks',
          component: resolve => require(['@/components/myBooks'], resolve),
        },
        {
          path:'/bookinfo/:bookid',
          name:'bookinfo',
          component: resolve => require(['@/components/pages/bookinfo'], resolve),

        },
        {
          path:'/category',
          name:'category',
          component: resolve => require(['@/components/category'], resolve),
        },
        {
          path:'/rank',
          name:'rank',
          component: resolve => require(['@/components/bookrank'], resolve),
        },
        {
          path:'/ranklist/:rankid',
          name:'ranklist',
          component: resolve => require(['@/components/bookranklist'], resolve),
        },
        {
          path:'/categorylist',
          name:'categorylist',
          component: resolve => require(['@/components/categorylist'], resolve),
        },
        {
          path:'/search',
          name:'search',
          component: resolve => require(['@/components/search'], resolve),
        }

      ]
    },
    {
      path:'/reader/:bookid',
      name:'reader',
      component:reader,
    },

  ]
})

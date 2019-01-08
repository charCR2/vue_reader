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
import search from "../components/search"
Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
        {
          path:'/',
          name:'me',
          component: resolve => require(['@/components/me'], resolve),
          meta:{
            keepAlive:false
          }
        },
        {
          path: '/myBooks',
          name: 'myBooks',
          component: resolve => require(['@/components/myBooks'], resolve),
          meta:{
            keepAlive:true
          }

        },
        {
          path:'/bookinfo/:bookid',
          name:'bookinfo',
          component: resolve => require(['@/components/pages/bookinfo'], resolve),
          meta:{
            keepAlive:false
          }
        },
        {
          path:'/category',
          name:'category',
          component: resolve => require(['@/components/category'], resolve),
          meta:{
            keepAlive:true
          }
        },
        {
          path:'/rank',
          name:'rank',
          component: resolve => require(['@/components/bookrank'], resolve),
          meta:{
            keepAlive:true
          }
        },
        {
          path:'/ranklist/:rankid',
          name:'ranklist',
          component: resolve => require(['@/components/bookranklist'], resolve),
          meta:{
            keepAlive:true
          }
        },
        {
          path:'/categorylist',
          name:'categorylist',
          component: resolve => require(['@/components/categorylist'], resolve),
          meta:{
            keepAlive:true
          }
        },
        {
          path:'/search',
          name:'search',
          component: resolve => require(['@/components/search'], resolve),
          meta:{
            keepAlive:false
          }
        },
        {
          path:'/reader/:bookid',
          name:'reader',
          component: resolve => require(['@/components/readerPages/reader'], resolve),
          meta:{
            keepAlive:false,
            isShowFoot:false
          }
        }
  ]
})

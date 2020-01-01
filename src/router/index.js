import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import BootstrapVue from 'bootstrap-vue'
// import Brazil from '../views/Brazil.vue'
// import Hawaii from '../views/Hawaii.vue'
// import Jamaica from '../views/Jamaica.vue'
// import Panama from '../views/Panama.vue'

Vue.use(VueRouter,BootstrapVue)

const routes = [
 
  {
    path: '/',
    name: 'home',
    component: Home,
    props:true,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
},  

  {
    path:'/brazil',
    name:'brazil',
    component:() => import(/* webpackChunkName: "brazil" */ "../views/Brazil.vue")
  },
  {
    path:'/hawaii',
    name:'hawaii',
    component:() => import(/* webpackChunkName: "hawaii" */ "../views/Hawaii.vue"),
  },
  
  {
    path:'/jamaica',
    name:'jamaica',
    component:() => import(/* webpackChunkName: "jamaica" */ "../views/Jamaica.vue"),
  },
  {
    path:'/panama',
    name:'panama',
    component:() => import(/* webpackChunkName: "panama" */ "../views/Panama.vue"),
  },
  {
    path:"/details/:slug",
    name:"DestinationDetails",
    component:()=>import(/* webpackChunckName: "DestinationDetails"*/"@/views/DestinationDetails.vue"),
    props:true,
  }
  
]

const router = new VueRouter({
  routes,
  mode: 'history',
  linkExactActiveClass:"vue-school-active-class",
})

export default router


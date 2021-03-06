import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import BootstrapVue from 'bootstrap-vue'
// import Brazil from '../views/Brazil.vue'
// import Hawaii from '../views/Hawaii.vue'
// import Jamaica from '../views/Jamaica.vue'
// import Panama from '../views/Panama.vue'
import store from '@/store.js';

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
    path:"/destination/:slug",
    name:"DestinationDetails",
    component:()=>import(/* webpackChunckName: "DestinationDetails"*/"@/views/DestinationDetails.vue"),
    props:true,
    children:[
      {
        path:":experienceSlug",
        name:"experienceDetails",
        component:()=>import(/* webpackChunckName: "experienceDetails"*/"@/views/ExperienceDetails.vue"),
        props:true,
      }
    ],
    beforeEnter: (to, from, next) => {
      const exists = store.destinations.find(
        destination =>  destination.slug === to.params.slug
      )
      if(exists)
      {
        next()
      }else{
        next({name: "notFound"})
      }
    }
  },
  {
    path:"/user",
    name:"user",
    component:()=>import(/*webpackChunckName: "User"*/"@/views/User.vue"),
    meta:{requiresAuth:true}
  },
  {
    path:'login',
    name:"login",
    component:()=>import(/*webpackChunckName: Login*/"@/views/Login.vue")
  },

  {
    path:"/404",
    alias:"*",
    name: "notFound",
    component:()=>import(/*webpackChunckName: "notFound"*/"@/views/NotFound.vue")
  },

  {
    path:"/invoices",
    name:"invoice",
    component:()=>import(/*webpackChunckName: "Invoice"*/"@/views/Invoices.vue"),
    meta:{requiresAuth:true}
  },
  
]

const router = new VueRouter({
  routes,
  mode: 'history',
  linkExactActiveClass:"vue-school-active-class",
  scrollBehavior(to,from,savedPosition)
  {
    if(savedPosition)
    {
      return savedPosition;

    }else{

      const position = {};

      if(to.hash)
      {
        position.selector = to.hash;
        if(to.hash === '#experience'){
          position.offset = {y:140}
        }
        if(document.querySelector(to.hash))
        {
          return position;
        }
        return false;
      }
    }
  }

});

router.beforeEach((to, from, next) => {
  // to and from are both route objects. must call `next`.
 
    if(to.matched.some(record=>record.meta.requiresAuth))
       // if(to.meta.requiresAuth)
    {
      if(!store.user){
          next({
            name:"login",
            query:{redirect: to.fullPath}
          });
      }else{
          next();
      }
    }else{
        next();
    }
})



export default router


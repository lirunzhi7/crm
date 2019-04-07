import Vue from 'vue'
import Router from 'vue-router'
 

Vue.use(Router)

export default new Router({
  routes: [
    { 
      path: '/login',
      component: () => import('./components/login/login.vue')
    },
    {
      path:'/',
      component:()=>import('./components/home/home.vue'),
      redirect:'/home',
      children:[
        {
          path:'/home/table',
          component: ()=>import('./components/home/table.vue'),
        },
        {
          path:'/home/info',
          component:()=>import('./components/home/info.vue'),
        }
      ]
    }
  ]
})

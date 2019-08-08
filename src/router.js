import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
import Register from './views/Register.vue'
import Home_car from './components/Home_car.vue'
import Carousel from './components/Carousel1.vue'

Vue.use(Router)

export default new Router({
  routes: [
     {path: '/home',name: 'home',component: Home},
     {path: '/about',name: 'about',component: () => import('./views/About.vue')},
     {path:'/login',name:'login',component:Login},
     {path:'/register',name:'register',component:Register},
     {path:'/homecar',name:'home_car',component:Home_car},
     {path:'/carousel',name:'carousel',component:Carousel}
  ],
  
  
})

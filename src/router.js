import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'
import Login from './views/Login.vue'
import Register from './views/Register.vue'
import NewsList from './views/News_list.vue'
import NewsDetail from  './views/NewsDetail.vue'
import BrandStory from './views/BrandStory.vue'
// import ShopCart from './components/shop_cart.vue'
import Cart from './views/cart.vue'
// import Home_car from './components/Home_car.vue'
 import Carousel from './components/Carousel1.vue'
// import Index_details from './components/Index_details.vue'
// import News from './components/News.vue'

Vue.use(Router)

export default new Router({
  routes: [
    //  页面面路由接口
    //  {path: '/home',name: 'home',component: Home},
    //  {path:'/',name:'',component:ShopCart},
     {path:'/',name:'',component:Cart},
     {path:'/login',name:'login',component:Login},
     {path:'/register',name:'register',component:Register},
     {path:'/newslist',name:'newslist',component:NewsList},
     {path:'/newsdetail',name:'newsdetail',component:NewsDetail},
     {path:'/brandstory',name:'brandstory',component:BrandStory},
     //测试路由
    //  {path: '/about',name: 'about',component: () => import('./views/About.vue')},
    //  {path:'/news',name:'news',component:News},
    //  {path:'/homecar',name:'home_car',component:Home_car},
    {path:'/carousel',name:'carousel',component:Carousel},
    //  {path:'/index_details',name:'index_details',component:Index_details},

  ],
  
  
})

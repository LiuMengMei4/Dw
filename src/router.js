import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'
import Login from './views/Login.vue'
import Register from './views/Register.vue'
import NewsList from './views/News_list.vue'
import NewsDetail from  './views/NewsDetail.vue'
import BrandStory from './views/BrandStory.vue'
import Cart from './views/cart.vue'
import Home from './views/Home.vue'

import Carousel from './components/Carousel1.vue'
import HeaderTransparent from './components/Header_transparent.vue'
Vue.use(Router)

export default new Router({
  routes: [
    //  页面面路由接口
     {path:'/',name:'',component:Home},
     {path:'/cart',name:'cart',component:Cart},
     {path:'/login',name:'login',component:Login},
     {path:'/register',name:'register',component:Register},
     {path:'/newslist',name:'newslist',component:NewsList},
     {path:'/newsdetail',name:'newsdetail',component:NewsDetail},
     {path:'/brandstory',name:'brandstory',component:BrandStory},
     //测试路由
    {path:'/carousel',name:'carousel',component:Carousel},
    {path:'/headertransparent',name:'headertransparent',component:HeaderTransparent},

  ],
  
  
})

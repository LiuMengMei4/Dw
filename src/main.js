import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// import './assets/css/carousel.css'
//引入axios
import axios from 'axios'
//使用elementUI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
//mint-ui
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI);
Vue.use(ElementUI);
Vue.prototype.axios=axios
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

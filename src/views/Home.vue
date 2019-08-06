<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>
<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Login from '@/views/Login.vue'
export default {
  name: 'home',
  //注册子组件
  components: {
    HelloWorld,
    Login
  }
  
}
</script>

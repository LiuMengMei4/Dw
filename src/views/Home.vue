<template>
  <div class="home">
      <homecar></homecar>
  </div>
</template>
<script>
// @ is an alias to /src
import Home_car from '../components/Home_car'
export default {
  name: 'home',
  //注册子组件
  components: {
      'homecar':Home_car
  }
  
}
</script>

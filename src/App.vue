<template>
  <div id="app">
      
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      <router-link to="/login">login</router-link>
      <router-link to='/register'>register</router-link>
    </div>
    <!-- //路由出口 -->
    <router-view/>
  </div>
</template>
<style>
*{box-sizing: border-box;}
h1,h2,h3,h4,h5,h6,p,div,ul,li,body{margin: 0;padding: 0;}
a{text-decoration: none;color:#00081c}
#app {
  /* font-family:serif,"Adobe Caslon Pro", 'Avenir', Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
#nav {
  padding: 30px;
}
#nav a {
  font-weight: bold;
  color: #00081c;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

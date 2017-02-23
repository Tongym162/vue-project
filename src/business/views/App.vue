<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
  import store from '../vuex/store'
  export default {
    store: store,
    components: {
    }
  }
</script>

<style>
  @import "../../assets/css/cssreset.min.css";
  @import "../../assets/fonts/iconfont.css";
  html,body {
    height: 100%;
  }

  /*body {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }*/
  #app {
    color: #2c3e50;
    max-width: 600px;
    font-family: Source Sans Pro, Helvetica, sans-serif;
  }

  #app a {
    color: #42b983;
    text-decoration: none;
  }

  .logo {
    width: 100px;
    height: 100px
  }
</style>

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
  @import "../../assets/fonts/iconfont.css";
  html,body {
    height: 100%;
  }
  body{
    background-color: #fff;
  }
  #app {
    color: #2c3e50;
    max-width: 600px;
    font-family: Source Sans Pro, Helvetica, sans-serif;
  }
  ul{
    list-style: none;
    padding: 0px;
    margin: 0px;
  }
  div{
    font-size: .14rem;
  }
</style>

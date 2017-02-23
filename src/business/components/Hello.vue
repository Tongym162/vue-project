<template>
  <div class="hello">
    <img class="logo" src="../../assets/logo.png">
    <h1>{{ msg }}</h1>
    <p>
      Welcome to your Vue.js app!
    </p>
    <div>
      <button class="btn" @click="incrementCounter">递加器</button>
      <p>当前值：{{getCount}}</p>
    </div>
    <div>
      <button class="btn" @click="addCustomer">新建客户</button>
    </div>

  </div>
</template>

<script>
import {incrementCounter} from '../vuex/actions'
import {getCount} from '../vuex/getters'
export default {
  data () {
    return {
      msg: 'Hello World!'
    }
  },
  vuex:{
    getters: {
      getCount
    },
    actions: {
      incrementCounter
    }
  },
  methods:{
    addCustomer(){
      this.$router.go({
        name: 'add'
      })
    },
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .hello{
    text-align: center;
  }
  h1 {
    color: #42b983;
    font-size: .24rem;
  }
  p{
    font-size: .18rem;
  }
  .btn{
    width: 75px;
    height: 24px;
    border-radius: 4px;
    border: solid 1px #bdbdbd;
    font-size: 12px;
    color: #9a9a9a;
    margin-right: 20px;
  }
</style>

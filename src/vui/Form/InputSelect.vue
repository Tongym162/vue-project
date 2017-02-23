<template>
    <div class="input-select">
      <div class="select-controls">
        <div class="item-value" @click="toggle">
          <span>请选择</span>
          <span class="iconfont icon-drop-down" v-show="!isShowPanel"></span>
          <span class="iconfont icon-drop-up" v-show="isShowPanel"></span>
        </div>
      </div>
      <div class="checkbox-panel" v-show="isShowPanel">
        <ul>
          <li v-for="item in list">{{item.name}}</li>
        </ul>
      </div>
    </div>
</template>
<style scoped>
  .input-select{
    display: inline-block;
    position: relative;
  }
  .checkbox-panel{
    background: rgba(26, 32, 55, .69);
    color: #fff;
    font-size: 14px;
    width: 100px;
    position: absolute;
    z-index: 100;
    border-radius: 2px;
  }
  .checkbox-panel ul li{
    height: 31px;
    line-height: 31px;
    border-bottom: 1px solid rgba(255, 255, 255, .3);
    padding: 0 16px;
    width: 100%;
  }
</style>
<script>

  export default{
      data(){
          return{
            list: [
              {
                name: "所有客户",
                value: "all"
              },
              {
                name: "重要客户",
                value: "import"
              },
              {
                name: "普通客户",
                value: "geneal"
              }
            ],
            isShowPanel: false, //是否显示面板
          }
      },
      props:{
        data: {

        }
      },
      components:{

      },
      methods: {
        toggle(){
          this.isShowPanel = !this.isShowPanel;
        }
      }
  }
</script>

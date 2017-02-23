<template>
    <div class="input-select">
      <div class="item-value" :class="{'active':isShowPanel}"  @click="toggle">
        <span class="item-placeholder">请选择</span>
        <span class="iconfont icon-drop-down" v-show="!isShowPanel"></span>
        <span class="iconfont icon-drop-up" v-show="isShowPanel"></span>
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
    vertical-align: middle;
    font-size: .26rem;
  }
  .checkbox-panel{
    background: rgba(26, 32, 55, .69);
    color: #fff;
    font-size: 14px;
    width: 100px;
    position: absolute;
    z-index: 100;
    border-radius: 2px;
    padding: 0 4px;
  }
  .checkbox-panel ul li{
    height: 31px;
    line-height: 31px;
    border-bottom: 1px solid rgba(255, 255, 255, .3);
    padding: 0 16px;
    width: 100%;
  }
  .item-value{
    display: inline-block;
    vertical-align: middle;
    font-size: 12px;
    position: relative;
    border-bottom: 1px solid #ecedf0;
    padding: 4px;
    min-width: 100px;
    margin-bottom: 4px;
  }
  .item-placeholder{
    display: inline-block;
    width: 80px;
  }
  .item-value.active{
    border-bottom: 1px solid #3cbaff;
  }
  .item-value.active .icon-drop-up{
    color: #3cbaff;
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

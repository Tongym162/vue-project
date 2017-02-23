<template>
    <div>
      <span class="item-label">省市区：</span>
      <input-select></input-select>
    </div>
</template>
<style scoped>
  .item-label{
    font-size: .12rem;
    text-align: left;

  }
</style>
<script>
    import InputSelect from './../../vui/Form/InputSelect.vue'
    export default{
        data(){
            return{
                msg:'hello vue'
            }
        },
        components:{
          InputSelect,
        }
    }
</script>

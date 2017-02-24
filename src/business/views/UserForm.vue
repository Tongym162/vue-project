<template>
    <div>
      <!--自定义select组件-->
      <input-select :data="data"
                    @event-custom-selected="selected"></input-select>
      <!--省市区选择器-->
    </div>
</template>
<style scoped>
</style>
<script>
    import InputSelect from 'vui/Form/InputSelect.vue'
    export default{
        data(){
            return{
              //select数据
              data: {
                name: "客户等级",
                required: true,
                placeholder: "请选择",
                value: "",
                item: [
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
                  },
                  {
                    name: "VIP客户",
                    value: "VIP"
                  }
                ],
              },
            }
        },
        methods:{
          selected(value){
            console.log("selected-value",value);
          }
        },
        components:{
          InputSelect,
        }
    }
</script>

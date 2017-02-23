<style lang="css" scoped>

.city-item {
    cursor: pointer;
}

.input-city {
  position: relative;
    moz-user-select: -moz-none;
    -moz-user-select: none;
    -o-user-select: none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
    cursor: pointer;
    clear: both;
}
.input-city .icon-drop-up{
  color: #3cbaff;
}
.input-city .item-value{
  padding: 4px;
  border-bottom: 1px solid #ecedf0;
}
.edit-form-content .input-city .item-value{
  border-bottom: 1px solid hsla(0,0%,100%,.7);
}
.edit-form-content .input-city .item-value.active{
  border-bottom: 1px solid #3cbaff;
}
.input-city .icon-drop-down, .input-city  .icon-drop-up{
    float: right;
    margin-top: 4px;
}
.v-cp-box {
    position: fixed;
    top: 30px;
    left: 50px;
    width: 357px;
    background: rgba(26,32,55,0.69);
    border-radius: 2px;
    z-index: 9999;
    color: #fff;
}

.v-cp-header-box {
    line-height: 21px;
    /*background-color: #d8e1e9;*/
    /*background: rgba(26,32,55,0.69);*/
}

.v-cp-header-box:before,
.v-cp-header-box:after,
.v-cp-content:before,
.v-cp-content:after {
    content: '.';
    display: block;
    height: 0;
    visibility: hidden;
    clear: both;
}

.v-cp-header-box ul {
    float: left;
}

.v-cp-header-box li {
    position: relative;
    float: left;
    width: 119px;
    text-align: center;
    /*background-color: #d8e1e9;*/
    /*background: rgba(26,32,55,0.69);*/
    cursor: pointer;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}

.v-cp-header-box .v-cp-split-line {
    position: absolute;
    top: 0;
    left: -4px;
    width: 6px;
    color: #c0c7d4;
    font-weight: normal;
}

.v-cp-header-box li.active {
    /*background-color: #ecf0f4;*/
    /*background: rgba(26,32,55,0.69);*/
    color: #49bbfc;
    text-decoration: underline;
}

.v-cp-content {
    width: 100%;
    font-size: 12px;
}

.v-cp-content ul {
    float: left;
}

.v-cp-content li {
    float: left;
    width: 70px;
    margin: 0 0 0 15px;
    line-height: 32px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}

.v-cp-content li span {
    padding: 2px 4px;
    cursor: pointer;
}

.v-cp-content li span:hover {
    color: #49bbfc;
}

.v-cp-arrow:before {}
.city-item.active{
  border-bottom: 1px solid #3cbaff;
}
</style>

<template lang="html">

<div class="input-city">
    <div class="input-controls">
        <span class="required"><span v-if="data.required">*</span></span>
        <span class="item-name">{{data.name}}</span><span>&nbsp;:</span>
        <div :class="{'active': show}" class="item-value city-item ev-city-item" @click.stop="toggle">
            <span class="checked-text" v-text="data.value" v-show="!showPlaceholder"></span>
            <span class="item-placeholder" v-text="data.placeholder" v-show="showPlaceholder"></span>
            <span class="iconfont icon-drop-up" v-show="show"></span>
            <span class="iconfont icon-drop-down" v-show="!show"></span>
        </div>
        <div class="item-warn">
            <span class="iconfont icon-warn" v-show="!valid"></span>
        </div>
    </div>
    <!-- 弹出city -->
    <div class="v-cp-box ev-v-cp-box" v-show="show" :style="[panelTop, panelLeft]">
        <div class="v-cp-header-box">
            <ul>
                <li class="{{isShowProvince ? 'active' : ''}}" @click.stop="clickProvinceTab"> <span>{{header.province}}</span> </li>
                <li class="{{isShowCity ? 'active' : ''}}" @click.stop="clickCityTab"> <span>{{header.city}}</span> <b class="v-cp-split-line ev-city-split-line" style="display: none;">|</b> </li>
                <li class="{{isShowDistrict ? 'active' : ''}}"  @click.stop="clickDistrictTab"> <span>{{header.district}}</span> <b class="v-cp-split-line ev-district-split-line" style="display: none;">|</b> </li>
            </ul>
        </div>
        <div class="v-cp-content" id="province-content" v-show="isShowProvince">
            <ul>
                <li v-for="item in provinces" data-value="{{item.value}}" title="{{item.name}}" @click.stop="clickProvince"><span>{{item.name}}</span></li>
            </ul>
        </div>
        <div class="v-cp-content" id="city-content" v-show="isShowCity">
            <ul>
              <li v-for="item in citys" data-value="{{item.value}}" title="{{item.name}}" @click.stop="clickCity"><span>{{item.name}}</span></li>
            </ul>
        </div>
        <div class="v-cp-content" id="district-content" v-show="isShowDistrict">
            <ul>
              <li v-for="item in districts" data-value="{{item.value}}" title="{{item.name}}" @click.stop="clickDistricts"><span>{{item.name}}</span></li>
            </ul>
        </div>
    </div>
</div>

</template>

<script>

// import cityJson from './citys';
// import CityUtil from './CityUtil';
let CityUtil = null;
export default {
    created() {
            if (this.data.placeholder) {
                this.showPlaceholder = true;
            }
            if(this.data.province || this.data.city || this.data.district){
              this.concatValue();
            }
        },
        props: {
            data: {
                require: true
            },
            validPromiseArray: Array
        },
        data() {
            return {
                showPlaceholder: false,
                show: false,
                valid: true,
                provinces: [], //省份
                citys: [{name:'请选择省份'}],//城市
                districts: [{name:'请选择城市'}],//县区
                isShowProvince: true,
                isShowCity: false,
                isShowDistrict: false,
                header: {
                  province: '',
                  city: '',
                  district: ''
                },
                panelTop: {
                  top: 0
                },
                panelLeft: {
                  left: 0
                },
            };
        },
        computed: {
          header(){
            var  obj = {
              province: '省份',
              city: '城市',
              district: '区县'
            }
            if($.trim(this.data.province)){
              obj.province = this.data.province;
            }
            if($.trim(this.data.city)){
              obj.city = this.data.city;
            }
            if($.trim(this.data.district)){
              obj.district = this.data.district;
            }
            return obj;
          }
        },
        ready(){
            if (this.validPromiseArray && this.data.validFuncArray) {
                let me = this;
                this.data.validFuncArray.map(function (func) {
                    me.validPromiseArray.push(func(me));
                });
            }
            if (this.data.value) {
                this.text=this.data.value;
            }
            let me = this;
            if(!CityUtil){
              require.ensure(['./CityUtil'],(require)=>{
                CityUtil = require('./CityUtil');
                me.provinces = CityUtil.getProvinces();
              });
            }else{
                me.provinces = CityUtil.getProvinces();
            }
        },
        attached() {},
        methods: {
            toggle() {
                var $ele = $('.ev-city-item');
                if($ele && $ele.length > 0){
                  var x = $ele.offset().left - 30,
                			y = $ele.offset().top;
                	var offsetHeight= $ele.get(0).offsetHeight;
                  this.panelTop.top = (y + offsetHeight) + 'px';
                  this.panelLeft.left = x + 'px';
                }
                this.show = !this.show;
            },
            concatValue(){
              this.data.value = this.data.province + ' ' + this.data.city + ' ' + this.data.district;
              if($.trim(this.data.value)){
                this.showPlaceholder = false;
              }else{
                this.showPlaceholder = true;
              }
            },
            //点击省份
            clickProvince(e){
              if(!CityUtil){
                return;
              }
              var $target = $(e.target);
              var value = $target.data('value') + '';
              if(!value || value == 'undefined'){
                $target = $target.closest('li');
                value = $target.data('value');
              }
              // index = parseInt(index);

              //状态控制
              this.clickCityTab();

              //
              // this.citys = this.provinces[index].sub;
              this.citys = CityUtil.getCitysByValue(value);
              this.districts = [{name:'请选择城市'}];
              this.data.province = $target.attr('title');
              this.data.city = '';
              this.data.district = '';
              this.concatValue();
            },
            clickCity(e){
              var $target = $(e.target);
              var value = $target.data('value') + '';
              if(!value || value == 'undefined'){
                $target = $target.closest('li');
                value = $target.data('value');
              }
              // index = parseInt(index);

              //状态控制
              this.clickDistrictTab();

              //更新县区信息
              // this.districts = this.citys[index].sub;
              this.districts = CityUtil.getDistrictsByValue(value);
              this.data.city = $target.attr('title');
              this.data.district = '';
              this.concatValue();
              if(!this.districts){//没有下级县区
                this.districts = [{name:'请选择城市'}];
                this.show = false;
                this.resetState();
              }

            },
            clickDistricts(e){
              var $target = $(e.target);
              var value = $target.data('value') + '';
              if(!value || value == 'undefined'){
                $target = $target.closest('li');
              }
              this.data.district = $target.attr('title');
              this.concatValue();
              this.show = false;
              this.resetState();
            },
            resetState(){
              this.clickProvinceTab();
            },
            clickProvinceTab(){
              this.isShowProvince = true;
              this.isShowCity = false;
              this.isShowDistrict = false;
            },
            clickCityTab(){
              this.isShowProvince = false;
              this.isShowCity = true;
              this.isShowDistrict = false;
            },
            clickDistrictTab(){
              this.isShowProvince = false;
              this.isShowCity = false;
              this.isShowDistrict = true;
            }
        },
        components: {},
        events: {
          'event-click-body'(){
            this.show = false;
          }
        }
};

</script>

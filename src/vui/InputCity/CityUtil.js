/*
* @desc 处理省市区的json文件
**/
import citysArray from './addressData.json';

module.exports = {
  //获取所有省份
  getProvinces(){
    var provinces = [];
    for(var i = 0, len = citysArray.length; i < len; i++){
      var item = citysArray[i];
      if(item && !item.parent){
        provinces.push(item);
      }
    }
    return provinces;
  },
  //根据省份的value值获取所有城市的信息
  getCitysByValue(value){
    return this.__getByValue(value);
  },
  //根据城市的value获取所有的区县信息
  getDistrictsByValue(value){
    return this.__getByValue(value);
  },
  __getByValue(value){
    var arr = [];
    value += '';
    for(var i = 0, len = citysArray.length; i < len; i++){
      var item = citysArray[i];
      if(item && item.parent == value){
        arr.push(item);
      }
    }
    return arr;
  }
};

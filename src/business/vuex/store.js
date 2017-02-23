/**
 * Created by kingdee on 2017/2/9.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import * as mType from './MutationType.js'

Vue.use(Vuex)

// 应用初始状态
const state = {
  count: 0,
}
// 定义所需的 mutations
const mutations = {
  [mType.INCREMENT](state, amount){
    "use strict";
    state.count += amount;

  }
}
// 创建 store 实例
export default new Vuex.Store({
  state,
  mutations
})

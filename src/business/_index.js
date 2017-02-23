/**
 * Created by kingdee on 2016/10/28.
 */
import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import App from './views/App.vue'
import routers from './routers'
import './../tools/prefixScript'

Vue.use(VueRouter)
Vue.use(VueResource)

Vue.http.options.headers = {
  'Accept': '*/*',
  'Content-Type':'application/json;charset=UTF-8'
};

//routing
var router = new VueRouter();

router.map(routers);

router.beforeEach(function () {
    //alert('初始化');
})

router.redirect({
    '*' : '/menu'
})

router.start(App,'#app')


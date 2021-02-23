import Vue from 'vue'
import Main from "./views/Main";
import router from './router'

//引入axios
import axios from "axios";
Vue.config.productionTip = false
//全局注册axios
Vue.prototype.$http = axios;
//解决前端跨域的问题
axios.defaults.baseURL = '/api'
new Vue({
  router,
  render: h => h(Main)
}).$mount('#app')

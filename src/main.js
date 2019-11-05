// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueAMap from 'vue-amap';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import { Script } from 'vm';
Vue.use(VueAMap);
//https://elemefe.github.io/vue-amap/#/zh-cn/introduction/install
// https://element.eleme.cn/#/zh-CN/component/installation
Vue.use(ElementUI);

Vue.config.productionTip = false






/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 引入jquery
import $ from "jquery"

Vue.config.productionTip = false

// 引入vant
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant)

// 引入element
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

// 引入海报
// import VueCanvasPoster from 'vue-canvas-poster'
// Vue.use(VueCanvasPoster)

// 引入axios
import axios from 'axios';
Vue.prototype.$axios = axios

// 引入vuex store
import Store from "./store/index"

// 引入font
import "../static/font/iconfont.css"
import "../static/font/iconfont.js"




/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
	store:Store,//注入vuex到全局组件
  components: {
		App,
	},
  template: '<App/>',
})

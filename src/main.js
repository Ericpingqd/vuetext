import Vue from 'vue'
import App from './App.vue'

import router from  './router/router.js';





import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
Vue.use(ViewUI); 

Vue.config.productionTip = false


import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI);

import './assets/css/common.css'


// import 'echarts/dist/extension/dataTool.min.js'

import axios from 'axios';
import VueAxios from 'vue-axios';
Vue.use(VueAxios, axios)

/*导入qs*/
import qs from 'qs';
/*全局绑定*/
Vue.prototype.$qs = qs;

/*引入mock数据*/
require('./mock/mock.js');



import '../font_auxjogeuxu/iconfont.js'
import '../font_auxjogeuxu/iconfont.css'

import '@/assets/icon/iconfont.css'
import '../font_4396150_dpzkliirotc/iconfont.css';

import * as echarts from 'echarts'
Vue.prototype.$echarts = echarts;
console.log(echarts)

new Vue({
  router,
  el: '#app',
  render: h => h(App)
});
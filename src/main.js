/**
 * main.js
 * author: jessie-zly
 * 2017/12/16
 * description: 入口文件
 */

/**
 * 模块引入
 */
import Vue from 'vue';
import App from './App.vue';


/**
 * 路由配置
 */
import VueRouter from 'vue-router'; // 链接路由
Vue.use(VueRouter); // 安装路由插件
import routes from './router.config'; // 引入路由配置

// 实例化路由对象
const router = new VueRouter(routes);


// 引入 animate
import 'vue2-animate/dist/vue2-animate.min.css';


// 引入状态管理
import store from './store';


// axios 配置
import axios from 'axios';

Vue.prototype.$http = axios;

// 请求之前  拦截器，显示loading
axios.interceptors.request.use(function (config) {
  store.dispatch('showLoading');
  return config;//config会在你拦截之后，继续请求
}, function (error) {
  return Promise.reject(error);//交给了catch处理
});

// 数据响应回来时做一个拦截，隐藏loading.....
axios.interceptors.response.use(function (response) {
  store.dispatch('hideLoading');
  return response;//给axios的then处理
}, function (error) {
  return Promise.reject(error);
});


//引入全局过滤器
import filters from './filters';
//
Object.keys(filters).forEach((key) => {
  return Vue.filter(key, filters[key])
});


// 引入 loading
import vueLoading from './components/common/AppLoading';

Vue.use(vueLoading);


// 实例化
new Vue({
  el: '#app',
  data: {
    menuNav: '菜单',
    titleNav: '苹果电影',
    userNav: '用户',
  },
  render: h => h(App),
  router, // 路由注册
  store, // 状态注册
});

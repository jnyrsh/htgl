import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
// import Echarts from 'echarts'
// import './assets/index.css'
// import './assets/rem'
// import './assets/reset.css'


// Echarts
// Vue.prototype.$echarts = Echarts

import "./permission"
// import "./permission1"


// vant
// import Vant from 'vant';
// import 'vant/lib/index.css';

// Vue.use(Vant);


// element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

// 消息提示的环境配置，是否为生产环境： // false 开发环境：Vue会提供很多警告来方便调试代码。 // true 生产环境：警告却没有用，反而会增加应用的体积
Vue.config.productionTip = process.env.NODE_ENV == "production";
// // 请求拦截器
// axios.interceptors.request.use(
//   config => {
//     // store.state.Loading = true
//     return config;
//   },
//   error => {
//     return Promise.error(error);
//   }
// );
// // 响应
// axios.interceptors.response.use(
//   response => {
//     // console.log(response)
//     // setTimeout(()=>{
//     // },2000)

//     // 如果返回的状态码为200，说明接口请求成功，可以正常拿到数据
//     // 否则的话抛出错误
//     if (response.status === 200) {
//       // store.state.Loading = false
//       return Promise.resolve(response.data);
//     } else {
//       return Promise.reject(response);

//     }
//   },
//   // 服务器状态码不是2开头的的情况
//   // 这里可以跟你们的后台开发人员协商好统一的错误状态码
//   // 然后根据返回的状态码进行一些操作，例如登录过期提示，错误提示等等
//   // 下面列举几个常见的操作，其他需求可自行扩展
//   error => {
//     if (error.response.status) {
//       return Promise.reject(error.response);
//     }
//   }
// );

Vue.prototype.$axios = axios

//全局路由守卫,进入组件之前触发
router.beforeEach((to, from, next) => {
  //判断路由是否设置title值，给组件添加标题内容
  // if (to.hasOwnProperty("meta")) {
  //   document.title = to.meta.title;
  // }

  next();
})



Vue.config.productionTip = false

new Vue({
  router,
  store,
  axios,
  render: h => h(App)
}).$mount('#app')

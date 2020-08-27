import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import FastClick from 'fastclick'
import toast from 'components/common/toast'
import VuelazyLoad from 'vue-lazyload'

Vue.config.productionTip = false

//添加事件总线
Vue.prototype.$bus = new Vue()
//安装toast插件
Vue.use(toast)
//解决移动端300ms延迟
FastClick.attach(document.body)
//使用懒加载插件
Vue.use(VuelazyLoad)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})

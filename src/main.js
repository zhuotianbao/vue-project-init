// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store/index.js'
import router from './router'
// import elementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
import { sync } from 'vuex-router-sync'
// 页面加载进度条
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
// 安装全局自定义组件
import Components from '@/components/index.js'
// mock数据
import initMockData from '../mock'
initMockData()

sync(store, router)

Vue.use(Components)

Vue.config.productionTip = false

// 全局安装elementUI
// Vue.use(elementUI)

router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
})

router.afterEach(to => {
  NProgress.done()
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

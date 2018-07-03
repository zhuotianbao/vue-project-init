/**
 * 自定义全局组件，注册为插件
 *
 * @format
 */
import Loading from './loading/index.js'

const components = [
  Loading
]

const install = Vue => {
  if (install.installed) return

  // 注册全局组件
  components.map(component => {
    Vue.component(component.name, component)
  })
  // 注册 api形式 调用组件
  Vue.prototype.$loading = Loading
  Vue.loading = Loading

  install.installed = true
}
export default {
  version: '1.0.0',
  install
}

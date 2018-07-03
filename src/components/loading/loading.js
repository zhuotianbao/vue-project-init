import Vue from 'vue'
import Loading from './loading.vue'
const LoadingConstructor = Vue.extend(Loading)

Loading.newInstance = properties => {
  const props = properties || {}

  const Instance = new LoadingConstructor({
    el: document.createElement('div'),
    propsData: props
  })

  const component = Instance.$mount()
  document.body.appendChild(component.$el)
  return component
}

export default Loading

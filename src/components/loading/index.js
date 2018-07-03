
import Loading from './loading.js'
let loadingInstance
function getloadingInstance (props) {
  return loadingInstance || (loadingInstance = Loading.newInstance(props))
}
function loading (options) {
  let instance = getloadingInstance(options)
  instance.visible = true
  instance.text = options.text || instance.text
  instance.mask = options.mask || instance.mask
}
Loading.show = function (props) {
  if (typeof props === 'string') props = { text: props }
  return loading(props)
}
Loading.hide = function () {
  loadingInstance.visible = false
}
Loading.remove = function () {
  loadingInstance.remove(() => (loadingInstance = null))
}
export default Loading

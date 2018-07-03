import axios from 'axios'
import Qs from 'qs'
// import {Message} from 'element-ui'
import jsonp from 'jsonp'
require('es6-promise').polyfill() // 兼容IE浏览器不支持Promise

// axios.defaults.baseURL =  ''
axios.defaults.timeout = 10000
// axios.defaults.withCredentials = true   // 表示跨域请求时是否需要使用凭证

// 全局响应请求拦截器
axios.interceptors.response.use(checkStatus, function (err) { // 请求超时或者网关报错
  checkError('请求超时,请重试')
  Promise.reject(err)
})

function checkStatus (response) {
  if (response.status >= 200 && response.status < 300) {
    notOk(response.data)
  } else {
    var error = new Error(response.statusText)
    error.response = response
    throw error
  }
  return response.data
}
function notOk (res) {
  if (res && res.errno) {
    checkError(res.errmsg)
  }
  if (res && res.errno === 101) { // 未登录跳转
    // location.href = res.data.jumpurl + '&jumpto=' + encodeURIComponent(location.href)
  }
}
function checkError (message) {
  // Message({
  //   showClose: true,
  //   message: message,
  //   type: 'error'
  // })
}

var request = (options) => {
  // 表单传值参数格式化
  options.body = Qs.stringify(options.body)
  return axios.request({
    headers: options.headers,
    url: options.url,
    method: options.method,
    data: options.body,
    params: options.params
  }).then(response => {
    return response
  }, err => {
    checkError(err.messge)
    throw err
  }).catch((error) => {
    checkError('请求失败')
    throw error
  })
}
// http请求方式
export var http = {}
var methods = ['get', 'post', 'put', 'delete']
methods.forEach(method => {
  http[method] = (url, params = {}, config = {}) => {
    let headers = {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
    headers = Object.assign({}, headers, config.headers)
    method = method.toUpperCase()
    if (method === 'GET') {
      return request({ url, params, method, headers, ...config })
    }
    return request({ url, body: params, method, headers, ...config })
  }
})

export function requestJsonp (url, options = null) {
  return new Promise((resolve, reject) => {
    jsonp(url, options, function (err, data) {
      if (err) {
        reject(err)
      } else {
        resolve(data)
      }
    })
  })
}
export default function plugin (Vue) {
  if (plugin.installed) {
    return
  }
  plugin.installed = true
  Object.defineProperties(Vue.prototype, {
    $http: {
      get () {
        let obj = {
          get: http['get'],
          post: http['post'],
          put: http['put'],
          delete: http['delete'],
          jsonp: requestJsonp
        }
        return obj
      }
    }
  })
}

import * as server from '../../../service/index.js'
import * as types from '../../mutation-types.js'
require('es6-promise').polyfill() // 兼容IE浏览器不支持Promise
export default {
  // 获取图片验证码
  async getUserInfo ({dispatch, commit, state}) {
    let res = await server.getUserInfo()
    if (res && res.errno === 0) {
      commit(types.USERINFO_UPDATE, {userinfo: res.data.userinfo})
    }
    return res
  },
  async getcity ({dispatch, commit, state}) {
    let res = await server.getcity()
    if (res && res.errno === 0) {
      commit(types.USERINFO_UPDATE, {userinfo: res.data.userinfo})
    }
    return res
  }
}

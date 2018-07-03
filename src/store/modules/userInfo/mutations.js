import { USERINFO_UPDATE } from '../../mutation-types.js'

export default {
  /*
  *更新各个state变量
  */
  [USERINFO_UPDATE] (state, payload) {
    Object.keys(payload).forEach((key) => {
      state[key] = payload[key]
    })
  }
}

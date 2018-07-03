import { http } from '../utils/request.js'

let urlBase = '/api/'

// 登录接口
export const getUserInfo = (options, config) => http.post(urlBase + 'getuserinfo', options, config)
export const getcity = (options, config) => http.post(urlBase + 'getcitys', options, config)

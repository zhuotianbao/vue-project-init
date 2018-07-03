/*
* 在满足白名单匹配下的URL，请求将会被拦截转为mock本地数据
*/
import Mock from 'mockjs'
import whilelist from './whilelist.js'
import userInfo from './data/userInfo'
import citys from './data/citys'

let mockData = {
	userInfo,
	citys
}

export default function () {
  // 拦截那些 URL 与此正则表达式匹配的 XHR 请求，并返回相应的模拟数据
  Object.keys(whilelist).forEach(url => {
  	Mock.mock(url, function (argument) {
	  	let dataKey = whilelist[url]
	  	let data = mockData[dataKey]
	  	return data
	  })
  })
}

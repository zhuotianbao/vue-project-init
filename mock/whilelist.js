/*
* 白名单。配置哪些接口要进行mock数据，哪些接口要proxy代理到远程服务的。
* key: 本地mock数据劫持的URL
* value: mock数据对应的json文件名
*/

let whilelist = {
	'/api/getuserinfo': 'userInfo',
	'/api/getcitys': 'citys'
}

export default whilelist

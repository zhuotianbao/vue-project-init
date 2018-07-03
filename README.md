# vue-project-init

## Build Setup
```
# install dependencies
npm install
# serve with hot reload at localhost:8080
npm run dev
# build for production and view the bundle analyzer report
npm run build --report
# deploy local code to remote services
npm run deploy
```

## 技术栈
webpack4 + vue + vue-router + vuex + axios + mockjs + eslint + less(引入全局变量)

## 升级到webpack4
###1、插件升级到对应版本或者最新版本
###2、更新配置文件
#### 2.1、webpack.dev.conf.js 文件
- `webpack.NamedModulesPlugin、webpack.NoEmitOnErrorsPlugin`，其功能webpack4已经默认配置，删除即可
- 设置`mode: 'development'`
#### 2.2、webpack.production.conf.js 文件
- `optimization.splitChunks`替代了`CommonsChunkPlugin`，RIP CommonsChunkPlugin参考文档(https://gist.github.com/sokra/1522d586b8e5c0f5072d7565c2bee693)
- `mode: 'production'`

## less->引入全局变量
```
在build/utils.js文件下配置
less: generateLoaders('less',{
  globalVars: getLessVariables('src/assets/css/variable.less') // 全局注入less变量
})
```

## `mock`本地数据和`devServer`的`proxy`代理公用
- 通过配置`mock/whilelist.js`白名单文件，可以自由配置哪些接口走本地`mock`哪些接口走代理到远程服务
- 通过`devServer`的`proxy`代理，则在`config/index.js`文件下，`proxyTable`进行相关的配置


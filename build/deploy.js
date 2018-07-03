require('shelljs/global')

const path = require('path')
const fs = require('fs')
const chalk = require('chalk')
const ora = require('ora')
const client = require('scp2')
const config = require('../config')

const serverRemoteConfig = {
  port: 22,
  host: '',
  username: '',
  password: '',
  path: ''
}

const spinner = ora('deploying....  ')

spinner.start()

// 将打包目录dist拷贝到远程服务器
const root = path.join(__dirname, 'dist')

console.log(chalk.yellow('\n  Start to deploying....\n'))

client.scp(root, serverRemoteConfig, function (err) {
  spinner.stop()
  if (err) {
    console.log(err)
  } else {
    console.log(chalk.green('\n  deploy finished'))
  }
})

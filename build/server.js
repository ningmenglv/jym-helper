const ora = require('ora')
const chalk = require('chalk')
const webpack = require('webpack')
const express = require('express')
const webpackDevMiddleware = require('webpack-dev-middleware')
const proxyMiddleware = require('http-proxy-middleware')
const connectHistoyApiFallback = require('connect-history-api-fallback')
const packageConfig = require('../package.json')
const hosts = require('../src/config/hosts.json')

let hotMiddleware = require('webpack-hot-middleware')
let webpackDevConf = require('./webpack.dev.conf')

module.exports = options => {
  const app = express()

  const serverConf = {
    port: 8004
  }

  const spinner = ora({
    spinner: 'clock',
    text: '本地开发环境 | 构建中...',
    interval: 50
  }).start()

  webpackDevConf = webpackDevConf(options)
  const compiler = webpack(webpackDevConf)

  // 可以将编译后的文件暂存到内存中的插件
  let devMiddleware = webpackDevMiddleware(compiler, {
    publicPath: webpackDevConf.output.publicPath,
    quiet: true,
    stats: {
      colors: true
    }
  })

  // Hot-reload 热重载插件
  hotMiddleware = hotMiddleware(compiler)

  // 当html-webpack-plugin template更改之后，强制刷新浏览器
  compiler.plugin('compilation', compilation => {
    compilation.plugin('html-webpack-plugin-after-emit', (data, cb) => {
      hotMiddleware.publish({ action: 'reload' })
      cb()
    })
  })

  app.use(connectHistoyApiFallback())
  app.use(devMiddleware)
  app.use(hotMiddleware)
  Object.keys(hosts[options.nodeEnv]).forEach(context => {
    let conf = hosts[options.nodeEnv][context]
    if (/^\/proxy\/dev\w+$/.test(conf)) {
      app.use(
        proxyMiddleware(conf, {
          target: hosts.clouddev[context],
          changeOrigin: true,
          pathRewrite: {
            ['^' + conf]: ''
          }
        })
      )
    }
  })

  devMiddleware.waitUntilValid(() => {
    spinner.succeed('本地开发环境 | 构建完成！')
    console.log(packageConfig.name + ' | 应用架设在 ' + chalk.green('http://localhost:' + serverConf.port))
  })

  app.listen(serverConf.port, err => {
    if (err) {
      spinner.fail('本地开发环境 | 发生错误：')
      console.log(err)
    }
  })
}

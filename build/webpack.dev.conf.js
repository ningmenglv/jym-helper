const path = require('path')
const webpack = require('webpack')
const webpackMerge = require('webpack-merge')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')

const styleLoader = require('./loader.style')
const webpackBaseConf = require('./webpack.base.conf')

module.exports = options => {
// 拼接我们的工作区路径为一个绝对路径
  const resolve = function(...dirs) {
    return path.join(__dirname, '../', ...dirs)
  }

  let webpackLocalConf = {
    output: {
      path: resolve('dist', options.nodeEnv),
      filename: 'assets/js/[name].min.js',
      publicPath: '/'
    },
    module: {
      rules: styleLoader({
        extract: false
      })
    },
    devtool: 'cheap-module-eval-source-map',
    plugins: [

      // HotModule 插件在页面进行变更的时候只会重回对应的页面模块，不会重绘整个 html 文件
      new webpack.HotModuleReplacementPlugin(),

      // 显示模块的相对路径
      new webpack.NamedModulesPlugin(),

      // 使用了 NoErrorsPlugin 后页面中的报错不会阻塞，但是会在编译结束后报错
      new webpack.NoEmitOnErrorsPlugin(),

      // webpack错误信息提示插件
      new FriendlyErrorsPlugin()
    ]
  }
  webpackLocalConf = webpackMerge(webpackBaseConf(options), webpackLocalConf)

  Object.keys(webpackLocalConf.entry).map(item => {
    webpackLocalConf.entry[item] = [resolve('build', 'client')].concat(webpackLocalConf.entry[item])
  })

  return webpackLocalConf
}

const path = require('path')
const styleLoader = require('./loader.style')
const packageConfig = require('../package.json')
const webpackBaseConf = require('./webpack.base.conf')
const webpack = require('webpack')
const webpackMerge = require('webpack-merge')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const CompressionWebpackPlugin = require('compression-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = options => {

  // 拼接我们的工作区路径为一个绝对路径
  const resolve = function (...dirs) {
    return path.join(__dirname, '../', ...dirs)
  }

  let webpackProdConf = {
    output: {
      path: resolve('dist', options.nodeEnv),
      filename: 'assets/js/[name].[chunkhash:8].min.js',
      chunkFilename: 'assets/js/async[name].[chunkhash:8].min.js',
      publicPath: '/'
    },
    module: {
      rules: styleLoader()
    },
    devtool: false,
    plugins: [
      new CleanWebpackPlugin([options.nodeEnv], {
        root: resolve('dist'),
        verbose: false,
        dry: false
      }),

      new ExtractTextPlugin({
        filename: 'assets/css/[name].[contenthash:8].css',
        allChunks: true
      }),

      new webpack.HashedModuleIdsPlugin(),

      new webpack.optimize.CommonsChunkPlugin({
        name: 'common',
        chunks: ['main'],
        minChunks(module) {
          return (module.resource && module.resource.indexOf(resolve('node_modules')) >= 0)
        }
      }),

      new webpack.optimize.CommonsChunkPlugin({
        name: 'runtime',
        chunks: ['common']
      }),

      new webpack.optimize.OccurrenceOrderPlugin(),

      new webpack.optimize.ModuleConcatenationPlugin(),

      new webpack.optimize.UglifyJsPlugin({
        parallel: {
          cache: true, //  缓存加速
          workers: 4 // 2条进程加速
        },
        sourceMap: false, // 不生产源
        ie8: false,
        ecma: 5,
        // 删除所有的注释
        comments: false,
        compress: {
          // 在UglifyJs删除没有用到的代码时输出警告
          warnings: false,
          // 删除debugger语句
          drop_debugger: true,
          // 删除执行不到的代码
          dead_code: true,
          // foo["bar"] → foo.bar
          properties: true,
          // 链接连续的var语句
          join_vars: true,
          // 删除所有的 `console` 语句
          drop_console: true,
          // 内嵌定义了但是只用到一次的变量
          collapse_vars: true,
          // 提取出出现多次但是没有定义成变量去引用的静态值
          reduce_vars: true
        }
      }),

      new webpack.BannerPlugin({
        banner: 'jinyinmao.com.cn | [filebase] | v' + packageConfig.version
      }),

      new CompressionWebpackPlugin({
        asset: '[path].gz',
        algorithm: 'gzip',
        test: /\.(js|css|html|vue|png|jpg|gif|svg)$/,
        threshold: 10240,
        minRatio: 0.8
      })
    ]
  }

  if (options.nodeEnv === 'clouddev') {
    webpackProdConf.plugins.push(new BundleAnalyzerPlugin())
  }

  return webpackMerge(webpackBaseConf(options), webpackProdConf)
}

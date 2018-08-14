const path = require('path')
const webpack = require('webpack')
const packageConfig = require('../package.json')

const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = options => {
  // 拼接我们的工作区路径为一个绝对路径
  const resolve = function(...dirs) {
    return path.join(__dirname, '../', ...dirs)
  }

  let webpackBaseConf = {
    context: path.resolve(__dirname, '..'),
    entry: {
      main: resolve('src', 'config', 'index.js')
    },
    resolve: {
      // 自动补全的扩展名
      extensions: ['.js', '.jsx', '.vue', '.json'],
      modules: [resolve('src'), resolve('node_modules')],
      alias: {
        vue$: 'vue/dist/vue.esm.js',
        '@': resolve('src')
      }
    },
    module: {
      rules: [
        {
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          enforce: 'pre',
          include: resolve('src'),
          options: {
            formatter: require('eslint-friendly-formatter')
          }
        },
        {
          test: /\.js$/,
          include: resolve('src'),
          use: [
            {
              loader: 'babel-loader',
              options: {
                cacheDirectory: true,
                comments: false
              }
            }
          ]
        },
        {
          test: /\.vue$/,
          use: [
            {
              loader: 'vue-loader',
              options: {
                extractCSS: options.nodeEnv !== 'development'
              }
            }
          ]
        },
        {
          test: /\.json$/,
          loader: 'json-loader'
        },
        {
          test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 100,
                prefix: 'img',
                name: 'assets/img/[name].[hash:8].[ext]'
              }
            }
          ]
        },
        {
          test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 10000,
                prefix: 'fonts',
                name: 'assets/fonts/[name].[hash:8].[ext]'
              }
            }
          ]
        },
        {
          test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: 'assets/media/[name].[hash:8].[ext]'
          }
        }
      ]
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify(options.nodeEnv),
          WESITE_VERSION: JSON.stringify(packageConfig.version)
        },
        JYM: {
          webTitle: JSON.stringify(packageConfig.webTitle)
        }
      }),

      new HtmlWebpackPlugin({
        title: packageConfig.webTitle,
        template: resolve('src', 'config', 'index.html'),
        filename: 'index.html',
        inject: true,
        minify: {
          removeComments: true,
          collapseWhitespace: true
        }
      })
    ]
  }

  return webpackBaseConf
}

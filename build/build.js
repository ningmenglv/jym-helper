const ora = require('ora')
const webpack = require('webpack')

module.exports = (env) => {
  const excEnvBuild = env => {
    const webpackProdConf = require('./webpack.prod.conf')

    let options = {
      nodeEnv: env
    }

    const envList = {
      production: '生产环境',
      rc: '预发布环境',
      testing: '测试环境',
      clouddev: '云开发环境'
    }
    const envName = envList[options.nodeEnv]

    const spinner = ora({
      spinner: 'clock',
      text: envName + ' | 打包中...',
      interval: 50
    }).start()

    webpack(webpackProdConf(options), (err, stats) => {
      if (err) {
        spinner.fail(envName + ' | 发生错误：')
        throw err
      } else {
        process.stdout.write(stats.toString({
          colors: true,
          modules: false,
          children: false,
          chunks: false,
          chunkModules: false
        }) + '\n\n')
        spinner.succeed(envName + ' | 打包完成！')
      }
    })
  }

  process.env.NODE_ENV = env

  if (env === 'development') {
    require('./server')({
      nodeEnv: 'development'
    })
  } else {
    excEnvBuild(env)
  }
}

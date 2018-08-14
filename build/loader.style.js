const ExtractTextPlugin = require('extract-text-webpack-plugin')

const loaders = () => {

  const commonConfig = [{
    loader: 'css-loader',
    options: {
      minimize: true,
      discardComments: {
        removeAll: true
      }
    }
  }, {
    loader: 'postcss-loader'
  }]

  const loaders = [{
    test: /\.(c|s)ss$/,
    use: []
  }, {
    test: /\.less$/,
    use: [{
      loader: 'less-loader'
    }]
  }, {
    test: /\.stylus$/,
    use: [{
      loader: 'stylus-loader'
    }]
  }, {
    test: /\.styl$/,
    use: [{
      loader: 'stylus-loader'
    }]
  }]

  loaders.map(item => {
    item.use = commonConfig.concat(item.use)
  })
  return loaders
}

const styleLoaders = options => {
  options = Object.assign({
    extract: true
  }, options || {})

  let styleConfig = loaders()
  styleConfig.map(item => {
    if (options.extract) {
      item.use = ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: item.use
      })
    } else {
      item.use.unshift({
        loader: 'style-loader'
      })
    }
  })

  return styleConfig
}

module.exports = styleLoaders
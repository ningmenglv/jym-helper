import Axios from 'axios'

const CorsProxy = 'X-JYM-CorsProxy-Url'
const CurrentHost = window.location.protocol + '//' + window.location.host
const bVersion = parseFloat(
  window.navigator.userAgent.replace(/.+(MSIE (\S+);).+/, '$2')
)

const parseUrl = url => {
  const protocol = url.replace(/^(http|https):\/\/.+$/, '$1')
  const address = url.replace(/^(http|https):\/\/(.+)$/, '$2')
  const host = address.substring(0, address.indexOf('/'))
  const path = address.substr(address.indexOf('/')).replace('?', '&')

  return {
    host: protocol + '://' + host,
    path
  }
}

// API文档地址https://github.com/mzabriskie/axios
const Http = (Vue, options) => {
  Axios.defaults.timeout = 10000

  /**
   * 授权参数传递
   * @param {Boolean} notAuthJump   不未授权跳转到登录页       默认:false(跳转)
   * @param {Boolean} addAuth       是否添加授权访问            默认:false(不授权)
   */

  // 请求拦截器
  Axios.interceptors.request.use(
    config => {
      const token = Vue.prototype.$Auth.get()
      if (config.addAuth && token) {
        config.headers.common[Vue.prototype.$Constant.tokenName] = token
      }
      if (!window.isNaN(bVersion) && bVersion <= 9) {
        const urls = parseUrl(config.url)
        config.url = CurrentHost + '/proxy?targetUrl=' + urls.path
        config.headers.common[CorsProxy] = urls.host
      }
      return config
    },
    err => Promise.reject(err)
  )

  // 响应拦截器
  Axios.interceptors.response.use(
    config => {
      return {
        body: config.data,
        status: {
          code: config.status,
          message: config.statusText
        },
        headers(name) {
          return config.request.getResponseHeader(name)
        }
      }
    },
    err => {
      if (!err.response) {
        Vue.prototype.$Plugin.notify.error({
          title: '网络异常',
          message: '请稍候重试！'
        })
      } else {
        Vue.prototype.$Plugin.notify.error({
          title: '数据获取失败',
          message: '请稍候重试！',
          customClass: 'messageColor'
        })
      }
      return Promise.reject(err)
    }
  )

  return Axios
}

export default Http

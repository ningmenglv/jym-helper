/**
 * URL操作库
 */

/**
 * 获取URL的全部参数
 * @method  getUrlParams
 * @param   {String}                url [路径地址]
 * @return  {Array}                 [参数值数组]
 * @date    2017-09-07T17:16:25+080
 * @version v0.0.1
 */
const getUrlParams = url => {
  url = url.replace(/^((http|https):\/\/|\/)\S+\?(\S+)$/, '$3')
  url = url.indexOf('?') === -1 ? (url.indexOf('=') !== -1 ? url : '') : ''
  let params = url.split('&')
  return (params[0].length > 1 ? params : []).map(item => {
    let tmap = item.split('=')
    if (tmap.length > 1) {
      return {
        key: tmap[0],
        value: tmap[1]
      }
    }
  })
}

/**
 * 获取URL的参数
 * @method  getUrlParam
 * @param   {String}                name [参数名]
 * @return  {String}                [参数值]
 * @date    2017-07-12T09:54:41+080
 * @version v0.0.1
 */
const getUrlParam = (url, name) => {
  const params = getUrlParams(url)
  let param = ''
  params.map(item => {
    if (name == item.key) {
      param = item.value
    }
  })
  return window.decodeURIComponent(param)
}

/**
 * 设置URL对应的参数
 * @method  setUrlParam
 * @param   {String}                url   [路径地址]
 * @param   {String}                name  [参数名]
 * @param   {String}                value [参数值]
 * @date    2017-09-07T17:26:20+080
 * @version v0.0.1
 */
const setUrlParam = (url, name, value) => {
  const params = getUrlParams(url)
  url = params.length ? url.substr(0, url.indexOf('?')) : url
  url += '?' + name + '=' + window.encodeURIComponent(value)
  if (params.length > 0) {
    let str = ''
    params.map(item => {
      str += '&' + item.key + '=' + window.encodeURIComponent(item.value)
    })
    url += str
  }
  return url
}

export default {
  param: {
    get: getUrlParam,
    set: setUrlParam
  }
}

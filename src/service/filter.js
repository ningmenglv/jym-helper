/* 全局过滤器 */
export default (Vue, options) => {
  const filter = (name, fn) => {
    name = 'JYM_' + name
    Vue.filter(name, fn)
    console.info('(全局)过滤器【' + name + '】开始挂载')
  }

  /* 金钱舍取 */
  filter('parseNum', val => {
    return Vue.prototype.$Utils.parse.parseNum(val)
  })
  // 匹配日期
  filter('parseDate', val => {
    return Vue.prototype.$Utils.parse.parseDate(val)
  })
  // 数字千分位千分位分隔符
  filter('currency', (val, currency, decimals) => {
    return Vue.prototype.$Utils.parse.currency(val, currency, decimals)
  })
}

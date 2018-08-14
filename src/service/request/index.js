import Common from './common'

export default (Vue, options) => {
  const requestAll = (...nums) => {
    const $Http = Vue.prototype.$Http
    return new Promise((resolve, reject) => {
      $Http
        .all(nums)
        .then(
          $Http.spread((...res) => {
            resolve(res)
          })
        )
        .catch(err => reject(err))
    })
  }

  return {
    common: Common(Vue, options),
    all: requestAll
  }
}

import Cookies from 'js-cookie'

// Auth
const Auth = (Vue, options) => {
  const Constant = Vue.prototype.$Constant
  const tokenName = Constant.tokenName
  const iTokenName = 'X-JYM-TOKEN'
  const authObj = {
    path: '/',
    domain: Constant.env === 'development' ? '' : '.jinyinmao.com.cn'
  }
  return {
    get() {
      return Cookies.get(tokenName) || Cookies.get(iTokenName)
    },
    set(data) {
      Cookies.set(tokenName, data, authObj)
      Cookies.set(iTokenName, data, authObj)
    },
    remove() {
      Cookies.remove(tokenName, authObj)
      Cookies.remove(iTokenName, authObj)
      options.store.commit('setLoginStatus', false)
    }
  }
}

export default Auth

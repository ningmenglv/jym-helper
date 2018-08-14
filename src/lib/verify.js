const verfiy = {
  isIE9() {
    if (parseFloat(window.navigator.userAgent.replace(/.+(MSIE (\S+);).+/, '$2')) === 9) {
      return true
    }
    return false
  },
  isWeChat() {
    return /MicroMessenger/.test(window.navigator.userAgent)
  },
  email(val) {
    if (val != null) {
      val += ''
      return /\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}/.test(val)
    }
    return false
  },
  phone(val) {
    if (val != null) {
      val += ''
      return /0?(13|14|15|16|17|18)[0-9]{9}$/.test(val)
    }
    return false
  },
  IDCard(val) {
    let reg = /(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)|(^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{2}$)/
    if (val != null) {
      val += ''
      return reg.test(val)
    }
  },
  code(val) {
    if (val != null) {
      val += ''
      return /^\d{6}$/.test(val)
    }
  },
  password(val) {
    let reg = /^[a-zA-Z\d~!@#$%^&*_]{6,18}$/
    if (val != null) {
      val += ''
      return reg.test(val)
    }
  }
}

export default verfiy

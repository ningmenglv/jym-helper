const navigation = (router, opstions) => {
  return {
    returnUrl: '/',

    /* 页面跳转 */
    setPath(obj, newPage) {
      if (typeof obj === 'string' && /^(http|https):\/\/.+/.test(obj)) {
        newPage ? window.open(obj) : (window.location.href = obj)
        return
      }
      router.push(obj)
    },
    goLogin(path) {
      this.returnUrl = path || router.currentRoute.path
      this.setPath('/account/login')
    }
  }
}

export default navigation

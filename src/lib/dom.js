/* dom操作库 */

const dom = {
  // 禁止页面滑动
  pageScroll: (() => {
    const fn = e => {
      e.preventDefault()
      e.stopPropagation()
    }
    let islock = false

    return {
      lock() {
        // 加锁
        if (islock) return
        islock = true
        document.addEventListener('touchmove', fn)
      },
      unlock() {
        // 解锁
        islock = false
        document.removeEventListener('touchmove', fn)
      }
    }
  })(),
  // 字符串转DOM
  toElement(arg) {
    let objE = document.createElement('div')
    objE.innerHTML = arg
    return objE.childNodes[0]
  }
}

export default dom

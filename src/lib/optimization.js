// 防抖动函数
const debounce = (func, wait, immediate) => {
  let timeout
  return function() {
    const _self = this
    const args = arguments
    let later = () => {
      timeout = null
      if (!immediate) func.apply(_self, args)
    }
    let callNow = immediate & !timeout
    window.clearTimeout(timeout)
    timeout = setTimeout(later, wait)
    if (callNow) func.apply(_self, args)
  }
}

/**
 * 简单的节流函数
 * @method  throttle
 * @param   Function                func      [回调函数，在规定条件下执行一次]
 * @param   number                  wait      [没达到触发间隔，重新设定定时器的时间]
 * @param   number                  mustRun   [时间差，两次执行的时间差]
 * @return  Function                [闭包]
 * @date    2017-06-13T16:53:17+080
 * @version v0.0.1
 */
const throttle = (func, wait, mustRun) => {
  let timeout,
    startTime = new Date()
  return function() {
    const _self = this
    const args = arguments,
      curTime = new Date()
    window.clearTimeout(timeout)
    // 如果达到了规定的触发时间间隔，触发 handler
    if (curTime - startTime >= mustRun) {
      func.apply(_self, args)
      startTime = curTime
      // 没达到触发间隔，重新设定定时器
    } else {
      timeout = setTimeout(func, wait)
    }
  }
}

/**
 * 输入框获取焦点键盘弹出，控制输入框位于浏览器可视区域
 * @method  inputVisible
 * @date    2017-06-28T16:29:59+080
 * @version v0.0.1
 */
const inputVisible = () => {
  if (/Android/gi.test(navigator.userAgent)) {
    window.addEventListener('resize', function() {
      if (
        document.activeElement.tagName == 'INPUT' ||
        document.activeElement.tagName == 'TEXTAREA'
      ) {
        window.setTimeout(function() {
          document.activeElement.scrollIntoViewIfNeeded()
        }, 0)
      }
    })
  }
}

export default {
  debounce,
  throttle,
  inputVisible
}

// 不向浏览器历史添加记录的导航
const callback = (el, binding, vnode, oldVnode) => {
  el.style.cursor = 'pointer'
  el.addEventListener('click', (e) => {
    e.stopPropagation()
    e.preventDefault()
    vnode.context.$Navigation.setPath(binding.value || '', true)
  }, false)
}

export default {
  name: 'Links',
  options: {
    inserted: callback
  }
}

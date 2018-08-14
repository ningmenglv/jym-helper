import MagnifyImgPulgin from './src/magnifyimg.vue'

export default (Vue) => {
  const MagnifyImg = Vue.extend(MagnifyImgPulgin)
  const vm = new MagnifyImg().$mount()
  document.body.appendChild(vm.$el)
  return {
    show: vm.show,
    close: vm.close
  }
}

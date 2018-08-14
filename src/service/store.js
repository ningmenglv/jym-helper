import Vuex from 'vuex'
import store from '@/store'

export default (Vue, options) => {
  Vue.use(Vuex)
  return new Vuex.Store({
    namespaced: true,
    state: store.state(Vue),
    getters: store.getters,
    mutations: store.mutations,
    actions: store.actions,
    modules: store.modules
  })
}

import state from './state'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'
import header from './modules/header'
import nav from './modules/nav'

export default {
  state,
  getters,
  mutations,
  actions,
  modules: {
    header,
    nav
  }
}

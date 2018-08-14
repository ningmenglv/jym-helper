export default {
  namespaced: true,
  state: {
    logoDesc: '',
    isSecurity: false
  },
  mutations: {
    setNavActive(state, isSecurity) {
      state.isSecurity = !!isSecurity
    }
  }
}

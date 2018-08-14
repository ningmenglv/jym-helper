export default {
  namespaced: true,
  state: { // hook.js路由跳转前设置nav相关属性
    status: true, // 是否显示banner
    activeIndex: 0, // 焦点位置
    typeIndex: 1, // 控制背景图类型
    title: '', // 背景图文字
    subImg: false // 背景图子图
  },
  mutations: {
    setData(state, data) {
      data.title = data.subImg ? '' : data.title
      Object.assign(state, { ...state, ...data })
    },
    setNavBgTitle(state, title) {
      state.title = title
    }
  }
}

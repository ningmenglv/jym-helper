import nprogress from 'nprogress'
import '@/assets/style/lib/nprogress.less'
/* vue全局生命周期 */
const vueHook = {
  /* 在实例初始化之后，数据观测(data observer) 和 event/watcher 事件配置之前被调用。 */
  beforeCreate() {
    console.info('(全局)开始初始化vue实例')
  },

  /* 实例已经创建完成之后被调用。在这一步，实例已完成以下的配置：数据观测(data observer)，属性和方法的运算， watch/event 事件回调。然而，挂载阶段还没开始，$el 属性目前不可见。 */
  created() {
    console.info('(全局)vue实例创建完成')
  },

  /* 在挂载开始之前被调用：相关的 render 函数首次被调用。(该钩子在服务器端渲染期间不被调用) */
  beforeMount() {
    console.info('(全局)开始渲染')
  },

  /* el 被新创建的 vm.$el 替换，并挂载到实例上去之后调用该钩子。如果 root 实例挂载了一个文档内元素，当 mounted 被调用时 vm.$el 也在文档内。(该钩子在服务器端渲染期间不被调用) */
  mounted() {
    console.info('(全局)渲染完成')
  },

  /* 数据更新时调用，发生在虚拟 DOM 重新渲染和打补丁之前。你可以在这个钩子中进一步地更改状态，这不会触发附加的重渲染过程。(该钩子在服务器端渲染期间不被调用) */
  beforeUpdate() {
    console.info('(全局)DOM开始重新渲染或打补丁')
  },

  /* 由于数据更改导致的虚拟 DOM 重新渲染和打补丁，在这之后会调用该钩子。当这个钩子被调用时，组件 DOM 已经更新，所以你现在可以执行依赖于 DOM 的操作。然而在大多数情况下，你应该避免在此期间更改状态，因为这可能会导致更新无限循环。(该钩子在服务器端渲染期间不被调用) */
  updated() {
    console.info('(全局)DOM渲染或打补丁完成')
  },

  /* keep-alive 组件激活时调用。(该钩子在服务器端渲染期间不被调用) */
  activated() {
    console.info('(全局)keep-alive组件被激活)')
  },

  /* keep-alive 组件停用时调用。(该钩子在服务器端渲染期间不被调用) */
  deactivated() {
    console.info('(全局)keep-alive组件被停用')
  },

  /* 实例销毁之前调用。在这一步，实例仍然完全可用。(该钩子在服务器端渲染期间不被调用) */
  beforeDestroy() {
    console.info('(全局)实例开始被销毁')
  },

  /* Vue 实例销毁后调用。调用后，Vue 实例指示的所有东西都会解绑定，所有的事件监听器会被移除，所有的子实例也会被销毁。(该钩子在服务器端渲染期间不被调用) */
  destroyed() {
    console.info('(全局)实例被销毁完成')
  }
}

/* vuerouter全局声明周期 */
const vueRouterHook = (Vue, options) => {
  const activeIndexArray = ['/we', '/platform', '/security', '/charge', '/law', '/company', '/helpcenter']
  return {
    /* 路由跳转之前执行 */
    beforeEach(to, from, next) {
      console.info('(全局)路由开始跳转,离开路由 %s ,目标路由 %c%s ', from.path, 'color:green', to.path)
      const name = to.meta.name || ''
      document.title = name ? name + '-' + JYM.webTitle : JYM.webTitle
      options.store.commit('header/setNavActive', false)
      nprogress.start()
      if (to.meta.nav) {
        options.store.commit('nav/setData', {
          status: to.path !== '/security', // 安全保障没有nav
          activeIndex: activeIndexArray.indexOf(to.matched[1].path),
          title: name,
          typeIndex: to.meta.nav.typeIndex,
          subImg: to.meta.nav.subImg
        })
      }

      if (to.meta.keepParent && !to.query.keep_parent) {
        next(Vue.prototype.$Utils.url.param.set(to.fullPath, 'keep_parent', from.path))
      } else {
        next()
      }
    },

    /* 路由跳转完成后执行 */
    afterEach(route) {
      console.info('(全局)路由跳转完成，当前路由 %c%s', 'color:green', route.path)
    }
  }
}

export default {
  vueHook,
  vueRouterHook
}

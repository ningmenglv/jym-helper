import Vue from 'vue'
import Routes from '@/service/router'
import Store from '@/service/store'
import Hook from '@/service/hook'
import Http from '@/service/http'
import Filter from '@/service/filter'
import Component from '@/service/component'
import Plugin from '@/service/plugin'
import Directive from '@/service/directive'
import Navigation from '@/service/navigation'
import Auth from '@/service/auth'
import Constant from '@/config/constant'
import Storages from '@/service/storage'
import Optimization from '@/lib/optimization'
import ParseFilter from '@/lib/parseFilter'
import Request from '@/service/request'
import Dom from '@/lib/dom'
import Url from '@/lib/url'
import Verify from '@/lib/verify'
import Produce from '@/lib/produce'
import '@/assets/style/global.less'

// 注入常量到VUE
Vue.prototype.$Constant = Constant

// 注入性能优调库
Vue.prototype.$Optimization = Optimization

// 注入生产库
Vue.prototype.$Produce = Produce

// 注入校验库
Vue.prototype.$Verify = Verify

// 注入存储库
Vue.prototype.$Storage = Storages

// 注入工具库
Vue.prototype.$Utils = {
  parse: ParseFilter,
  dom: Dom,
  url: Url
}

/* -------------------以下第三方服务均为异步调用------------------- */

// 实例化过滤器
Filter(Vue)

// 实例化指令
Directive(Vue, 'jym')

// 实例化全局组件
Component(Vue, 'jym')

// 实例化状态管理器
const storeConfig = Store(Vue)

// 导入路由统一管理
const routeConfig = Routes(Vue)

// 注入授权库
Vue.prototype.$Auth = Auth(Vue, {store: storeConfig})

// 注入HTTP服务
Vue.prototype.$Http = Http(Vue)

// 注入请求
Vue.prototype.$Request = Request(Vue)

// 注入导航库
Vue.prototype.$Navigation = Navigation(routeConfig)

// 实例化全局插件
Vue.prototype.$Plugin = Plugin(Vue)

// banner上的标题
Vue.prototype.$Title = function (title) {
  storeConfig.commit('nav/setNavBgTitle', title)
}

const vueRouterHook = Hook.vueRouterHook(Vue, {store: storeConfig})

routeConfig.beforeEach(vueRouterHook.beforeEach)
routeConfig.afterEach(vueRouterHook.afterEach)

export default {
  vueHook: Hook.vueHook,
  routeConfig,
  storeConfig
}

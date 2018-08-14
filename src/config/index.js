import Vue from 'vue'
import VC from './global'

const options = {
  router: VC.routeConfig,
  store: VC.storeConfig,
  template: '<router-view></router-view>'
}

/* 添加钩子 */
Object.assign(options, VC.vueHook)

new Vue(options).$mount('#app')

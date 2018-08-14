import { LinkDirective, LinksDirective } from '@/directive'

import { Loading } from 'element-ui'

import ViserVue from 'viser-vue'

const jymDirective = [LinkDirective, LinksDirective]
const directive = [Loading, ViserVue]
export default (Vue, options) => {
  jymDirective.map((v, i) => {
    const name = options + v.name
    jymDirective.push(name)
    Vue.directive(name, v.options)
  })
  directive.map(i => Vue.use(i))

  console.info('(全局)指令【' + jymDirective.join(',') + '】开始挂载')
}

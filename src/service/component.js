import '@/assets/theme/elementui/popover.css'

import { Popover } from 'element-ui'
import { Header, Nav, Footer, PageTab, Img, Toolbar } from '@/components'

const JYMComponents = [Header, Nav, Footer, PageTab, Img, Toolbar]
const components = [Popover]

export default (Vue, options) => {
  let componentNames = []

  JYMComponents.map((v, i) => {
    const name = options + v.name
    componentNames.push(name)
    Vue.component(name, v)
  })

  components.map((v, i) => {
    Vue.component(v.name, v)
  })

  console.info('(全局)组件【' + componentNames.join(',') + '】开始挂载')
}

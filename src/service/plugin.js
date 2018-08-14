import '@/assets/theme/elementui/notification.css'
import { Notification, Loading } from 'element-ui'
import MagnifyImg from '@/plugins/magnifyimg'

export default (Vue, options) => {
  return {
    notify: Notification,
    magnifyimg: MagnifyImg(Vue),
    loading: Loading
  }
}

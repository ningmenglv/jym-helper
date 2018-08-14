import Cookies from 'js-cookie'
const UserStorageName = 'storageUserInfo'
const OtherStorageName = 'storageOtherInfo'

export default {
  user: {
    // 手机号 | 是否认证 |   是否开通存管 | 是否特殊合伙人 | 合伙人等级 | 加息比例
    keys: ['tel', 'isVerified', 'isActivation', 'isSvip', 'level', 'rate'],
    get() {
      const StorageData = Cookies.get(UserStorageName) || '{}'
      return JSON.parse(StorageData)
    },
    set(data) {
      data = data || {}
      let storageData = this.get()
      Object.keys(data).map(key => {
        if (this.keys.indexOf(key) !== -1) {
          storageData[key] = data[key]
        }
      })
      Cookies.set(UserStorageName, storageData)
    },
    remove(key) {
      if (key && this.keys.indexOf(key) !== -1) {
        let storageData = this.get()
        delete storageData[key]
        Cookies.set(OtherStorageName, storageData)
      } else {
        Cookies.remove(OtherStorageName)
      }
    }
  },
  other: {
    // 是否临时关闭存管弹窗 | 是否查询过订单
    keys: ['closeOpenCG', 'isOrderQuery'],
    get() {
      const StorageData = Cookies.get(OtherStorageName) || '{}'
      return JSON.parse(StorageData)
    },
    set(data) {
      data = data || {}
      let storageData = this.get()
      Object.keys(data).map(key => {
        if (this.keys.indexOf(key) !== -1) {
          storageData[key] = data[key]
        }
      })

      Cookies.set(OtherStorageName, storageData)
    },
    remove(key) {
      if (key && this.keys.indexOf(key) !== -1) {
        let storageData = this.get()
        delete storageData[key]
        Cookies.set(OtherStorageName, storageData)
      } else {
        Cookies.remove(OtherStorageName)
      }
    }
  }

}

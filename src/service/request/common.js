export default (Vue, options) => {
  const $Http = Vue.prototype.$Http
  const $Constant = Vue.prototype.$Constant

  return {
    // 请求底部友情链接
    getFriendlyLinks() {
      return new Promise((resolve, reject) => {
        $Http({
          url: $Constant.apiAddress.friendlyLinks,
          method: 'GET'
        }).then(res => {
          resolve(res.body)
        })
      })
    },
    getHonoursPaging(pageIndex, pageSize) {
      return new Promise((resolve, reject) => {
        $Http({
          url: $Constant.apiAddress.honourspaging,
          method: 'GET',
          params: {
            pageIndex,
            pageSize
          }
        }).then(
          res => {
            resolve(res.body)
          },
          err => {
            reject(err)
          }
        )
      })
    },
    // 资质荣耀详情
    getHonoursDetail(guid) {
      return new Promise((resolve, reject) => {
        $Http({
          url: $Constant.apiAddress.honoursdata,
          method: 'GET',
          params: {
            guid
          }
        }).then(
          res => {
            resolve(res.body)
          },
          err => {
            reject(err)
          }
        )
      })
    },
    // 请求运营报告列表
    getReportList(pageIndex) {
      return new Promise((resolve, reject) => {
        $Http({
          url: $Constant.apiAddress.reportList,
          method: 'GET',
          params: {
            pageIndex,
            pageSize: 6
          }
        }).then(
          res => {
            resolve(res.body)
          },
          err => {
            reject(err)
          }
        )
      })
    },
    getArticlePaging(type, pageIndex, pageSize) {
      return new Promise((resolve, reject) => {
        $Http({
          url: $Constant.apiAddress.articlePaging,
          method: 'GET',
          params: {
            type,
            pageIndex,
            pageSize
          }
        }).then(
          res => {
            resolve(res.body)
          },
          err => {
            reject(err)
          }
        )
      })
    },
    getAgreement(url) {
      return new Promise((resolve, reject) => {
        $Http(url).then(res => {
          let data = res.body
          resolve(data.title ? `<h2>${data.title}</h2>` + data.content : data.content)
        })
      })
    },
    // 获取运营数据
    getStatistics() {
      return new Promise((resolve, reject) => {
        $Http({
          url: $Constant.apiAddress.statistics,
          method: 'GET',
          headers: {
            contentType: 'application/json'
          }
        }).then(
          res => {
            resolve(res.body)
          },
          err => {
            reject(err)
          }
        )
      })
    },
    // 获取运营下面21条数据
    getOperationData() {
      return new Promise((resolve, reject) => {
        $Http({
          url: $Constant.apiAddress.operationData,
          method: 'GET',
          headers: {
            contentType: 'application/json'
          }
        }).then(
          res => {
            resolve(res.body)
          },
          err => {
            reject(err)
          }
        )
      })
    },
    // 获取招贤纳士
    getRecruitPaging(pageIndex) {
      return new Promise((resolve, reject) => {
        $Http($Constant.apiAddress.recruitPaging, {
          params: {
            pageIndex,
            pageSize: 10
          }
        }).then(
          res => {
            resolve(res.body)
          },
          err => {
            reject(err)
          }
        )
      })
    },
    // 帮助中心详情
    getHelpDetail(guid) {
      return new Promise((resolve, reject) => {
        $Http($Constant.apiAddress.articleIdentifier, {
          params: {
            guid
          }
        }).then(
          res => {
            resolve(res.body)
          },
          err => {
            reject(err)
          }
        )
      })
    },
    // 获取报告详情
    getReportInfo(guid) {
      return new Promise((resolve, reject) => {
        $Http($Constant.apiAddress.reportInfo, {
          params: {
            guid
          }
        }).then(res => {
          resolve(res.body)
        })
      })
    },
    // 获取法律法规列表数据
    getLawRegulations(pageIndex, pageSize) {
      return new Promise((resolve, reject) => {
        $Http({
          url: $Constant.apiAddress.lawRegulations,
          method: 'GET',
          params: {
            pageIndex,
            pageSize
          }
        }).then(
          res => {
            resolve(res.body)
          },
          err => {
            reject(err)
          }
        )
      })
    },
    // 获取法律法规详情
    getLawDetail(guid) {
      return new Promise((resolve, reject) => {
        $Http($Constant.apiAddress.LawRegulationsData, {
          params: {
            guid
          }
        }).then(res => {
          resolve(res.body)
        })
      })
    }
  }
}

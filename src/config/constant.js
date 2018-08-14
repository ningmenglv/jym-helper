import HOSTS from './hosts.json'

const HOST = HOSTS[process.env.NODE_ENV]

export default {
  envHost: HOST,
  env: process.env.NODE_ENV,
  tokenName: 'X-JYM-Authorization',
  withdrawalsTime: {
    // 用于计算T+1
    year: 2017,
    festival: [
      {
        // 节日区间
        st: '1/1', // 元旦
        end: '1/2'
      },
      {
        st: '1/27', // 春节
        end: '2/2'
      },
      {
        st: '4/2', // 清明节
        end: '4/4'
      },
      {
        st: '4/29', // 清明节
        end: '5/1'
      },
      {
        st: '5/28', // 端午节
        end: '5/30'
      },
      {
        st: '10/1', // 国庆节
        end: '10/8'
      }
    ],
    especially: ['1/22', '2/4', '6/1', '5/27', '9/30'] // 双休日是工作日的特别日期
  },
  apiAddress: {
    article: HOST.serverOper + '/api/Article/ArticleIdentifier',
    yemAgreement: HOST.serverApi + '/Product/Current/Agreement',
    regularAgreement: HOST.serverApi + '/Product/Regular/Agreement',
    friendlyLinks: HOST.serverOper + '/api/FriendlyLink/FriendlyLinks',
    honourspaging: HOST.serverOper + '/api/Article/HonoursPaging',
    honoursdata: HOST.serverOper + '/api/Article/HonoursData',
    reportList: HOST.serverOper + '/api/Article/PresentationPaging', // 获取运营报告
    statistics: HOST.serverRpt + '/home/statistics.do',
    articlePaging: HOST.serverOper + '/api/Article/ArticlePaging', // 文章列表
    articleIdentifier: HOST.serverOper + '/api/Article/ArticleIdentifier', // 文章详情
    recruitPaging: HOST.serverOper + '/api/Article/RecruitPaging', // 招贤纳士
    reportInfo: HOST.serverOper + '/api/Article/PresentationData',
    operationData: HOST.serverOper + '/api/Article/OperationData', // 运营数据21条
    lawRegulations: HOST.serverOper + '/api/Article/LawRegulationsPaging', // 法律法规列表
    LawRegulationsData: HOST.serverOper + '/api/Article/LawRegulationsData' // 法律法规详情
  },
  apiMessage: {
    login: {
      '-2': '验证码错误',
      '-1': '手机号、邮箱或密码错误',
      '0': '登录成功',
      '3': '账号被冻结'
    },
    common: {
      unknown: '数据维护,请稍后',
      message404: '未找到请求地址,或不存在',
      userFail: '未登录或者登录信息过期,请重新登录',
      upFileError: '文件上传错误',
      deleteFileError: '文件上传错误',
      notRequired: '有必填项未填写'
    }
  },
  typeList: {
    productType: {
      id100000010: {
        name: '银企众盈',
        detaileName: '银企众盈',
        typeGroup: 1
      },
      id100000011: {
        name: '银企众盈',
        detaileName: '银企众盈',
        typeGroup: 1
      },
      id100000020: {
        name: '商融保盈',
        detaileName: '商票贷',
        typeGroup: 2
      },
      id100000021: {
        name: '商融保盈',
        detaileName: '担保贷',
        typeGroup: 2
      },
      id100000022: {
        name: '商融保盈',
        detaileName: '银保贷',
        typeGroup: 2
      },
      id100000023: {
        name: '商融保盈',
        detaileName: '保理盈',
        typeGroup: 2
      },
      id100000030: {
        name: '余额猫',
        detaileName: '余额猫',
        typeGroup: 0
      },
      id210001010: {
        name: '银行专区',
        detaileName: '富滇银票',
        typeGroup: 4
      },
      id210001020: {
        name: '银行专区',
        detaileName: '富滇商票',
        typeGroup: 4
      },
      id210002010: {
        name: '银行专区',
        detaileName: '施秉银票',
        typeGroup: 4
      },
      id210002020: {
        name: '银行专区',
        detaileName: '施秉商票',
        typeGroup: 4
      },
      id210003010: {
        name: '银行专区',
        detaileName: '阜新银票',
        typeGroup: 4
      },
      id210003020: {
        name: '银行专区',
        detaileName: '阜新商票',
        typeGroup: 4
      },
      id100000040: {
        name: '普惠众盈',
        detaileName: '普惠众盈',
        typeGroup: 3
      }
    }
  },
  couponData: {
    '10': '体验金',
    '20': '本金券',
    '30': '增收券',
    '40': '定期加息券',
    '50': '返现券',
    '100': '注册红包',
    '110': '好友分享红包',
    '111': '朋友圈分享红包',
    '120': '邀请红包',
    '130': '兑换码红包'
  }
}

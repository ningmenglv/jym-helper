import VueRouter from 'vue-router'
import AppRoute from '@/pages/app'
import WeRoute from '@/pages/we'
// import BankRoute from '@/pages/bank'
import PlatformRoute from '@/pages/platform'
import SecurityRoute from '@/pages/security'
import ChargeRoute from '@/pages/charge'
import LawRoute from '@/pages/law'
import CompanyRoute from '@/pages/company'
import HelpcenterRoute from '@/pages/helpcenter'
import SpecialRoute from '@/pages/special'

export default (Vue, options) => {
  const routes = [
    {
      path: '/',
      component: AppRoute, // 全局根路由
      children: [
        {
          path: '',
          redirect: '/we/organization'
        },
        {
          path: 'we', // 路由
          component: WeRoute.indexRoute,
          children: [
            {
              path: 'organization', // 组织信息
              component: WeRoute.OrganizationPage,
              meta: {
                name: '组织信息',
                nav: {
                  typeIndex: 1
                }
              }
            },
            {
              path: 'product', // 产品介绍
              component: WeRoute.ProductPage,
              meta: {
                name: '产品介绍',
                nav: {
                  typeIndex: 1
                }
              }
            },
            {
              path: 'onrecord', // 备案信息
              component: WeRoute.OnRecordPage,
              meta: {
                name: '备案信息',
                nav: {
                  typeIndex: 1
                }
              }
            },
            {
              path: 'important', // 重大事项
              component: WeRoute.ImportantPage,
              meta: {
                name: '重大事项',
                nav: {
                  typeIndex: 1
                }
              }
            },
            {
              path: 'audit', // 审计信息
              component: WeRoute.AuditPage,
              meta: {
                name: '审计信息',
                nav: {
                  typeIndex: 1
                }
              }
            },
            {
              path: 'contact', // 联系我们
              component: WeRoute.ContactPage,
              meta: {
                name: '联系我们',
                nav: {
                  typeIndex: 1
                }
              }
            },
            {
              path: 'job', // 招贤纳士
              component: WeRoute.JobPage,
              meta: {
                name: '招贤纳士',
                nav: {
                  typeIndex: 1
                }
              }
            }
          ]
        },
        //  {
        //   path: 'bank', // 路由
        //   component: BankRoute.indexRoute,
        //   children: [{
        //     path: 'depository', // 关于平台
        //     component: BankRoute.DepositoryPage,
        //     meta: {
        //       name: '银行存管',
        //       nav: {
        //         typeIndex: 5,
        //         subImg: true
        //       }
        //     }
        //   }]
        // },
        {
          path: '/platform',
          component: PlatformRoute.indexRoute,
          children: [
            {
              path: 'reportList',
              component: PlatformRoute.ReportListPage,
              meta: {
                name: '金银猫运营报告',
                nav: {
                  typeIndex: 2
                }
              }
            },
            {
              path: 'report/:guid',
              component: PlatformRoute.ReportPage,
              meta: {
                name: '金银猫运营报告',
                nav: {
                  typeIndex: 2
                }
              }
            },
            {
              path: 'information',
              component: PlatformRoute.InformationPage,
              meta: {
                name: '',
                nav: {
                  typeIndex: 0
                }
              }
            }
          ]
        },
        {
          path: '/security',
          component: SecurityRoute.indexRoute,
          meta: {
            name: '安全保障',
            nav: {
              typeIndex: 0
            }
          }
        },
        {
          path: '/charge',
          component: ChargeRoute.indexRoute,
          meta: {
            name: '收费标准',
            nav: {
              typeIndex: 4
            }
          }
        },
        {
          path: '/law',
          component: LawRoute.indexRoute,
          redirect: '/law/list',
          children: [
            {
              path: 'list', // 法律法规
              component: LawRoute.LawPage,
              meta: {
                name: '法律法规',
                nav: {
                  typeIndex: 5
                }
              }
            },
            {
              path: 'detail/:guid', // 法律法规详情
              component: LawRoute.LawDetailPage,
              meta: {
                name: '法律法规',
                nav: {
                  typeIndex: 5
                }
              }
            }
          ]
        },
        {
          path: '/company',
          component: CompanyRoute.indexRoute,
          children: [
            {
              path: 'milepost', // 里程碑
              component: CompanyRoute.MilepostPage,
              meta: {
                name: '里程碑',
                nav: {
                  typeIndex: 6
                }
              }
            },
            {
              path: 'honor', // 资质荣誉
              component: CompanyRoute.HonorPage,
              meta: {
                name: '资质荣誉',
                nav: {
                  typeIndex: 6
                }
              }
            },
            {
              path: 'report', // 媒体报道
              component: CompanyRoute.ReportPage,
              meta: {
                name: '媒体报道',
                nav: {
                  typeIndex: 6
                }
              }
            },
            {
              path: 'dynamic', // 喵喵动态
              component: CompanyRoute.DynamicPage,
              meta: {
                name: '喵喵动态',
                nav: {
                  typeIndex: 6
                }
              }
            }
          ]
        },
        {
          path: '/helpcenter', // 帮助中心
          component: HelpcenterRoute.indexRoute,
          children: [
            {
              path: 'question', // 常见问题
              component: HelpcenterRoute.QuestionPage,
              meta: {
                name: '常见问题',
                nav: {
                  typeIndex: 7
                }
              }
            },
            {
              path: 'guide', // 新手指南
              component: HelpcenterRoute.GuidePage,
              meta: {
                name: '新手指南',
                nav: {
                  typeIndex: 7
                }
              }
            },
            {
              path: 'financing', // 理财课堂
              component: HelpcenterRoute.FinancingPage,
              meta: {
                name: '理财课堂',
                nav: {
                  typeIndex: 7
                }
              }
            },
            {
              path: 'protocol', // 服务协议
              component: HelpcenterRoute.ProtocolPage,
              meta: {
                name: '服务协议',
                nav: {
                  typeIndex: 7
                }
              }
            },
            {
              path: 'detail/:type/:guid', // 详情页
              component: HelpcenterRoute.DetailPage,
              meta: {
                name: '',
                nav: {
                  typeIndex: 4
                }
              }
            }
          ]
        }
      ]
    },
    {
      path: '/special',
      component: SpecialRoute.indexRoute,
      children: [
        {
          path: 'agreement/:id',
          component: SpecialRoute.AgreementPage
        },
        {
          path: 'certificate/:type',
          component: SpecialRoute.CertificatePage
        },
        {
          path: 'privacy',
          component: SpecialRoute.PrivacyPage
        }
      ]
    },
    {
      path: '*',
      redirect: '/'
    }
  ]

  Vue.use(VueRouter)
  return new VueRouter({
    // mode: 'history',
    routes,
    scrollBehavior(to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition
      } else {
        return {
          x: 0,
          y: 0
        }
      }
    }
  })
}

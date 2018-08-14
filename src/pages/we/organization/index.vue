<template lang="html">
  <div id="organization-pages" class="container">
    <section class="section section-intro">
     <h2 class="title">金银猫介绍</h2>
     <div class="intro">
      <p>金银猫（全称为“上海金银猫金融服务有限公司”）成立于2013年9月，是一家专业的网络借贷信息中介平台，致力于为有融资需求的中小企业提供高效、便捷的互联网金融服务，同时为广大投资者提供稳健的一站式理财服务。</p>
      <p>金银猫于2013年11月正式上线第一款票据理财产品，开创了传统票据资产线上销售（O2O模式）的先河，成为我国互联网票据网贷服务行业的先锋。成立四年来，平台始终专注于优质的票据资产，拥有严苛的风控体系，并于2017年获得资本青睐，成为互联网金融领域“央企国资系”平台之一。截止目前，金银猫先后荣获ISO9001质量体系认证、“高新技术企业”认定，是中国互联网金融协会首批会员单位，上海市互联网金融行业协会理事单位。未来，金银猫将秉持着高标准风控、严要求合规的精神理念继续为互联网金融的发展献力献策，积极拥抱行业监管，为用户提供简单、规范的普惠金融服务。</p>
     </div>
    </section>
    <section class="section section-info">
     <h2 class="title">工商信息<span @click="scan" class="link businessLicence jym-hover">查看营业执照</span></h2>
      <table border="1" class="table">
       <tr v-for="item in introList" :class="{'lineH24':item.standard.length > 45}">
        <td class="key">{{item.type}}</td>
        <td class="value" v-html="item.standard"></td>
       </tr>
      </table>
    </section>
    <section class="section section-setting">
     <h2 class="title">组织架构与部门设置</h2>
     <div class="img">
     <img src="./images/jiagou.png" />
     </div>
    </section>
    <section class="section section-manager">
     <h2 class="title">高管介绍</h2>
     <div class="superManager">
       <h3>郑晓秋&nbsp&nbsp上海金银猫金融服务有限公司&nbsp&nbsp&nbsp&nbsp总经理</h3>
       <p class="desc">曾任职于国有银行，担任财务管理工作，二十余年金融行业投融资经验，阅历丰富，深谙国内金融市场，作为资深投资人，成功投资过多个大型金融项目，现任金银猫总经理，负责公司运营管理工作，有极强的实战经验与独到眼光，立志于中国互联网金融的建设。</p>
       <h3>许轶超&nbsp&nbsp上海金银猫金融服务有限公司&nbsp&nbsp&nbsp&nbsp副总经理</h3>
       <p class="desc">	国内重点院校经济学毕业，多年票据市场与固定收益市场从业经历，原国资投行系固定收益部票据筹备负责人，现金银猫特聘副总经理，对票据类、债权类金融产品的创新与开发有独立心得。</p>
       <h3>葛锐&nbsp&nbsp&nbsp&nbsp&nbsp上海金银猫金融服务有限公司&nbsp&nbsp&nbsp&nbsp风控总监</h3>
       <p class="desc">	MBA学位，曾在国有银行及金融机构担任风控相关工作。拥有17余年专业风控经验，具备较全面的法律、风险控制、金融等方面的管理经验和技能，对于网络信贷的信用评价模型和风险管理体系建设有独到的见解。</p>
       <h3>戚永德&nbsp&nbsp上海金银猫金融服务有限公司&nbsp&nbsp&nbsp&nbsp产品总监</h3>
       <p class="desc">	国内重点院校数学系毕业，拥有近20年从业经验，在加入金银猫之前，曾任职于行业独角兽公司，有丰富的网站、APP、营销系统构建经验，对移动互联网商业模式、产品研发和管理、产品运营有深刻见解和实际实施经验，现任金银猫产品部负责人，对平台的开发及运营起着至关重要的作用。</p>
     </div>
    </section>
    <section class="section section-staff">
     <h2 class="title">员工数据</h2>
     <div class="chart1">
        <div class="chart" id="chart1"></div>
     </div>
      <div class="chart2">
        <div class="chart" id="chart2"></div>
     </div>
     <div >
         <v-chart :forceFit="false" container="chart1" :height="viserData1.height" :padding="[ 10, 260, 10, 10 ]" :data="viserData1.data1" :scale="viserData1.scale" >
          <v-tooltip :showTitle="false" dataKey="item*percent" />
          <v-legend dataKey="item" :clickable="false" title="dfff" :useHtml="true" :containerTpl="viserData1.containerTpl" :itemTpl="viserData1.itemTpl" position="right" :offsetX="80" :offsetY="-15"/>   
          <v-pie position="percent" :color="viserData1.color" />
          <v-coord type="theta" :radius="1" :innerRadius="0.75" />
          <v-guide :type="viserData1.guide.type" :position="viserData1.guide.position" content="学历分布"  :v-style="viserData1.guide.style"/>
        </v-chart>
     </div>
     <div>
        <v-chart :forceFit="false"container="chart2" :height="viserData2.height" :padding="[ 10, 260, 10, 10 ]" :data="viserData2.data2" :scale="viserData2.scale"  >
          <v-tooltip :showTitle="false" dataKey="item*percent" />
          <v-legend dataKey="item" :clickable="false" title="dfff" :useHtml="true" :containerTpl="viserData2.containerTpl" :itemTpl="viserData2.itemTpl" position="right" :offsetX="80" :offsetY="-15"/>   
          <v-pie position="percent" :color="viserData2.color" />
          <v-coord type="theta" :radius="1" :innerRadius="0.75" />
          <v-guide :type="viserData2.guide.type" :position="viserData2.guide.position" content="年龄分布" :v-style="viserData2.guide.style"/>
        </v-chart>
     </div>
    </section>
    <section class="section section-org">
     <h2 class="title">分支机构：<span class="sub-title">暂无分支机构</span></h2>
    </section>
    <section class="section section-platform">
     <h2 class="title">平台信息</h2>
     <ul class="platInfo">
       <li>
         <span>平台网址：</span>
         <a class="link jym-hover" href="https://www.jinyinmao.com.cn" target="_blank">https://www.jinyinmao.com.cn</a>
       </li>
       <li>
         <span>网站上线运营时间：2013-11-18</span>
       </li>
       <li>
         <span>注册协议：</span>
         <a class="link jym-hover" href="https://help.jinyinmao.com.cn/#/special/agreement/92be302c95e1487f99d20dc661fdfa6e?type=article" target="_blank">《金银猫平台个人会员服务协议》</a><a class="link jym-hover" href="https://help.jinyinmao.com.cn/#/special/agreement/81abbe293ea748b4ae28a6261cd5efc9?type=article" target="_blank">《个人隐私说明》</a>
       </li>
       <li v-for="item in platformList">
         <span v-html="item"></span>
       </li>
     </ul>
    </section>
  </div>
</template>

<script>
import nprogress from 'nprogress'
const DataSet = require('@antv/data-set')
const sourceData1 = [
  {
    item: '本科',
    count: 57
  },
  {
    item: '本科以下',
    count: 37
  },
  {
    item: '硕士及以上',
    count: 6
  }
]
const sourceData2 = [
  {
    item: '30岁以下',
    count: 68
  },
  {
    item: '30-40岁',
    count: 28
  },
  {
    item: '40岁及以上',
    count: 4
  }
]
const scale = [
  {
    dataKey: 'percent',
    min: 0,
    formatter: '.0%'
  }
]
const guide = {
  type: 'text',
  position: ['50%', '50%'],
  style: {
    fill: 'rgba(51,51,51,0.85)', // 文本颜色
    fontSize: '24', // 文本大小
    lineHeight: '38',
    textAlign: 'center'
  }
}
const dv1 = new DataSet.View().source(sourceData1)
const dv2 = new DataSet.View().source(sourceData2)
dv1.transform({
  type: 'percent',
  field: 'count',
  dimension: 'item',
  as: 'percent'
})
dv2.transform({
  type: 'percent',
  field: 'count',
  dimension: 'item',
  as: 'percent'
})
const data1 = dv1.rows
const data2 = dv2.rows
export default {
  name: 'OrganizationPage',
  data() {
    return {
      viserData1: {
        data1,
        scale,
        guide,
        height: 260,
        color: ['item', ['#1890FF', '#F2637B', '#975FE4']],
        labelConfig: [
          'percent',
          {
            formatter: (val, item) => {
              return item.point.item + ': ' + val
            }
          }
        ],
        containerTpl: '<div class="g2-legend">' + '<ul class="g2-legend-list"></ul>' + '</div>',
        itemTpl: (value, color, checked, index) => {
          const obj = dv1.rows[index]
          const percent = (obj.percent * 100).toFixed(0)
          checked = checked ? 'checked' : 'unChecked'
          return (
            '<li class="g2-legend-list-item">' +
            '<div class="item-left"><i class="g2-legend-marker" style="background-color:' +
            color +
            ';"></i>' +
            '<span class="g2-legend-text">' +
            value +
            '</span></div>' +
            '<div class="item-right"><span class="g2-line"></span>' +
            percent +
            '%' +
            '</div>' +
            '</li>'
          )
        }
      },
      viserData2: {
        data2,
        scale,
        guide,
        height: 260,
        color: ['item', ['#8543E0', '#FAD337', '#4DCB73']],
        labelConfig: [
          'percent',
          {
            formatter: (val, item) => {
              return item.point.item + ': ' + val
            }
          }
        ],
        containerTpl: '<div class="g2-legend">' + '<ul class="g2-legend-list"></ul>' + '</div>',
        itemTpl: (value, color, checked, index) => {
          const obj = dv2.rows[index]
          const percent = (obj.percent * 100).toFixed(0)
          checked = checked ? 'checked' : 'unChecked'
          return (
            '<li class="g2-legend-list-item">' +
            '<div class="item-left"><i class="g2-legend-marker" style="background-color:' +
            color +
            ';"></i>' +
            '<span class="g2-legend-text">' +
            value +
            '</span></div>' +
            '<div class="item-right"><span class="g2-line"></span>' +
            percent +
            '%' +
            '</div>' +
            '</li>'
          )
        }
      },
      introList: [
        {
          type: '公司全称及简称',
          standard: '上海金银猫金融服务有限公司（金银猫）Shanghai Fortune Cat Financial Service Co.,Ltd'
        },
        {
          type: '统一社会信用代码',
          standard: '9131011508001345XC'
        },
        {
          type: '公司注册资本',
          standard: '3000.0000万元整'
        },
        {
          type: '公司实缴注册资本',
          standard: '1000.0000万元整'
        },
        {
          type: '公司注册地址',
          standard: '中国（上海）自由贸易试验区商城路1287号1幢三层315A'
        },
        {
          type: '公司经营地址',
          standard: '上海市浦东新区杨高南路729号陆家嘴世纪金融广场1号楼45层4501室'
        },
        {
          type: '公司成立时间',
          standard: '2013年9月27日'
        },
        {
          type: '公司经营期限',
          standard: '2013年9月27日至不约定期限'
        },
        {
          type: '公司经营状态',
          standard: '开业'
        },
        {
          type: '公司法定代表人',
          standard: '郑晓秋'
        },
        {
          type: '公司经营范围',
          standard:
            '金融信息服务（除金融业务），接受金融机构委托从事金融信息技术外包、金融业务流程外包、金融知识流程外包，从事理财产品科技领域内的技术研发、技术咨询，市场信息咨询与调差（不得从事社会调研、社会调查、民意调查、民意测验），财务咨询（不得从事代理记账），从事金额软件科技领域内的技术开发、技术咨询、技术服务、技术转让、计算机软件的销售（除计算机信息系统安全专用产品），计算机数据处理，实业投资，投资管理，资产管理，企业兼并重组，利用自有媒体发布广告。'
        },
        {
          type: '股东信息及占股比例',
          standard: '丰城市金银猫股权投资管理中心（有限合伙）：60%；<br/>中能源电力燃料有限公司：40%'
        }
      ],
      platformList: [
        'App应用：金银猫',
        '微信：金银猫',
        '微博：金银猫',
        '联系电话：4008-556-333或021-38934666',
        '客服QQ：4008556333',
        '客服邮箱：<a class="link jym-hover" href="mailto: service @jinyinmao.com.cn">service@jinyinmao.com.cn</a>',
        '通讯地址：上海市浦东新区杨高南路729号陆家嘴世纪金融广场1号楼45层4501室'
      ]
    }
  },
  mounted() {
    nprogress.done()
  },
  methods: {
    scan() {
      let imgUrl = require('./images/business.png')
      this.$Plugin.magnifyimg.show(imgUrl)
    }
  }
}
</script>
import '~asseets/style/global.less'
<style lang='less'>
#organization-pages {
    padding: 60px;
    margin-top: 20px;
    margin-bottom: 20px;
    background-color: #fff;
    .link {
        font-size: 14px;
        color: #5c9dfc;
        line-height: 30px;
    }
    .title {
        font-size: 24px;
        line-height: 32px;
        color: #333;
        margin-bottom: 30px;
        .sub-title {
            font-size: 14px;
            color: #666;
        }
    }
    .section {
        margin-bottom: 60px;
    }
    .section-intro {
        .intro {
            height: 177px;
            p {
                text-indent: 28px;
                line-height: 30px;
                color: #666;
            }
        }
    }
    .section-info {
        .businessLicence {
            float: right;
        }
        .table {
            width: 1020px;
            border-collapse: collapse;
            color: rgba(0, 0, 0, 0.65);
            tr {
                height: 54px;
                td {
                    padding: 15px 20px;
                    line-height: 24px;
                }
                .key {
                    width: 16.67%;
                }
                .value {
                    width: 83.33%;
                }
            }
            .lineH24 {
                line-height: 24px;
            }
        }
    }
    .section-setting .img {
      text-align: center;
    }
    .section-manager {
        .superManager {
            line-height: 30px;
            margin-bottom: 28px;
            > * {
                text-indent: 28px;
            }
            h3 {
                font-size: 16px;
                color: #151515;
            }
            .desc {
                font-size: 14px;
                color: #666;
                margin-bottom: 29px;
            }
        }
    }
    .section-staff {
        overflow: hidden;
        .chart1,
        .chart2 {
            float: left;
            width: 500px;
            height: auto;
            .g2-legend {
                top: 50% !important;
                transform: translateY(-50%);
            }
            .g2-legend-list-item {
                font-size: 16px;
                margin-bottom: 30px !important;
                &:last-child {
                    margin-bottom: 0 !important;
                }
                .item-left,
                .item-right {
                    display: inline-block;
                }
                .item-left {
                    width: 110px;
                }
            }

            .g2-legend-text {
                font-size: 16px;
                color: rgba(0, 0, 0, 0.65);
                line-height: 22px;
            }
            .g2-line {
                display: inline-block;
                padding-right: 5px;
                width: 0;
                height: 12px;
                border-left: 1px solid #d9d9d9;
            }
        }
    }
    .section-platform {
        margin-bottom: 0;
        .platInfo {
            color: #666;
            font-size: 14px;
            line-height: 30px;
        }
    }
}
</style>

<template lang="html">
  <div id="onrecord-pages" class="container">
    <div class="case" v-for="(item,index) in data" :key="index">
      <h2 class="title">{{item.name}}</h2>
      <ul class="schedule">
        <li v-for="(subItem,subIndex) in item.list" :key="item.name+subIndex"  :style="{width:item.liWidth}">
          <div class="step">
           <i class="iconfont" :class="getClass(item,subIndex)"></i>
           <div class="step-desc" :class="{'gray':subIndex > item.activeIndex}" v-html="subItem"></div>
          </div>
          <div class="line" :class="{'gray':subIndex >= item.activeIndex}" :style="{width:item.lineWidth}"></div>
        </li>
      </ul>
    </div>
    <div class="last">
      <h2 class="title">网站备案信息</h2>
      <div class="onRecordInfo">
        公安机关核发的网站备案图标及编号：备案完成后披露
      </div>
    </div>
  </div>
</template>

<script>
import nprogress from 'nprogress'
export default {
  name: 'OnRecordPage',
  data() {
    return {
      data: [
        {
          name: '备案信息',
          list: ['细则出台', '准备资料', '提交资料', '等待审核', '备案登记'],
          liWidth: '235px',
          lineWidth: '176px',
          activeIndex: 2
        },
        {
          name: '增值电信业务经营许可证信息',
          list: ['提交资料', '等待审核', '领取证书'],
          liWidth: '455px',
          lineWidth: '395px'
        },
        {
          name: '资金存管信息',
          list: [
            '可存管银<br/>行调查',
            '<div class="communication">银行对接沟通</div>',
            '筛选银行',
            '资料对接<br/><p class="bank gray">海口联合农商银行</p>',
            '签署协议<br/><p class="gray date">2017-3-3</p>',
            '技术研发',
            '开发测试',
            '完成上线<br/><p class="gray uptime">2017-11-5</p>'
          ],
          liWidth: '135px',
          lineWidth: '84px'
        },
        {
          name: '信息安全测评认证信息',
          list: [
            '借贷业务<br/>数据保存',
            '<p class="save">上网日志信息保存</p>',
            '<p class="userInfo">用户信息保密</p>',
            '<p class="electric">电子认证、电子签名</p>',
            '<div class="receipt">网络借贷中介机构信息<br/>安全等级保护审核回执</div>'
          ],
          liWidth: '220px',
          lineWidth: '162px'
        }
      ]
    }
  },
  mounted() {
    nprogress.done()
  },
  methods: {
    getClass(item, subIndex) {
      let className = ''
      if (subIndex === item.activeIndex) {
        className = 'icon-duihao2'
      } else if (subIndex > item.activeIndex) {
        className = 'icon-shuzi' + (subIndex + 1)
      } else {
        className = 'icon-duihao1'
      }
      return className
    }
  }
}
</script>

<style lang='less'>
#onrecord-pages {
    padding: 60px;
    margin: 20px auto;
    background-color: #fff;
    .title {
        margin-bottom: 30px;
        line-height: 28px;
        font-size: 20px;
        color: #333;
    }
    .step-desc {
        margin-left: -18px;
        font-size: 16px;
        color: #666666;
        line-height: 24px;
    }
    .icon-duihao1,
    .icon-duihao2 {
        font-size: 30px;
        color: #1890ff;
    }

    .icon-shuzi4,
    .icon-shuzi5 {
        font-size: 30px;
        color: rgba(0, 0, 0, 0.15);
    }

    .case {
        padding-bottom: 60px;
        .schedule {
            overflow: hidden;
            padding-left: 19px;
            li {
                position: relative;
                float: left;
                .line {
                    position: absolute;
                    left: 45px;
                    top: 15px;
                    border: 1px solid #1890ff;
                    border-radius: 6px;
                }
                .gray {
                    color: #999;
                    border-color: rgba(0, 0, 0, 0.15);
                }
            }
            li:last-child {
                width: auto !important;
                .line {
                    display: none;
                }
            }
            .step-desc > * {
                font-size: 16px;
                color: #666666;
                line-height: 24px;
            }
            .receipt {
                margin-left: -38px;
            }
            .communication {
                margin-left: -10px;
            }
            .bank {
                margin-left: -30px;
            }
            .date {
                margin-left: -4px;
            }
            .uptime {
                margin-left: -8px;
            }
            .save {
                margin-left: -24px;
            }
            .userInfo {
                margin-left: -10px;
            }
            .electric {
                margin-left: -30px;
            }
        }
    }
    .last {
        .title {
            margin-bottom: 10px;
        }
        .onRecordInfo {
            font-size: 16px;
            color: #666666;
            line-height: 24px;
        }
    }
}
</style>

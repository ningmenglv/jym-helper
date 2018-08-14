<template lang="html">
  <div id="information">
    <div class="information-hd">
      <div class="title">
        平台数据报告
      </div>
      <div class="totalday">
        运营总天数：
        <i-count-up
          :start="0"
          :end="operating_days"
          :decimals="0"
          :duration="2"
        ></i-count-up>天
      </div>
      <ul class="dataList">
        <li class="lt">
          <div class="list-container">
            <div class="num">
              <i-count-up
                :start="0"
                :end="register_Person"
                :decimals="0"
                :duration="2"
              ></i-count-up>
            </div>
            <div class="des">用户人数(人)</div>
            <i class="iconfont icon-xiugaitouxiang"></i>
          </div>
        </li>
        <li class="md">
          <div class="list-container">
            <div class="num">
              <i-count-up
                :start="0"
                :end="transactionAmount"
                :decimals="0"
                :duration="2"
              ></i-count-up>
            </div>
            <div class="des">交易总额（元）</div>
            <i class="iconfont icon-jinbi"></i>
          </div>
        </li>
        <li class="gt">
          <div class="list-container">
            <div class="num">
              <i-count-up
                :start="0"
                :end="num_Purchase"
                :decimals="0"
                :duration="2"
              ></i-count-up>
            </div>
            <div class="des">项目总期数（期）</div>
            <i class="iconfont icon-trend"></i>
          </div>
        </li>
      </ul>
    </div>
    <div class="information-main">
      <section class="section" v-for="item in dataList">
        <h2 class="title"><span class="split-line line-left"></span>{{item.title}}<span class="split-line line-right"></span></h2>
        <p class="desc">数据截至{{cutOffDate}}</p>
        <ul class="module">
          <li  v-for="subItem in item.groupDataList">
            <div class="count">{{subItem.reportedContent | JYM_currency("",decimals(subItem.reportedContent))}}</div>
            <div class="type">{{subItem.gargetName}}</div>
          </li>
        </ul>
      </section>
    </div>
  </div>
</template>

<script>
import ICountUp from 'vue-countup-v2'
import nprogress from 'nprogress'
export default {
  name: 'InformationPage',
  data() {
    return {
      operating_days: 0,
      register_Person: 0,
      transactionAmount: 0,
      num_Purchase: 0,
      cutOffDate: '2018年3月31日',
      dataList: [
        { title: '借贷信息', groupDataList: [] },
        { title: '借款人与出借人信息', groupDataList: [] },
        { title: '逾期信息', groupDataList: [] },
        { title: '代偿信息', groupDataList: [] }
      ]
    }
  },
  components: {
    ICountUp
  },
  created() {
    this.requestStatistics()
    this.requestOperationDatas()
  },
  methods: {
    // 请求各类数据
    requestStatistics() {
      this.$Request.common
        .getStatistics()
        .then(res => {
          this.$data.operating_days = res.operating_days
          this.$data.register_Person = res.register_Person
          this.$data.transactionAmount = res.transactionAmount
          this.$data.num_Purchase = res.num_Purchase
        })
        .finally(() => nprogress.done())
    },
    requestOperationDatas() {
      this.$Request.common
        .getOperationData()
        .then(res => {
          let data = res.items
          this.$data.cutOffDate = res.dataEndTime
          this.$data.dataList[0].groupDataList = [data[0], data[1], data[2], data[3], data[4], data[11], data[12]]
          this.$data.dataList[1].groupDataList = [data[6], data[8], data[5], data[7], data[9], data[10]]
          this.$data.dataList[2].groupDataList = [data[13], data[14], data[15], data[16], data[19], data[20]]
          this.$data.dataList[3].groupDataList = [data[17], data[18]]
        })
        .finally(() => nprogress.done())
    },
    decimals(num) {
      const isFloat = num.indexOf('.')
      if (isFloat !== -1) {
        return num.split('.')[1].length
      } else {
        return 0
      }
    }
  }
}
</script>

<style lang='less'>
#information {
    margin-top: -40px;
    .information-hd {
        position: relative;
        background: url(./images/banner.jpg) no-repeat center center;
        width: 100%;
        height: 440px;
        min-width: 1200px;
        .title {
            position: absolute;
            top: 110px;
            left: 50%;
            transform: translateX(-50%);
            color: #fff;
            font-size: 60px;
            letter-spacing: 8px;
        }
        .totalday {
            position: absolute;
            padding: 0 20px;
            height: 58px;
            line-height: 58px;
            top: 230px;
            left: 50%;
            transform: translateX(-50%);
            background-color: rgba(0, 0, 0, 0.3);
            border-radius: 8px;
            font-size: 28px;
            color: #fff;

            text-align: center;
            span {
                font-size: 26px;
            }
        }
        .dataList {
            position: absolute;
            width: 1200px;
            height: 143px;
            left: 50%;
            margin-left: -600px;
            bottom: -72px;
            background-color: #fff;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.08);
            li {
                width: 33.3%;
                height: 110px;
                margin-top: 15px;
                float: left;
                &:not(:last-child) {
                    border-right: 1px solid #e6e6e6;
                }
                &.lt {
                    .list-container {
                        width: 180px;
                    }
                }
                &.md {
                    .list-container {
                        width: 240px;
                    }
                }
                &.gt {
                    .list-container {
                        width: 175px;
                    }
                }
            }
            .list-container {
                position: relative;
                margin: 18px auto 0;
                text-align: center;
                .num span {
                    font-size: 26px;
                    color: #666;
                }
                .des {
                    padding-top: 15px;
                    font-size: 14px;
                    color: #999;
                }
                i {
                    display: block;
                    position: absolute;
                    right: -38px;
                    bottom: -10px;
                    font-size: 40px;
                    color: #ededed;
                }
            }
        }
    }
    .information-main {
        margin: 92px auto 0;
        width: 1200px;
        height: auto;
        .section {
            height: auto;
            margin-bottom: 20px;
            padding: 50px 60px;
            background: #fff url('./images/count-bg.png') no-repeat right bottom;
            text-align: center;
            .title {
                padding-bottom: 12px;
                line-height: 33px;
                font-size: 24px;
                color: #666;
                .split-line {
                    display: inline-block;
                    width: 300px;
                    height: 0;

                    border-top: 1px solid #f1f1f1;
                }
                .line-left {
                    margin-right: 90px;
                }
                .line-right {
                    margin-left: 90px;
                }
            }
            .desc {
                padding-bottom: 55px;
                line-height: 20px;
                font-size: 14px;
                color: #999;
            }
            .module {
                overflow: hidden;
                li {
                    float: left;
                    width: 25%;
                    padding-bottom: 54px;
                    .count {
                        padding-bottom: 6px;
                        font-size: 30px;
                        color: #333333;
                    }
                    .type {
                        font-size: 14px;
                        color: #666666;
                    }
                }
            }
        }
    }
}
</style>

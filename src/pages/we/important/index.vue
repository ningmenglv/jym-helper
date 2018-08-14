<template lang="html">
  <div id="important-pages">
    <table border="1"  class="table">
        <tbody>
          <tr v-for="item in tableList">
            <td  class="type">{{item.type}}</td>
            <td>{{item.value}}</td>
          </tr>
        </tbody>
    </table>
  </div>
</template>

<script>
import nprogress from 'nprogress'
export default {
  name: 'ImportantPage',
  data() {
    return {
      tableList: [
        {
          type: '公司减资、合并、分立、解散或申请破产',
          value: '无'
        },
        {
          type: '公司依法进入破产程序',
          value: '无'
        },
        {
          type: '公司被责令停业、整顿、关闭',
          value: '无'
        },
        {
          type: '公司涉及重大诉讼、仲裁，或涉嫌违法违规被有权机关调查，或受到刑事处罚、重大行政处罚',
          value: '无'
        },
        {
          type: '公司法定代表人、实际控制人、持股5%以上的股东、主要负责人、董事、监事、高级管理人员的变更',
          value: '2017年4月1日 5%以上的股权变更'
        },
        {
          type:
            '公司法定代表人、实际控制人、持股5%以上的股东、主要负责人、董事、监事、高级管理人员涉及重大诉讼、仲裁，或涉嫌违法违纪被有权机关调查，或受到刑事处罚、重大行政处罚，或被采取强制措施',
          value: '无'
        },
        {
          type: '公司主要或者全部业务陷入停顿',
          value: '无'
        },
        {
          type: '存在欺诈、损害出借人利益等其他影响网络借贷信息中介机构经营活动的重大事项',
          value: '无'
        },
        {
          type: '其他应披露的信息',
          value: '无'
        }
      ]
    }
  },
  mounted() {
    nprogress.done()
  }
}
</script>

<style lang='less'>
@import '~assets/style/common.less';
#important-pages {
    width: @containerWidth;
    height: auto;
    margin: 20px auto;
    padding: 60px;
    background-color: #fff;
    .table {
        width: 1020px;
        font-size: 14px;
        border-collapse: collapse;
        border-color: #e9e9e9;
        color: rgba(0, 0, 0, 0.65);
        tr {
            height: 54px;
            text-align: center;
            font-size: 14px;
            line-height: 22px;
        }
        .type {
            width: 75.27%;
            text-align: left;
            padding-left: 20px;
        }
    }
}
</style>

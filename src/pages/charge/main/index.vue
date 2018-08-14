<template lang="html">
  <div id="charge-pages">
    <table border="1"  class="table">
        <thead>
          <tr>
            <th width="28.4%">业务类型</th>
            <th width="71.6%">资费标准</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in tableList">
            <td>{{item.type}}</td>
            <td>{{item.standard}}</td>
          </tr>
        </tbody>
    </table>
  </div>
</template>

<script>
import nprogress from 'nprogress'
export default {
  name: 'Charge',
  data() {
    return {
      tableList: [
        {
          type: '注册',
          standard: '免费'
        },
        {
          type: '身份认证',
          standard: '免费'
        },
        {
          type: '开通存管账户',
          standard: '免费'
        },
        {
          type: '投资银企众盈',
          standard: '免费'
        },
        {
          type: '投资商融保盈',
          standard: '免费'
        },
        {
          type: '投资余额猫',
          standard: '免费'
        },
        {
          type: '余额猫赎回',
          standard: '免费'
        },
        {
          type: '回款到账',
          standard: '免费'
        },
        {
          type: '充值',
          standard: '免费'
        },
        {
          type: '提现',
          standard: '免费'
        },
        {
          type: '借款人收费',
          standard: '非固定费率，具体标准需根据借款人资信情况确定并在借贷撮合前告知借款人。'
        }
      ]
    }
  },
  mounted() {
    nprogress.done()
  }
}
</script>

<style lang="less">
@import '~assets/style/common.less';
#charge-pages {
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
        thead tr {
            background-color: #fafafa;
        }
        tr {
            height: 54px;
            text-align: center;
            font-size: 14px;
            line-height: 22px;
        }
    }
}
</style>

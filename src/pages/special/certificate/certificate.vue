<template>
<div>
  <jym-header />
  <div id='certificate-special'>
    <h2 class='title'>{{activeData.title}}</h2>
    <div class='content'>
      <img :src='activeData.src' />
    </div>
  </div>
  <jym-footer />
  <jym-toolbar />
</div>
</template>

<script>
import nprogress from 'nprogress'
export default {
  name: 'CertificatePage',
  data() {
    return {
      datas: {
        yyzz: {
          src: require('./img/yyzz.jpg'),
          title: '营业执照'
        },
        commerce: {
          src: require('./img/commerce.jpg'),
          title: '工商会会员证'
        },
        CIPC: {
          src: require('./img/CIPC.jpg'),
          title: 'CPIC授权声明'
        },
        ISO9001: {
          src: require('./img/ISO9001.jpg'),
          title: 'ISO9001质量管理体系认证证书'
        },
        creditUnion: {
          src: require('./img/credit_union.jpg'),
          title: '上海市网络信贷服务业企业联盟'
        }
      },
      activeData: {}
    }
  },
  created() {
    const type = this.$route.params.type
    const data = this.$data.datas[type]
    if (data) {
      this.$data.activeData = data
    }
  },
  mounted () {
    nprogress.done()
  }
}
</script>

<style lang='less'>
@import '~assets/style/common';
#certificate-special {
  width: @containerWidth;
  margin: 20px auto;
  padding: 50px 68px;
  background-color: #fff;
  .title {
    font-size: 28px;
    font-weight: bold;
    width: 100%;
    overflow: hidden;
    height: 55px;
    line-height: 50px;
    color: #475058;
    border-bottom: 1px solid #cfcfcf;
  }
  .content {
    width: 100%;
    font-size: 14px;
    color: #333;
    padding-top: 20px;
    img {
      width: 100%;
    }
  }
}
</style>


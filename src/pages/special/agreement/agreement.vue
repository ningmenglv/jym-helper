<template lang="html">
  <div id="agreement-special" v-html="htmlStr">
  </div>
</template>

<script>
import nprogress from 'nprogress'
import split from './split'
export default {
  name: 'AgreementPage',
  data() {
    return {
      htmlStr: ''
    }
  },
  async created() {
    const id = this.$route.params.id
    const url = {
      article: this.$Constant.apiAddress.article + '?guid=' + id,
      yem: this.$Constant.apiAddress.yemAgreement + '/' + id,
      regular: this.$Constant.apiAddress.regularAgreement + '/' + id
    }
    let data = await this.$Request.common.getAgreement(
      url[this.$route.query.type]
    )
    if (!data) return
    nprogress.done()
    this.htmlStr = data
    this.$nextTick(() => {
      split()
    })
  }
}
</script>

<style lang="less">
#agreement-special {
  position: relative;
  width: 648px;
  line-height: 22px;
  opacity: 0;
  &.active {
    width: 100%;
    opacity: 1;
    padding: 0;
    margin: 0;
  }
  hr {
    margin: 0;
  }
  h2,
  strong {
    display: block;
    color: #333 !important;
    width: 100%;
    font-size: 20px;
    margin-bottom: 50px;
    padding: 0;
    text-align: center;
    font-weight: bold;
  }

  p {
    color: #333 !important;
    width: 100%;
    padding: 0;
    margin: 0;
    text-align: left;
    float: left;
    font-size: 16px !important;
    line-height: 32px !important;
    white-space: normal !important;
    background-color: transparent !important;
  }

  span {
    color: #333 !important;
    padding: 0;
    margin: 0;
    text-align: left;
    font-size: 16px !important;
    line-height: 32px !important;
    white-space: normal !important;
    background-color: transparent !important;
  }
  .pact-block {
    position: relative;
    box-sizing: border-box;
    width: 798px;
    height: 988px;
    padding: 75px;
    margin: 20px auto 0;
    background: url('./img/bg.jpg') top center no-repeat;
    background-size: 100% 100%;
    line-height: 22px;
    overflow: hidden;
  }
}
</style>

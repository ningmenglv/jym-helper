<template lang="html">
  <div id="report" class="container" v-loading="isloading">
    <div class="report-title">
      {{ title }}
    </div>
    <div class="report-main">
      <img :src="imgUrl" alt="">
      <div class="btn" @click="handlerLink">返回列表</div>
    </div>
  </div>
</template>

<script>
import nprogress from 'nprogress'
export default {
  name: 'ReportPage',
  data () {
    return {
      isloading: true,
      imgUrl: '',
      title: ''
    }
  },
  created () {
    this.requestReportImg()
  },
  methods: {
    // 设置报告图片
    requestReportImg () {
      let guid = this.$route.params.guid
      this.$Request.common.getReportInfo(guid).then(res => {
        this.$data.imgUrl = res.imgContentUrl
        this.$data.title = res.title
        this.$data.isloading = false
      }, () => {
        this.$data.isloading = false
      }).finally(() => nprogress.done())
    },
    // 处理链接
    handlerLink () {
      let url = '/platform/reportList?p=' + this.$route.query.p
      this.$Navigation.setPath(url)
    }
  }
}
</script>

<style lang='less'>
#report {
  padding: 60px;
  margin-top: 20px;
  margin-bottom: 20px;
  background-color: #fff;
  .report-main {
    img {
      width: 100%;
    }
  }
  .report-title {
    font-size: 25px;
    padding-bottom: 7px;
    margin-bottom: 16px;
    border-bottom: 1px solid #e6e6e6;
    color: #333;
  }
  .btn {
    width: 151px;
    height: 42px;
    margin: 50px auto 0;
    border-radius: 4px;
    color: #fff;
    line-height: 40px;
    letter-spacing: 1px;
    font-size: 14px;
    text-align: center;
    background-color: #fe6612;
    border-bottom: 3px solid #ff4900;
    transition: .2s;
    cursor: pointer;
    &:hover {
      background-color: darken(#fe6612, 3%);
      border-bottom: 0 solid #ff4900;
    }
  }
}
</style>

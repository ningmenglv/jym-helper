<template lang="html">
  <div id="reportList" class="container" v-loading=isloading>
      <ul class="report-main">
        <li v-for="item of reportList" @click="handlerLink(item)">
          <p>{{item.title}}</p>
          <div class="title-bg"></div>
          <img :src="item.imgTitleUrl" alt="">
        </li>
      </ul>
      <jym-page-tab :allListLength='allListLength' :singleListLength='singleListLength' @change='index => requestReport(index)' ref="pageTab"></jym-page-tab>
  </div>
</template>

<script>
import nprogress from 'nprogress'
export default {
  name: 'ReportListPage',
  data() {
    return {
      isloading: true,
      allListLength: 0,
      singleListLength: 6,
      reportList: []
    }
  },
  created() {
    this.initizalPage()
  },
  methods: {
    // 初始化页面
    initizalPage() {
      let pageIndex = Number(this.$route.query.p)
      if (pageIndex) {
        this.requestReport(pageIndex, true)
      } else {
        this.requestReport(0)
      }
    },
    // 请求报告列表
    requestReport(pageIndex, isSetIndex) {
      nprogress.start()
      this.$Request.common
        .getReportList(pageIndex)
        .then(
          res => {
            this.$data.allListLength = res.totalCount
            this.$data.reportList = res.items
            this.$data.isloading = false
            if (isSetIndex) {
              this.$refs.pageTab.nowIndex = pageIndex
            }
          },
          () => {
            this.$data.isloading = false
          }
        )
        .finally(() => nprogress.done())
    },
    handlerLink(item) {
      let url = '/platform/report/' + item.identifier + '?p=' + this.$refs.pageTab.nowIndex
      this.$Navigation.setPath(url)
    }
  }
}
</script>

<style lang='less'>
#reportList {
    overflow: hidden;
    padding: 60px;
    margin-top: 20px;
    margin-bottom: 20px;
    background-color: #fff;
    .report-main {
        overflow: hidden;
        li {
            position: relative;
            width: 314px;
            height: 169px;
            margin-bottom: 40px;
            border-radius: 4px;
            overflow: hidden;
            float: left;
            border: 1px solid #e8e8e8;
            transition: 0.25s ease-out;
            cursor: pointer;
            &:not(:nth-child(3n)) {
                margin-right: 38px;
            }
            .title-bg {
                position: absolute;
                width: 201px;
                height: 67px;
                top: 60px;
                left: 57px;
                background-image: url('images/title-bg.png');
                z-index: 2;
            }
            img {
                position: absolute;
                width: 100%;
                top: 0;
                left: 0;
            }
            p {
                position: absolute;
                width: 100%;
                top: 39px;
                font-size: 28px;
                color: #fff;
                text-align: center;
                z-index: 2;
            }
            &:hover {
                box-shadow: -2px 10px 32px rgba(0, 0, 0, 0.2);
                transform: translateY(-4px);
            }
        }
    }
}
</style>

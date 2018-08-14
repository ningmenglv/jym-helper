<template lang="html">
  <div id="report-pages" v-loading="isloading">
    <ul class="question-ul">
      <li v-for="item in dataList"  @click="goDetail(type,item.guid)">
        <span class="li-left">{{item.title}}</span>
        <span class="li-right">发布时间：{{item.releaseTime | JYM_parseDate}}</span>
      </li>
    </ul>
    <div v-if='!dataList.length && !isloading' class="noList">
      暂无数据~
    </div>
    <jym-page-tab :allListLength='allListLength' :singleListLength='pageSize' @change='getArticlePaging' ref="pageTab"></jym-page-tab>
  </div>
</template>

<script>
import nprogress from 'nprogress'
export default {
  name: 'ReportPage',
  data() {
    return {
      isloading: true,
      allListLength: 0,
      pageIndex: 1,
      pageSize: 10,
      dataList: [],
      type: 1
    }
  },
  created() {
    let pageIndex = this.$data.pageIndex
    this.getArticlePaging(pageIndex)
  },
  methods: {
    getArticlePaging(pageIndex) {
      let type = this.$data.type
      let pageSize = this.$data.pageSize
      this.$Request.common
        .getArticlePaging(type, pageIndex, pageSize)
        .then(res => {
          if (res.items) {
            this.$data.dataList = res.items
            this.$data.allListLength = res.totalCount
          }
          this.$data.isloading = false
        })
        .catch(() => {
          this.$data.isloading = false
        })
        .finally(() => nprogress.done())
    },
    goDetail(type, guid) {
      this.$Navigation.setPath('/helpcenter/detail/' + type + '/' + guid)
    }
  }
}
</script>

<style lang="less">
@import '~assets/style/common.less';
@col6: #666;
@font14: 14px;
#report-pages {
    width: @containerWidth;
    height: auto;
    margin: 20px auto;
    padding: 60px;
    background-color: #fff;
    .question-ul {
        width: 100%;
        li {
            width: 100%;
            height: 59px;
            line-height: 59px;
            border-bottom: 1px solid #ebebea;
            overflow: hidden;
            .li-left {
                float: left;
                color: #333;
            }
            .li-right {
                float: right;
                color: #999;
            }
        }
        li:hover {
            cursor: pointer;
            .li-left {
                color: @jymColor;
            }
        }
    }
}
</style>

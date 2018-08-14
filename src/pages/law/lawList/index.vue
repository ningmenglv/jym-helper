<template lang="html">
  <div id="law-pages" v-loading="isloading">
    <ul class="question-ul">
      <li v-for="(item,index) in dataList" >
        <a class="item" :href="item.fileUrl" target="_blank">
          <span class="li-left">{{item.title}}</span>
          <span class="li-right">发布时间：{{item.releaseTime | JYM_parseDate}}</span>
        </a>
      </li>
    </ul>
    <div v-if='!dataList.length && !isloading' class="noList">
      暂无数据~
    </div>
    <jym-page-tab :allListLength='allListLength' :singleListLength='pageSize' @change='getLawRegulations' ref="pageTab"></jym-page-tab>
  </div>
</template>

<script>
import nprogress from 'nprogress'
export default {
  name: 'LawPage',
  data() {
    return {
      isloading: true,
      allListLength: 0,
      pageIndex: 1,
      pageSize: 10,
      dataList: [],
      type: 4
    }
  },
  created() {
    let pageIndex = this.$data.pageIndex
    this.getLawRegulations(pageIndex)
  },
  methods: {
    getLawRegulations(pageIndex) {
      nprogress.start()
      let pageSize = this.$data.pageSize
      this.$Request.common
        .getLawRegulations(pageIndex, pageSize)
        .then(
          res => {
            if (res.items) {
              this.$data.dataList = res.items
              this.$data.allListLength = res.totalCount
            }
            this.$data.isloading = false
          },
          () => {
            this.$data.isloading = false
          }
        )
        .finally(() => nprogress.done())
    }
    // 详情页不展示，用pdf链接地址
    // goDetail(guid) {
    //   this.$Navigation.setPath('/law/detail/' + guid)
    // }
  }
}
</script>

<style lang="less">
@import '~assets/style/common.less';
@col6: #666;
@font14: 14px;
#law-pages {
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
            .item {
                display: inline-block;
                width: 100%;
            }
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

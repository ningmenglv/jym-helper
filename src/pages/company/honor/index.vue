<template lang="html">
  <div class="honor" id='honor-pages'>
    <ul class="honorList" v-loading="isloading">
      <li v-for="(item,index) in honorList" :key="item.index" >
        <div class="honor_li" @click="show(item.identifier)">
          <jym-img class="honor_img" :src="item.imgUrl" :rate=1 :conWidth=188 :conHeight=268 />
        </div>
        <h2 class="honor_title">{{item.title}}</h2>
      </li>
    </ul>
    <div  v-if='!honorList.length && !isloading' class="noList">
      暂无数据~
    </div>
    <jym-page-tab :allListLength='allListLength' :singleListLength='pageSize' @change='getHonoursPaging' ref="pageTab"></jym-page-tab>
  </div>
</template>

<script>
import nprogress from 'nprogress'
export default {
  data() {
    return {
      allListLength: 0,
      pageIndex: 1,
      pageSize: 6,
      isloading: true,
      honorList: []
    }
  },
  created() {
    let pageIndex = this.$data.pageIndex
    this.getHonoursPaging(pageIndex)
  },
  methods: {
    getHonoursPaging(pageIndex) {
      let pageSize = this.$data.pageSize
      this.$Request.common
        .getHonoursPaging(pageIndex, pageSize)
        .then(res => {
          this.$data.allListLength = res.totalCount
          if (res.items) {
            res.items.forEach((item, index) => {
              item.index = '' + pageIndex + index
            })
            this.$data.honorList = res.items
          }

          this.$data.isloading = false
        })
        .catch(() => {
          this.$data.isloading = false
        })
        .finally(() => nprogress.done())
    },
    show(guid) {
      this.$data.isloading = true
      this.$Request.common.getHonoursDetail(guid).then(
        res => {
          this.$Plugin.magnifyimg.show(res.imgUrl)
          this.$data.isloading = false
        },
        () => {
          this.$data.isloading = false
        }
      )
    }
  }
}
</script>

<style lang='less'>
@import '~assets/style/common';
#honor-pages {
    width: @containerWidth;
    margin: 20px auto;
    padding: 60px;
    background-color: #fff;
    .honorList {
        height: auto;
        overflow: hidden;
        li {
            float: left;
            overflow: hidden;
            margin: 0 45px 0 0;
        }
        li:nth-of-type(3n) {
            margin-right: 0;
        }
        .honor_li {
            width: 310px;
            height: 360px;
            border: 1px solid #cfcfcf;
            padding: 45px 60px;
            text-align: center;
            line-height: 268px;
            cursor: pointer;
            overflow: hidden;
            img {
                display: inline-block;
                vertical-align: middle;
            }
        }
        .honor_title {
            width: 310px;
            height: 130px;
            font-size: 14px;
            color: #666;
            text-align: center;
            line-height: 30px;
        }
    }
}
</style>

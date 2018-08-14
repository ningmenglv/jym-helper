<template lang="html">
 <div class="detail" id='detail-pages' v-loading="isloading">
  <h2 class="title">{{pagetitle}}</h2>
   <div class="content" v-html= 'content'></div>
 </div>
</template>

<script>
import nprogress from 'nprogress'
export default {
  name: 'LawDetailPage',
  data() {
    return {
      pagetitle: '',
      isloading: true,
      content: ''
    }
  },
  created() {
    this.getLawDetail()
  },
  methods: {
    getLawDetail() {
      // 查看详情，对应的guid
      let guid = this.$route.params.guid
      this.$Request.common
        .getLawDetail(guid)
        .then(
          res => {
            if (res) {
              this.$data.pagetitle = res.title
              this.$data.content = (res.fileUrl || '').replace(/title="\S*"/, '')
            }

            this.$data.isloading = false
          },
          () => {
            this.$data.isloading = false
          }
        )
        .finally(() => nprogress.done())
    }
  }
}
</script>

<style lang="less">
@import '~assets/style/common';
#detail-pages {
    width: @containerWidth;
    margin: 20px auto;
    padding: 60px;
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

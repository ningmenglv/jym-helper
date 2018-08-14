<template lang="html">
 <div class="detail" id='detail-pages' v-loading="isloading">
  <h2 class="title">{{pagetitle}}</h2>
   <div class="content" v-html= 'content'></div>
 </div>
</template>

<script>
import nprogress from 'nprogress'
export default {
  name: 'Detail',
  data() {
    return {
      pagetitle: '',
      isloading: true,
      content: ''
    }
  },
  created() {
    this.getHelpDetail()
    this.changeTitle()
  },
  methods: {
    getHelpDetail() {
      let guid = this.$route.params.guid
      this.$Request.common
        .getHelpDetail(guid)
        .then(
          res => {
            this.$data.pagetitle = res.title
            this.$data.content = (res.content || '').replace(/title="\S*"/, '')
            this.$data.isloading = false
          },
          () => {
            this.$data.isloading = false
          }
        )
        .finally(() => nprogress.done())
    },
    changeTitle() {
      let type = Number(this.$route.params.type)
      let title = ''
      switch (type) {
        case 1:
          title = '媒体报道'
          break
        case 2:
          title = '喵喵动态'
          break
        case 3:
          title = '招贤纳士'
          break
        case 4:
          title = '常见问题'
          break
        case 5:
          title = '新手指南'
          break
        case 6:
          title = '理财课堂'
          break
        case 7:
          title = '服务协议'
          break
        default:
      }
      this.$Title(title)
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

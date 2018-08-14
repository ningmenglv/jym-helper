<template lang="html">
  <div id="job" class="container">
    <div class="job-hd">
      <h2>招贤纳士</h2>
      <p>我们是一支年轻的团队！2个月产品上线，56天总成交额破亿！</p>
      <p>我们是一支经验丰富的团队!汇集了在腾讯、阿里、微软和国有证券公司等从业十余年的互联网金融精英！</p>
      <p>我们是一支永不停息的团队：不断新增的业务，不断优化的界面，不断丰富的功能，一切都只为极致不妥协！</p>
      <p>若有幸能与您一起创业，您将获得不错的薪资和比较多的期权，经常性的员工活动和全方面的健康检查，以及一个自由、开放、扁平的团队。</p>
      <p>如果你跟我们一样，想通过自己的努力，改变大众的理财生活，让“普惠金融”惠及更多的人，不要迟疑，快来加入我们吧！</p>
      <p>简历请投递至：<a href="mailto:hr@jinyinmao.com.cn" target="_blanket">hr@jinyinmao.com.cn</a></p>
    </div>
    <ul class="job-list" v-loading="isloading">
      <li v-for="(item, index) of recruitList" :class="item.isOpen?'open':''">
        <div class="list-title" @click='handlerOpen(item, index)'>
          <span class="title">{{ item.title }}</span>
          <span class="time">发布时间：{{ item.releaseTime }}</span>
        </div>
        <div class="list-info">
          <div class="info-tag">岗位职责：</div>
          <div v-html="item.duties"></div>
          <div class="info-tag">岗位要求：</div>
          <div v-html="item.requirement"></div>
        </div>
      </li>
    </ul>
    <jym-page-tab :allListLength='allListLength' :singleListLength='singleListLength' @change='index => requestReport(index)' ref="pageTab"></jym-page-tab>
  </div>
</template>

<script>
import nprogress from 'nprogress'
export default {
  name: 'JobPage',
  data () {
    return {
      isloading: true,
      allListLength: 0,
      singleListLength: 10,
      recruitList: []
    }
  },
  created () {
    this.requestRecruit()
  },
  methods: {
    // 请求岗位列表
    requestRecruit () {
      this.$Request.common.getRecruitPaging(1).then(res => {
        this.$data.allListLength = res.totalCount
        let recruitList = res.items.map(item => {
          return {
            duties: this.getHTML(item.duties),
            releaseTime: this.getTime(item.releaseTime),
            requirement: this.getHTML(item.requirement),
            title: item.title,
            isOpen: false
          }
        })
        this.$data.recruitList = recruitList
        this.$data.isloading = false
      }).catch(() => {
        this.$data.isloading = false
      }).finally(() => nprogress.done())
    },
    // 根据p标签增加1,2,3序列
    getHTML (str) {
      let count = 0
      return str.replace(/<p>/g, () => {
        count++
        return '<p>' + count + '. '
      })
    },
    // 获取发布时间
    getTime (time) {
      return time.replace(/^(\d{2})\/(\d{2})\/(\d{4}).+/, ($0, $1, $2, $3) => {
        return $3 + '-' + $1 + '-' + $2
      })
    },
    // 处理打开关闭
    handlerOpen (item, index) {
      let isOpen = !item.isOpen
      this.$data.recruitList[index].isOpen = isOpen
    }
  }
}
</script>

<style lang='less'>
#job {
   padding: 60px;
    margin-top: 20px;
    margin-bottom: 20px;
    background-color: #fff;
  .job-hd {
    h2 {
      padding-bottom: 20px;
      font-size: 28px;
    }
    p {
      font-size: 14px;
      line-height: 28px;
      color: #333;
      a {
        color: #ff9001;
      }
    }
  }
  .job-list {
    padding-top: 70px;
    .list-title {
      padding-top: 12px;
      padding-bottom: 12px;
      border-bottom: 1px solid #e7e7e7;
      overflow: hidden;
      color: #333;
      cursor: pointer;
      .title {
        float: left;
        font-size: 18px;
        transition: .2s;
      }
      .time {
        float: right;
      }
    }
    .list-info {
      display: none;
      padding-left: 30px;
      padding-bottom: 20px;
      transition: .2s;
    }
    li.open {
      .list-info {
        display: block;
      }
    }
    li:not(.open):hover {
      .list-title .title {
        color: #ff9001;
      }
    }
    .info-tag {
      padding-top: 45px;
      font-size: 16px;
    }
    p {
      padding-top: 10px;
      color: #666;
    }
  }
  .pageTab {
    padding-top: 80px;
  }
}
</style>

<template lang="html">
  <div id="audit-pages" class="container pages">
    <img class="auditImg" src="./images/audit.png"/>
    <div class="result">
      <p>审计意见：--</p>
      <p>经营合规重点环节的审计结果： --</p>
    </div>
  </div>
</template>

<script>
import nprogress from 'nprogress'
export default {
  name: 'AuditPage',
  mounted() {
    nprogress.done()
  }
}
</script>

<style lang='less'>
#audit-pages {
    padding: 60px;
    margin-top: 20px;
    margin-bottom: 20px;
    background-color: #fff;
    .auditImg {
        margin-bottom: 44px;
        display: block;
    }
    .result {
        font-size: 14px;
        color: #666;
        line-height: 24px;
    }
}
</style>

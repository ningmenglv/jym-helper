<template lang="html">
  <div id="toolbar">
    <el-popover popper-class="header-popper-qr" ref="iconWeixin" trigger="hover" placement="left">
      <div class="qr jymweixin" />
      <p class="desc">关注金银猫微信</p>
    </el-popover>
    <el-popover popper-class="header-popper-qr" ref="iconShouji" trigger="hover" placement="left">
      <div class="qr jymapp" />
      <p class="desc">下载金银猫APP</p>
    </el-popover>
    <ul class="func-list">
      <li v-popover:iconShouji>
        <span class="text">下载APP</span>
        <i class="iconfont icon-shouji"></i>
      </li>
      <li v-jym-links="'http://crm2.qq.com/page/portalpage/wpa.php?uin=4008556333&aty=0&a=0&curl=&ty=1'">
        <span class="text">在线客服</span>
        <i class="iconfont icon-kefu"></i>
      </li>
      <li v-popover:iconWeixin>
        <span class="text">关注微信</span>
        <i class="iconfont icon-weixin"></i>
      </li>
      <li v-jym-links="'http://weibo.com/u/3822187413'">
        <span class="text">官方微博</span>
        <i class="iconfont icon-xinlang"></i>
      </li>
      <li style="cursor:pointer;" @click="top()">
        <span class="text">返回顶部</span>
        <i class="iconfont icon-top"></i>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Toolbar',
  methods: {
    top() {
      let topHeight =
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        window.pageYOffset
      let timer = window.setInterval(() => {
        let tempTop =
          document.documentElement.scrollTop ||
          document.body.scrollTop ||
          window.pageYOffset
        if (tempTop < 1) {
          window.clearInterval(timer)
          return
        }
        const tempVal = tempTop - topHeight / 50
        document.documentElement.scrollTop = document.body.scrollTop = window.pageYOffset = tempVal
      }, 5)
    }
  }
}
</script>

<style lang="less">
#toolbar {
  position: fixed;
  bottom: 100px;
  right: 20px;
  z-index: 1000;
  .func-list {
    li {
      background-color: #ff9001;
      color: #fff;
      width: 40px;
      height: 40px;
      position: relative;
      border-radius: 2px;
      overflow: hidden;
      cursor: default;
      margin-top: 5px;
      .text {
        transition: transform 0.3s;
        transform: translateX(-40px);
        padding: 6px 0;
        display: block;
        width: 100%;
        height: 100%;
        font-size: 12px;
        line-height: 14px;
        letter-spacing: 2px;
        color: #fff;
        text-align: center;
      }
      .iconfont {
        transition: transform 0.3s;
        display: block;
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        font-size: 30px;
        line-height: 40px;
        text-align: center;
      }
      &:hover .text {
        transform: translateX(0);
      }
      &:hover .iconfont {
        transform: translateX(40px);
      }
    }
  }
}
</style>

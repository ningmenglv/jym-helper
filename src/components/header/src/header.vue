<template lang="html">
  <div id="header">
    <div class="min-header">
      <el-popover popper-class="header-popper-qr" ref="iconWeixin" trigger="hover" placement="bottom">
        <div class="qr jymweixin" />
        <p class="desc">关注金银猫微信</p>
      </el-popover>
      <el-popover ref="iconQQ" popper-class="header-popper-qq" trigger="hover" placement="bottom">
        <p class="desc">官方交流1群</p>
        <p class="desc">QQ: <span class="focus">368910758</span>（满）</p>
        <p class="desc">官方交流2群</p>
        <p class="desc">QQ: <span class="focus">271865771</span></p>
      </el-popover>
      <el-popover popper-class="header-popper-qr" ref="iconShouji" trigger="hover" placement="bottom">
        <div class="qr jymapp" />
        <p class="desc">下载金银猫APP</p>
      </el-popover>
      <div class="container clearfix">
        <div class="left-block">
          <div class="tel-info">客服热线<span class="focus">4008-556-333</span>或<span class="focus">021-38934666</span></div>
          <div class="logo-list">
            <header-up-side-icon v-popover:iconWeixin class="icon-sideUp" icon-class="iconfont icon-weixin" active-color="#44b549" />
            <header-up-side-icon v-jym-links="'http://weibo.com/u/3822187413'" class="icon-sideUp" icon-class="iconfont icon-xinlang" active-color="#d66666" />
            <header-up-side-icon v-popover:iconQQ class="icon-sideUp" icon-class="iconfont icon-qq" active-color="#20A0FF" />
          </div>
        </div>
        <div class="right-block">
          <div class="logo-list" v-popover:iconShouji @mouseenter="telHover=true" @mouseleave="telHover=false">
            <a target="_blank" href="https://welcome.jinyinmao.com.cn/download" class="tel-info jym-hover">手机客户端</a>
            <header-up-side-icon :class="{hover:telHover}" class="icon-sideUp" icon-class="iconfont icon-shouji" active-color="#ff9001" />
          </div>
          <span class="jym-hover link-info focus" @click="operation(0)">[{{isLogin?'我的金银猫':'登录'}}]</span>
          <span class="jym-hover link-info white" @click="operation(1)">[{{isLogin?'安全退出':'注册'}}]</span>
          <span class="jym-hover link-info" v-jym-link="'/helpcenter/question'">帮助中心</span>
        </div>
      </div>
    </div>
    <div class="max-header">
      <div class="container clearfix">
        <div class="left-block">
          <img class="logo" src="../../../assets/image/icon/logomax.png" v-jym-link="hosts.webWww">
          <img class="logodesc" src="./img/logodesc.png" >
        </div>
        <div class="right-block">
          <header-nav :is-login="isLogin" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import HeaderNav from './header-nav.vue'
import HeaderUpSideIcon from './header-up-side-icon.vue'
export default {
  name: 'Header',
  components: {
    HeaderNav,
    HeaderUpSideIcon
  },
  data() {
    return {
      telHover: false,
      hosts: this.$Constant.envHost
    }
  },
  computed: {
    ...mapState('header', ['logoDesc']),
    ...mapGetters({
      isLogin: 'getLoginStatus'
    })
  },
  beforeCreate() {
    this.$store.commit('setLoginStatus', !!this.$Auth.get())
  },
  methods: {
    operation(index) {
      if (index < 1) {
        this.$Navigation.setPath(
          this.isLogin
            ? this.$Constant.envHost.webAcount
            : this.createReturnUrl(this.$Constant.envHost.webWww + '/#/login?returnUrl=')
        )
      } else {
        if (this.isLogin) {
          this.$Auth.remove()
        } else {
          this.$Navigation.setPath(this.$Constant.envHost.webWww + '/#/register')
        }
      }
    },
    createReturnUrl(url) {
      return url + window.encodeURIComponent(window.location.href)
    }
  }
}
</script>

<style lang="less">
@minheaderHeight: 40px;
#header {
  border-bottom: 1px solid #eaeaea05;
  .min-header {
    height: @minheaderHeight;
    background-color: #333;
    color: #b5b5b5;
    font-size: 12px;
    .left-block {
      float: left;
      line-height: @minheaderHeight;
    }
    .right-block {
      float: right;
      text-align: right;
      line-height: @minheaderHeight;
    }
    .tel-info {
      float: left;
      font-size: 14px;
      color: #b5b5b5;
      .focus {
        font-size: 15px;
        display: inline-block;
        padding: 0 5px;
      }
    }

    .logo-list {
      float: left;
      position: relative;
      top: -3px;
      .icon-sideUp {
        font-size: 30px;
      }
      .tel-info {
        float: right;
        position: relative;
        top: 3px;
      }
    }
    .link-info {
      font-size: 14px;
      padding-left: 10px;
      &.focus {
        cursor: pointer;
        color: #ff9001;
        display: inline-block;
      }
      &.white {
        color: #fff;
      }
    }
  }
  .max-header {
    height: 100px;
    background-color: #fff;
    z-index: 999;
    position: relative;
    .container {
      position: relative;
      height: 100%;
    }
    .left-block {
      position: absolute;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
    }
    .right-block {
      position: absolute;
      top: 50%;
      right: 0;
      transform: translateY(-50%);
    }
    .logo {
      height: 55px;
      width: 175px;
      display: inline-block;
      vertical-align: middle;
      cursor: pointer;
      padding: 5px;
    }
    .logodesc {
      height: 32px;
      width: 124px;
      display: inline-block;
      vertical-align: text-top;
    }
    .desc {
      vertical-align: middle;
      display: inline-block;
      font-size: 16px;
      font-weight: 400;
      color: #666;
      padding-left: 20px;
      padding-top: 15px;
    }
  }
}

.header-popper-qq {
  .desc {
    font-size: 13px;
    color: #8492a6;
    margin: 5px;
    .focus {
      color: #f89e00;
    }
  }
}
.header-popper-qr {
  .qr {
    display: block;
    width: 150px;
    height: 150px;
    background-size: 100%;
    background-image: url('../../../assets/image/icon/qr.png');
    &.jymweixin {
      background-position: 0 0;
    }
    &.jymapp {
      background-position: 0 600px;
    }
  }
  .desc {
    color: #8492a6;
    font-size: 16px;
    text-align: center;
  }
}
</style>

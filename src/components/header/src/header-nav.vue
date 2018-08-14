<template lang="html">
  <div class="header-nav">
    <ul>
      <li class="item">
        <a class="jym-hover text" v-jym-link="hosts.webWww">首页</a>
      </li>
      <li class="item">
        <a class="jym-hover text" v-jym-link="hosts.webWww+'/#/product/yem'">余额猫</a>
      </li>
      <li class="item">
        <a class="jym-hover text sub-nav-main" v-jym-link="hosts.webWww+'/#/product/list.html'">定期产品</a>
        <ul class="sub-nav">
          <li v-jym-link="hosts.webWww+'/#/product/regular-list?type=all'">所有产品</li>
          <li v-jym-link="hosts.webWww+'/#/product/regular-list?type=yinpiao'">银企众盈</li>
          <li v-jym-link="hosts.webWww+'/#/product/regular-list?type=shangpiao'">商融保盈</li>
          <li v-jym-link="hosts.webWww+'/#/product/regular-list?type=puhui'">普惠众盈</li>
        </ul>
      </li>
      <!-- <li class="item">
        <a class="jym-hover text" :class="{active: isSecurity}" v-jym-link="'/we/security'">安全保障</a>
      </li> -->
      <li class="item marginR130">
        <a class="jym-hover text" :class="{active: !isSecurity}" v-jym-link="'/'">信息披露</a>
      </li>
      <li class="item">
        <a class="jym-hover myacount" @click="openAccount">
          <i class="login-min" :class="{active:isLogin}"></i>
          <span class="text">我的账户</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'HeaderNav',
  props: {
    isLogin: Boolean
  },
  data() {
    return {
      hosts: this.$Constant.envHost
    }
  },
  computed: {
    ...mapState('header', ['isSecurity'])
  },
  methods: {
    openAccount() {
      this.$Navigation.setPath(
        this.isLogin
          ? this.$Constant.envHost.webAcount
          : this.$parent.createReturnUrl(this.$Constant.envHost.webWww + '/#/login?returnUrl=')
      )
    }
  }
}
</script>

<style lang='less'>
.header-nav {
  .item {
    display: inline-block;
    position: relative;
    .login-min {
      background-image: url('./img/logomin.png');
      background-size: 100%;
      background-position: 0 -18px;
      display: inline-block;
      width: 23px;
      height: 17px;
      background-repeat: no-repeat;
      margin: 0 -10px 0 20px;
      vertical-align: text-top;
      transition: transform 0.5s;
      &.active {
        background-position: 0 0;
      }
    }
    .text {
      display: inline-block;
      padding: 20px 24px;
      font-size: 16px;
      &.active {
        color: #ff9001;
      }
    }
    .myacount {
      .text {
        padding-right: 0;
      }
      &:hover .login-min {
        background-position: 0 0;
        transform: rotate(360deg);
      }
    }
    .sub-nav-main:hover + .sub-nav {
      height: 165px;
    }
    .sub-nav {
      position: absolute;
      left: 55%;
      top: 50px;
      transform: translateX(-50%);
      width: 110px;
      transition: height 0.5s;
      height: 0;
      overflow-y: hidden;
      &:hover {
        height: 165px;
      }
      li {
        display: block;
        width: 100px;
        height: 28px;
        text-align: center;
        background-color: rgb(250, 251, 252);
        border: 1px solid rgb(242, 241, 235);
        line-height: 28px;
        border-radius: 3px;
        box-shadow: 5px 5px 10px -5px #666;
        font-size: 14px;
        color: #666;
        margin: 3px 0;
        &:hover {
          background-color: #ff9001;
          color: #fff;
          border-color: #ff9001;
          cursor: pointer;
        }
      }
    }
  }
  .marginR130 {
    margin-right: 130px;
  }
}
</style>

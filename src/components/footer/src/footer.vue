<template lang="html">
  <div id="footer">
      <div class="footer-container">
        <div class="footer-main">
          <div class="main-links">
              <div class="links-about links-box">
                <div class="title">关于金银猫</div>
                <ul class="list">
                  <li><router-link class="jym-hover" to="/we/product">金银猫概况</router-link></li>
                  <li><router-link class="jym-hover" to="/we/organization">平台价值</router-link></li>
                  <li><router-link class="jym-hover" to="/we/job">招贤纳士</router-link></li>
                  <li><router-link class="jym-hover" to="/we/contact">联系我们</router-link></li>
                </ul>
              </div>
              <div class="links-help links-box">
                <div class="title">帮助中心</div>
                <ul class="list">
                  <li><router-link class="jym-hover" to="/helpcenter/question">常见问题</router-link></li>
                  <li><router-link class="jym-hover" to="/helpcenter/guide">新手指南</router-link></li>
                  <li><router-link class="jym-hover" to="/helpcenter/financing">理财课堂</router-link></li>
                  <li><router-link class="jym-hover" to="/security">安全保障</router-link></li>
                </ul>
              </div>
          </div>
          <div class="main-contact">
            <div class="title">关注我们</div>
            <ul class="contact-list">
              <li class="wechat">
                <div class="logo l-1">
                  <i class="iconfont icon-weixin"></i>
                </div>
                <div class="pop-box pop-qr">
                  <div class="box-qr"></div>
                  <p class="follow">关注金银猫微信</p>
                </div>
                <p class="text">微信公众号</p>
              </li>
              <li class="sina">
                <a href="http://weibo.com/u/3822187413" target="_blanket">
                  <div class="logo l-2">
                    <i class="iconfont icon-xinlang"></i>
                  </div>
                  <p class="text">新浪微博</p>
                </a>
              </li>
              <li class="qq">
                <div class="logo l-3">
                  <i class="iconfont icon-qq"></i>
                </div>
                <div class="pop-box pop-qq">
                  <p class="qq-info">官方交流1群</p>
                  <p class="qq-info">QQ：<span>368910758</span>（满）</p>
                  <p class="qq-info">官方交流2群</p>
                  <p class="qq-info last">QQ：<span>271865771</span></p>
                </div>
                <p class="text">官方交流群</p>
              </li>
            </ul>
          </div>
          <div class="main-qr">
            <div class="title">扫一扫 马上变土豪</div>
            <div class="qr">
              <div class="border-1 border"></div>
              <div class="border-2 border"></div>
              <div class="border-3 border"></div>
              <div class="border-4 border"></div>
              <div class="qr-perviewer"></div>
            </div>
          </div>
          <div class="main-tele">
            <div class="jym-logo">
              <img src="../../../assets/image/icon/logomax.png" alt="">
            </div>
            <p>全国服务热线</p>
            <p class="tele">4008-556-333 <span> 或</span></p>
            <p class="tele">021-38934666</p>
            <p>客服工作时间：9:00~18:00</p>
          </div>
        </div>
        <div class="footer-friendLink">
          <ul class="friendLink-list">
            <li>友情链接：</li>
            <li v-for="item of friendLinks"><a class="jym-hover conv" :href="item.link" target="_blanket">{{ item.name }}</a></li>
          </ul>
        </div>
        <div class="footer-copyright">
          Copyright © 2013-2018，上海金银猫金融服务有限公司 版权所有 jinyinmao.com.cn &nbsp&nbsp 市场有风险，投资需谨慎
        </div>
        <div class="footer-copyright">
          增值电信业务经营许可证编号: B2-20160583  &nbsp&nbsp  备案号：沪ICP备13042350号  &nbsp&nbsp 由微软提供技术支持
        </div>
        <div class="footer-linkimg">
          <ul class="linkimg-list">
            <li><a class="link-1" target="_blank" href="http://www.windowsazure.cn/silvercat"></a></li>
            <li><a class="link-2" target="_blank" href="https://credit.szfw.org/CX20140725008512008605.html"></a></li>
            <li><a class="link-4" target="_blank" href="#/special/certificate/creditUnion"></a></li>
            <li><a class="link-5" target="_blank" href="#/special/certificate/ISO9001"></a></li>
            <li><a class="link-6" target="_blank" href="#/special/certificate/CIPC"></a></li>
            <li><a class="link-7" target="_blank" href="#/special/certificate/commerce"></a></li>
            <li><a class="link-8" target="_blank" href="http://www.shjbzx.cn"></a></li>
          	<li><a class="link-9" target="_blank" href="http://www.yintongzhengxin.com"></a></li>
          	<li style="margin-right: 0"><a class="link-10" target="_blank" href="https://cn.globalsign.com/"></a></li>
          </ul>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      friendLinks: []
    }
  },
  created() {
    this.requestFriendlyLinks()
  },
  methods: {
    requestFriendlyLinks() {
      this.$Request.common.getFriendlyLinks().then(res => {
        this.$data.friendLinks = res
      })
    }
  }
}
</script>

<style lang='less'>
#footer {
    background-color: #3e3e3e;
    .footer-friendLink {
        padding-top: 13px;
        padding-bottom: 13px;
        text-align: center;
        line-height: 44px;
        border-top: 1px solid #5b5b5b;
        // border-bottom: 1px solid #5b5b5b;
        overflow: hidden;
        li {
            display: inline-block;
            vertical-align: bottom;
            padding-left: 30px;
            a {
                color: #999;
            }
        }
    }
    .footer-copyright {
        padding-top: 20px;
        text-align: center;
    }
    .footer-linkimg {
        padding-top: 50px;
        text-align: center;
        ul {
            display: inline-block;
        }
        li {
            float: left;
            margin-right: 20px;
        }
        a {
            display: block;
            height: 49px;
            background: url(./images/icon.png) no-repeat;
            transition: all 0.3s;
            &.link-1 {
                width: 236px;
                background-position: 0 0;
                &:hover {
                    background-position: 0 -49px;
                }
            }
            &.link-2 {
                width: 100px;
                background-position: -236px 0;
                &:hover {
                    background-position: -236px -49px;
                }
            }
            &.link-4 {
                width: 46px;
                background-position: -487px 0;
                &:hover {
                    background-position: -487px -49px;
                }
            }
            &.link-5 {
                width: 60px;
                background-position: -560px 0;
                &:hover {
                    background-position: -560px -49px;
                }
            }
            &.link-6 {
                width: 143px;
                background-position: -649px 0;
                &:hover {
                    background-position: -649px -49px;
                }
            }
            &.link-7 {
                width: 58px;
                background-position: -822px 0;
                &:hover {
                    background-position: -822px -49px;
                }
            }
            &.link-8 {
                width: 110px;
                background-position: -896px 0;
                &:hover {
                    background-position: -896px -49px;
                }
            }
            &.link-9 {
                width: 110px;
                background-position: -1029px 0;
                &:hover {
                    background-position: -1029px -49px;
                }
            }
            &.link-10 {
                width: 103px;
                background-position: -1155px 0;
                &:hover {
                    background-position: -1155px -49px;
                }
            }
        }
    }
    .footer-container {
        width: 1140px;
        padding-top: 36px;
        padding-bottom: 20px;
        margin-left: auto;
        margin-right: auto;
        color: #999;
        .footer-main {
            height: 217px;
            padding-bottom: 40px;
            .title {
                padding-bottom: 26px;
                font-size: 16px;
                color: #fff;
            }
        }
        .main-links {
            width: 266px;
            float: left;
        }
        .links-box {
            &.links-about {
                float: left;
            }
            &.links-help {
                float: right;
            }
            li {
                padding-bottom: 10px;
            }
            a {
                font-size: 14px;
                color: #999;
            }
        }
        .main-contact {
            width: 288px;
            float: left;
            margin-left: 110px;
        }
        .contact-list {
            li {
                position: relative;
                width: 33.3%;
                float: left;
                &.wechat {
                    .logo:hover {
                        color: #eee;
                        background-color: #44b549;
                    }
                }
                &.sina {
                    .text {
                        text-indent: 5px;
                    }
                    .logo:hover {
                        color: #eee;
                        background-color: #d66666;
                    }
                }
                &.qq {
                    .logo:hover {
                        color: #eee;
                        background-color: #20a0ff;
                    }
                }
                .text {
                    display: block;
                    padding-top: 20px;
                    font-size: 14px;
                    color: #999;
                    transition: all 0.2s;
                }
            }
            .logo {
                width: 66px;
                height: 66px;
                border-radius: 50%;
                background-color: #999;
                color: #404040;
                text-align: center;
                transition: all 0.2s;
                &:hover ~ .pop-box {
                    z-index: 999;
                    transform: translateY(0);
                    opacity: 1;
                }
                &.l-1 {
                    i {
                        font-size: 46px;
                        line-height: 62px;
                    }
                }
                &.l-2 {
                    i {
                        font-size: 50px;
                        line-height: 66px;
                    }
                }
                &.l-3 {
                    i {
                        font-size: 46px;
                        line-height: 62px;
                    }
                }
            }
            .pop-box {
                position: absolute;
                left: -40px;
                background-color: #fff;
                z-index: -1;
                border-radius: 3px;
                transform: translateY(-20px);
                transition: all 0.3s;
                opacity: 0;
                box-shadow: 0 0 5px rgba(0, 0, 0, 0.28);
                &.pop-qr {
                    width: 139px;
                    top: -188px;
                }
                &.pop-qq {
                    width: 150px;
                    top: -135px;
                }
                .box-qr {
                    width: 139px;
                    height: 139px;
                    top: 10px;
                    left: 10px;
                    background-size: 100%;
                    background-image: url(../../../assets/image/icon/qr.png);
                }
                .follow {
                    padding-bottom: 8px;
                    text-align: center;
                    font-size: 14px;
                    letter-spacing: 1px;
                    color: #666;
                }
                &:after {
                    position: absolute;
                    content: '';
                    width: 0;
                    height: 0;
                    bottom: -13px;
                    left: 59px;
                    border-left: 13px solid transparent;
                    border-right: 13px solid transparent;
                    border-top: 13px solid #fff;
                }
                .qq-info {
                    padding-left: 10px;
                    padding-top: 9px;
                    font-size: 12px;
                    word-break: keep-all;
                    span {
                        color: #ff9001;
                    }
                    &.last {
                        padding-bottom: 8px;
                    }
                }
            }
        }
        .main-qr {
            float: left;
            margin-left: 88px;
            .qr-perviewer {
                position: absolute;
                display: block;
                width: 108px;
                height: 108px;
                top: 10px;
                left: 10px;
                background-size: 100%;
                background-image: url(../../../assets/image/icon/qr.png);
                background-position: 0 108px;
            }
        }
        .qr {
            position: relative;
            width: 130px;
            height: 130px;
            .border {
                position: absolute;
                width: 15px;
                height: 15px;
                &.border-1 {
                    top: 0;
                    left: 0;
                    border-top: 2px solid #999;
                    border-left: 2px solid #999;
                }
                &.border-2 {
                    top: 0;
                    right: 0;
                    border-top: 2px solid #999;
                    border-right: 2px solid #999;
                }
                &.border-3 {
                    bottom: 0;
                    left: 0;
                    border-bottom: 2px solid #999;
                    border-left: 2px solid #999;
                }
                &.border-4 {
                    bottom: 0;
                    right: 0;
                    border-bottom: 2px solid #999;
                    border-right: 2px solid #999;
                }
            }
        }
        .main-tele {
            float: right;
            .jym-logo {
                position: relative;
                width: 175px;
                height: 47.6px;
                margin-bottom: 7px;
                float: right;
                img {
                    display: block;
                    width: 100%;
                    height: 100%;
                }
            }
            p {
                width: 100%;
                padding-top: 5px;
                text-align: right;
                clear: both;
                &.tele {
                    font-size: 20px;
                    color: #c2c2c2;
                }
            }
        }
    }
}
</style>

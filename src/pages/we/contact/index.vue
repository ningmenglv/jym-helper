<template lang="html">
  <div id="contact-page" class="container">
    <div class="address contact-box">
      <div class="title">
        上海金银猫金融服务有限公司
      </div>
      <ul class="list">
        <li>总机：<a class="tel" href="tel:02151866333">021-51866333</a></li>
        <li>传真：021-68409356/9317</li>
        <li>地址：上海市浦东新区杨高南路729号陆家嘴世纪金融广场1号楼45层4501室</li>
        <li>邮编：200127</li>
      </ul>
    </div>
    <div class="serves contact-box">
      <div class="title">
        客户服务
      </div>
      <ul class="list">
        <li>服务热线：<a class="tel" href="tel:4008556333">4008-556-333或021-38934666</a></li>
        <li>客服QQ： 4008556333</li>
        <li>客服邮箱：<a class="mail" href="mailto:service@jinyinmao.com.cn"><span>service@jinyinmao.com.cn</span></a></li>
      </ul>
    </div>
    <div class="cooperation contact-box">
      <div class="title">
        媒体合作/商务合作
      </div>
      <p>如果您有媒体采访或者商务合作需求，请简述您的合作意向及联系方式发送至电子邮箱：<a class="mail" href="mailto:marketing@jinyinmao.com.cn"><span>marketing@jinyinmao.com.cn</span></a>。 </p>
    </div>
    <div class="join contact-box">
      <div class="title">
        加入我们
      </div>
      <p>如果您想加入金银猫，请把您的个人简历、应聘职位、联系方式等发送至电子邮箱：<a class="mail" href="mailto:hr@jinyinmao.com.cn"><span>hr@jinyinmao.com.cn</span></a>。</p>
    </div>
    <div class="more contact-box">
      <div class="title">
        了解更多
      </div>
      <p>请关注我们，以获取更多的理财信息和更好的服务：</p>
    </div>
    <div class="qr">
      <img src="./images/code.jpg" alt="">
    </div>
    <div class="map">
      <img src="./images/map.jpg" alt="">
    </div>
  </div>
</template>

<script>
import nprogress from 'nprogress'
export default {
  name: 'ContactPage',
  mounted() {
    nprogress.done()
  }
}
</script>

<style lang='less'>
#contact-page {
    padding: 60px;
    margin-top: 20px;
    margin-bottom: 20px;
    background-color: #fff;
    .contact-box {
        margin-bottom: 70px;
        font-size: 14px;
        color: #333;
        .title {
            padding-bottom: 18px;
            font-size: 24px;
        }
        .list {
            line-height: 27px;
        }
        span {
            color: #ff9001;
        }
        a {
            color: #333;
            &:hover {
                text-decoration: underline;
            }
        }
    }
    .map {
        margin-top: 80px;
    }
}
</style>

<template lang="html">
  <div id="depository" class="container pages">
    <div class="depository-para">
      <div class="depository-title">金银猫拥抱合规，升级存管系统</div>
      <p>2017年2月22日《网络借贷资金存管业务指引》落地，银行存管成为衡量网贷平台是否合规的重要标准之一。金银猫平台，按照相关法律、法规和业务指引要求将资金存管方式升级为直接接入海口联合农商银行资金存管系统，以期保证符合监管要求 。</p>
    </div>
    <div class="depository-title">银行存管的三大优势</div>
    <ul class="depository-advantage">
      <li class="lt">
        <div class="cir">
          <div class="light"></div>
          <i class="top iconfont icon-jinbi"></i>
        </div>
        <h2>资金隔离</h2>
        <p>银行存管是保障用户资金安全的一道防火墙，实现客户资金与平台自有资金的隔离。</p>
      </li>
      <li class="md">
        <div class="cir">
          <div class="light"></div>
          <i class="top iconfont icon-49"></i>
        </div>
        <h2>账户安全</h2>
        <p>用户在存管银行开通网络借贷资金存管专用账户，由存管银行依照相关规定和程序进行管理和监督。</p>
      </li>
      <li class="gt">
        <div class="cir">
          <div class="light"></div>
          <i class="top iconfont icon-rechange"></i>
        </div>
        <h2>交易安全</h2>
        <p>用户的每笔投资行为均需由用户发起交易指令，存管银行按照指令进行资金划转。</p>
      </li>
    </ul>
    <div class="depository-para clearfix">
      <div class="depository-title">金银猫银行存管模式</div>
      <p>升级银行存管系统后，由银行依照相关规定和程序为客户资金提供服务，包括专用账户开立、相关资金清算和业务咨询等，做到客户资金与平台自有资金隔离，同时由银行系统对资金流进行相应监控，保护客户资金安全。</p>
    </div>
    <div class="step">
        <img src="./images/step.png" alt="">
    </div>
  </div>
</template>

<script>
import nprogress from 'nprogress'
export default {
  name: 'DepositoryPage',
  mounted(){
    nprogress.done()
  }
}
</script>

<style lang='less'>
.pages {
  padding: 100px 60px;
  margin-top: 20px;
  margin-bottom: 20px;
  background-color: #fff;
}
#depository {
  .depository-para {
    clear: both;
    p {
      padding-bottom: 90px;
      font-size: 14px;
      line-height: 30px;
      color: #888;
      text-indent: 30px;
    }
  }
  .depository-title {
    padding-bottom: 28px;
    font-size: 24px;
    color: #666;
  }
  .depository-advantage {
    height: 357px;
    margin-bottom: 90px;
    li {
      width: 306px;
      height: 357px;
      border-radius: 5px;
      border: 1px solid #ececec;
      &.lt {
        margin-right: 50px;
        float: left;
        .cir {
          border: 10px solid #ffddf7;
          background: #d152cf;
          background: -webkit-gradient(
            linear,
            0% 0%,
            100% 100%,
            from(#d052cf),
            to(#fe7a78)
          );
        }
      }
      &.md {
        float: left;
        .cir {
          border: 10px solid #ffeded;
          background: #fa5a56;
          background: -webkit-gradient(
            linear,
            0% 0%,
            100% 100%,
            from(#fa5a56),
            to(#fb7774)
          );
        }
      }
      &.gt {
        float: right;
        .cir {
          border: 10px solid #ffedd5;
          background: #d152cf;
          background: -webkit-gradient(
            linear,
            0% 0%,
            100% 100%,
            from(#fa7d2e),
            to(#fea51a)
          );
        }
      }
      .cir {
        position: relative;
        width: 130px;
        height: 130px;
        border-radius: 50%;
        text-align: center;
        color: #fff;
        line-height: 115px;
        margin: 50px auto 25px;
        overflow: hidden;
        .light {
          position: absolute;
          width: 30px;
          height: 175px;
          background-color: rgba(255, 255, 255, 0.3);
          top: -35px;
          left: -67px;
          transform: rotate(30deg);
          -webkit-filter: blur(1px);
          &:after {
            content: "";
            position: absolute;
            width: 10px;
            height: 155px;
            background-color: rgba(255, 255, 255, 0.3);
            left: 35px;
          }
        }
      }
      i {
        font-size: 50px;
      }
      h2 {
        padding-bottom: 16px;
        font-size: 20px;
        color: #666;
        letter-spacing: 1px;
        text-align: center;
      }
      p {
        padding-left: 20px;
        padding-right: 20px;
        font-size: 14px;
        color: #888;
        line-height: 25px;
      }
      &:hover .cir .light {
        left: 135px;
        transition: 0.6s ease-in-out;
      }
    }
  }
  .step {
    width: 100%;
    img {
      display: block;
      margin-left: auto;
      margin-right: auto;
    }
  }
}
</style>

<template lang="html">
  <div id="milepost" class="container pages">
      <div class="year-node" v-for="(year, index) of yearList">
        <div class="year-hd">
          <div class="year">
            {{ year.year }}
            <i class="iconfont icon-icon-up"></i>
          </div>
          <div class="line">
            <div class="clock" v-if="index === 0">
                <i class="iconfont icon-shizhong2"></i>
            </div>
          </div>
        </div>
        <ul class="month-list" >
          <li v-for="month of year.monthNode">
            <div class="month">
              {{ year.year + '.' + month.month }}
            </div>
            <div class="md">
              <div class="cir"></div>
              <div class="line"></div>
            </div>
            <div class="info">
              <p>{{ month.info }}</p>
            </div>
          </li>
        </ul>
      </div>
  </div>
</template>

<script>
import nprogress from 'nprogress'
export default {
  name: 'MilepostPage',
  data() {
    return {
      yearList: [
        {
          year: 2018,
          monthNode: [
            {
              month: '04',
              info:
                '金银猫党支部在陆家嘴综合党委的支持下正式成立，金银猫的党建工作迎来了一个新台阶，标志着公司在政治与思想工作的方向上更迈进了一步。'
            }
          ]
        },
        {
          year: 2017,
          monthNode: [
            {
              month: '12',
              info: '金银猫荣获由上海金融信息行业协会颁发的“2017年上海金融信息行业 行业贡献奖”。'
            },
            {
              month: '11',
              info: '金银猫携手海口联合农商银行上线资金存管系统，资金安全全面升级。'
            },
            {
              month: '04',
              info: '金银猫获得国资背景企业中能源电力燃料有限公司战略入股。'
            },
            {
              month: '01',
              info:
                '上海市互联网金融行业协会人才专业委员会揭牌仪式举行，金银猫当选为上海市互联网金融行业协会人才专业委员会委员。'
            }
          ]
        },
        {
          year: 2016,
          monthNode: [
            {
              month: '11',
              info: '中共上海市委党校第二分校贵州省现代金融专题培训班师生莅临金银猫参观培训。'
            },
            {
              month: '09',
              info: '金银猫正式成为“中国互联网金融协会会员单位”；同月，金银猫喜获中央财政扶持。'
            },
            {
              month: '06',
              info:
                '由《今日财富》杂志举办的2016中国普惠金融服务创新论坛暨第二届“金蜂奖”颁奖典礼上，金银猫荣获“2016中国普惠金融平台服务奖”。'
            },
            {
              month: '03',
              info:
                '金银猫荣获“上海市互联网金融行业协会理事单位”；同月，成为首批“互联网金融信息安全公共服务平台”企业会员。'
            }
          ]
        },
        {
          year: 2015,
          monthNode: [
            {
              month: '11',
              info: '由《今日财富》杂志举办的“首届‘金象奖’颁奖盛典”上，金银猫荣获2015中国独立财富最佳创新奖。'
            },
            {
              month: '10',
              info: '金银猫荣获国家“高新技术企业”认定；同月，金银猫荣获第四届中国创新创业大赛优秀企业奖。'
            },
            {
              month: '09',
              info:
                '上海市市委党校经济调研部对金银猫进行深度考察，对金银猫在风险控制、业务模式和运营推广策略方面给予高度评价。'
            },
            {
              month: '07',
              info: '金银猫入驻全球首家互联网金融博物馆；同月，金银猫与微软Windows Azure达成战略技术合作伙伴。'
            },
            {
              month: '06',
              info: '《福布斯》中文版发布的“中国互联网金融50”榜单中，金银猫成为唯一一家上榜的互联网票据理财平台。'
            },
            {
              month: '05',
              info: '上海银监局主管领导莅临指导，对平台推出的创新型票据理财模式给予充分肯定。'
            },
            {
              month: '03',
              info: '阜新银行入驻金银猫银行专区。'
            },
            {
              month: '02',
              info: '金银猫新品“余额猫”上线。'
            }
          ]
        },
        {
          year: 2014,
          monthNode: [
            {
              month: '12',
              info:
                '金银猫举办“2014传统金融与互联网金融合作创新及发展峰会”；金银猫与施秉金鼎村镇银行签署合作协议；金银猫成为“上海市网络信贷服务业企业联盟”成员，并获得ISO9001质量管理体系认证。'
            },
            {
              month: '11',
              info: '金银猫牵手兴业银行。'
            },
            {
              month: '10',
              info: '金银猫与大地保险建立合作关系。'
            },
            {
              month: '09',
              info: '金银猫与富滇银行、上海闵行上银村镇银行签订合作协议。'
            },
            {
              month: '08',
              info: '金银猫与京东、苏宁合作产品正式上线。'
            },
            {
              month: '06',
              info: '中国人民银行领导对金银猫进行了专题调研，并对金银猫的风控及定位给予了充分肯定。'
            },
            {
              month: '05',
              info: '金银猫与新浪微财富建立合作关系。'
            },
            {
              month: '04',
              info: '金银猫与太平洋保险签署战略合作协议，使安全理财体系多增加了一重安全保障。'
            },
            {
              month: '03',
              info: '金银猫与大众保险签署战略合作协议。'
            }
          ]
        },
        {
          year: 2013,
          monthNode: [
            {
              month: '11.18',
              info: '金银猫平台上线，推出中国最早创新互联网票据理财产品。'
            },
            {
              month: '09.27',
              info: '上海金银猫金融服务有限公司顺势而生。'
            }
          ]
        }
      ]
    }
  },
  mounted() {
    nprogress.done()
  }
}
</script>

<style lang='less'>
#milepost {
    @blue: #4fa5ec;
    padding: 60px;
    margin: 20px auto;
    background-color: #fff;
    .year-hd {
        height: 86px;
        text-align: right;
        .year {
            display: inline-block;
            width: 180px;
            float: left;
            font-size: 20px;
            color: #f8a333;
        }
        .icon-icon-up {
            display: inline-block;
            transform: rotate(180deg);
        }
        .line {
            position: relative;
            float: left;
            height: 100%;
            margin-left: 35px;
            border-left: 3px solid @blue;
        }
        .clock {
            position: absolute;
            width: 55px;
            height: 33px;
            left: -29px;
            top: -28px;
            background-color: #fff;
            text-align: center;
            i {
                font-size: 35px;
                color: @blue;
            }
        }
    }
    .month-list {
        li {
            height: 90px;
            &:hover {
                .md {
                    .cir {
                        border: 2px solid #f8a333;
                        transform: scale(1.2);
                        &:after {
                            background-color: #f8a333;
                        }
                    }
                }
            }
        }
        .month {
            width: 180px;
            float: left;
            font-size: 16px;
            text-align: right;
            color: #666;
        }
        .md {
            position: relative;
            width: 21px;
            height: 90px;
            float: left;
            margin-left: 35px;
            .cir {
                position: absolute;
                width: 14px;
                height: 14px;
                top: 5px;
                left: -5px;
                border-radius: 50%;
                border: 2px solid @blue;
                transition: 0.2s;
                &:after {
                    content: '';
                    position: absolute;
                    top: 2px;
                    left: 2px;
                    width: 6px;
                    height: 6px;
                    border-radius: 50%;
                    background-color: @blue;
                    transition: 0.2s;
                }
            }
            .line {
                position: absolute;
                height: 66px;
                bottom: 0;
                left: 0;
                border-left: 3px solid @blue;
            }
        }
        .info {
            width: 565px;
            float: left;
            padding-left: 47px;
            font-size: 14px;
            line-height: 26px;
            color: #333;
        }
    }
}
</style>

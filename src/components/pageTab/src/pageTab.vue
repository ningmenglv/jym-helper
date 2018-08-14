<template>
<div class="pageTab" v-if='allTabLength > 1 & singleListLength !== 0'>
  <ul class='pageTab-list'>
    <li class="main-tab" @click='handlerTabIndex(1)' :class='nowIndex === 0 ? "disabled" : ""' v-if='isShowLimit' v-once>首页</li>
    <li class="main-tab pre" @click='handlerTabIndex("pre")' :class='nowIndex === 0 ? "disabled" : ""'>
      <i class="top iconfont icon-icon-up"></i>
      上一页
    </li>
    <li class="num-tab" v-for='item of tabList' :class='item - 1 === nowIndex?"active":""' @click='handlerTabIndex(item)'>{{ item }}</li>
    <li class="main-tab next" @click='handlerTabIndex("next")' :class='nowIndex === allTabLength - 1 ? "disabled" : ""'>
      下一页
        <i class="top iconfont icon-icon-up"></i>
    </li>
    <li class="main-tab" @click='handlerTabIndex(allTabLength)' :class='nowIndex === allTabLength - 1 ? "disabled" : ""' v-if='isShowLimit' v-once>末页</li>
  </ul>
  <div class="pageTab-info" v-if="isShowAllLength">
    <span class="info">
        共{{allListLength}}条记录
      </span>
    <span class="info">
        共{{ allTabLength }}页
      </span>
  </div>
</div>
</template>

<script>
export default {
  name: 'PageTab',
  props: {
    // 数据总条数
    allListLength: {
      type: Number,
      required: true
    },
    // 单页显示条数
    singleListLength: {
      type: Number,
      required: true
    },
    // 最多显示的tab数量
    maxShowTabLength: {
      type: Number,
      default: 10
    },
    // 是否显示首页末页按钮
    isShowLimit: {
      type: Boolean,
      default: false
    },
    isShowAllLength: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      nowIndex: 0,
      allTabLength: 0,
      tabList: []
    }
  },
  watch: {
    allListLength() {
      this.validateLength()
      this.getAllTabLength()
      this.createTab(1)
    },
    // 当前Index变化时处理li位移
    nowIndex() {
      let { nowIndex, maxShowTabLength, tabList, allTabLength, showTabLength } = this
      let stNum = tabList[0]
      let halfTabIndex = stNum + Math.floor(maxShowTabLength / 2) - 1
      let indexMinus = nowIndex + 1 - halfTabIndex
      if (indexMinus > 0) {
        let maxIndex = allTabLength - showTabLength + 1
        stNum = Math.min(stNum + indexMinus, maxIndex)
      } else {
        let minIndex = 1
        stNum = Math.max(stNum + indexMinus, minIndex)
      }
      this.createTab(stNum)
      this.$emit('change', nowIndex + 1)
    }
  },
  methods: {
    // 验证数据的有效性
    validateLength() {
      let { allListLength, singleListLength } = this
      let isInteger = Number.isInteger
      let isDataTrue = {
        varified: true,
        msg: ''
      }
      if ((allListLength < 0) | (singleListLength < 0)) {
        isDataTrue = {
          varified: false,
          msg: 'allListLength and singleListLength should greater than 0'
        }
      } else if (!isInteger(allListLength) | !isInteger(singleListLength)) {
        isDataTrue = {
          varified: false,
          msg: 'allListLength and singleListLength should be Integer'
        }
      }
      if (!isDataTrue.varified) console.error(isDataTrue.msg)
    },
    // 获取总共的tab数量
    getAllTabLength() {
      let { allListLength, singleListLength, maxShowTabLength } = this
      this.$data.allTabLength = Math.ceil(allListLength / singleListLength)
      this.showTabLength = Math.min(maxShowTabLength, this.$data.allTabLength)
    },
    // 创建tab
    createTab(stNum) {
      let tabList = []
      let allTabLength = this.$data.allTabLength
      let endNum = Math.min(stNum + this.showTabLength, allTabLength + 1)
      for (let i = stNum; i < endNum; i++) tabList.push(i)
      this.$data.tabList = tabList
    },
    // 切换tabIndex
    handlerTabIndex(index) {
      let { allTabLength, nowIndex } = this.$data
      if (typeof index === 'string') {
        index = index === 'pre' ? nowIndex - 1 : nowIndex + 1
      } else {
        index = index - 1
      }
      if ((index < 0) | (index > allTabLength - 1) | (index === nowIndex)) return
      this.$data.nowIndex = index
    }
  }
}
</script>

<style lang='less'>
.pageTab {
    padding-top: 20px;
    text-align: center;
    .pageTab-list {
        display: inline-block;
        vertical-align: middle;
        overflow: hidden;
    }
    li {
        float: left;
        box-sizing: border-box;
        border-top: 1px solid #e0e0e0;
        border-left: 1px solid #e0e0e0;
        border-bottom: 1px solid #e0e0e0;
        font-size: 13px;
        color: #555;
        background-color: #fdfdfd;
        text-align: center;
        cursor: pointer;
        user-select: none;
        transition: all 0.1s;
        &:not(.active):hover {
            color: darken(#ff9001, 10%);
        }
        &.active {
            color: #fff;
            background-color: #ff9001;
            border-color: darken(#ff9001, 2%);
        }
        &.main-tab {
            padding: 6px 0;
            width: 85px;
            height: 32px;
            &.disabled {
                color: #d8d8d8;
                cursor: not-allowed;
            }
        }
        &.num-tab {
            width: 36px;
            padding-top: 6px;
            padding-bottom: 6px;
        }
        &.pre {
            i {
                display: inline-block;
                transform: rotate(-90deg);
            }
        }
        &.next {
            border-right: 1px solid #e0e0e0;
            i {
                display: inline-block;
                transform: rotate(87deg);
            }
        }
    }
    .pageTab-info {
        display: inline-block;
        font-size: 0.13rem;
        color: #666;
        .info {
            display: inline-block;
        }
    }
}
@media screen and (max-width: 435px) {
    .pageTab {
        display: block;
        text-align: center;
        .pageTab-list {
            flex-wrap: wrap;
            li {
                margin-top: 5px;
            }
        }
        .pageTab-info {
            padding-top: 12px;
            padding-bottom: 12px;
        }
    }
}
</style>

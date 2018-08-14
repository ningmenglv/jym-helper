<template lang="html">
    <div id="jym-nav"  :class="{'active-bg':typeIndex>0,'special-bg': typeIndex==3}" :style="[navBackground]">
      <div class="jym-nav">
        <ul class="container">
          <li class="item" v-for="(item,index) in items" :key="index" v-jym-link="item.path">
            <a class="text" :class="{active:activeIndex===index,paddingR36:!item.items.length}">{{item.label}}<i class="iconfont icon-jiantou-copy-copy" v-if="item.items.length" /></a>
            <nav-sub :items="item.items" v-if="item.items.length" />
          </li>
          </li>
        </ul>
      </div>
      <div v-if="status" class="page-title container">
        <img class="sub-img" :src="subImgPath" v-if="subImgPath" />
        <strong class="font-yueyuan" v-else>{{title}}</strong>
      </div>
    </div>
</template>
<script>
import { mapState } from 'vuex'
import navData from './nav.json'
import NavSub from './nav-sub.vue'
export default {
  name: 'Nav',
  components: {
    NavSub
  },
  data() {
    return {
      items: navData.items
    }
  },
  computed: {
    ...mapState('nav', {
      status: 'status',
      typeIndex: 'typeIndex',
      activeIndex: 'activeIndex',
      title: 'title',
      subImgPath(state) {
        let path = ''
        if (!state.title && state.subImg) {
          path = require('./img/sub_bg' + state.typeIndex + '.png')
        }
        return path
      },
      navBackground(state) {
        let path = ''
        if (state.typeIndex && state.typeIndex !== 3) {
          path = require('./img/nav_bg' + state.typeIndex + '.jpg')
        }
        return path ? { 'background-image': `url(${path})` } : {}
      }
    })
  },
  methods: {
    goLink(path) {
      // this.$router.push('depository')
      // if (path) {
      //   console.log(path)
      //   console.log(this.$router.push)
      //   this.$router.push(path)
      // }
    }
  }
}
</script>

<style lang='less'>
@navHeight: 200px;
@navTextHeight: 40px;
@special-bg: 40px;
#jym-nav {
  background-size: 100% 100%;
  background-position: 0 0;
  background-repeat: no-repeat;
  width: 100%;
  &.active-bg {
    height: @navHeight;
  }
  &.special-bg {
    height: @special-bg;
  }
  .jym-nav {
    background-color: rgba(0, 0, 0, 0.2);
    height: @navTextHeight;
    position: relative;
    z-index: 1;
    & > ul {
      height: 100%;
    }
    .item {
      position: relative;
      display: inline-block;
      color: #fff;
      height: 100%;
      margin-right: 61px;
      .text {
        display: inline-block;
        height: 100%;
        line-height: @navTextHeight;
        padding: 0 10px;
        font-size: 16px;
        transition: color 0.3s;
        cursor: pointer;
        &.paddingR36 {
          padding-right: 36px;
        }
        &:hover .iconfont {
          transform: rotate(180deg);
        }
        &.active,
        &:hover {
          color: #ff9001;
        }
        .iconfont {
          display: inline-block;
          padding: 0 5px;
          transition: transform 0.3s;
        }
      }
      .jym-sub-nav {
        display: none;
      }
      &:hover .jym-sub-nav {
        display: block;
      }
    }
    .item:last-child {
      text-align: right;
      margin-right: 0;
    }
  }
  .page-title {
    position: relative;
    strong {
      position: absolute;
      top: 60px;
      left: 50%;
      transform:translateX(-50%);
      display: inline-block;
      color: #fff;
      font-size: 28px;
    }
    .sub-img {
      position: absolute;
      top: 80px;
      left: 50%;
      transform: translateX(-50%) translateY(-50%);
    }
  }
}
</style>

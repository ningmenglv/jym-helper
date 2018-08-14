<template lang="html">
  <div class="jym-sub-nav">
    <ul class="nav-list" :class="{active:style.lastMouseenter}" v-if="items.length">
      <li
        @mouseenter="style.firstMouseenter=true" @mouseleave="style.firstMouseenter=false"  v-jym-link="items[0].path">{{items[0].label}}</li>
      <li v-for="(item,index) in items.slice(1,items.length-1)" :key="index" v-jym-link="item.path">{{item.label}}</li>
      <li  v-if="items.length>1"
        @mouseenter="style.lastMouseenter=true" @mouseleave="style.lastMouseenter=false" v-jym-link="items[items.length-1].path"
       >{{items[items.length-1].label}}</li>
    </ul>
    <i class="iconfont icon-icon-up" :class="{active:style.firstMouseenter}"></i>
  </div>
</template>

<script>
export default {
  name: 'NavSub',
  props: {
    items: { // 数据格式:[{label:'关于我们',path:'/'}]
      type: Array,
      required: true
    }
  },
  data() {
    return {
      style: {
        firstMouseenter: false,
        lastMouseenter: false
      }
    }
  }
}
</script>

<style lang="less">
.jym-sub-nav {
    position: absolute;
    right: -25%;
    top: 35px;
    .iconfont {
        position: absolute;
        top: -9px;
        right: 50%;
        transform: translateX(50%);
        color: #fff;
        &.active {
            color: #ff9001;
        }
    }
    .nav-list {
        background-color: #fff;
        border-bottom: 1px solid #ccc;
        &.active {
            border-bottom-color: #ff9001;
        }
        li {
            color: #666;
            width: 100px;
            text-align: center;
            height: 35px;
            line-height: 35px;
            border: 1px solid #ccc;
            border-bottom: none;
            &:hover {
                background-color: #ff9001;
                border-color: #ff9001;
                color: #fff;
                cursor: pointer;
            }
        }
    }
}
</style>

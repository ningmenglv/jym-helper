<template lang="html">
  <transition name="fade">
    <div id="img-modal" v-show="status" >
       <div class="imgContent">
         <i class="iconfont icon-Close close"  @click="close"></i>
         <img :src="src" alt="">
       </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'MagnifyImg',
  data() {
    return {
      status: false,
      src: ''
    }
  },
  methods: {
    show(src) {
      this.$data.status = true
      this.$data.src = src
    },
    close() {
      this.$data.status = false
    }
  }
}
</script>

<style lang='less'>
#img-modal {
    position: fixed;
    height: 100%;
    width: 100%;
    left: 0;
    top: 0;
    background-color: rgba(0,0,0,0.5);
    z-index: 1000;
    .imgContent {
        height: 80%;
        width: auto;
        position: absolute;
        left: 50%;
        top: 10%;
        transform: translateX(-50%);
    }
    img {
        height: 100%;
    }
    .close {
        display: inline-block;
        font-size: 24px;
        position: absolute;
        right: -30px;
        top: -40px;
        color: #fff;
        cursor: pointer;
    }
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .8s
}
.fade-enter, .fade-leave-to /* .fade-leave-active in below version 2.1.8 */ {
  opacity: 0
}
</style>

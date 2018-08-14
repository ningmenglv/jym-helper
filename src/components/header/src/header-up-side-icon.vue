<template lang="html">
  <span class="upSideIcon">
    <i class="top" :class="iconClass" :style="'font-size:'+fontSize"></i>
    <i class="bottom" :class="iconClass" :style="'color:'+activeColor+';font-size:'+fontSize"></i>
  </span>
</template>

<script>
export default {
  name: 'HeaderUpSideIcon',
  props: {
    activeColor: {
      type: String,
      required: true
    },
    iconClass: {
      type: String,
      required: true
    },
    fontSize: {
      type: String,
      default: '28px',
      required: false
    }
  }
}
</script>

<style lang="less">
.upSideIcon {
    display: inline-block;
    height: 40px;
    width: 30px;
    overflow: hidden;
    text-align: center;
    cursor: default;
    i {
        font-size: 28px;
        display: inline-block;
        transition: transform 0.5s;
        transform: translateZ(0);
    }
    &.hover,
    &:hover {
        & i {
            transform: translateY(-40px);
        }
    }
}
</style>

<template lang="html">
  <img :src="src" :rate="rate" :style="style" :conWidth="conWidth" :conHeight="conHeight" />
</template>

<script>
export default {
  name: 'Img',
  props: {
    src: {
      require: true,
      type: String
    },
    rate: {
      default: 1, // 1代表垂直的矩形，2代表水平矩形
      type: Number
    },
    conWidth: {
      default: 188, // 嵌入容器的宽
      type: Number
    },
    conHeight: {
      default: 268, // 嵌入容器的高
      type: Number
    }
  },
  data() {
    return {
      style: this.rate < 1 ? {
        width: this.conWidth
      } : {}
    }
  },
  mounted() {
    if (this.rate < 1) return
    let imgDom = this.$el
    let actualRate = imgDom.width / imgDom.height
    imgDom.onload = () => {
      if (this.rate === 1 && imgDom.width >= imgDom.height) {
        this.style = {
          width: this.conWidth + 'px',
          height: (this.conWidth / actualRate) + 'px'
        }
      } else {
        if (imgDom.width >= imgDom.height) {
          this.style = {
            width: this.conWidth + 'px',
            height: (this.conWidth / actualRate) + 'px'
          }
        } else {
          this.style = {
            height: this.conHeight + 'px',
            width: (this.conHeight * actualRate) + 'px'
          }
        }
      }
    }
  }
}
</script>

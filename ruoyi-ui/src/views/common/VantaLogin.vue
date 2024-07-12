<template>
  <div ref="vantaRef" class="vanta-container" style="width:100%;height:100vh">
  </div>
</template>

<script>
import * as THREE from 'three'
import BIRDS from 'vanta/src/vanta.clouds'
export default {
  name: 'VantaBackground',
  data() {
    return {
      vantaEffect: null,
    };
  },
  mounted() {
    this.vantaEffect = BIRDS({
      el: this.$refs.vantaRef,
      THREE: THREE,
      // 可以在这里添加更多配置选项  
      // 例如: color: 0x00FF00, // 背景颜色
      //      speed: 1.5,      // 动画速度  
    })
  },
  beforeDestroy() {
    if (this.vantaEffect) {
      this.vantaEffect.destroy()
    }
  },
};
</script>
<style scoped>
.vanta-container {
  /* 可以添加一些CSS样式，但通常不是必需的，因为vanta会处理大小 */
  position: relative;
  /* 确保它相对于其父元素定位 */
  overflow: hidden;
  /* 防止内容溢出 */
}
</style>
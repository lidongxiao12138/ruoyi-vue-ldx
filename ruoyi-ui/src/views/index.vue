<template>
  <div ref="vantaRef" style="width:100%;height:100vh"></div>
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
      THREE: THREE
    })
  },
  beforeDestroy() {
    if (this.vantaEffect) {
      this.vantaEffect.destroy()
    }
  },
};
</script>

<template>

  <body>
    <!-- <div style="width: 100%; display: flex; justify-content: center;">
      <span style="font-size: 30px; padding-top:30px;">环绕式照片墙</span>
    </div> -->
    <!-- <div> -->
    <!-- <img :src="require('./imagePlaceholder.png')">
    <script src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/16327/gsap-latest-beta.min.js"></script>
    <script src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/16327/ScrollTrigger.min.js"></script>
    <script src="./script.js"></script> -->
    <!-- </div> -->
    <div class="img" id="img">
      <!-- <img :src="require('./imagePlaceholder.png')" ref="imageElement" @load="getImageWidth"> -->
      <div class="box"></div>
    </div>
  </body>
</template>
<script>
import gsap from 'gsap'
import ScrollTrigger from 'gsap'
export default {
  data() {
    return {
      imageWidth: 0,
    }
  },
  onload() {

  },
  mounted() {
    gsap.fromTo('.box', { x: 0 }, {
      x(_, target) {
        return document.documentElement.clientWidth - target.offsetWidth;
      },
      duration: 2,
      // ease:'bounce.out'//弹跳效果
      ease: 'none'//匀速效果

    })
  },
  methods: {
  }
};
</script>
<style lang="scss" scoped>
body {
  width: 100vw;
  height: 100vh;
  background: black;
}

.box {
  width: 200px;
  height: 200px;
  background: green;
}

.img {
  width: 300px;
  height: 300px;
  background: rebeccapurple;
}
</style>

<template>
  <a-card :bordered="false">

    <body>
      <div style="width: 100%; display: flex; justify-content: center;">
        <span style="color: white; font-size: 30px; padding-top:30px;">环绕式照片墙</span>
      </div>
      <div class="ring">
        <img v-for="(imageUrl, index) in imageUrls" :key="index" :src="imageUrl" alt="" @click="handleClick(index)" />
      </div>
    </body>
  </a-card>
</template>
<script>
export default {
  data() {
    return {
      imageUrls: [
        'https://pic.netbian.com/uploads/allimg/240528/193853-1716896333e77b.jpg',
        'https://pic.netbian.com/uploads/allimg/240528/193007-1716895807aadf.jpg',
        'https://pic.netbian.com/uploads/allimg/240509/011032-1715188232a1f2.jpg',
        'https://pic.netbian.com/uploads/allimg/240504/004004-171475440421fb.jpg',
        'https://pic.netbian.com/uploads/allimg/240504/003711-17147542315039.jpg',
        'https://pic.netbian.com/uploads/allimg/240313/165904-171032034475ab.jpg',
        'https://pic.netbian.com/uploads/allimg/240221/091253-1708477973ec63.jpg',
        'https://pic.netbian.com/uploads/allimg/240209/174304-1707471784bfb7.jpg',
        'https://pic.netbian.com/uploads/allimg/231117/235419-17002364590edb.jpg',
        'https://pic.netbian.com/uploads/allimg/230813/220554-1691935554cbb1.jpg',
        'https://pic.netbian.com/uploads/allimg/230713/002718-168917923806c4.jpg',
        'https://pic.netbian.com/uploads/allimg/230311/003345-16784660256b9e.jpg'
      ]
    }
  },
  methods: {
    handleClick(e) {
      this.$message({
        message: '您当前点击了第' + e + "张图片",
        type: 'warning'
      });
    }
  }
};
</script>
<style lang="scss" scoped>
@use "sass:math";
body {
  background: black;
  perspective: 2000px;
}
.ring {
  width: 100%;
  height: 100vh;
  transform-style: preserve-3d;
  /* 旋转动画 */
  animation: rotateYAnimation 50s linear infinite;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    position: absolute;
    $imgWidth: 400px;
    $imgHeight: 700px;
    width: $imgWidth;
    height: $imgHeight;
    $r: 800px;
    $n: 12;
    $pDeg: 360deg/$n;
    backface-visibility: hidden; //背面不可见
    @for $i from 0 through $n - 1 {
      &:nth-child(#{$i + 1}) {
        $deg: $i * $pDeg;
        $x: math.sin($deg) * $r;
        $z: math.cos($deg) * $r;
        transform: translate3d(#{$x}, 0, #{$z}) rotateY(180deg + $deg); // 使用 $r 变量进行3D定位
      }
    }
    filter: brightness(1);
    /* 如果你想要更平滑的过渡效果，可以添加transition属性 */
    transition: filter 0.3s ease-in-out;
                
  }
  img:hover {
    filter: brightness(1.2);
    /* 鼠标悬停时的颜色 */
    cursor: pointer;
    /* 鼠标形状改变为手形 */
  }
}
@keyframes rotateYAnimation {
  from {
    transform: rotateY(0deg);
  }

  to {
    transform: rotateY(360deg);
  }
}
</style>

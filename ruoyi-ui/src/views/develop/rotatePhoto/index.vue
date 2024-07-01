<template>

  <body>
    <div style="background-color: black; width: 100%; display: flex; justify-content: center;">
      <span style="color: white; font-size: 30px; padding-top:30px;">旋转切换轮播图</span>
    </div>
    <div class="container">
      <div class="back">
        <div class="inner">
          <img v-for="(imageUrl, index) in imageUrls" :key="index" :src="imageUrl"
            placeholder="require('./imagePlaceholder.png')" alt="" @click="handleClick(index)" />
        </div>
      </div>
    </div>
  </body>
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
@use'sass:math';
$size: 500px;
$n: 6;
$pDeg: 360deg/$n;
$r: $size/2;
$R: $r/math.sin($pDeg/2);
$innerSize: $R*2;

.container {
  height: 100vh;
  background: black;
  display: flex;
  justify-content: center;
  .inner {
    width: $innerSize;
    height: $innerSize;
    border-radius: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    margin-top: $r;
    img {
      width: $size;
      height: $size;
      border-radius: 50%;
      position: absolute;
      left: 50%;
      margin-left: -$r;
      margin-top: -1000px;
      transform-origin: center #{$r+$R};

      @for $i from 1 through $n {
        &:nth-child(#{$i}) {
          transform: rotate($pDeg * ($i - 1));
        }
      }
    }
  }
}
.back {
  width: $size;
  height: $size;
  border-radius: 50%;
  outline: 2px solid white;
  display: flex;
  justify-content: center;
  overflow: hidden;
  margin-top: 100px;
}

$u: 1/$n*100%;
$stopPercent: 0.6 * $u;//停顿效果

@keyframes moving {
  @for $i from 1 through $n {
    $p: $u * $i;
    $deg: $pDeg*$i;
    #{$p - $stopPercent},
    #{$p} {
      transform: rotate(-$deg);
    }
  }
}

.inner {
  animation: moving 10s infinite;
}
</style>

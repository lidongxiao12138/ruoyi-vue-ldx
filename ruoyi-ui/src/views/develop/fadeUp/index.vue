<template>

  <body>
    <div style="background-color: black; width: 100%; display: flex; justify-content: center;">
      <span style="color: white; font-size: 30px; padding-top:30px;">旋转切换轮播图</span>
    </div>
    <div class="container">
      <div v-slide-in v-for="n in 10" :key="n" class="item">{{ n }}</div>
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
.container {
  margin: 1em auto;
  width: 80%;
  background: black;
}
.item {
  width: 100%;
  aspect-ratio: 2/1;
  margin: 5vw 0;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-content: center;
  font-size: 10vw;
  color: white;
  background: rebeccapurple;
}
</style>

<template>
  <a-card>
    <body>
      <div style="display: flex; flex-direction: column;">
        <el-input v-model="heightCoffee" placeholder="请输入内容"></el-input>
        <button @click="hrefclick(1)">咖啡</button>
        <el-input v-model="heightWater" placeholder="请输入内容"></el-input>
        <button @click="hrefclick(2)">水</button>
      </div>
      <div class="cup">
        <div class="cup-body">
          <div class="layer coffee">咖啡</div>
          <div class="layer water">水</div>
        </div>
      </div>
    </body>
  </a-card>

</template>
<script>
export default {
  data() {
    return {
      heightCoffee:'70',
      heightWater: '50',
    }
  },
  methods: {
    hrefclick(e) {
      if(e == 1) {
        var root = document.documentElement;
        var coffee = this.heightCoffee + '%'
        root.style.setProperty('--my-height-coffee', coffee);
      }else {
        var root = document.documentElement;
        var water = this.heightWater + '%'
        root.style.setProperty('--my-height-water', water);
      }

    }
  }
};
</script>
<style lang="less" scoped>
body {
  width: 100%;
  height: 100vh;
  background: #cebca6;
  display: flex;
  justify-content: center;
  align-items: center;
}

.cup {
  width: 160px;
  height: 162px;
  margin: 3em auto;
  position: relative;
}

.cup::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 20px;
  top: 0;
  background: rgba(247, 247, 247, 0.5);
  ;
  z-index: 1;
  border-radius: 50%;
  margin-top: -10px;
}

.cup-body {
  width: 100%;
  height: 100%;
  background: rgba(247, 247, 247, 0.9);
  clip-path: path('m 0 0 q 4.59 145.8 34.42 155.52 c 29.835 8.1 68.85 8.1 96.39 0 q 29.835 -9.72 29.835 -155.52 C 143 11 16 13 0 0'); //切割成杯子
  display: flex;
  flex-direction: column-reverse;
}

.layer {
  text-align: center;
  border-radius: 80px/10px;
  border-radius: 10%;
  position: relative;
}

.layer::after {
  content: '';
  position: absolute;
  width: 100%;
  left: 0;
  top: 0;
  height: 20px;
  border-radius: 50%;
  background: inherit;
}

.coffee {
  height: var(--my-height-coffee);
  background: rgba(75, 49, 31, 0.8);

}

.water {
  height: var(--my-height-water);
  background: rgba(122, 201, 233, 0.8);
}

.layer:nth-child(n+2) {
  margin-bottom: -20px;
}

:root {
  --my-height-coffee: 50px;
  --my-height-water: 50px;
}
</style>

<template>
  <div class="staff-care">
    <div class="fixclass" @click="toggleEleFullScreen()">进入全屏</div>
    <!-- <div ref="vantaRef" style="width:100%;height:100vh"> -->
    <dv-border-box-1 class="main-con">
      <div class="flex">
        <div class="flex flex-col p-5 justify-around h-screen w-1/4">
          <dv-border-box-3 class="left-chart-container">
            <div class="flex flex-col h-full justify-center items-center ">
              <span class="text-2xl">折线图</span>
              <div class="flex flex-col items-start" style="width:80%;">
                <span>访问数据总数：<span style="color: #00baff; font-size:20px">200</span></span>
              </div>
              <dv-capsule-chart :config="config" style="width:90%;height:50%;" />
            </div>
          </dv-border-box-3>
          <dv-border-box-3 class="left-chart-container">
            <div class="flex flex-col h-full items-center justify-center">
              <dv-decoration-3 style="width:25vh;height:10%;" />
              <span class="text-2xl">当前使用率</span>
              <dv-decoration-9 style="width:17vh;height:17vh;">66%</dv-decoration-9>
            </div>
          </dv-border-box-3>
          <dv-border-box-3 class="left-chart-container">
            <div class="flex flex-col h-full items-center justify-center">
              <dv-decoration-1 style="width:50%; height:20%;" />
              <dv-conical-column-chart :config="config" style="width:80%;height:50%;" />
            </div>
          </dv-border-box-3>
        </div>

        <div class="p-5 w-3/4 flex flex-col">
          <div class="flex h-1/2">
            <div class="w-3/5 mr-10">
              <dv-border-box-8 class="left-chart-container">
                <div class="flex flex-col h-full items-center justify-center">
                  <span class="text-2xl">飞线图</span>
                  <dv-flyline-chart-enhanced :config="config1" :dev="true" style="width:90%; height:90%" />
                </div>
              </dv-border-box-8>
            </div>
            <div class="w-2/5">
              <div class="h-1/2 pb-2">
                <dv-border-box-10 class="left-chart-container">
                  <div class="flex flex-col h-full items-center justify-center">
                    <dv-scroll-board :config="config2" style="width:90%;height:90%" />
                  </div>
                </dv-border-box-10>
              </div>
              <div class="h-1/2 pt-2">
                <dv-border-box-10 class="left-chart-container">
                  <div class="flex flex-col h-full items-center justify-center">
                    <dv-scroll-ranking-board :config="config3" style="width:90%;height:200px" />
                  </div>
                </dv-border-box-10>
              </div>
            </div>
          </div>

          <div class="flex h-1/2 pt-10">
            <dv-border-box-11 title="饼状图数据">
              <div class="flex h-full items-center justify-around">
                <dv-active-ring-chart :config="config" style="width:300px; height:300px" />
                <dv-active-ring-chart :config="config" style="width:300px; height:300px" />
                <dv-active-ring-chart :config="config" style="width:300px; height:300px" />
                <dv-active-ring-chart :config="config" style="width:300px; height:300px" />
              </div>
            </dv-border-box-11>
          </div>

        </div>

      </div>


    </dv-border-box-1>
    <!-- </div> -->


  </div>
</template>

<script>
import { config, config1, config2, config3 } from "./index.data.js"
export default {
  name: 'app',
  components: {
  },
  data() {
    return {
      isFullScreen: '',
      vantaEffect: null,
      config,
      config1,
      config2,
      config3,
    }
  },
  onload() {

  },
  mounted() {

  },
  methods: {
    toggleEleFullScreen() {
      let ele = document.getElementsByClassName('staff-care')[0]
      let fixclass = document.getElementsByClassName('fixclass')[0]
      if (this.isFullScreen === false) {
        let reqFullScreen =
          ele.requestFullScreen || ele.webkitRequestFullScreen || ele.mozRequestFullScreen || ele.msRequestFullscreen
        if (typeof reqFullScreen !== 'undefined' && reqFullScreen) {
          reqFullScreen.call(ele)
        }
        this.isFullScreen = true
        fixclass.innerText = '退出全屏'
      } else {
        if (document.exitFullscreen) {
          document.exitFullscreen()
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen()
        } else if (document.webkitCancelFullScreen) {
          document.webkitCancelFullScreen()
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen()
        }
        this.isFullScreen = false
        fixclass.innerText = '进入全屏'
      }
    },
  }
};
</script>
<style lang="less" scoped>
.staff-care {
  overflow: hidden !important;
  background: white;
  width: 100%;
  height: 100%;
  color: white;

  .fixclass {
    position: absolute;
    width: 100px;
    height: 4.5vh;
    z-index: 9999;
    right: 15px;
    text-align: center;
    line-height: 4.5vh;
    background-color: #2c58a6;
    border-radius: 20px;
    color: white;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
  }

  .fixclass:hover {
    background-color: #0c8fcf;
    color: #5bb0b9;
  }

  .main-con {
    display: flex;
    flex-direction: row;
    height: 100vh;
    background: black;

  }

  .left-chart-container {
    display: flex;
    text-align: center;
    box-sizing: border-box;
  }


}
</style>

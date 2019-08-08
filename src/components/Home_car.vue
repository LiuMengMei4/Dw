<template>
    <div class="process-box" ref='processBox'>
        <p>员工历程</p>
     左箭头   <a href="javascript:void(0);" class="circle-orange btn-prev" :class="{active:prevActive}" @click="transMove('prev')"></a>

        <div class="process-list" :style="{width:processListWidth}" ref="proList" style="transform:translateX(0px)">
            <div class="process-item" v-for="(item, index) in process" :key='index' ref='proitem' :style="{width:processItemW}">
                <p class="txt-time">{{item.createTime}}</p>
                <p class="line-step"><i class="circle-icon"></i></p> 
                <div class="process-info">
                    <h5>{{item.courseTitle}}</h5>
                    <p v-html="item.processRecord"></p>
                </div>                
            </div>
        </div>
   右箭头     <a href="javascript:void(0);" class="circle-orange btn-next" :class="{active:nextActive}" @click="transMove('next')"> </a>
    </div>

</template>
<style scoped>
.mainBlock {
    width: 1080px;
    margin: 0 auto;
    padding: 20px 0;
    height: 150px;
  }
  .displayWindow {
    width: 100%;height: 100%;overflow: hidden
  }
  .mobilePanel {
    width: 3240px;height: 100%;
  }
  .box {
    float: left;width: 270px;height: 120px;
  }
  .boxLeft {
    width: 115px;float: left;height: 100%;
  }
  .boxRight {
    width: 135px;float: left;
  }
  .proTitle {
    line-height: 30px;font-size: 14px;margin: 2px auto;
  }
  .proText {
    color: #666;line-height: 180%;font-size: 12px;margin: 2px auto;
  }
</style>

<script>
export default {
    data() {
            return {
                infoH:'',
                processDataLen:0,
                processListWidth:'100%',
                processItemW:'',
                itemWidth:'',
                transPx: '0',
                transpage:0,
                prevActive:false,
                nextActive:false,     
            };
        },

  mounted () {
    let len = this.productList.length % 4
    // 根据产品数组长度除以4的余数，来给数组末尾加入几个空的object
    switch (len) {
      case 0:
        break
      case 1:
        for (let i = 0; i < 3; i++) {
          this.productList.push(
            {
              ProductName: '',
              Description: '',
              picSrc: '',
              picWidth: '0'
            }
          )
        }
        break
      case 2:
        for (let i = 0; i < 2; i++) {
          this.productList.push(
            {
              ProductName: '',
              Description: '',
              picSrc: '',
              picWidth: '0'
            }
          )
        }
        break
      case 3:
        this.productList.push(
          {
            ProductName: '',
            Description: '',
            picSrc: '',
            picWidth: '0'
          }
        )
        break
      default:
        break
    }
    // 取数组前4个元素，加入到数组末尾去，便于轮播
    let productListFrontFourthObject = this.productList.slice(0, 4)
    for (let i = 0; i < productListFrontFourthObject.length; i++) {
      this.productList.push(productListFrontFourthObject[i])
    }
    // 设置定时，开始轮播
    let _this = this
    setTimeout(function () {
      _this.changeLeftVal()
    }, 3000)
  },
  methods: {
    // 移动面板mobilePanel left属性变化函数
    changeLeftVal () {
      // 变化前移动面板的left属性值
      let beforeLeftVal = parseInt(document.querySelector('.mobilePanel').style.left)
      console.log(beforeLeftVal)
      // 变化后移动面板的left属性值
      let afterLeftVal = beforeLeftVal - 345
      // 给左移添加动画
      this.animate(beforeLeftVal, afterLeftVal)
    },
    // 动画效果
    animate (beforeLeftVal, afterLeftVal) {
      let _this = this
      var interval
      // 设置定时器，这里设置10ms移动108px，即100ms移动1080px，也就是说动画效果时间为100ms
      interval = setInterval(function () {
        beforeLeftVal -= 108 // left值减108
        document.querySelector('.mobilePanel').style.left = beforeLeftVal + 'px' // 渲染到DOM中
        // 如果beforeLeftVal值已经变化到 等于我们需要的值时
        if (beforeLeftVal === afterLeftVal) {
          // 清初定时器
          clearInterval(interval)
          // 当beforeLeftVal值等于 -1080 × （产品数组长度/4 - 1），将移动面板的left值归零
          if (beforeLeftVal === -1080 * (_this.productList.length / 4 - 1)) {
            document.querySelector('.mobilePanel').style.left = 0
          }
          // 继续改变移动面板left值
          setTimeout(function () {
            _this.changeLeftVal()
          }, 3000)
        }
      }, 10)
    }
  }
}
</script>

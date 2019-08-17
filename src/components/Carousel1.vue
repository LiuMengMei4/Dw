<template>
    <div class="carousel">
        <div class="carousel-content">
            <ul class="carousel-box" style="left:0px">
                <li class="carousel-card">
                    <a href="https://element.eleme.cn/#/zh-CN/component/card">
                        <p>
                            <img src="../assets/img/lover/petite_mesh_watch_s_32_ashfield_black_petite_leather_strap_s_14_bondi_1.png" alt="">
                        </p>
                        <p>Classic <span>Canterbury</span></p>
                        <p>40mm</p>
                        <p>￥2131.00</p>
                    </a>
                    <el-button>点击购买</el-button>
                </li>
                <li class="carousel-card">
                    <a href="https://element.eleme.cn/#/zh-CN/component/card">
                        <p>
                            <img src="../assets/img/lover/petite_mesh_watch_s_32_ashfield_black_petite_leather_strap_s_14_bondi_1.png" alt="">
                        </p>
                        <p>Classic <span>Canterbury</span></p>
                        <p>40mm</p>
                        <p>￥2131.00</p>
                    </a>
                    <el-button>点击购买</el-button>
                </li>
                <li class="carousel-card">
                    <a href="https://element.eleme.cn/#/zh-CN/component/card">
                        <p>
                            <img src="../assets/img/lover/petite_mesh_watch_s_32_ashfield_black_petite_leather_strap_s_14_bondi_1.png" alt="">
                        </p>
                        <p>Classic <span>Canterbury</span></p>
                        <p>40mm</p>
                        <p>￥2131.00</p>
                    </a>
                    <el-button>点击购买</el-button>
                </li>
                <li class="carousel-card">
                    <a href="https://element.eleme.cn/#/zh-CN/component/card">
                        <p>
                            <img src="../assets/img/lover/petite_mesh_watch_s_32_ashfield_black_petite_leather_strap_s_14_bondi_1.png" alt="">
                        </p>
                        <p>Classic <span>Canterbury</span></p>
                        <p>40mm</p>
                        <p>￥2131.00</p>
                    </a>
                    <el-button>点击购买</el-button>
                </li>
                <li class="carousel-card">
                    <a href="https://element.eleme.cn/#/zh-CN/component/card">
                        <p>
                            <img src="../assets/img/lover/petite_mesh_watch_s_32_ashfield_black_petite_leather_strap_s_14_bondi_1.png" alt="">
                        </p>
                        <p>Classic <span>Canterbury</span></p>
                        <p>40mm</p>
                        <p>￥2131.00</p>
                    </a>
                    <el-button>点击购买</el-button>
                </li>
                <li class="carousel-card">
                    <a href="https://element.eleme.cn/#/zh-CN/component/card">
                        <p>
                            <img src="../assets/img/lover/petite_mesh_watch_s_32_ashfield_black_petite_leather_strap_s_14_bondi_1.png" alt="">
                        </p>
                        <p>Classic <span>Canterbury</span></p>
                        <p>40mm</p>
                        <p>￥2131.00</p>
                    </a>
                    <el-button>点击购买</el-button>
                </li>
                <li class="carousel-card">
                    <a href="https://element.eleme.cn/#/zh-CN/component/card">
                        <p>
                            <img src="../assets/img/lover/petite_mesh_watch_s_32_ashfield_black_petite_leather_strap_s_14_bondi_1.png" alt="">
                        </p>
                        <p>Classic <span>Canterbury</span></p>
                        <p>40mm</p>
                        <p>￥2131.00</p>
                    </a>
                    <el-button>点击购买</el-button>
                </li>
                <li class="carousel-card">
                    <a href="https://element.eleme.cn/#/zh-CN/component/card">
                        <p>
                            <img src="../assets/img/lover/petite_mesh_watch_s_32_ashfield_black_petite_leather_strap_s_14_bondi_1.png" alt="">
                        </p>
                        <p>Classic <span>Canterbury</span></p>
                        <p>40mm</p>
                        <p>￥2131.00</p>
                    </a>
                    <el-button>点击购买</el-button>
                </li>
            </ul>
        </div>
        <!-- 切换 -->
        <div class="switch-btn">
            <p><i class='el-icon-arrow-left' v-on:click="marinLeft"></i></p>
            <p><i class='el-icon-arrow-right' v-on:click="marinRight"></i></p>
        </div>
    </div>
</template>
<style>
/* 外部样式 */
    .carousel{
        width: 1440px;
        height: 100%;
        margin: 0 auto;
        position: relative;
    }
    .carousel-content{
        width: 100%;
        height: 353px;
        position: relative;
        overflow: hidden;
    }
    .carousel-box{
        list-style: none;
        height: 100%;
        overflow: hidden;
        position: absolute;
        left: 0;
    }
    .carousel-box li{
        float: left;
    }
/* 切换按钮 */
    .switch-btn{
        width: 1440px;
        margin: 0 auto;
        position: absolute;
        top:50%;
        display: flex;
        justify-content: space-between;
    }
    .switch-btn p{
        width: 45px;
        height: 45px;
        border-radius: 50%;
        background: rgba(255,255,255,.7);
        box-shadow: 0 0 14px 0 rgba(0,0,0,.15);
        color: #464646;
        line-height: 45px;
        font-size: 24px;
    }
    .switch-btn p:hover{
        box-shadow: 0 1px 4px 2px rgba(0,0,0,.15);
    }
    /* 产品样式 */
    .carousel-card,.carousel-card img{
        width: 353px;
    }
    .carousel-card{
        float: left;
    }
    p{
        cursor: pointer;
        margin: 7px 0;
        font-size: 14px;
    }
    a{
        display: block;
    }
    .el-button{
    border: 1px solid #00081c !important;
    color: #606266;
    -webkit-transition: .1s;
    transition: .1s;
    padding: 13px 32px;
    border-radius: 2px;
    height: 40px;
    }
    .el-button:focus, .el-button:hover{
        background-color: #fff;
    }

</style>
<script>
export default {
    data(){
        return{
            carouselListsWidth:0,
            target:0,
            leader:0,
            carouselBox:{},
            carouselLists:{},
            carouselList:{},
            // timer,
        }   
   },
    computed:{
        },
    mounted(){           
        this.carouselBox=document.getElementsByClassName('carousel-content')
        this.carouselLists=document.getElementsByTagName('ul')[0];
        // console.log(carouselLists)
        this.carouselList=carouselLists.getElementsByTagName('li');
        // console.log(carouselList.offsetWidth)
        // 获取所有的子元素的数量   
        //动态设置ul宽度      li的数量   *  单个li的宽度                  
        this.carouselListsWidth=carouselList.length*carouselList[0].offsetWidth;  
        console.log(carouselListsWidth);
        this.carouselLists=carouselList.length*carouselList[0].offsetWidth+'px';
        // console.log(carouselLists);
//         this.timer=window.setInterval(()=>{
// //             if(target > 0 ) {
// //                 target = 0
// //             }
// //             if(target <= -2080 ) {
// //                     target = -2080
// //             }
// // //					拼接当前改变过的数据
// //             leader = leader + (target - leader)/10;
// // 						//
// //             ulBox.style.left = leader + "px";
//         },10)
    },
    methods:{            
        /*左移*/
        marinLeft(){
            this.target+=this.carouselList[0].offsetWidth;
        },
        /*右移*/
        marinRight(){
            this.target-=this.carouselList[0].offsetWidth;
        },
        
        /*动画 */
        animate(beginLeft){
            let _this=this
            document.querySelector('.carousel-box').style.left=beginLeft+'px'
            console.log(document.querySelector('.carousel-box').style.left=beginLeft+'px')
        }

    }
}
</script>
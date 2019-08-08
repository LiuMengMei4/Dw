<template>
    <div class="carousel">
        <div class="carousel-content">
            <div class="carousel-box" style="left:0px">
                <div class="carousel-card">
                    <a href="https://element.eleme.cn/#/zh-CN/component/card">
                        <p>
                            <img src="../assets/img/lover/petite_mesh_watch_s_32_ashfield_black_petite_leather_strap_s_14_bondi_1.png" alt="">
                        </p>
                        <p>Classic <span>Canterbury</span></p>
                        <p>40mm</p>
                        <p>￥2131.00</p>
                    </a>
                    <el-button>点击购买</el-button>
                </div>
                <div class="carousel-card">
                    <a href="https://element.eleme.cn/#/zh-CN/component/card">
                        <p>
                            <img src="../assets/img/lover/petite_mesh_watch_s_32_ashfield_black_petite_leather_strap_s_14_bondi_1.png" alt="">
                        </p>
                        <p>Classic <span>Canterbury</span></p>
                        <p>40mm</p>
                        <p>￥2131.00</p>
                    </a>
                    <el-button>点击购买</el-button>
                </div>
                <div class="carousel-card">
                    <a href="https://element.eleme.cn/#/zh-CN/component/card">
                        <p>
                            <img src="../assets/img/lover/petite_mesh_watch_s_32_ashfield_black_petite_leather_strap_s_14_bondi_1.png" alt="">
                        </p>
                        <p>Classic <span>Canterbury</span></p>
                        <p>40mm</p>
                        <p>￥2131.00</p>
                    </a>
                    <el-button>点击购买</el-button>
                </div>
                <div class="carousel-card">
                    <a href="https://element.eleme.cn/#/zh-CN/component/card">
                        <p>
                            <img src="../assets/img/lover/petite_mesh_watch_s_32_ashfield_black_petite_leather_strap_s_14_bondi_1.png" alt="">
                        </p>
                        <p>Classic <span>Canterbury</span></p>
                        <p>40mm</p>
                        <p>￥2131.00</p>
                    </a>
                    <el-button>点击购买</el-button>
                </div>
                <div class="carousel-card">
                    <a href="https://element.eleme.cn/#/zh-CN/component/card">
                        <p>
                            <img src="../assets/img/lover/petite_mesh_watch_s_32_ashfield_black_petite_leather_strap_s_14_bondi_1.png" alt="">
                        </p>
                        <p>Classic <span>Canterbury</span></p>
                        <p>40mm</p>
                        <p>￥2131.00</p>
                    </a>
                    <el-button>点击购买</el-button>
                </div>
                <div class="carousel-card">
                    <a href="https://element.eleme.cn/#/zh-CN/component/card">
                        <p>
                            <img src="../assets/img/lover/petite_mesh_watch_s_32_ashfield_black_petite_leather_strap_s_14_bondi_1.png" alt="">
                        </p>
                        <p>Classic <span>Canterbury</span></p>
                        <p>40mm</p>
                        <p>￥2131.00</p>
                    </a>
                    <el-button>点击购买</el-button>
                </div>
                <div class="carousel-card">
                    <a href="https://element.eleme.cn/#/zh-CN/component/card">
                        <p>
                            <img src="../assets/img/lover/petite_mesh_watch_s_32_ashfield_black_petite_leather_strap_s_14_bondi_1.png" alt="">
                        </p>
                        <p>Classic <span>Canterbury</span></p>
                        <p>40mm</p>
                        <p>￥2131.00</p>
                    </a>
                    <el-button>点击购买</el-button>
                </div>
            </div>
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
        height: 100%;
        overflow: hidden;
    }
    .carousel-box{
        width: 4000px;
        height: 100%;
        position: relative;
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

            }
    },
    computed:{
        },
    mounted(){           
            // 获取所有的子元素的数量
            let carouselBox=document.getElementsByClassName('carousel-card');
            let cBoxChild=carouselBox.length;
            console.log(carouselBox)

            // let carouselBoxChildCount=carouselBox[0].childElementCount;
            // let carouselBoxWidth=document.querySelector('.carousel-box');
            // carouselBoxChildCount=6000+'px'
            
            // let carouselBoxChildCount=carouselBoxChild[0].childElementCount;
            //  console.log(carouselBoxChildCount);

    },
        // var left=document.getElementsByClassName('el-icon-arrow-left'),
    methods:{
        /*左移*/
        marinLeft(){
            let carouselBoxLength=document.getElementsByClassName('carousel-box')
            // console.log()
            // let carouselChildCount=carouselBoxLength[0].childElementCount;
            let beginLeft = parseInt(document.querySelector('.carousel-box').style.left);
                // console.log(beginLeft)
            if(this.cBoxChild>0){
                this.cBoxChild--;
                beginLeft-=345;
                this.animate(beginLeft);
            }
        },
        /*右移*/
        marinRight(){
            let beginLeft = parseInt(document.querySelector('.carousel-box').style.left);
            if(this.cBoxChild<7){
                this.cBoxChild++;
                beginLeft+=345;
                console.log(beginLeft)
                this.animate(beginLeft)
            }
            
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
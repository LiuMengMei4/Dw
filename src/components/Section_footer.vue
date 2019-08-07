<template>
<!-- 最外层width100% -->
    <div class="section_footer">
        <!-- width:1170px -->
        <div class="section_footer_content">
            <el-row>
                <!-- 左侧列表栏 -->
                <el-col :span="16"  >
                    <div class="section_footer_content_left">
                        <ul class="section_footer_product_list ">
                            <li><h3>手表</h3></li>
                            <li><a href="">所有手表</a></li>
                            <li><a href="">男士手表</a></li>
                            <li><a href="">女士手表</a></li>
                            <li><a href="">Classic系列</a></li>
                            <li><a href="">Classic Black系列</a></li>
                            <li><a href="">Classic Petitle系列</a></li>
                            <li><a href="">Dapper系列</a></li>
                            <li><a href="">礼品套装</a></li>
                        </ul>
                        <div class="section_footer_serve ">
                            <div class="section_footer_serve_top" >
                                <ul>
                                    <li><h3>表带</h3></li>
                                    <li><a href="">选购表带</a></li>
                                    <li><a href="">更换/调节表带教程</a></li>
                                </ul>
                                <ul>
                                    <li><h3>配饰</h3></li>
                                    <li><a href="">手镯</a></li>
                                    <li><a href="">戒指</a></li>
                                </ul>
                                <ul>
                                    <li><h3>关于DW</h3></li>
                                    <li><a href="">品牌故事</a></li>
                                    <li><a href="">门店及专柜</a></li>
                                    <li><a href="">加入我们</a></li>
                                </ul>
                            </div>
                            <div class="section_footer_serve_bottom">
                                <ul>
                                    <li><h3>定制服务</h3></li>
                                    <li><a href="">配套个性套装</a></li>
                                </ul>
                                <ul>
                                    <li><h3>购物帮助</h3></li>
                                    <li><a href="">支付方式</a></li>
                                    <li><a href="">配送服务</a></li>
                                    <li><a href="">开具发票</a></li>
                                    <li><a href="">保修政策</a></li>
                                </ul>
                                <ul>
                                    <li><h3>顾客服务</h3></li>
                                    <li><a href="">常见问题</a></li>
                                    <li><a href="">订单查询</a></li>
                                    <li><a href="">退货规定</a></li>
                                    <li><a href="">联系我们</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </el-col>
                <el-col :span="8" class="section_footer_content_right">
                    <div class="section_footer_content_right_top">
                        <div class="follow-dw">
                            <h3>关注DW</h3>
                            <a href="" class="weibo">微博</a>
                            <a class="weixin" @click="wxShow()">微信
                                <transition name="el-zoom-in-top">
                                    <img v-show="isShow"  src="../assets/img/pc/guanwei.jpg" alt="">
                                </transition>
                            </a>
                        </div>
                        <div class="vip-dw">
                            <h3>会员俱乐部</h3>
                            <a ></a>
                        </div>
                    </div>
                    <div class="subscribe-dw">
                        <h3>订阅最新资讯</h3>
                        <p>第一时间获取最新资讯，活动邀请及优惠信息</p>
                        <!-- <input type="text" placeholder=""> -->
                       <input type="text" placeholder="邮箱地址">
                       <a class="el-icon-arrow-right"></a>
                    </div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>
<script>
export default{
    data(){
        return{
            isShow:false,
        }
    },
    methods: {
        wxShow(){
            this.isShow=!this.isShow
        }
    },
}
</script>
<style scoped>
/* 整体布局 */
    .section_footer{
        background-color: #101820;
        border-bottom: 1px solid rgba(89,98,108,.5);
        padding-top: 78px;
    }
    .section_footer_content{
        text-align: left;
    }
    p,a,button{
        color: #607285;
        font-size: 13px;
    }

    li,li a:hover,h3{
        color: #fff;
        list-style: none;
        font-weight: 400;
        line-height: 26px;
    }
    .el-row {
    margin-bottom: 20px;
  }
  .el-col {
    border-radius: 0;
  }
  /* 左边菜单 */
  .section_footer_content_left,.section_footer_serve_top,.section_footer_serve_bottom{
      display: flex;
      justify-content:space-between;
  }
  .section_footer_serve_top>ul,.section_footer_serve_bottom>ul{
      width: 120px;
  }
  /* 左侧订阅 */

/* 媒体查询 */

    @media (min-width: 992px){
        .section_footer_content{
            width: 1170px;
            margin: 0 auto;
        }
        .section_footer_product_list{
            margin-left:70px; 
        }
        .section_footer_serve_top>ul,.section_footer_serve_bottom>ul{
            margin-right: 50px;
        }
        .section_footer_serve_top>ul:last-child,.section_footer_serve_bottom>ul:last-child{
            margin-right: 50px;
        }
        /* 右侧订阅 */
        .section_footer_content_right{
            border-left:  1px solid rgba(89,98,108,.5);
            padding-left: 7%; 
        }
        .follow-dw a,.vip-dw a{
            /* width: 40%; */
            margin-top: 15px;
        }
        .follow-dw a{
            display: inline-block;
            height: 22px;
            width: 80px;            
            font-size: 12px;
            padding-left: 30px;
            background-repeat: no-repeat;
            background-size: 22px;
        }
        .follow-dw a:hover{
            margin-top:10px;
        }
        /* 官方微信 */
        .weixin{
            cursor: pointer;
            position: relative;
            background-image: url('../assets/img/icons/weixin.png');
        }
        .weixin>img{
            /* display: none; */
            position: absolute;
            top:25px;
            left: 0;
            width: 140px;
        }
        .weibo{
            background-image: url('../assets/img/icons/weibo.png');
        }
        .vip-dw a{
            display: block;
        width: 48px;
        height: 19.2px;
        background: url('../assets/img/icons/vip-bg.png') no-repeat;
        background-size: cover;
        }
        .section_footer_content_right_top{
            display: flex;
            position: relative;
        }
        .subscribe-dw{
            margin-top: 10px;
        }
        .subscribe-dw h3,.subscribe-dw p{
            margin-bottom: 10px ;
        }
        .subscribe-dw a,.subscribe-dw input,.subscribe-dw input:focus{
            display: inline-block;
            height: 35px;
            background-color: #233445;
            border:  1px solid rgba(89,98,108,.5);
            outline: none;
        }
        .subscribe-dw input{
            width: 200px;
            color: #fff;
            padding-left: 10px;
        }
        .subscribe-dw a{
            font-size: 20px;
            margin-left: 5px;
            padding: 4px 0px 0px 3px;
        }
        .subscribe-dw a:hover{
            color:#fff;
        }
    }
    @media (max-width: 991px){
        
    }
</style>

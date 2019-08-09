<template>
<div>
    <myhead></myhead>
        <div class="first-news">
        <el-row class="row-box ">
            <el-col :span="24">
                <div class="grid-content bg-purple-dark news-head">
                    <!-- <el-col :xs="24" :sm="12"  class="news-head-introduce title-box  md-none-title">
                            <p>
                            <span class="time">2019年8月1日</span>
                            <a href="" class="title border-style">时差恋人，时刻爱</a>
                            </p>
                    </el-col> -->
                    <div class="news-head">
                        <el-col :xs="24" :sm="12"  class="news-head-introduce md-block-title">
                            <p>
                            <span class="time">2019年8月1日</span>
                            <a href="" class="title border-style">时差恋人，时刻爱</a>
                            </p>
                        </el-col>
                        <img class="news-head-img" src="../assets/img/news/cover-blog.jpg" alt="">
                        <el-col :xs="24" :sm="12"  class="news-head-introduce subtitle-box">
                            <p>
                                <b class="subtitle">跨越时区与地域，同步你我时间</b>
                                <a href="" class="redmore">阅读全部内容</a>
                            </p>
                        </el-col>
                    </div>
                </div>
            </el-col>
        </el-row>
    </div>
    <div class="row-box else-news">
        <h1 class="news-title">OLDER ENTRIES</h1>
        <!-- 内容 -->
        <el-row :gutter="10">
            <el-col :xs="24" :sm="12" :md="8" class="">
                <div class="grid-content new-bg">
                    <div class="else-new-img">
                        <img src="../assets/img/news/blog-cover-0202.jpg" style="width:100%" alt="">
                    </div>
                    <div class="else-new">
                        <p class="time">新闻发布时间</p>
                        <h1 class="title">标题</h1>
                        <p class="subtitle">副标题</p>
                        <a href="" class="redmore">阅读全部内容</a>
                    </div>
                </div>
            </el-col>
            <el-col :xs="24" :sm="12" :md="8" class="" >
                <div class="grid-content new-bg">
                    <div class="else-new-img">
                        <img src="../assets/img/news/blog-cover-0202.jpg" style="width:100%" alt="">
                    </div>
                    <div class="else-new">
                        <p class="time">新闻发布时间</p>
                        <h1 class="title">标题</h1>
                        <p class="subtitle">副标题</p>
                        <a href="" class="redmore">阅读全部内容</a>
                    </div>
                </div>
            </el-col>
            <el-col :xs="24" :sm="12" :md="8" class="">
                <div class="grid-content new-bg">
                    <div class="else-new-img">
                        <img src="../assets/img/news/blog-cover-0202.jpg" style="width:100%" alt="">
                    </div>
                    <div class="else-new">
                        <p class="time">新闻发布时间</p>
                        <h1 class="title">标题</h1>
                        <p class="subtitle">副标题</p>
                        <a href="" class="redmore">阅读全部内容</a>
                    </div>
                </div>
            </el-col>
        </el-row>
        <el-button class="showmore">显示更多</el-button>
    </div>
    <!-- <news></news> -->
    <myfooter></myfooter>
</div>
</template>
<style scoped>
.row-box{
        clear: both;
        max-width: 1100px;
        min-width: 350px;
        padding:0 15px;
        margin: 0 auto;
    }
    .first-news{
        border-bottom: 1px solid #c8c8c8;
    }
    /* .border-style{
        border-bottom: 1px solid #c8c8c8 !important;
        width: 100%;
        padding: 12px 25px !important;
    } */
    .md-none-title{
        display: none;
        margin-bottom: 15px;
        /* border-bottom: 1px solid #c8c8c8; */
    }
  .el-col {
    border-radius:0px;
  }
  .news-head{
      /* margin-top: 30px; */
  }
  .news-head-introduce.md-block-title{
      display: flex;
      justify-content: space-around;
  }
  .news-head-introduce p:first-child{
      color: #00081c;
  }
  .news-head-introduce p:first-child a{
      color: #00081c;
      display:block;
      /* margin-top: 15px; */
      border: 0;
      text-align:left;
  }
  .news-head-introduce p:last-child b{
      font-weight: normal;
      display: inline-block;
      margin-bottom: 15px;
      font-size: 18px;
  }
  .bg-purple-dark img{
      width: 100%;
      height: 100%;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    min-height: 36px;
    padding-bottom: 30px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
  /* 新闻列表头标体 */
.news-title{
    text-align: center;
    margin: 40px auto;
    font-weight: normal;
}

  /* 新闻列表 */
  .else-news{
      margin: 0 auto;      
  }
  .else-news .el-col{
      margin-top:15px;
      text-align: left;
      
  }
  .else-new{
      padding:0 30px;
  }
  .else-new-img{
      margin-bottom: 100px;
  }
  .new-bg{
      background-color: #f4f4f4;
  }
  .time{
      color:#757575;
      font-size: 13px;
  }
  .title{
    font-size: 25px;
    font-weight: normal;
    padding: 15px 0;
    cursor: pointer;
    border-bottom: 1px solid #c8c8c8;
  }
  .subtitle{
      font-size: 14px;
      margin: 10px 0;
  }
  .redmore{
      font-size: 16px !important;
  }
  /* 加载更多按钮 */
  .showmore{
    border-radius: 0;
    margin: 30px auto;
    width: 200px;
    box-shadow: rgba(0,0,0,.15) 0px 0px 2px;
  }
  .showmore:hover{
    background-color: #fff;
    box-shadow: rgba(0,0,0,.25) 0px 0px 10px;
    transition: all 250ms;
  }
  @media only screen and (min-width: 768px){
        .news-head{
      /* margin-top: 30px; */
            position: relative;
        }
        .news-head-introduce{
            display: flex;
            padding-top:20px;
        }
        .news-head-introduce.md-block-title{
            position: absolute;
            bottom: -125px;
            border-bottom:0 ;
        }
        .news-head-introduce.subtitle-box{
            position: absolute;
            right: 0;
        }
        .grid-content{
            margin-bottom:100px;
        }
  }
  @media only screen and (max-width: 767px){
        .subtitle-box{
            width: 100%;
            text-align: left;
        }
        .news-head-introduce.el-col-sm-12{
        width: 100%;
        }
        .border-style{
            border-bottom: 1px solid #c8c8c8;
            width: 100%;
            padding: 12px 25px !important;
        }
        .news-head-img{
        }
        .subtitle-box P{
            /* margin: 0; */
        }
        .md-block-title{
            /* display: none; */
        }
        .md-none-title{
            /* display: block; */
        }
    }
</style>
<script>
import Header from '../components/Header_nav'
import Footer from '../components/Section_footer'
// import News from '../components/News'
export default {
    data(){
        return{}
    },
    components:{
        // 'news':News,
        'myhead':Header,
        'myfooter':Footer
    }
}
</script>
<template>
    <div>
       <myhead></myhead>
       <div class="news-details">
            <div class="news-details-head">
                <div class="news-details-text">
                    <p class="time">新闻上传时间</p>
                    <p class="title">DWMOMENTS|《调音师》主角演绎挚爱单品</p>
                    <p class="subtitle">为此刻喝彩</p>
                    <img src="../assets/img/story/blog-cover-20190705-01.jpg" alt="" class="cover">
                </div> 
                <div class="news-img">
                    <img src="../assets/img/story/INDIA_01.jpg" alt="">
                    <img src="../assets/img/story/INDIA_02.jpg" alt="">
                    <img src="../assets/img/story/INDIA_04.jpg" alt="">
                    <img src="../assets/img/story/INDIA_05.jpg" alt="">
                    <img src="../assets/img/story/INDIA_06.jpg" alt="">
                    <img src="../assets/img/story/INDIA_07.jpg" alt="">
                    <img src="../assets/img/story/INDIA_09.jpg" alt="">
                    <img src="../assets/img/story/INDIA_10.jpg" alt="">
                    <img src="../assets/img/story/INDIA_11.jpg" alt="">
                    <img src="../assets/img/story/INDIA_12.jpg" alt="">
                    <img src="../assets/img/story/INDIA_14.jpg" alt="">
                </div>
            </div>
       </div>
       <myfooter></myfooter> 
    </div>
</template>
<style scoped>
    .news-details{
        width:100%;
        text-align: center;
    }
    .news-details-head{
        max-width: 992px;
        margin: 0 auto;
        padding: 55px 15px;
    }
    .time{
        color: #757575;
        font-size: 13px;
    }
    .subtitle,.title{
    color: #00081c;
    }
    .subtitle{
        letter-spacing: 3px;
        margin-bottom: 30px;
    }
    .title{
        font-size: 24px;
        letter-spacing: 8px;
        line-height: 24px;
        margin: 15px  17px;
    }
    .cover{
        width: 100%;
    }
    .news-img{
        max-width: 630px;
        padding:0 20px;
        width: 100%;
        margin: 0 auto;
        text-align: center;
    }
    .news-img img{
        width: 100%;
        height: auto;;
    }
</style>
<script>
import Header from '../components/Header_nav'
import Footer from '../components/Section_footer'
export default {
    //公用数据
    data(){
        return{

        }
    },
    //子组件
    components:{
        'myhead':Header,
        'myfooter':Footer
    }
}
</script>
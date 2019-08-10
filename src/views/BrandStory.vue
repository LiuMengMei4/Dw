<template>
    <div>
        <myhead class="myhead"></myhead>
        <div class="brandstory">
            <ul class="brandstory-main">
                <li class="title">
                    <section>
                        <div>
                            <img src="../assets/img/story/190228brand_story-1-pc.jpg" alt="">
                        </div>
                        <h1>品牌故事</h1>
                    </section>
                </li>
                <li>
                    <section class="dw-born">
                        <div>
                            <h2>DANIEL WELLINGTON的诞生</h2>
                            <p>
                            Daniel Wellington 品牌的诞生，源于一次跨越半个世界的巧遇。 品牌创建人Filip Tysander 在一次旅行中遇到了一位低调谦逊的英国绅士，他着装优雅简约，尤其是腕间佩戴的一款北约军用表带古董手表，斑驳老旧却彰显出隽永格调。 这位英国绅士的不凡品位，表带的轻巧与复古给了Filip新的灵感，他决定创建自己的腕表品牌，并以英国绅士的名字——Daniel Wellington为名。</p>
                        </div>
                    </section>
                </li>
                <li>
                    <section class="dw-idea">
                        <div class="dw-img">
                            <img src="../assets/img/story/190228brand_story-2-pc.jpg" alt="">
                        </div>
                        <div class="dw-idea-content">
                            <div class="dw-idea-text">
                                <h2>设计理念</h2>
                                <p>设计理念结束旅程后，Filip开始研究各式各样的手表，反复思酌，想要设计出一款得到世人推崇的腕表——不仅时尚百搭，更能彰显典雅风度。</p>
                                <p>自小在斯堪的纳维亚文化氛围里长大的他，深谙北欧简约风精粹，将简洁明快、自然静逸特质融于腕表设计中，并对所有细节都进行了几近苛刻的把控，追求100%。</p>
                                <p>一只动人的表诞生了，舍去一切繁缛设计，简约大气的正圆形外观，轻薄、精致的两针表盘，配上饰以英国海军复古NATO表带。独具欧洲英伦学院风的Daniel Wellington一经面世，即受到欧美众多知名博主与时尚达人的青睐，并迅速席卷全球。</p>
                            </div>
                        </div>
                    </section>
                </li>
                <!-- <li>
                    <section>
                            <div><img src="../assets/img/index/dw-strap1_1.jpg" alt=""></div>
                            <div></div>
                    </section>
                </li>
                <li>
                    <section>
                            <div><img src="../assets/img/index/dw-strap2.jpg" alt=""></div>
                            <div></div>
                    </section>
                </li>
                <li>
                    <section>
                        <div><img src="../assets/img/index/dw-strap3.jpg" alt=""></div>
                        <div></div>
                    </section>
                </li>
                <li>
                    <section></section>
                </li>
                <li>
                    <section></section>
                </li>
                <li>
                    <section></section>
                </li>
                <li>
                    <section></section>
                </li> -->
            </ul>
        </div>
        <myfoot></myfoot>
    </div>
</template>
<style scoped>
    .brandstory{
        width: 100%;  
    }
    .brandstory li{
        list-style: none;
    }
    section{
        position: relative;
        top:0;
    }
    section p{
        text-align: left;
        font-size: 13px !important; 
        line-height: 20px;
        letter-spacing: 3px;
        margin-bottom: 15px;
    }
    section h2{
         margin: 15px 0;
        font-weight: normal; 
    }
    /* 头部*/
    img{
        width: 100%;
    }
    .title h1{
        text-align: center;
        width: 100%;
        position: absolute;
        top: 45%;
        color: #fff;
        font-size: 34px;
        font-weight: 400;
        letter-spacing: 10px;
    }
    /* 产品的诞生 */
    .dw-born{
        margin: 20px auto;;
        width: 100%;
    }
    .dw-born div{
        margin: 0 auto;       
        max-width: 600px;
        padding: 15px 0 40px;
    }
    /* 设计理念 */
    .dw-img{
        
    }
    .dw-idea-content{
        width: 60%;
        height: 100%;
        position: relative;
    }
    .dw-idea-text{
        max-width: 600px;
        float: right;
    }
    .dw-idea-text p{

    }
     @media (min-width: 993px){
         .dw-idea-content{
            height: 100%;
            position: absolute;
            top:0;
        }
     }

</style>
<script>
    import Header from '../components/Header_nav'
    import Footer from '../components/Section_footer'
    export default {
        data(){
            return{}
        },
        components:{
            'myhead':Header,
            'myfoot':Footer
        }
    }
</script>
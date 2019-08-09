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
                        <h2>品牌故事</h2>
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
                </li>
                <li>
                    <section></section>
                </li>
            </ul>
        </div>
        <myfoot></myfoot>
    </div>
</template>
<style scoped>
    .brandstory{
        width: 100%;  
    }
    section{
        position: relative;
        top:0;
    }
    /* 头部*/
    .title,.title img{
        width: 100%;
    }
    .title h2{
        text-align: center;
        width: 100%;
        position: absolute;
        top: 50%;
        color: #fff;
        font-size: 34px;
        font-weight: 400;
        letter-spacing: 10px;
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
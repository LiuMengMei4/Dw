<template>
<div>
    <myhead></myhead>
    <div class="login-content">
        <div class="login-form">
            <p>手机号码</p>
            <el-input type="text" placeholder="请输入您的手机号"></el-input>
            <p>验证码</p>
            <div class="captcha">
                <el-input type="password" placeholder="请输入手机验证码"></el-input>
                <el-button plain>获取验证码</el-button>
            </div>
            <el-button class="login">登录</el-button>
            <h6 class="go-vip">
                <span>还不是会员？</span>
                <router-link :to="{path:'/register'}">立即注册</router-link>
            </h6>
        </div>
    </div>
    <!-- <sectionfooter></sectionfooter> -->
    <myfooter></myfooter>
</div>
</template>
<script>
/*页面模块*/
import Header from '../components/Header'
import Footer_l from '../components/Footer_l'
// import Section_footer from '../components/Section_footer'
export default {
    name:'login',
    data(){
        return{

        }
    },
    methods:{
        Click(){
            console.log(123)
        }
    },
    components:{
        'myhead':Header,
        'myfooter':Footer_l,
    },

}
</script>
<style>
    @import '../assets/css/user-common.css'

</style>

<template>
    <div>
        <myhead></myhead>
        <div class="login-content">
        <div class="login-form">
            <p>姓名</p>
            <el-input type="text" placeholder="请输入姓名"></el-input>
            <p>称谓</p>
            <el-select v-model="value" placeholder="请选择">
                <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                </el-option>
            </el-select>
            <p>手机号码</p>
            <el-input type="text" placeholder="请输入您的手机号"></el-input>
            <p>验证码</p>
            <div class="captcha">
                <el-input type="password" placeholder="请输入手机验证码"></el-input>
                <el-button plain>获取验证码</el-button>
            </div>
            <el-button class="login">即刻加入</el-button>
            <h6 class="go-vip">
                <span>已经是会员？</span>
                <a href="">立即登录</a>
            </h6>
        </div>
    </div>
        <myfooter></myfooter>
    </div>
</template>
<script>
import Header from '../components/Header'
import Footer_l from '../components/Footer_l'
export default{
    data(){
        return{
            // options:[{value:1,gender:'男士'},{value:0,gender:'女士'}]
            options: [{
                label: '先生'
                }, {
                label: '女士'
                }],
                value:'先生'
                }
    },
    components:{
        'myhead':Header,
        'myfooter':Footer_l
    },


}
</script>
@import '../assets/css/user-common.css'
<style scoped>
.el-select{
    width: 100%;
}
.el-select-dropdown__item.selected{
    color: #00081c;
}
.el-select .el-input.is-focus .el-input__inner{
    border-color: #ddd !important;
}
</style>

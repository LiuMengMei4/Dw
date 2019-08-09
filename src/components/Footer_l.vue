<template>
    <div class="footer">
        <ul class="footer-menu">
            <li><a href="">使用条款</a></li>
            <li><a href="">隐私保护政策</a></li>
            <li><a href="">防伪声明</a></li>
            <li><a href="">网站地图</a></li>
        </ul>
        <div class="footer-info">
            <p>
                <a href=""> 粤公网安备 44030502000796 号</a>|
                <a href="">粤ICP备15098750号-1M</a>|
                <a href="">营业执照</a>
            </p>
            <span>ALL RIGHTS RESERVED. COPYRIGHT</span>
            <span>© 丹尼尔惠灵顿贸易（深圳）有限公司</span>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    /*公共样式*/
    .footer{
       width: 100%;
       padding: 30px 0;
       background-color: #111820;
    }
    .footer,.footer a,span{
        color: #687593;
        font-size:12px;
        line-height: 20px;
    }
    .footer a:hover{
        color: #fff;
    }
    /*footer-menu*/
    .footer-menu{
        width: 100%;
        display: flex;
        justify-content: center;
    }
    .footer-menu li{
        list-style: none;
        padding: 0 10px;
        border-right: 1px solid #687593;
    }
    .footer-menu li:last-child{
        border: none;
    }
    a{
        display:inline-block;
    }
</style>

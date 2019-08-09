<template>
	<div>
		<div class="myhead">
			<div class="header-top head-top"><a href=""></a></div>
			<div class="header-menu">
				<a href="" class="login-svg"></a>
				<div class="head-menus">
					<a href="">礼品套装</a>
					<a href="">手表</a>
					<a href="">配饰</a>
					<a href="">表带</a>
					<a href="">常见问题</a>
					<a href="">品牌故事</a>
					<a href="">线下门店</a>
				</div>
			</div>
		</div>
		<!-- <div class="my-head-banner">
			<div class="my-head-banner-content">
				<span>独家礼遇 会员尊享</span>
				<h1>悦享爱意，报以时光</h1>
				<h2>SHARE LOVE RETURN IN TIM</h2>
			</div>
		</div> -->
	</div>
</template>
<script>
export default {
	data(){
		return{}
	}
}
</script>
<style scoped>
/*头部菜单样式*/
	.myhead{
		width: 100%;
		position: relative;
		z-index: 2;
		margin-bottom: 55px;
	}
	.header-top{
		width: 100%;
		text-align: center;        
	}
	.head-top{
		background-image: url('../assets/img/icons/logo_black.svg');
		background-size: 280px;
		background-position: center;
		background-repeat: no-repeat;
		padding-top: 24px;
		width: 100%;
		height: 70px;
	}
	.header-top>a>img{
		height: 20px;
	}
	/*菜单*/
	.header-menu{
		width: 100%;
		height: 55px;
		position: absolute;
		line-height: 55px;
		background-color: rgba(0,14,34,.9);
	}
	.login-svg{
		position: absolute;
		top: -60%;
		-webkit-transform: translateY(-50%);
		transform: translateY(-50%);
		left: 30px;
		display: block;
		height: 30px;
		width: 60px;
		background-image: url('../assets/img/icons/login-scroll.svg');
		background-position: center;
		background-repeat: no-repeat;
	}
	/* .head-menus{
		position: absolute;
		left: 41%;
	} */
	.head-menus a{        
		font-size: 13px;
		color: #fff;
		display: inline-block;
		margin: 0 15px;
		font-weight: 400;
		font-family: Noto Sans SC,SourceHanSansCN-Normal,PingFang SC,Heiti SC,Microsoft YaHei UI,Microsoft YaHei,sans-serif;
	}
	@media (max-width: 767px){
		.head-top{
		background-image: url('../assets/img/icons/logo.svg');
		background-color: rgba(0,14,34,.9);
		padding-top: 24px;
		width: 100%;
		height: 70px;
	}
	.header-menu{
		display: none !important;
	}
	 .myhead{
		 margin-bottom: 0;
	 }
	}
</style>

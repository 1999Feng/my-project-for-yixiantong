<template>
	<div class="container">
		<home-header></home-header>       	<!-- 渲染视图  -->
		<home-scroll-wrapper></home-scroll-wrapper>
	</div>
</template>

<script>
	import HomeHeader from 'components/Header/Home';    //导入主页面
	import HomeScrollWrapper from 'components/ScrollWrapper/Home'; 

	export default {   //导出模块
		name: 'Index',
		components: {   //注册组件
			HomeHeader,
			HomeScrollWrapper
		}
	}
</script>

<style lang="scss" scoped>

</style>
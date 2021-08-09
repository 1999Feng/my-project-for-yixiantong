<template>
	<div class="title-bd">
		<h1>
			<span :class="['iconfont', icon]"></span>
			<span class="title">{{title}}</span>
		</h1>
	</div>
</template>

<script>
	export default {
		name: 'DetailTitle',
		props: {
			icon: String,
			title: String
		}
	}
</script>

<style lang="scss" scoped>
@import '~styles/variables.scss';

.title-bd {
	display: flex;
	align-items: center;
	height: .44rem;
	padding: 0 .15rem;
	background-color: #fff;
	border-bottom: 1px solid #ddd;
	line-height: .44rem;
	box-sizing: border-box;

	.iconfont {
		font-size: .18rem;
		color: $defaultGreen;
	}

	.title {
		font-size: .16rem;
		color: $defaultGreen;
	}
}
</style>
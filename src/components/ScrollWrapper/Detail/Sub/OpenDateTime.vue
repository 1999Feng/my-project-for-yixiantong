<template>
	<div class="datetime-bd">
		<span class="iconfont icon-datetime"></span>
		<span class="datetime">{{openDateTime}}</span>
	</div>
</template>

<script>
	export default {
		name: 'DetailOpenDateTime',
		props: {
			openDateTime: {
				type: String,
				default () {
					return '加载中...';
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.datetime-bd {
		display: flex;
		align-items: center;
		min-height: .44rem;
		padding: .1rem .15rem;
		background-color: #fff;
		border-bottom: 1px solid #ddd;
		box-sizing: border-box;

		.icon-datetime {
			font-size: .18rem;
			margin-right: .1rem;
			color: #999;
		}

		.datetime {
			font-size: .14rem;
			line-height: .18rem;
		}
	}
</style>
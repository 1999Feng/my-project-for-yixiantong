<template>
	<div class="price-bd">
		<span class="iconfont icon-price"></span>
		<span class="price">￥{{price || 0}}元起</span>
	</div>
</template>

<script>
	export default {
		name: 'DetailPrice',
		props: {
			price: {
				type: Number,
				default () {
					return 0;
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
@import '~styles/variables.scss';

.price-bd {
	display: flex;
	height: .44rem;
	padding: .03rem .15rem 0;
	background-color: #fff;
	border-bottom: 1px solid #ddd;
	box-sizing: border-box;

	.icon-price {
		font-size: .18rem;
		margin: .08rem .1rem 0 0;
		color: #000;
	}

	.price {
		font-size: .16rem;
		margin-top: .1rem;
		color: $defaultOrange;
	}
}
</style>
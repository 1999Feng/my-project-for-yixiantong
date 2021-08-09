<template>
	<div class="ktv-item">
		<router-link :to="{path: '/detail', query: {field: 'ktv', id: data.id}}">
			<div class="img">
				<img class="ktv-img" :src="data.img" :alt="data.name" />
			</div>
			<div class="info">
				<h1 class="title">{{data.name}}</h1>
				<p class="stars">
					<stars :starNum="Number(data.star)"></stars>
					<span class="score">{{data.score}}分</span>
				</p>
				<div class="others">
					<span class="item">
						￥<span class="price">{{data.default_price}}</span>元起
					</span>
					<span class="item">{{data.area}}</span>
				</div>
			</div>
		</router-link>
	</div>
</template>

<script>
  import Stars from 'components/ScrollWrapper/Sub/Stars';

	export default {
		name: 'KtvListSub',
		components: {
			Stars
		},
		props: {
			data: Object
		}
	}
</script>

<style lang="scss" scoped>
@import '~styles/mixins.scss';
@import '~styles/variables.scss';	

.ktv-item {
	position: relative;
	border-bottom: 1px solid #ddd;
	background-color: #fff;

	.img {
		width: 1.2rem;
		height: 1.2rem;
		padding: .1rem;
		box-sizing: border-box;

		.ktv-img {
			width: 100%;
			height: 100%;
		}
	}

	.info {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		padding: .1rem .1rem 0 1.2rem;
		box-sizing: border-box;

		.title {
			@include ellipsis;
			font-size: .18rem;
			color: #000;
			line-height: .2rem;
		}

		.stars {
			font-size: .14rem;
			line-height: .5rem;

			.score {
				color: $starColor;
			}
		}

		.others {
			display: flex;
			justify-content: space-between;
			font-size: .14rem;
			line-height: .35rem;

			&:nth-child(1) {
				color: $defaultOrange;
			}

			.price {
				font-size: .2rem;
				color: $defaultGreen;
			}
		}
	}
}
</style>

















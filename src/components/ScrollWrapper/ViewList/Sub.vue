<template>
	<div class="view-item">
		<router-link :to="{path: '/detail', query: {field: 'view', id: data.id}}">
			<div class="img">
				<img class="view-img" :src="data.img" :alt="data.name" />
			</div>
			<div class="info">
				<h1 class="title">{{data.name}}</h1>
				<p class="stars">
          <stars :starNum="Number(data.star)"></stars>
					<span class="score">{{data.score}}分</span>
				</p>
        <p class="others">
        	<span class="item">￥ 
        		<span class="price"> {{data.default_price}} </span>起
        	</span>
        	<span class="item">{{data.city_name}}</span>
        </p>
			</div>
		</router-link>
	</div>
</template>

<script>
  import Stars from 'components/ScrollWrapper/Sub/Stars';

	export default {
		name: 'ViewListSub',
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

.view-item {
	width: 50%;
	padding: .1rem;
	box-sizing: border-box;

	.img {
		width: 100%;
		height: 1.1rem;
		overflow: hidden;

		.view-img {
			width: 100%;
			min-height: 1.1rem;
		}
	}

	.info {
		.title {
			@include ellipsis;
			height: .3rem;
			font-size: .16rem;
			line-height: .3rem;
			color: #000;
		}

		.stars {
			height: .3rem;
			line-height: .3rem;
			font-size: .14rem;
			color: #ccc;

			.active,
			.score {
				color: $starColor;
			}
		}

		.others {
			display: flex;
			justify-content: space-between;
			height: .3rem;
			line-height: .3rem;

			.item {
				font-size: .14rem;

				.price {
					font-size: .2rem;
					color: $defaultGreen;
					vertical-align: -.01rem;
				}
			}
		}
	}
}
</style>








<template>
	<div class="city-item">
		<span class="city" @click="onCityClick(cityInfo)">{{cityInfo.cityName}}</span>
	</div>
</template>

<script>
	import { mapMutations } from 'vuex';

	export default {
		name: 'CityListSub',
		props: {
			cityInfo: Object //传进来Object类型
		},
		methods: {
			...mapMutations(['selectCity']),  //固定的方法 获取selectCity方法
			onCityClick (cityInfo) {
        this.selectCity(cityInfo);  //调用selectCity方法
        this.$router.push('/');   //回到首页
			}
		}
	}
</script>

<style lang="scss" scoped>
@import '~styles/mixins.scss';
@import '~styles/variables.scss';

.city-item {
	@include flex-row;
	align-items: center;
	height: .5rem;
	padding-left: .15rem;
	background-color: #fff;
	border-bottom: 1px solid #ddd;
	font-size: .16rem;
}
</style>
<template>
	<div class="list-wrapper">
		<city-list-sub 
		  v-for="(item, index) of cityList"     
		  :cityInfo="item"
		  :key="index"
		></city-list-sub>
		<!-- v-for·循环， 从cityList中获取item，而cityList来自cityDatas -->
	</div>
</template>

<script>
  import CityListSub from './Sub';
  import cityDatas from 'data/cities';

	export default {
		name: 'CityList',
		components: {
			CityListSub
		},
		data () {
			return {
				cityList: cityDatas
			}
		}
	}
</script>

<style lang="scss" scoped>
	
</style>
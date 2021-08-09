<template>
	<div class="list-wrapper">
		<hotel-list-sub
      v-for="(item, index) of hotelDatas"
      :data="item"
      :key="index"
		></hotel-list-sub>
	</div>
</template>

<script>
	import HotelListSub from './Sub';

	export default {
		name: 'HotelList',
		components: {
			HotelListSub
		},
		props: {
			hotelDatas: Array
		}
	}
</script>

<style lang="scss" scoped>
	
</style>
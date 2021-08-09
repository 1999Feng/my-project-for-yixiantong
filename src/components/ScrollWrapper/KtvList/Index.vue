<template>
	<div class="list-wrapper">
		<ktv-list-sub
      v-for="(item, index) of ktvDatas"
      :data="item"
      :key="index"
		></ktv-list-sub>
	</div>
</template>

<script>
	import KtvListSub from './Sub';

	export default {
		name: 'KtvList',
		components: {
			KtvListSub
		},
		props: {
			ktvDatas: Array
		}
	}

</script>

<style lang="scss" scoped></style>
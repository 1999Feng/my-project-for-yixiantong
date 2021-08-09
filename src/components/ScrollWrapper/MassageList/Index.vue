<template>
	<div class="list-wrapper">
		<massage-list-sub
      v-for="(item, index) of massageDatas"
      :data="item"
      :key="index"
		></massage-list-sub>
	</div>
</template>

<script>
	import MassageListSub from './Sub';

	export default {
		name: 'MassageList',
		components: {
			MassageListSub
		},
		props: {
			massageDatas: Array
		}
	}
</script>

<style lang="scss" scoped>
	
</style>
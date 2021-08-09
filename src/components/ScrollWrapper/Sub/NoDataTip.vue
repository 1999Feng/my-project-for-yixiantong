<template>
	<div class="no-data-tip">
		<span class="text">{{text}}</span>
	</div>
</template>

<script>
	export default {
		name: 'NoDataTip',
		data () {
			return {
				text: '- 没有搜索到相关结果 -'
			}
		}
	}
</script>

<style lang="scss" scoped>
@import '~styles/mixins.scss';

.no-data-tip {
	@include vh-center;
	height: 3rem;

	.text {
		font-size: .16rem;
		color: #999;
	}
}
</style>
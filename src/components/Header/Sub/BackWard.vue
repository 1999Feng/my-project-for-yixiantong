<template>
	<div class="back-ward" @click="onRouteBack">
		<span class="iconfont icon-header-arrow-left"></span>
	</div>
</template>

<script>
	export default {
		name: 'BackWard',
		methods: {
			onRouteBack () {
				this.$router.go(-1);     //router底下的方法：往上一步走 （撤销）
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import '~styles/mixins.scss';
  @import '~styles/variables.scss';

  .back-ward {
  	position: absolute;
  	top: 0;
  	left: 0;
  	@include flex-row;
  	@include vh-center;
  	width: $headerHeight;
  	height: $headerHeight;

  	.iconfont {
  		font-size: .2rem;
  	}
  }
</style>
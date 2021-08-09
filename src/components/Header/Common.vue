<template>
	<header class="header">
		<back-ward></back-ward>
		<h1>{{title}}</h1>
	</header>
</template>

<script>
  import BackWard from './Sub/backWard';

	export default {
		name: 'CommonHeader',
		components: {
			BackWard
		},
		props: {   //一个组件里面的变量（如title） 由别的组件里面定的话，就得把它定义成props
			title: {
				type: String,
				default () {  //默认值
					return '一线生活通'
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
  @import '~styles/mixins.scss';
  @import '~styles/variables.scss';

	.header {
		position: relative;
		@include flex-row;
		@include vh-center;
		height: $headerHeight;
		background-color: $defaultBgColor;

		h1 {
			font-size: .18rem;
		}
	}
</style>
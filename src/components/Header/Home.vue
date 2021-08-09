<template>
	<header class="header">
    <city-selector></city-selector>
    <false-input></false-input>	
	</header>
</template>

<script>
  import CitySelector from './Sub/CitySelector';   //导入自己需要的组件
  import FalseInput from './Sub/FalseInput';

	export default {      //导出
		name: 'HomeHeader',   //组件的标识，在Vue中必写
		components: {
			CitySelector,     //大驼峰对应的标签需要用短横线隔开： 3、4行
			FalseInput
		}
	}
</script>

<style lang="scss" scoped>
  @import '~styles/mixins.scss';
  @import '~styles/variables.scss';

	.header {
    @include flex-row;    //设置 行  的样式
    height: $headerHeight;
    background-color: $defaultBgColor;  //背景颜色
	}
</style>
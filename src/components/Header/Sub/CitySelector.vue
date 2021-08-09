<template>
	<div class="city">
		<router-link to="City">      	<!--因为是路由，点击出现城市，所以要加router-link； to对应router里面对应的name  这样才能通过router获取pages中的city-->
			<span class="city-name">{{this.cityName}}</span>
		  <span class="iconfont icon-header-arrow"></span>
		</router-link>
	</div>
</template>

<script>
  import { mapState } from 'vuex';

	export default {
		name: 'CitySelector',
		computed: {               //vuex固定方法， 配合11行访问到store里面的数据
			...mapState(['cityName'])
		}
	}
</script>

<style lang="scss" scoped>
  @import '~styles/mixins.scss';
  @import '~styles/variables.scss';

	.city {
		width: .6rem;
		height: $headerHeight;

    a {
    	@include flex-row;
    	@include vh-center;
    	width: 100%;
    	height: $headerHeight;

    	.city-name {
    		font-size: .16rem;
    		font-weight: bold;
    	}

    	.iconfont {
    		font-size: .08rem;
    		margin-left: .03rem;
    	}
    }
	}
</style>





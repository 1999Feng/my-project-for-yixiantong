<template>
	<div class="icons-wrapper">
		<category-icons-sub
      v-for="item of itemList"
      :bgColor="item.bgColor"
      :icon="item.icon"
      :field="item.field"
      :iconText="item.iconText"
      :key="item.id"
		>
		</category-icons-sub>
	</div>
</template>

<script>
  import CategoryIconsSub from './Sub';
  import fieldDatas from 'data/fields';

	export default {
		name: 'CategoryIcons',
		components: {
			CategoryIconsSub
		},
		data () {
			return {
				itemList: fieldDatas
			}
		}
	}
</script>

<style lang="scss" scoped>
@import '~styles/mixins.scss';
@import '~styles/variables.scss';

.icons-wrapper {
  @include flex-row;
  flex-wrap: wrap;
  background-color: #fff;
  border-bottom: 1px solid #ddd;
}	
</style>







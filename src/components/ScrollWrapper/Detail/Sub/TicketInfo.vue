<template>
	<div class="ticket-bd">
		<detail-title
      icon="icon-intro"
      title="购票信息"
		></detail-title>
		<div class="ticket-content">{{ticketInfo}}</div>
	</div>
</template>

<script>
	import DetailTitle from './Title';

	export default {
		name: 'DetailTicketInfo',
		components: {
			DetailTitle
		},
		props: {
			ticketInfo: {
				type: String,
				default () {
					return '加载中...';
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
@import '~styles/mixins.scss';

.ticket-bd {
	@include flex-column;
	margin-top: .1rem;
	background-color: #fff;
	border-bottom: 1px solid #ddd;
	box-sizing: border-box;

	.ticket-content {
		padding: .1rem .15rem;
		font-size: .14rem;
		line-height: .18rem;
		box-sizing: border-box;
		text-indent: 2em;
	}
}	
</style>
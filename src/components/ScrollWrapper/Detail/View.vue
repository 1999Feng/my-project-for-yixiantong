<template>
	<div class="detail-wrapper">
		<detail-name 
		  :name="name"
		></detail-name>

		<detail-stars 
      :starNum="starNum"
      :score="score"
		></detail-stars>

		<detail-address 
		  :address="address"
		></detail-address>

		<detail-price 
		  :price="price"
		></detail-price>

		<detail-open-date-time 
		  :openDateTime="openDateTime"
		></detail-open-date-time>

    <detail-tip
      :tip="tip"
    ></detail-tip>

    <detail-intro
      :intro="intro"
    ></detail-intro>

    <detail-ticket-info
      :ticketInfo="ticketInfo"
    ></detail-ticket-info>
	</div>
</template>

<script>
	import DetailName from './Sub/Name';
  import DetailStars from './Sub/Stars';
  import DetailAddress from './Sub/Address';
  import DetailPrice from './Sub/Price';
  import DetailOpenDateTime from './Sub/OpenDateTime';
  import DetailTip from './Sub/Tip';
  import DetailIntro from './Sub/Intro';
  import DetailTicketInfo from './Sub/TicketInfo';

	export default {
		name: 'DetailView',
		components: {
      DetailName,
      DetailStars,
      DetailAddress,
      DetailPrice,
      DetailOpenDateTime,
      DetailTip,
      DetailIntro,
      DetailTicketInfo
		},
		props: {
			name: String,
			starNum: Number,
			score: String,
			address: String,
			price: Number,
			openDateTime: String,
			tip: String,
			intro: String,
			ticketInfo: String
		}
	}
</script>

<style lang="scss" scoped>
	
</style>
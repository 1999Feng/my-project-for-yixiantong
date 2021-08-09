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

		<detail-comment-keyword
      :commentKeyword="commentKeyword"
    ></detail-comment-keyword>

    <detail-service
      :service="service"
		></detail-service>
	</div>
</template>

<script>
	import DetailName from './Sub/Name';
  import DetailStars from './Sub/Stars';
  import DetailAddress from './Sub/Address';
  import DetailPrice from './Sub/Price';
  import DetailOpenDateTime from './Sub/OpenDateTime';
  import DetailCommentKeyword from './Sub/CommentKeyword';
  import DetailService from './Sub/Service';

	export default {
		name: 'DetailMassage',
		components: {
      DetailName,
      DetailStars,
      DetailAddress,
      DetailPrice,
      DetailOpenDateTime,
      DetailCommentKeyword,
      DetailService
		},
		props: {
			name: String,
			starNum: Number,
			score: String,
			address: String,
			price: Number,
			openDateTime: String,
			commentKeyword: Array,
			service: Object
		}
	}
</script>

<style lang="scss" scoped>
	
</style>
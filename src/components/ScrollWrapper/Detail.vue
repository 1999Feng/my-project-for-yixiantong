<template>
	<div class="scroll-wrapper" ref="wrapper">
		<div class="scroll-conetent">
      <div v-if="!errorShow">
      	<detail-swiper :picDatas="detailData.pics">
				</detail-swiper>

	      <detail-food 
	       v-if="field === 'food'"
	       :name="detailData.name"
	       :starNum="Number(detailData.star)"
	       :score="detailData.score"
	       :address="detailData.address"
	       :price="Number(detailData.default_price)"
	       :openDateTime="detailData.open_datetime"
	       :recom="detailData.recom"
	       :commentKeyword="detailData.comment_keyword"
	      ></detail-food>

	      <detail-view
	       v-if="field === 'view'"
	       :name="detailData.name"
	       :starNum="Number(detailData.star)"
	       :score="detailData.score"
	       :address="detailData.address"
	       :price="Number(detailData.default_price)"
	       :openDateTime="detailData.open_datetime"
	       :tip="detailData.tip"
	       :intro="detailData.intro"
	       :ticketInfo="detailData.ticket_info"
	      ></detail-view>

	      <detail-hotel
	       v-if="field === 'hotel'"
	       :name="detailData.name"
	       :starNum="Number(detailData.star)"
	       :score="detailData.score"
	       :address="detailData.address"
	       :price="Number(detailData.default_price)"
	       :service="detailData.service"
	      ></detail-hotel>

	      <detail-massage
	       v-if="field === 'massage'"
	       :name="detailData.name"
	       :starNum="Number(detailData.star)"
	       :score="detailData.score"
	       :address="detailData.address"
	       :price="Number(detailData.default_price)"
	       :openDateTime="detailData.open_datetime"
	       :commentKeyword="detailData.comment_keyword"
	       :service="detailData.service"
	      ></detail-massage>

	      <detail-ktv
	       v-if="field === 'ktv'"
	       :name="detailData.name"
	       :starNum="Number(detailData.star)"
	       :score="detailData.score"
	       :address="detailData.address"
	       :price="Number(detailData.default_price)"
	       :service="detailData.service"
	      ></detail-ktv>
      </div>

      <error
       :errorShow="errorShow"
      ></error>
		</div>
	</div>
</template>

<script>
	import BetterScroll from 'better-scroll';
	import DetailSwiper from './Sub/Swiper';
	import DetailFood from './Detail/Food';
	import DetailView from './Detail/View';
	import DetailHotel from './Detail/Hotel';
	import DetailMassage from './Detail/Massage';
	import DetailKtv from './Detail/Ktv';
	import Error from './Sub/Error';

	import { DetailModel } from 'models/detail';

	import tools from 'utils/tools';

	export default {
		name: 'DetailScrollWrapper',
		components: {
			DetailSwiper,
			DetailFood,
			DetailView,
			DetailHotel,
			DetailMassage,
			DetailKtv,
			Error
		},
		data () {
      return {
      	field: '',
        id: 0,
        errorShow: false,
        detailData: {}
      }
		},
		
		mounted () {
			this.scroll = new BetterScroll(this.$refs.wrapper, { mouseWheel: true, click: true, tap: true });
			this.field = this.$route.query.field;
			this.id = this.$route.query.id;
			this.getDetail(this.field, this.id);
		},

		activated () {       //网络请求错误 提示组件
      this.currentField = this.$route.query.field;
      this.currentId = this.$route.query.id;

      if (this.currentField !== this.field || this.currentId !== this.id) {
      	this.field = this.currentField;
      	this.id = this.currentId;

      	this.getDetail(this.field, this.id);
      }
		},

		methods: {
      getDetail (field, id) {
      	const detailModel = new DetailModel();

      	detailModel.getDetail(field, id).then((res) => {
      		if (res && res.status === 0) {
      			const data = res.data;
						
						
            this.errorShow = false;
      			data.pics && (data.pics = tools.jsonToArr(data.pics));
      			data.comment_keyword && (data.comment_keyword = tools.strToArr(data.comment_keyword));
      			data.recom && (data.recom = tools.replaceToSpace(data.recom));
      			data.service && (data.service = tools.jsonToArr(data.service));

      			this.detailData = data;
      		} else {
      			this.errorShow = true;
      			console.log({
              statusCode: res.status,
              errorMsg: res.error
            });
      		}
      	});
      }
		}
	}
</script>

<style lang="scss" scoped>
	
</style>
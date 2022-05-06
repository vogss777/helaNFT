<template>
	<div class="get_nft_box common_box" v-if="listImg && Object.keys(listImg).length > 0">
		<div class="common_title">{{ i18nText.common.getNft }}</div>
		<div class="nft_img_box">
			<template v-for="(item, index) in listImg">
				<a href="javascript:;" class="nft_img" :key="index" v-if="index <= 3">
					<img :src="item.image" alt="" />
				</a>
			</template>
		</div>
	</div>
</template>

<script>
import token from '@/config/index.js';
export default {
	name: '',
	data() {
		return {};
	},
	computed: {},
	methods: {},
};
</script>

<script>
import token from '@/config/index.js';
import bus from '@/utils/bus.js';
export default {
	name: '',
	data() {
		return {
			listImg: {},
		};
	},
	watch: {
		fullAccount: {
			handler: function (val, oldVal) {
				if (val) {
					this.getImg();
				}
			},
			// 深度观察监听
			immediate: true,
			deep: true,
		},
	},
	computed: {
		i18nText() {
			return {
				common: this.$t('common'),
			};
		},
		nftImgList() {
			return [
				{
					image: require('@/assets/images/product_img_01.png'),
				},
				{
					image: require('@/assets/images/product_img_02.png'),
				},
				{
					image: require('@/assets/images/product_img_03.png'),
				},
				{
					image: require('@/assets/images/product_img_04.png'),
				},
			];
		},
		// 完整地址
		fullAccount() {
			return this.$store.state.instance.fullAccount;
		},
	},
	mounted() {
		bus.$on('getImg', this.getImg);
	},
	methods: {
		fetchImg(array) {
			// console.log('array', array.length);
			if (!array || array.length === 0) return;
			// ////console.log(('instance', array, instance);
			for (let i = 0; i < array.length; i++) {
				////console.log(('3.array[i].token_id', array[i].nft_content_uri);
				const unit = JSON.parse(array[i].nft_json);
				this.listImg[array[i].token_id] = {
					image: array[i].nft_content_uri,
					level: unit.attributes[0].value,
					mri: unit.attributes[1].value,
				};
				this.$forceUpdate();
			}
		},
		getImg() {
			this.listImg = {};
			const obj = {
				nft_address: token.NFTToken,
				page_index: 1,
				page_size: 100,
				user_address: this.fullAccount,
			};
			this.$axios({
				url: 'https://bnbapi.nftscan.com/gw/token?apiKey=kDS8CFde&apiSecret=53f2046a89120dd341a7440891012624e15e01c9',
				isEmpty: true,
			})
				.then((res) => {
					////console.log(('1.bnbapi', res);
					const totken = res.accessToken;
					this.$axios({
						method: 'POST',
						url: 'https://bscapi.nftscan.com/api/v1/getNftByContractAndUserAddress',
						data: obj,
						isEmpty: true,
						headers: {
							'Access-Token': totken,
						},
					})
						.then((result) => {
							// console.log('2.getNftByContractAndUserAddress', result);
							this.fetchImg(result.content);
						})
						.catch((err) => {
							console.log('err', err);
						});
				})
				.catch((err) => {});
		},
	},
};
</script>

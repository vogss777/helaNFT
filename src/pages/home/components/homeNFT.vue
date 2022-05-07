<template>
	<div class="get_nft_box common_box" v-if="nftImgList && Object.keys(nftImgList).length > 0">
		<div class="common_title" v-if="!isMore">{{ i18nText.common.getNft }}</div>
		<div class="nft_img_box">
			<div class="flip-container nft_img" :key="index" v-for="(item, index) in nftImgList">
				<div class="flipper">
					<div class="front">
						<img :src="item.image" alt="" />
					</div>
					<div class="back">
						<img :src="item.image" alt="" />
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import token from '@/config/index.js';
import bus from '@/utils/bus.js';
export default {
	name: '',
	props: {
		isMore: {
			type: Boolean,
			default: false,
		},
	},
	data() {
		return {};
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
	},
	mounted() {},
	methods: {},
};
</script>

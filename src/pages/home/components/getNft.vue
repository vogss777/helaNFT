<template>
	<div class="get_nft_box common_box">
		<div class="common_title">获得NFT</div>
		<div class="nft_img_box">
			<a href="javascript:;" class="nft_img" v-for="(item, index) in nftImgList" :key="index">
				<img :src="item.img" alt="" />
			</a>
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
	computed: {
		nftImgList() {
			return [
				{
					img: require('@/assets/images/product_img_01.png'),
				},
				{
					img: require('@/assets/images/product_img_02.png'),
				},
				{
					img: require('@/assets/images/product_img_03.png'),
				},
				{
					img: require('@/assets/images/product_img_04.png'),
				},
			];
		},
	},
	methods: {},
};
</script>

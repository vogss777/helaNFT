<template>
	<div class="partners_box common_box">
		<div class="common_title">{{ i18nText.common.partners }}</div>
		<div class="partners_wrap">
			<a href="javascript:;" class="partner" v-for="(item, index) in partnersList" :key="index">
				<img :src="item.img" alt="" />
			</a>
		</div>
	</div>
</template>

<script>
export default {
	name: '',
	data() {
		return {};
	},
	computed: {
		i18nText() {
			return {
				common: this.$t('common'),
			};
		},
		partnersList() {
			return [
				{
					img: require('@/assets/images/relate_01.png'),
				},
				{
					img: require('@/assets/images/relate_02.png'),
				},
				{
					img: require('@/assets/images/relate_03.png'),
				},
				{
					img: require('@/assets/images/relate_04.png'),
				},
				{
					img: require('@/assets/images/relate_05.png'),
				},
				{
					img: require('@/assets/images/relate_06.png'),
				},
				{
					img: require('@/assets/images/relate_07.png'),
				},
				{
					img: require('@/assets/images/relate_08.png'),
				},
				{
					img: require('@/assets/images/relate_09.png'),
				},
			];
		},
	},
	methods: {},
};
</script>

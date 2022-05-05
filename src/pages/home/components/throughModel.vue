<template>
	<div class="through_model common_box">
		<div class="common_title">{{ i18nText.common.throughModel }}</div>
		<div class="hl_token_wrap">
			<div class="hl_title clearfix">
				<img src="@/assets/images/h_img.png" alt="" />
				<p class="fl">{{ i18nText.common.throughToken }}</p>
				<span class="fr">{{ i18nText.common.throughTotal }}：999{{ i18nText.common.throughMillion }}</span>
			</div>
			<div class="hl_content clearfix">
				<div class="point_box" :class="item.className" v-for="(item, index) in pointList" :key="index">
					<span>{{ item.title }}</span>
					<p>{{ item.value }}</p>
				</div>
			</div>
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
		pointList() {
			return [
				{
					title: this.i18nText.common.throughText01,
					value: '9%',
					className: 'left',
				},
				{
					title: this.i18nText.common.throughText02,
					value: '2%',
					className: 'right',
				},
				{
					title: this.i18nText.common.throughText03,
					value: '2%',
					className: 'left',
				},
				{
					title: this.i18nText.common.throughText04,
					value: '5%',
					className: 'right',
				},
			];
		},
	},
	methods: {},
};
</script>

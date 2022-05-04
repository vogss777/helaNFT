<template>
	<div class="explain_text">
		<h2>{{ i18nText.common.explainText01 }}</h2>
		<h3>{{ i18nText.common.explainText02 }}</h3>
		<div class="exp_txt_box">
			<div class="exp_txt" v-for="(item, index) in explainText" :key="index">
				<img :src="item.img" alt="" />
				<span>{{ item.title }}</span>
				<p>{{ item.text }}</p>
			</div>
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
		i18nText() {
			return {
				common: this.$t('common'),
			};
		},
		explainText() {
			return [
				{
					img: require('@/assets/images/text_01.png'),
					title: this.i18nText.common.explainText03,
					text: this.i18nText.common.explainText04,
				},
				{
					img: require('@/assets/images/text_02.png'),
					title: this.i18nText.common.explainText05,
					text: this.i18nText.common.explainText06,
				},
				{
					img: require('@/assets/images/text_03.png'),
					title: this.i18nText.common.explainText07,
					text: this.i18nText.common.explainText08,
				},
			];
		},
	},
	methods: {},
};
</script>

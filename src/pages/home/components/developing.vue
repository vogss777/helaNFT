<template>
	<div class="developing_box common_box">
		<div class="common_title">{{ i18nText.common.developingLine }}</div>
		<div class="developing_wrap">
			<div class="develop_process" v-for="(item, index) in processList" :key="index">
				<div class="line">
					<em></em>
				</div>
				<span>{{ item.time }}</span>
				<div class="txt" v-html="item.text"></div>
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
		processList() {
			return [
				{
					time: '2021 Q4',
					text: this.i18nText.common.processText01,
					className: 'left',
				},
				{
					time: '2022 Q2',
					text: this.i18nText.common.processText02,
					className: 'left',
				},
				{
					time: '2022 Q3',
					text: this.i18nText.common.processText03,
					className: 'left',
				},
				{
					time: '2022 Q4',
					text: this.i18nText.common.processText04,
					className: 'left',
				},
				{
					time: '2023 Q1',
					text: this.i18nText.common.processText05,
					className: 'left',
				},
				{
					time: '2023 Q2',
					text: this.i18nText.common.processText06,
					className: 'left',
				},
				{
					time: '2023 Q3',
					text: this.i18nText.common.processText07,
					className: 'left',
				},
			];
		},
	},
	methods: {},
};
</script>

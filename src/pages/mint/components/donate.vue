<template>
	<div class="donate_content">
		<h2>{{ i18nText.common.currentDonation }}BNB</h2>
		<div class="donate_value">
			<img src="@/assets/images/circle.png" alt="" />
			<div class="d_v">
				<span>{{ currentExBNB }}</span>
				<p>BNB</p>
			</div>
		</div>
		<div class="donate_time">
			<div class="times" v-for="(item, index) in timeList" :key="index">
				<span>{{ item.value }}</span>
				<p>{{ item.time }}</p>
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
		contractMethod() {
			return this.$store.state.contractMethod;
		},
		commonMethod() {
			return this.contractMethod.commonMethod;
		},
		currentDonwTime() {
			return this.commonMethod.currentDonwTime;
		},
		currentExBNB() {
			if (this.commonMethod.currentExBNB === '0.0') {
				return 0;
			}
			return this.commonMethod.currentExBNB;
		},
		i18nText() {
			return {
				common: this.$t('common'),
			};
		},
		timeList() {
			return [
				{
					value: this.currentDonwTime.d,
					time: this.i18nText.common.days,
				},
				{
					value: this.currentDonwTime.h,
					time: this.i18nText.common.hours,
				},
				{
					value: this.currentDonwTime.m,
					time: this.i18nText.common.minutes,
				},
				{
					value: this.currentDonwTime.s,
					time: this.i18nText.common.seconds,
				},
			];
		},
	},
	methods: {},
};
</script>

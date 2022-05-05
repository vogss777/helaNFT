<template>
	<div class="invited_content" v-if="fullAccount">
		<div class="invited_url">
			<div class="invited_title">
				<h3>{{ i18nText.common.invitedUrl }}</h3>
				<div class="copy_t" @click="copyAddress">
					<img src="@/assets/images/file-copy.png" alt="" />
					<span>{{ i18nText.common.copy }}</span>
				</div>
			</div>
			<div class="invited_input">
				<span>{{ inviteAddress }}</span>
			</div>
			<span class="invited_text">{{ i18nText.common.invitedText }}</span>
		</div>

		<div class="next_time_box">
			<span>{{ i18nText.common.nextTime }}：{{ nextTime() }}</span>
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
		blockTime() {
			return this.commonMethod.blockTime;
		},
		currentEndTime() {
			return this.commonMethod.currentEndTime;
		},
		i18nText() {
			return {
				common: this.$t('common'),
			};
		},
		// 完整地址
		fullAccount() {
			return this.$store.state.instance.fullAccount;
		},
		inviteAddress() {
			return `${window.location.protocol}//${window.location.host}?ref=${this.fullAccount}`;
		},
	},
	methods: {
		nextTime() {
			return this.publicMethod.formatTime(this.currentEndTime * 1000, 'yyyy-MM-dd') || '0000-00-00';
		},
		copyAddress() {
			this.$copyText(this.inviteAddress)
				.then((result) => {
					this.$toast(this.i18nText.common.copySuccess, {
						timeout: 2000,
					});
				})
				.catch((err) => {
					this.$toast.error(this.i18nText.common.copyFail, {
						timeout: 2000,
					});
				});
		},
	},
};
</script>

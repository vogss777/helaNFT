<template>
	<div class="invited_content">
		<div class="invited_url">
			<div class="invited_title">
				<h3>{{ i18nText.common.invitedUrl }}</h3>
				<div class="copy_t">
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
			<span>{{ i18nText.common.nextTime }}：2022-04-02</span>
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
		// 完整地址
		fullAccount() {
			return this.$store.state.instance.fullAccount;
		},
		inviteAddress() {
			return `${window.location.protocol}//${window.location.host}?inviteCode=${this.fullAccount}`;
		},
	},
	methods: {},
};
</script>

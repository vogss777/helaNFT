<template>
	<div class="contract_address">
		<div class="adre">
			<h3>{{ i18nText.common.contractAddress }}</h3>
			<div class="copy_t" @click="copyAddress">
				<img src="@/assets/images/copy.png" alt="" />
				<span>{{ i18nText.common.copy }}</span>
			</div>
		</div>
		<span class="address">{{ contractAddress }}</span>
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
		contractAddress() {
			return token.pool;
		},
	},
	methods: {
		copyAddress() {
			this.$copyText(this.contractAddress)
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

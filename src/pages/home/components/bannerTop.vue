<template>
	<div class="banner_top clearfix">
		<div class="ban_text fl">
			<div class="texts">
				<div class="common_title">{{ i18nText.common.bannerTitle }}</div>
				<div class="text">
					<p>
						{{ i18nText.common.bannerText }}
					</p>
				</div>
			</div>
		</div>
		<div class="ban_img fr">
			<img src="@/assets/images/banner.png" alt="" />
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
	},
	methods: {},
};
</script>

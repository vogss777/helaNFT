<template>
	<div class="footer_bottom">
		<div class="footer">
			<div class="relate_icon">
				<a :href="item.url" :target="item.target" v-for="(item, index) in relateIcon" :key="index">
					<img :src="item.img" class="one" alt="" />
					<img :src="item.act_img" class="two" alt="" />
				</a>
			</div>
			<div class="copy_right">
				<span>{{ i18nText.common.copyRight }}</span>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'footerBottom',
	data() {
		return {};
	},
	computed: {
		i18nText() {
			return {
				common: this.$t('common'),
			};
		},
		relateIcon() {
			return [
				{
					img: require('@/assets/images/email.png'),
					act_img: require('@/assets/images/email_a.png'),
					target: '_blank',
					url: 'javascript:;',
				},
				{
					img: require('@/assets/images/telegram.png'),
					act_img: require('@/assets/images/telegram_a.png'),
					target: '_blank',
					url: 'javascript:;',
				},
				{
					img: require('@/assets/images/twitter.png'),
					act_img: require('@/assets/images/twitter_a.png'),
					target: '_blank',
					url: 'javascript:;',
				},
				{
					img: require('@/assets/images/discrod.png'),
					act_img: require('@/assets/images/discrod_a.png'),
					target: '_blank',
					url: 'javascript:;',
				},
			];
		},
	},
};
</script>

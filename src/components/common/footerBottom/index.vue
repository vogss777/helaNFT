<template>
	<div class="footer_bottom">
		<div class="footer">
			<div class="relate_icon">
				<a
					:href="item.url"
					:target="item.target"
					v-for="(item, index) in relateIcon"
					:class="{ on: relateIndex === index }"
					@mouseleave="relateIndex = -1"
					@mouseenter="relateIndex = index"
					:key="index"
				>
					<img :src="item.img" class="one" alt="" />
					<img :src="item.act_img" class="two" alt="" />
				</a>
			</div>
			<div class="copy_right">
				<span>版权所有 2022 HLDAO</span>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'footerBottom',
	data() {
		return {
			relateIndex: -1,
		};
	},
	computed: {
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

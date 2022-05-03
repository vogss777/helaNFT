<template>
	<div class="explain_text">
		<h2>为 BNBChain、Fantom 和 Polygon 网络构建的 DeFi 孵化器、代币发布和不可替代代币 Launchpad</h2>
		<h3>专注于为利用和探索具有经济激励措施的 DeFi、NFT、dapp 的项目孵化并提高流动性，(GameFi）</h3>
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
		explainText() {
			return [
				{
					img: require('@/assets/images/text_01.png'),
					title: '代币孵化器和启动板',
					text: '用于通过 ILO 或 fairlaunch 为筹款目的探索HLBOX 的开发或现有项目的审查计划',
				},
				{
					img: require('@/assets/images/text_02.png'),
					title: '平台高度自治',
					text: 'HL的所有代币将分发给社区毫无保留，用户可以通过捐赠获得代币治理协助社区建设',
				},
				{
					img: require('@/assets/images/text_03.png'),
					title: '人人都可参与',
					text: '用户在捐赠获得代币时也将获得官方NFT，用户可以在其中创建个人资料建立社区或交易链上的NFT',
				},
			];
		},
	},
	methods: {},
};
</script>

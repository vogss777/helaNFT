<template>
	<div class="inner_home">
		<div class="banner_top clearfix">
			<div class="ban_text fl">
				<div class="texts">
					<div class="common_title">赫拉NFT交易平台</div>
					<div class="text">
						<p>
							跨链关系DeFi孵化器、ILO和NFT启动板探索HLBOX，尽早访问在
							BSC、Fantom和Polygon上启动的顶级DeFi、GameFi和NFT项目
						</p>
					</div>
				</div>
			</div>
			<div class="ban_img fr">
				<img src="@/assets/images/banner.png" alt="" />
			</div>
		</div>

		<div class="contract_address">
			<div class="adre">
				<h3>合约地址</h3>
				<div class="copy_t" @click="copyAddress">
					<img src="@/assets/images/copy.png" alt="" />
					<span>复制</span>
				</div>
			</div>
			<span class="address">{{ contractAddress }}</span>
		</div>

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

		<div class="get_nft_box common_box">
			<div class="common_title">获得NFT</div>
			<div class="nft_img_box">
				<a href="javascript:;" class="nft_img" v-for="(item, index) in nftImgList" :key="index">
					<img :src="item.img" alt="" />
				</a>
			</div>
		</div>
		<div class="through_model common_box">
			<div class="common_title">通证模型</div>
			<div class="hl_token_wrap">
				<div class="hl_title clearfix">
					<img src="@/assets/images/h_img.png" alt="" />
					<p class="fl">HL TOKEN</p>
					<span class="fr">总量：999亿</span>
				</div>
				<div class="hl_content clearfix">
					<div class="point_box fl" :class="item.className" v-for="(item, index) in pointList" :key="index">
						<span>{{ item.title }}</span>
						<p>{{ item.value }}</p>
					</div>
				</div>
			</div>
		</div>
		<div class="developing_box common_box">
			<div class="common_title">发展路线</div>
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
		<div class="partners_box common_box">
			<div class="common_title">合作机构</div>
			<div class="partners_wrap">
				<a href="javascript:;" class="partner" v-for="(item, index) in partnersList" :key="index">
					<img :src="item.img" alt="" />
				</a>
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
		contractAddress() {
			return token.pool;
		},
		i18nText() {
			return {
				common: this.$t('common'),
			};
		},
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
		nftImgList() {
			return [
				{
					img: require('@/assets/images/product_img_01.png'),
				},
				{
					img: require('@/assets/images/product_img_02.png'),
				},
				{
					img: require('@/assets/images/product_img_03.png'),
				},
				{
					img: require('@/assets/images/product_img_04.png'),
				},
			];
		},
		partnersList() {
			return [
				{
					img: require('@/assets/images/relate_01.png'),
				},
				{
					img: require('@/assets/images/relate_02.png'),
				},
				{
					img: require('@/assets/images/relate_03.png'),
				},
				{
					img: require('@/assets/images/relate_04.png'),
				},
				{
					img: require('@/assets/images/relate_05.png'),
				},
				{
					img: require('@/assets/images/relate_06.png'),
				},
				{
					img: require('@/assets/images/relate_07.png'),
				},
				{
					img: require('@/assets/images/relate_08.png'),
				},
				{
					img: require('@/assets/images/relate_09.png'),
				},
			];
		},
		pointList() {
			return [
				{
					title: '买卖滑点',
					value: '9%',
					className: 'left',
				},
				{
					title: '回流资金池',
					value: '9%',
					className: 'right',
				},
				{
					title: '持币分红',
					value: '9%',
					className: 'left',
				},
				{
					title: '营销资金',
					value: '9%',
					className: 'right',
				},
			];
		},
		processList() {
			return [
				{
					time: '2021 Q4',
					text: `
						<p>HL（赫拉基金会）成立</p>
					`,
					className: 'left',
				},
				{
					time: '2021 Q4',
					text: `
						<p>HL联合技术极客构建HL业务基础设施</p>
						<p>HL启动产品开发节奏，并制定开发时间表</p>
					`,
					className: 'left',
				},
				{
					time: '2021 Q4',
					text: `
						<p>首款 DAPP将推出</p>
						<p>正式打开 NFT的拍卖交易等功能</p>
					`,
					className: 'left',
				},
				{
					time: '2021 Q4',
					text: `
						<p>PC端、WE端、移动端正式上线</p>
						<p>逐渐丰富HL的业务生态系统</p>
					`,
					className: 'left',
				},
				{
					time: '2021 Q4',
					text: `
						<p>产品更新UGC功能</p>
						<p>开始用户创建、投票、NFT化和商业化</p>
					`,
					className: 'left',
				},
				{
					time: '2021 Q4',
					text: `
						<p>用户端场景优化</p>
						<p>界面UI升级迭代</p>
					`,
					className: 'left',
				},
				{
					time: '2021 Q4',
					text: `
						<p>HL 游戏上线</p>
						<p>HL元宇宙土地开放拍卖</p>
						<p>实现NFT高效流通，加入元宇宙IP NFT</p>
					`,
					className: 'left',
				},
			];
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

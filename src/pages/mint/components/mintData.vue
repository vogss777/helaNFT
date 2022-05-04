<template>
	<div class="mint_data_wrap">
		<div class="mint_data">
			<div class="mint_item">
				<h2>捐赠数量</h2>
				<div class="tit">
					<span>募捐单地址0.1BNB到2BNB</span>
				</div>
			</div>

			<div class="mint_item">
				<h2>捐赠比例</h2>
				<div class="rate_box clearfix">
					<span>0.1B=1000000HL</span>
					<span>100%公开透明无预留</span>
					<span class="martop">1B=10000000HL</span>
					<span class="martop">上线进行NFT游戏挖矿板块</span>
				</div>
			</div>

			<div class="mint_item">
				<h2>捐赠奖励</h2>
				<div class="tit award_tit">
					<span>NFT可以加速释放募捐的额度的5到20%同时增加更多的收益方式</span>
					<span
						>每募捐0.3 BNB随机开盲盒赠送一个NFT，平台上线之后可进行NFT游戏挖矿板块，NFT在Dapp上面实现售卖转让功能</span
					>
					<span>NFT加速释放方式</span>
				</div>
				<div class="release_list">
					<div class="release" v-for="(item, index) in releaseList" :key="index">
						<span>{{ item.text }}</span>
						<p>{{ item.value }}</p>
					</div>
				</div>
			</div>

			<div class="mint_item">
				<h2>NFT分类</h2>
				<div class="tit">
					<span>后台设定抽出逻辑比例</span>
				</div>
				<div class="release_list nft_type_list">
					<div class="release nft_type" :class="'title' + index" v-for="(item, index) in nftTypeList" :key="index">
						<p class="long">{{ item.text }}</p>
						<p class="short">{{ item.rarity }}</p>
						<p class="short">{{ item.value }}</p>
					</div>
				</div>
			</div>
			<div class="mint_item">
				<h2>NFT质押</h2>
				<div class="tit">
					<span>NFT+LP组合质押 LP价值大于或等于0.1B质押挖取USDT</span>
				</div>
				<div class="release_list nft_staking_list">
					<div
						class="release nft_staking"
						:class="'title' + index"
						v-for="(item, index) in nftStakingList"
						:key="index"
					>
						<p>{{ item.text }}</p>
						<p>{{ item.rarity }}</p>
						<p>{{ item.coin }}</p>
						<p>{{ item.value }}</p>
					</div>
				</div>
        <span class="tips">单Lp质押挖矿只能获得质押价值5倍价值币USDT质押需1B≥LP≥0.1B </span>
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
		releaseList() {
			return [
				{ text: 'K卡（Kronos）', value: '加速20%' },
				{ text: 'R卡（Rhea）', value: '加速15%' },
				{ text: 'Z卡（Zeus）', value: '加速10%' },
				{ text: 'H卡（Hear）', value: '加速5%' },
			];
		},
		nftTypeList() {
			return [
				{ text: '卡片', rarity: '稀有度', value: '总量占比' },
				{ text: 'K卡（Kronos）', rarity: '最高', value: '5%' },
				{ text: 'R卡（Rhea）', rarity: '极高', value: '20%' },
				{ text: 'Z卡（Zeus）', rarity: '高', value: '10%' },
				{ text: 'H卡（Hear）', rarity: '普通', value: '70%' },
			];
		},
		nftStakingList() {
			return [
				{ text: '卡片', rarity: '获得质押价值', coin: '', value: '质押' },
				{ text: 'K卡', rarity: '25倍价值币', coin: 'USDT', value: '3B≥LP≥0.1B' },
				{ text: 'R卡', rarity: '20倍价值币', coin: 'USDT', value: '2B≥LP≥0.1B' },
				{ text: 'Z卡', rarity: '15倍价值币', coin: 'USDT', value: '1.8B≥LP≥0.1B' },
				{ text: 'H卡', rarity: '10倍价值币', coin: 'USDT', value: '1.5B≥LP≥0.1B ' },
			];
		},
	},
	methods: {},
};
</script>

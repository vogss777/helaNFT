<template>
	<div class="mint_data_wrap">
		<div class="mint_data">
			<div class="mint_item">
				<h2>{{ i18nText.common.donationText01 }}</h2>
				<div class="tit">
					<span>{{ i18nText.common.donationText02 }}</span>
				</div>
			</div>

			<div class="mint_item">
				<h2>{{ i18nText.common.donationText03 }}</h2>
				<div class="rate_box clearfix">
					<span>0.1B=1000000HL</span>
					<span>{{ i18nText.common.donationText04 }}</span>
					<span class="martop">1B=10000000HL</span>
					<span class="martop">{{ i18nText.common.donationText05 }}</span>
				</div>
			</div>

			<div class="mint_item">
				<h2>{{ i18nText.common.donationText06 }}</h2>
				<div class="tit award_tit">
					<span>{{ i18nText.common.donationText07 }}</span>
					<span>{{ i18nText.common.donationText08 }}</span>
					<span>{{ i18nText.common.donationText09 }}</span>
				</div>
				<div class="release_list">
					<div class="release" v-for="(item, index) in releaseList" :key="index">
						<span>{{ item.text }}</span>
						<p>{{ item.value }}</p>
					</div>
				</div>
			</div>

			<div class="mint_item">
				<h2>{{ i18nText.common.donationText10 }}</h2>
				<div class="tit">
					<span>{{ i18nText.common.donationText11 }}</span>
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
				<h2>{{ i18nText.common.donationText12 }}</h2>
				<div class="tit">
					<span>{{ i18nText.common.donationText13 }}</span>
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
				<span class="tips">{{ i18nText.common.donationText14 }}</span>
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
		i18nText() {
			return {
				common: this.$t('common'),
			};
		},
		releaseList() {
			return [
				{ text: `${this.i18nText.common.kcardText}（Kronos）`, value: `${this.i18nText.common.speedText}20%` },
				{ text: `${this.i18nText.common.rcardText}（Rhea）`, value: `${this.i18nText.common.speedText}15%` },
				{ text: `${this.i18nText.common.zcardText}（Zeus）`, value: `${this.i18nText.common.speedText}10%` },
				{ text: `${this.i18nText.common.hcardText}（Hear）`, value: `${this.i18nText.common.speedText}5%` },
			];
		},
		nftTypeList() {
			return [
				{
					text: this.i18nText.common.cardText,
					rarity: this.i18nText.common.rarityText,
					value: this.i18nText.common.theAmount,
				},
				{ text: `${this.i18nText.common.kcardText}（Kronos）`, rarity: this.i18nText.common.rarityHigh1, value: '5%' },
				{ text: `${this.i18nText.common.rcardText}（Rhea）`, rarity: this.i18nText.common.rarityHigh2, value: '20%' },
				{ text: `${this.i18nText.common.zcardText}（Zeus）`, rarity: this.i18nText.common.rarityHigh3, value: '10%' },
				{ text: `${this.i18nText.common.hcardText}（Hear）`, rarity: this.i18nText.common.rarityHigh4, value: '70%' },
			];
		},
		nftStakingList() {
			return [
				{
					text: this.i18nText.common.cardText,
					rarity: this.i18nText.common.pledgeValue,
					coin: '',
					value: this.i18nText.common.pledgeText,
				},
				{
					text: this.i18nText.common.kcardText,
					rarity: `25${this.i18nText.common.valueCurrency}`,
					coin: 'USDT',
					value: '3B≥LP≥0.1B',
				},
				{
					text: this.i18nText.common.rcardText,
					rarity: `20${this.i18nText.common.valueCurrency}`,
					coin: 'USDT',
					value: '2B≥LP≥0.1B',
				},
				{
					text: this.i18nText.common.zcardText,
					rarity: `15${this.i18nText.common.valueCurrency}`,
					coin: 'USDT',
					value: '1.8B≥LP≥0.1B',
				},
				{
					text: this.i18nText.common.hcardText,
					rarity: `10${this.i18nText.common.valueCurrency}`,
					coin: 'USDT',
					value: '1.5B≥LP≥0.1B ',
				},
			];
		},
	},
	methods: {},
};
</script>

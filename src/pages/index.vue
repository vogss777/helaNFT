<template>
	<div class="container">
		<p style="display: none" v-if="!initAccountMethod"></p>
		<headerTop></headerTop>
		<transition :enter-active-class="'animated fadeIn'" :leave-active-class="'animated fadeOut'" mode="out-in">
			<router-view calss="inner_content"></router-view>
		</transition>
		<footerBottom></footerBottom>
	</div>
</template>

<script>
import headerTop from '@/components/common/headerTop/index.vue';
import footerBottom from '@/components/common/footerBottom/index.vue';
import token from '@/config/index.js';
import inviteCode from '@/utils/inviteCode';
import bus from '@/utils/bus.js';
export default {
	name: '',
	components: {
		headerTop,
		footerBottom,
	},
	data() {
		return {
			fristFlag: true,
		};
	},
	watch: {
		/**
		 * 监听第一次登录帐号
		 */
		'$store.state.instance.firstConnectWallet'(newVal, oldVal) {
			console.log('监听第一次登录帐号', newVal);
		},
	},
	mounted() {
		inviteCode(this);
		// if (window.ethereum) {
		// 	this.startEthers();
		// }
		bus.$on('accountMethod', this.accountMethod);
	},
	computed: {
		// 完整地址
		fullAccount() {
			return this.$store.state.instance.fullAccount;
		},
		// 合约实例
		erc20Instance() {
			return this.$store.state.contractMethod.erc20Instance;
		},
		// 合约实例
		currentInstance() {
			return this.$store.state.contractMethod.currentInstance;
		},
		initAccountMethod() {
			if (this.erc20Instance && this.currentInstance && this.fullAccount) {
				this.accountMethod();
				return true;
			}
			return false;
		},
	},
	created() {},
	methods: {
		// startEthers() {
		// 	// provider对象
		// 	const provider = new this.ethers.providers.Web3Provider(window.ethereum);
		// 	// signer对象
		// 	const signer = provider.getSigner();

		// 	// NFT合约实例
		// 	const newNFTInstance = new this.ethers.Contract(token.newNFTToken, NFTABI, signer);

		// 	// ERC20实例
		// 	const erc20Instance = new this.ethers.Contract(token.ztzToken, Erc20Api, signer);

		// 	// NFT合约实例
		// 	const oldNFTInstance = new this.ethers.Contract(token.oldNFTToken, NFTABI, signer);

		// 	this.$store.commit('SETCURRENTINSTANCE', newNFTInstance);
		// 	this.$store.commit('SETOLDNFTINSTACE', oldNFTInstance);
		// 	this.$store.commit('SETERC20LPINSTANCE', erc20Instance);
		// 	this.$store.commit('SETCURRENTPOOLTOKEN', token.newNFTToken);
		// },
		accountMethod() {
			this.$store.dispatch('initAccountMethod', {
				address: this.fullAccount,
				utils: this.ethers.utils,
			});
		},
	},
};
</script>

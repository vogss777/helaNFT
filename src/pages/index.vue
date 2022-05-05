<template>
	<div class="container" :class="currentName">
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
import subscribeABI from '@/contract/subscribeABI.json';
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
			currentName: '',
		};
	},
	watch: {
		/**
		 * 监听第一次登录帐号
		 */
		'$store.state.instance.firstConnectWallet'(newVal, oldVal) {
			console.log('监听第一次登录帐号', newVal);
		},
		$route: {
			// $route可以用引号，也可以不用引号
			handler(to, from) {
				console.log('路由变化了');
				console.log(to);
				this.currentName = to.name;
			},
			deep: true, // 深度监听
			immediate: true, // 第一次初始化渲染就可以监听到
		},
	},
	mounted() {
		inviteCode(this);
		if (window.ethereum) {
			this.startEthers();
		}
		bus.$on('accountMethod', this.accountMethod);
		bus.$on('refreshData', this.refreshData);
	},
	computed: {
		// 完整地址
		fullAccount() {
			return this.$store.state.instance.fullAccount;
		},
		// 合约实例
		currentInstance() {
			return this.$store.state.contractMethod.currentInstance;
		},
		initAccountMethod() {
			if (this.currentInstance && this.fullAccount) {
				this.accountMethod();
				return true;
			}
			return false;
		},
	},
	created() {},
	methods: {
		startEthers() {
			// provider对象
			const provider = new this.ethers.providers.Web3Provider(window.ethereum);
			// signer对象
			const signer = provider.getSigner();
			this.getBlockNumber(provider);
			// NFT合约实例
			const instance = new this.ethers.Contract(token.pool, subscribeABI, signer);
			console.log('instance', instance);
			this.$store.commit('SETCURRENTINSTANCE', instance);
			this.$store.commit('SETCURRENTPOOLTOKEN', token.pool);
			this.$store.dispatch('initContractMethod', {
				utils: this.ethers.utils,
			});
		},
		accountMethod() {
			this.$store.dispatch('initAccountMethod', {
				address: this.fullAccount,
				utils: this.ethers.utils,
			});
		},
		refreshData() {
			this.$store.dispatch('initContractMethod', {
				utils: this.ethers.utils,
			});
			this.$store.dispatch('initAccountMethod', {
				address: this.fullAccount,
				utils: this.ethers.utils,
			});
		},
		// 获取最新区块数据, 区块时间
		getBlockNumber(provider) {
			provider.on('block', () => {
				provider
					.getBlock()
					.then((result) => {
						this.$store.commit('SETBLOCKTIME', result.timestamp);
					})
					.catch((err) => {});
			});
		},
	},
};
</script>

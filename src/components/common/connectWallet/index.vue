<template>
	<div class="wallet_button">
		<p style="display: none" v-if="!initWallet"></p>
		<Bbutton class="connect_bt" @callback="connectWallet" v-if="!currentAccount">{{ accountText }}</Bbutton>
		<Bbutton class="connected_bt" v-else>
			<span>{{ currentAccount }}</span>
		</Bbutton>
	</div>
</template>

<script>
import bus from '@/utils/bus.js';
import token from '@/config/index.js';
export default {
	name: '',
	data() {
		return {
			accountText: 'connect wallet', // 钱包连接
		};
	},
	computed: {
		// 省略号地址
		currentAccount() {
			return this.$store.state.instance.currentAccount;
		},
		// 合约实例
		contractInstance() {
			return this.$store.state.instance.contractInstance;
		},
		// 完整地址
		fullAccount() {
			return this.$store.state.instance.fullAccount;
		},
		// 初始化
		initWallet() {
			if (window.ethereum) {
				this.getAccounts();
				// 监听切换帐户
				window.ethereum &&
					window.ethereum.on('accountsChanged', (chainId) => {
						this.getAccounts('changed');
					});
				window.ethereum.on('chainChanged', (chainId) => {
					console.log('chainId', chainId);
				});
				return true;
			}
			return false;
		},
	},
	mounted() {
		bus.$on('connectWallet', this.connectWallet);
	},
	methods: {
		// 连接帐户
		async connectWallet() {
			// console.log(window.ethereum.isMetaMask, 'isMetaMask')
			if (!window.ethereum) {
				this.$toast.error('Please reconnect', {
					timeout: 2000,
				});
				return;
			}
			window.ethereum
				.request({
					method: 'eth_requestAccounts',
					params: [{ eth_accounts: {} }],
				})
				.then((res) => {
					this.getAccounts();
					this.$store.commit('SETFIRSTCONNECTWALLET', true);
				})
				.catch((err) => {
					if (err.code === 4001) {
						// EIP-1193 userRejectedRequest error
						// If this happens, the user rejected the connection request.
						this.$toast.error('User denied account access', {
							timeout: 2000,
						});
					} else {
						this.$toast.error(err.message, {
							timeout: 2000,
						});
					}
				});
		},

		// 获取帐户
		getAccounts(type) {
			// console.log('window.webEthers.getSigner().getAddress()', window.ethers.ethers);
			window.ethereum
				.request({ method: 'eth_accounts' })
				.then(async (accounts) => {
					// console.log('已经存在accounts', accounts);
					// let chainId = '';
					// try {
					// 	chainId = await window.ethereum.request({ method: 'eth_chainId' });
					// } catch (error) {
					// 	chainId = '';
					// }
					// if (chainId != token.chainId) {
					// 	await this.publicMethod.switchNetwork(chainId);
					// 	bus.$emit('reloadNetwork');
					// }
					const fullAccount = accounts[0];
					const currentAccount = this.getString(accounts[0]);
					const longAccount = this.getString(accounts[0], 10, 6);
					this.$store.commit('SETCUURENTACCOUNT', {
						fullAccount,
						currentAccount,
					});

					if (type === 'changed') {
						this.$store.commit('SETISACCOUNTSCHANGED', true);
						setTimeout(() => {
							this.$store.commit('SETISACCOUNTSCHANGED', false);
						}, 100);
					}

					// console.log('this.ethers.utils', this.ethers.utils.getBalance(fullAccount));
				})
				.catch((err) => {
					if (err) {
						this.$toast.error(err, {
							timeout: 2000,
						});
					}
				});
		},
		getString(str, prevNum = 6, nextNext = 4) {
			if (typeof str !== 'string') {
				return str;
			}
			let prev = '';
			let next = '';
			let string = '';
			if (str.length > 10) {
				prev = str.slice(0, prevNum);
				next = str.slice(str.length - nextNext);
				string = prev + ' ... ' + next;
			} else if (str.length > 10 && str.length < 10) {
				prev = str.slice(0, prevNum);
				next = str.slice(str.length - nextNext);
				string = prev + ' ... ' + next;
			} else {
				string = str;
			}

			return string;
		},
	},
};
</script>

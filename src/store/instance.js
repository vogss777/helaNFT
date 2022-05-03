export default {
	state: {
		fullAccount: '',
		currentAccount: '',
		inviteAddress: '',
		isAccountsChanged: false,
		firstConnectWallet: false,
	},
	actions: {},
	mutations: {
		/**
		 * 检测帐号是否切换
		 */
		SETISACCOUNTSCHANGED(state, data) {
			state.isAccountsChanged = data;
		},
		/**
		 * 设置当前钱包地址
		 */
		SETCUURENTACCOUNT(state, data) {
			state.currentAccount = data.currentAccount;
			state.fullAccount = data.fullAccount;
		},
		/**
		 * 第一次连接钱包
		 */
		SETFIRSTCONNECTWALLET(state, data) {
			state.firstConnectWallet = data;
		},
		/**
		 * 邀请地址
		 */
		 SETINVITECODE(state, data) {
			state.inviteAddress = data;
		},
	},
};

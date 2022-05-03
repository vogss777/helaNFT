import token from '@/config/index.js';
import to from 'await-to-js';
export default {
	state: {
		currentInstance: null, // 新nft合约
		erc20Instance: null, // 新nft合约
		currentPoolToken: '',
		isApprove: false,
	},
	actions: {
		// 需要地址才能请求的接口
		async initAccountMethod({ dispatch, commit, state }, data) {
			const { address, utils } = data;
			const { erc20Instance, currentInstance, currentPoolToken } = state;

			dispatch('initNftMethod', data);
		},
		// 查询NFT是否授权
		async initNftMethod({ dispatch, commit, state }, data) {
			const { address, utils } = data;
			const { currentInstance, currentPoolToken } = state;
		},
	},
	mutations: {
		/**
		 * 当前实例
		 */
		SETCURRENTINSTANCE(state, data) {
			state.currentInstance = data;
		},
		/**
		 * Erc20实例
		 */
		SETERC20LPINSTANCE(state, data) {
			state.erc20Instance = data;
		},
		/**
		 * 当前合约token
		 */
		SETCURRENTPOOLTOKEN(state, data) {
			state.currentPoolToken = data;
		},
	},
};

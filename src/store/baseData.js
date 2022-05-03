import token from '@/config/index.js';
import to from 'await-to-js';
export default {
	state: {},
	actions: {
		// 初始化合约中的方法
		initInstanceLoop({ dispatch }, data) {
			dispatch('initLoop', data);
		},
		// 池子
		initLoop({ dispatch }, data) {
			dispatch('initLoopMiner', data);
		},
		// 获取查询总质押人数
		async initLoopMiner({ commit, rootState, state }, { name, data }) {},
	},
	mutations: {},
};

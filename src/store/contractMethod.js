import token from '@/config/index.js';
import to from 'await-to-js';
import { utils } from 'ethers';
export default {
	state: {
		currentInstance: null, // 新nft合约
		currentPoolToken: '',
		isApprove: false,
		commonMethod: {
			blockTime: 0, // 最新区块时间
			currentExBNB: 0, // 当前捐赠BNB
			currentEndTime: 0, // 获取结束时间
			currentFundingGoal: 0, // 获取剩余数量
			currentDonwTime: {
				// 当前倒计时
				d: '0',
				h: '00',
				m: '00',
				s: '00',
				flag: false,
			},
		},
		userinfo: {
			unlockTime: 0, // 释放倒计时
			remainingHL: 0, // 锁定HL数量
			unlockRatio: 0, // 可提取HL数量
		},
	},
	actions: {
		// 需要地址才能请求的接口
		async initContractMethod({ dispatch, commit, state }, data) {
			const { currentInstance, currentPoolToken } = state;
			// 当前捐赠BNB
			currentInstance
				.currentExBNB()
				.then((result) => {
					const value = result ? utils.formatUnits(result.toString(), '18').toString() : 0;
					console.log('当前捐赠BNB', value);
					commit('SETCURRENTEXBNB', value);
				})
				.catch((err) => {
					commit('SETCURRENTEXBNB', 0);
				});
			// 获取结束时间
			currentInstance
				.endTime()
				.then((result) => {
					const value = result ? result.toString() : 0;
					console.log('获取结束时间', result.toString());
					commit('SETCURRENTENDTIME', +value);
				})
				.catch((err) => {
					commit('SETCURRENTENDTIME', 0);
				});
			// 获取剩余数量
			currentInstance
				.fundingGoal()
				.then((result) => {
					const total = utils.parseUnits('980000000', '18').toString();
					const value = result ? utils.formatUnits(result.toString(), '18').toString() : 0;
					// console.log('获取剩余数量', +total, +value, +total - +value);
					commit('SETFUNDINGGOAL', +total - +value);
				})
				.catch((err) => {
					commit('SETFUNDINGGOAL', 0);
				});
		},
		// 需要地址才能请求的接口
		async initAccountMethod({ dispatch, commit, state }, data) {
			const { address } = data;
			const { currentInstance, currentPoolToken } = state;
			console.log('currentInstance', currentInstance);
			// 获取用户信息
			const obj = { unlockTime: 0, remainingHL: 0 };
			currentInstance
				.buyInfo(address)
				.then((result) => {
					console.log('获取用户信息', result);
					console.log('锁定HL数量', result.remainingHL.toString());
					const value = result ? result : obj;
					commit('SETUSERINFO', value);
				})
				.catch((err) => {
					commit('SETUSERINFO', obj);
				});
			// 可提取HL数量
			currentInstance
				.getUnlockRatio(address)
				.then((result) => {
					const value = result ? result.toString() : 0;
					console.log('可提取HL数量', value);
					commit('SETUNLOCKRATIO', value);
				})
				.catch((err) => {
					console.log('可提取HL数量', err);
					commit('SETUNLOCKRATIO', 0);
				});
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
		 * 当前合约token
		 */
		SETCURRENTPOOLTOKEN(state, data) {
			state.currentPoolToken = data;
		},
		// 当前捐赠BNB
		SETCURRENTEXBNB(state, data) {
			state.commonMethod.currentExBNB = data;
		},
		// 获取结束时间
		SETCURRENTENDTIME(state, data) {
			state.commonMethod.currentEndTime = data;
		},
		// 获取剩余数量
		SETFUNDINGGOAL(state, data) {
			state.commonMethod.currentFundingGoal = data;
		},
		// 当前倒计时
		SERCURRENTDOWNTIME(state, data) {
			state.commonMethod.currentDonwTime.d = data.d;
			state.commonMethod.currentDonwTime.h = data.h;
			state.commonMethod.currentDonwTime.m = data.m;
			state.commonMethod.currentDonwTime.s = data.s;
			state.commonMethod.currentDonwTime.flag = data.flag;
		},
		// 最新区块时间
		SETBLOCKTIME(state, data) {
			state.commonMethod.blockTime = data;
		},
		// 用户信息
		SETUSERINFO(state, data) {
			state.userinfo.unlockTime = data.unlockTime;
			state.userinfo.remainingHL = data.remainingHL;
		},
		SETUNLOCKRATIO(state, data) {
			state.userinfo.unlockRatio = data;
		},
	},
};

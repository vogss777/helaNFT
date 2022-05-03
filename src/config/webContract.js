import { ethers } from 'ethers';
export default {
	/**
	 * Vue.use 时进行注册
	 * @param {Function} Vue Vue构造函数
	 */
	install(Vue) {
		Vue.prototype.ethers = ethers;
	},
};

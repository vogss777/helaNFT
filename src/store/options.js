import { scrrenTypeList, setScrrenType } from '@/assets/js/mediaWidth.js';
export default {
	state: {
		screen: {
			index: 0, // 0-xs, 1-ms, 2-md, 3-lg, 4-xl
			type: 'xs', // xs sm md lg xl
			clientWidth: document.documentElement.clientWidth || window.innerWidth, // window的宽度
			clientHeight: document.documentElement.clientHeight || window.innerHeight, // window的宽度
		},
	},
	actions: {},
	mutations: {
		/**
		 * 设置window宽度
		 */
		SETSCREENWIDTH(state, data) {
			state.screen.clientWidth = data.width;
			state.screen.clientHeight = data.height;
			state.screen.index = setScrrenType(state.screen.clientWidth);
			state.screen.type = scrrenTypeList[state.screen.index];
		},
	},
};

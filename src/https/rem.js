/* eslint-disable */
// 配置rem单位
let setRem = () => {
	// document.getElementsByTagName('html')[0].style.fontSize = document.documentElement.offsetWidth / 375 * 100 + 'px'
	(function(doc, win) {
		var docEl = doc.documentElement;
		var resizeEvt = 'orientationchange' in win ? 'orientationchange' : 'resize';
		var Timer = null;

		function recalc() {
			var clientWidth = docEl.clientWidth || win.innerWidth;
			//设计稿是750px
			var initSize = (clientWidth / 750) * 200;
			// var initSize = (clientWidth * 2) / 10;
			if (clientWidth >= 768) {
				initSize = 204.533;
			} else if (clientWidth < 320) {
				initSize = 85;
			}
			var fontSize = initSize;
			docEl.style.fontSize = fontSize + 'px';
		}
		doc.addEventListener('DOMContendLoaded', recalc, false);

		//转屏
		win.addEventListener(resizeEvt, recalc, false);

		//pageshow,缓存相关
		win.addEventListener(
			'pageshow',
			function(e) {
				if (e.persisted) {
					recalc();
				}
			},
			false
		);

		// 初始化
		recalc();
	})(document, window);
};
let config = () => {
	setRem(); // 配置rem单位
};
export default config;

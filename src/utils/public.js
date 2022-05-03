import token from '@/config/index.js';
export default {
	// 汇率计算
	install(Vue) {
		Vue.prototype.publicMethod = {
			/**
			 * 格式化时间
			 * @param {String, Date} dateTime 时间
			 * @param {String} format 格式
			 * @param {boolean} needweek 是否需要星期
			 */
			formatTime(dateTime, format = 'yyyy-MM-dd hh:mm:ss') {
				if (!dateTime) return;
				var d = new Date(dateTime);
				var o = {
					'M+': d.getMonth() + 1,
					'd+': d.getDate(),
					'h+': d.getHours(),
					'm+': d.getMinutes(),
					's+': d.getSeconds(),
					'q+': Math.floor((d.getMonth() + 3) / 3),
					S: d.getMilliseconds(),
				};
				if (/(y+)/.test(format)) {
					format = format.replace(RegExp.$1, (d.getFullYear() + '').substr(4 - RegExp.$1.length));
				}
				for (var k in o) {
					if (new RegExp('(' + k + ')').test(format)) {
						format = format.replace(
							RegExp.$1,
							RegExp.$1.length === 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length)
						);
					}
				}
				return format;
			},

			/**
			 * 数字取整
			 * @param {Number, String} num 数值
			 * @param {Number} precision 小数位数
			 */
			fixD(num, precision) {
				// num初始化
				if (num + '' === '0') {
					return '0.'.padEnd(precision + 2, '0');
				}
				if (!num) {
					return '--';
				}
				let newnum = num + '';
				let fixNum = newnum;
				// 科学计数法计算
				if (newnum.toLowerCase().indexOf('e') > -1) {
					let a = newnum.toLowerCase().split('e');
					let b = a[0];
					let c = Math.abs(parseFloat(a[1]));
					let d = '';
					let h = b.length;
					let i;
					if (a[0].split('.')[1]) {
						b = a[0].split('.')[0] + a[0].split('.')[1];
						h = a[0].split('.')[0].length;
					}
					for (i = 0; i < c - h; i++) {
						d = d + '0';
					}
					fixNum = '0.' + d + b;
				}
				// 精度格式化
				// precision初始化
				if (!precision && precision !== 0 && precision !== '0') {
					return num;
				}
				if (parseFloat(num) + '' === 'NaN') {
					return fixNum;
				}
				var fNum = (fixNum + '').split('.');
				if (!fNum[1]) {
					fixNum = parseFloat(fixNum).toFixed(precision);
				} else if (precision === 0) {
					fixNum = parseInt(fixNum, 10);
				} else if (fNum[1].length > precision) {
					if (fNum[1].indexOf('99999999999999999') > -1) {
						let s = parseFloat(fixNum).toFixed(precision + 1);
						fixNum = s.slice(0, s.length - 1);
					} else {
						fixNum = fNum[0] + '.' + fNum[1].substr(0, precision);
					}
				} else {
					fixNum = fNum[0] + '.' + fNum[1].padEnd(precision, '0');
				}
				return fixNum;
			},

			// 输入框
			fixInput(v, fix) {
				fix = fix || 10; // 精度如果不传 则按10走
				// 操作1
				// 用户行为 直接上来打个.
				// 解决方案 置换成0.
				if (v.charAt(0) === '.') {
					v = '0' + '.';
				}
				// 操作2
				// 用户行为 打多个点.
				// 解决方案 保留第二个点以前的数值
				const strArr = [...v].reduce((res, c) => {
					res[c] ? res[c]++ : (res[c] = 1);
					return res;
				}, {});
				if (strArr['.'] === 2) {
					const arr = v.split('.');
					v = arr[0] + '.' + arr[1];
				}
				// 操作3
				// 用户行为 小数点后输入超过该币种精度限制
				// 解决方案 保留该精度之前的数值
				if (v.indexOf('.') !== -1) {
					const integer = v.split('.')[0]; // 整数
					let decimal = v.split('.')[1]; // 小数
					if (decimal.length > fix) {
						decimal = decimal.substring(0, fix);
						v = integer + '.' + decimal;
					}
				}
				// 操作4
				// 用户行为 转成汉语拼音后可输入汉字字母等字符
				// 解决方案 干掉写入的文字
				for (const c in strArr) {
					if ('01234567890.'.indexOf(c) === -1) {
						v = v.split(c)[0] + (v.split(c)[1] || '');
					}
				}
				// 操作5
				// 用户行为 输入总长度超过18位 包括.
				// 解决方案 截取前18位
				if (v.length > 18) {
					v = v.substring(0, 18);
				}
				return v;
			},
			/**
			 * 获取浏览器get参数
			 * @param {String} key 获取参数的key值
			 */
			getQueryString(name) {
				const reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
				const r = window.location.search.substr(1).match(reg);
				if (r != null) {
					return unescape(r[2]);
				}
				return '';
			},
			/**
			 * 弹窗
			 */
			notify(that, text) {
				that.$notify({
					message: text,
					color: '#fff2e3',
					background: '#FF951A',
				});
			},
			/**
			 * 千分位
			 * @returns String
			 */
			handleNumber(num, digit = 100000) {
				if (!num || parseFloat(num) === 'NaN') {
					return num;
				}
				let x1 = num / digit;
				var fNum = (x1 + '').split('.');
				if (!fNum[1]) {
					x1 = this.handleN(fNum[0]);
				} else {
					x1 = this.handleN(fNum[0]) + '.' + fNum[1];
				}
				return x1 + '';
			},
			handleN(x1) {
				let x3 = '';
				for (var i = 0, len = x1.length; i < len; ++i) {
					if (i !== 0 && i % 3 === 0) {
						x3 = ',' + x3;
					}
					x3 = x1[len - i - 1] + x3;
				}
				return x3;
			},
			async switchNetwork(result) {
				if (result != token.chainId) {
					try {
						// check if the chain to connect to is installed
						await window.ethereum.request({
							method: 'wallet_switchEthereumChain',
							params: [{ chainId: token.chainId }], // chainId must be in hexadecimal numbers
						});
					} catch (error) {
						// This error code indicates that the chain has not been added to MetaMask
						// if it is not, then install it into the user MetaMask
						if (error.code === 4902) {
							try {
								await window.ethereum.request({
									method: 'wallet_addEthereumChain',
									params: [
										{
											chainId: token.chainId,
											rpcUrl: token.rpcUrl,
										},
									],
								});
							} catch (addError) {
								console.error(addError);
							}
						}
						console.error(error);
					}
				}
			},
		};
	},
};

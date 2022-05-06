<template>
	<div class="approve_components">
		<div class="approve_content">
			<div class="title">
				<span>{{ i18nText.common.walletAmount }}</span>
				<p>{{ currentWalletBalance }} BNB</p>
			</div>
			<div class="balance_box">
				<div class="balance_value" v-for="(item, index) in balanceValue" :key="index">
					<span>{{ item.text }}</span>
					<p>{{ item.value }}</p>
				</div>
			</div>
			<div class="approve_wrapper">
				<h3>{{ i18nText.common.donationAmount }}</h3>
				<div class="donate_select_box clearfix">
					<div class="select_wrap fl" @click="showFlag = !showFlag">
						<span>{{ currentValue }}</span>
						<em></em>
					</div>
					<div class="select_button fr" @click="submitDonation">
						<a href="javascript:;">{{ i18nText.common.donationText }}</a>
					</div>
				</div>
				<template>
					<van-popup v-model="showFlag" position="bottom">
						<van-picker
							show-toolbar
							:default-index="currentIndex"
							:title="i18nText.common.donationAmount"
							:confirm-button-text="i18nText.common.comfirm"
							:cancel-button-text="i18nText.common.cancel"
							:columns="columns"
							@confirm="onConfirm"
							@cancel="onCancel"
						/>
					</van-popup>
				</template>
			</div>

			<div class="lock_withdraw clearfix">
				<div v-for="(item, index) in lockValue" :class="item.className" :key="index">
					<div class="locks">
						<span>{{ item.text }}</span>
						<p>{{ item.value }}</p>
					</div>
				</div>
			</div>
			<div class="down_time_wrap">
				<div class="time_item_wrap">
					<div class="time_item fl" v-for="(item, index) in timeValue" :key="index">
						<span>{{ item.time }}</span>
						<p>{{ item.text }}</p>
					</div>
				</div>
			</div>
			<div class="withdraw_button" @click="submitWithdraw">
				<a href="javascript:;" :class="{ disabled: currentDonwTime.flag }">{{ i18nText.common.withdraw }}</a>
			</div>
		</div>
		<Bloading :isLoading="isLoading"></Bloading>
	</div>
</template>

<script>
import { getBalance } from '@/utils/balance';
import bus from '@/utils/bus.js';
export default {
	name: '',
	data() {
		return {
			showFlag: false,
			isLoading: false, // 等待加载
			// columns: ['杭州', '宁波', '温州', '绍兴', '湖州', '嘉兴', '金华', '衢州'],
			currentIndex: 9,
			currentWalletBalance: 0,
			columns: [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0, 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 1.8, 19, 2],
		};
	},
	watch: {
		fullAccount: {
			// $route可以用引号，也可以不用引号
			handler(to, from) {
				this.getWalletBalance();
			},
			deep: true, // 深度监听
			immediate: true, // 第一次初始化渲染就可以监听到
		},
	},
	mounted() {},
	computed: {
		// 合约实例
		currentInstance() {
			return this.$store.state.contractMethod.currentInstance;
		},
		// 合约实例
		currentPoolToken() {
			return this.$store.state.contractMethod.currentPoolToken;
		},
		contractMethod() {
			return this.$store.state.contractMethod;
		},
		commonMethod() {
			return this.contractMethod.commonMethod;
		},
		currentDonwTime() {
			return this.commonMethod.currentDonwTime;
		},
		userinfo() {
			return this.contractMethod.userinfo;
		},
		// 完整地址
		fullAccount() {
			return this.$store.state.instance.fullAccount;
		},
		i18nText() {
			return {
				common: this.$t('common'),
			};
		},
		currentValue() {
			return this.columns[this.currentIndex];
		},
		balanceValue() {
			return [
				// { text: this.i18nText.common.hlHolder, value: '0.00HL' },
				{ text: this.i18nText.common.convertible, value: '1 BNB = 100000HL' },
			];
		},
		lockValue() {
			return [
				{ text: `${this.i18nText.common.lockText}HL`, value: this.userinfo.remainingHL, className: 'lock_box fl' },
				{
					text: `${this.i18nText.common.canWithdraw}HL`,
					value: this.userinfo.unlockRatio,
					className: 'withdraw_box fr',
				},
			];
		},
		timeValue() {
			return [
				{ text: 'D', time: this.currentDonwTime.d },
				{ text: 'H', time: this.currentDonwTime.m },
				{ text: 'M', time: this.currentDonwTime.m },
				{ text: 'S', time: this.currentDonwTime.s },
			];
		},
	},
	methods: {
		async getWalletBalance() {
			this.currentWalletBalance = await getBalance(this);
		},
		// 等待
		sendWait() {
			this.$toast('Wait', {
				timeout: 4000,
			});
		},
		onConfirm(value, index) {
			// console.log(`当前值：${value}, 当前索引：${index}`);
			this.currentIndex = index;
			this.showFlag = false;
		},
		onCancel() {
			// console.log('取消');
			this.showFlag = false;
		},
		errorText(err) {
			this.isLoading = false;
			console.log('err', err);
			if (err && err.message) {
				let errObj = null;
				try {
					errObj = JSON.parse(JSON.stringify(err));
				} catch {
					errObj = null;
				}
				if (errObj.data && errObj.data.message) {
					return this.$toast.error(errObj.data.message, {
						timeout: 2000,
					});
				}
				if (errObj.error && errObj.error.message) {
					return this.$toast.error(errObj.error.message, {
						timeout: 2000,
					});
				}
				return this.$toast.error(err.message, {
					timeout: 2000,
				});
			}
			if (err && err.data) {
				return this.$toast.error(err.data.message, {
					timeout: 2000,
				});
			}
			this.$toast.error(this.i18nText.common.fail, {
				timeout: 2000,
			});
		},
		async submitDonation() {
			this.isLoading = true;
			const walletBalance = await getBalance(this);
			console.log('+totalValue', totalValue);
			if (this.currentValue > walletBalance) {
				this.$toast.error(this.i18nText.common.notMoney, {
					timeout: 4000,
				});
				this.isLoading = false;
				return;
			}
			const totalValue = this.ethers.utils.parseUnits(this.currentValue.toString(), '18') + '';
			console.log('+totalValue', totalValue);
			this.currentInstance
				.Buy({ value: totalValue })
				.then((result) => {
					this.sendWait();
					result
						.wait()
						.then((res) => {
							// console.log('加入购买', res);
							bus.$emit('refreshDataVam');
							this.$toast(this.i18nText.common.success, {
								timeout: 2000,
							});
							this.isLoading = false;
						})
						.catch((err) => {
							console.log('失败err1', err);
							this.isLoading = false;
							this.$toast.error(this.i18nText.common.fail, {
								timeout: 2000,
							});
						});
				})
				.catch((err) => {
					this.errorText(err);
				});
		},
		submitWithdraw() {
			if (this.currentDonwTime.flag) {
				return;
			}
			this.currentInstance
				.withdrawUnlock()
				.then((result) => {
					this.sendWait();
					this.isLoading = false;
					result
						.wait()
						.then((res) => {
							// console.log('加入购买', res);
							bus.$emit('refreshDataVam');
							this.$toast(this.i18nText.common.success, {
								timeout: 2000,
							});
							this.isLoading = false;
						})
						.catch((err) => {
							console.log('失败err1', err);
							this.isLoading = false;
							this.$toast.error(this.i18nText.common.fail, {
								timeout: 2000,
							});
						});
				})
				.catch((err) => {
					this.errorText(err);
				});
		},
	},
};
</script>

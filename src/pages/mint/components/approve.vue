<template>
	<div class="approve_components">
		<div class="approve_content">
			<div class="title">
				<span>钱包金额</span>
				<p>123.00BNB</p>
			</div>
			<div class="balance_box">
				<div class="balance_value" v-for="(item, index) in balanceValue" :key="index">
					<span>{{ item.text }}</span>
					<p>{{ item.value }}</p>
				</div>
			</div>
			<div class="approve_wrapper">
				<h3>捐赠金额</h3>
				<div class="donate_select_box clearfix">
					<div class="select_wrap fl" @click="showFlag = !showFlag">
						<span>{{ currentValue }}</span>
						<em></em>
					</div>
					<div class="select_button fr">
						<a href="javascript:;">捐赠</a>
					</div>
				</div>
				<template>
					<van-popup v-model="showFlag" position="bottom">
						<van-picker
							title="标题"
							show-toolbar
							:default-index="currentIndex"
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
			<div class="withdraw_button">
				<a href="javascript:;">提取</a>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: '',
	data() {
		return {
			showFlag: false,
			// columns: ['杭州', '宁波', '温州', '绍兴', '湖州', '嘉兴', '金华', '衢州'],
			currentIndex: 9,
			columns: [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0, 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 1.8, 19, 2],
		};
	},
	computed: {
		currentValue() {
			return this.columns[this.currentIndex];
		},
		balanceValue() {
			return [
				{ text: 'HL持仓', value: '0.00HL' },
				{ text: '兑换比例', value: '1 BNB = 100000HL' },
			];
		},
		lockValue() {
			return [
				{ text: '锁定XYC', value: '100000', className: 'lock_box fl' },
				{ text: '可提现XYC', value: '100', className: 'withdraw_box fr' },
			];
		},
		timeValue() {
			return [
				{ text: 'D', time: '7' },
				{ text: 'H', time: '12' },
				{ text: 'M', time: '45' },
				{ text: 'S', time: '45' },
			];
		},
	},
	methods: {
		onConfirm(value, index) {
			console.log(`当前值：${value}, 当前索引：${index}`);
			this.currentIndex = index;
			this.showFlag = false;
		},
		onCancel() {
			console.log('取消');
			this.showFlag = false;
		},
	},
};
</script>

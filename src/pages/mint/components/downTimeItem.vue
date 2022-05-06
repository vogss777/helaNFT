<template>
	<p v-if="!isDownTime" style="display: none"></p>
</template>

<script>
export default {
	name: '',
	data() {
		return {
			flag: true,
			donwTime: {},
			timer: null,
		};
	},
	computed: {
		contractMethod() {
			return this.$store.state.contractMethod;
		},
		commonMethod() {
			return this.contractMethod.commonMethod;
		},
		blockTime() {
			return this.commonMethod.blockTime;
		},
		currentEndTime() {
			return this.commonMethod.currentEndTime;
		},
		isDownTime() {
			console.log('this.currentEndTime', this.currentEndTime);
			console.log('this.blockTime', this.blockTime);
			if (this.currentEndTime && this.blockTime && this.flag) {
				this.initTime();
				return true;
			}
			return false;
		},
	},
	methods: {
		initTime() {
			this.flag = false;
			// let donwTime = this.currentEndTime * 1000 - this.blockTime * 1000;
			this.originTime = this.currentEndTime - this.blockTime;
			console.log('结束时间', this.publicMethod.formatTime(this.currentEndTime * 1000));
			console.log('区块时间', this.publicMethod.formatTime(this.blockTime * 1000));
			this.showtime(); // 传递秒数
		},
		addZero(i) {
			if (i < 10) {
				i = '0' + i;
			}
			return i;
		},
		showtime() {
			if (this.timer) {
				// 调用之前，先清理，防止一直生成对象
				clearTimeout(this.timer);
				this.timer = null;
			}
			console.log('this.timer', this.timer);
			// var nowtime = new Date();
			// var endtime = this.currentEndTime * 1000;
			console.log('nowtime', this.originTime);
			var d = Math.floor(this.originTime / (24 * 60 * 60));
			var h = Math.floor((this.originTime / (60 * 60)) % 24);
			var m = Math.floor((this.originTime / 60) % 60);
			var s = Math.floor(this.originTime % 60);
			h = this.addZero(h);
			m = this.addZero(m);
			s = this.addZero(s);
			console.log('da', '' + d + ' - ' + h + ':' + m + ':' + s);
			// this.donwTime = '' + d + ' - ' + h + ':' + m + ':' + s;
			this.$store.commit('SERCURRENTDOWNTIME', { d, h, m, s, flag: true });
			this.originTime -= 1;
			if (this.originTime <= 0) {
				// this.donwTime = '--';
				this.originTime = 0;
				this.$store.commit('SERCURRENTDOWNTIME', { d: '0', h: '00', m: '00', s: '00', flag: false });
				return;
			}
			if (!this.timer) {
				this.timer = setTimeout(this.showtime, 1000);
			}
		},
	},
	beforeDestroy() {
		console.log('清除定时器', this.timer);
		if (this.timer) {
			clearTimeout(this.timer);
			this.timer = null;
		}
	},
};
</script>

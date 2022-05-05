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
			let donwTime = this.currentEndTime * 1000 - this.blockTime * 1000;
			this.showtime(donwTime); // 传递秒数
		},
		addZero(i) {
			if (i < 10) {
				i = '0' + i;
			}
			return i;
		},
		showtime() {
			var nowtime = new Date();
			var endtime = this.currentEndTime * 1000;
			var lefttime = parseInt((endtime - nowtime.getTime()) / 1000);
			var d = parseInt(lefttime / (24 * 60 * 60));
			var h = parseInt((lefttime / (60 * 60)) % 24);
			var m = parseInt((lefttime / 60) % 60);
			var s = parseInt(lefttime % 60);
			h = this.addZero(h);
			m = this.addZero(m);
			s = this.addZero(s);
			// this.donwTime = '' + d + ' - ' + h + ':' + m + ':' + s;
			this.$store.commit('SERCURRENTDOWNTIME', { d, h, m, s, flag: true });
			if (lefttime <= 0) {
				// this.donwTime = '--';
				this.$store.commit('SERCURRENTDOWNTIME', { d: '0', h: '00', m: '00', s: '00', flag: false });
				return;
			}
			setTimeout(this.showtime, 1000);
		},
	},
};
</script>

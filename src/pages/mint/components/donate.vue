<template>
	<div class="donate_content">
		<h2>当前捐赠BNB</h2>
		<div class="donate_value">
			<img src="@/assets/images/circle.png" alt="" />
			<div class="d_v">
				<span>844,64</span>
				<p>BNB</p>
			</div>
		</div>
		<div class="donate_time">
			<div class="times" v-for="(item, index) in timeList" :key="index">
				<span>{{ item.value }}</span>
				<p>{{ item.time }}</p>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: '',
	data() {
		return {};
	},
	computed: {
		timeList() {
			return [
				{
					value: '24',
					time: 'Days',
				},
				{
					value: '12',
					time: 'Hours',
				},
				{
					value: '59',
					time: 'Minutes',
				},
				{
					value: '59',
					time: 'Seconds',
				},
			];
		},
	},
	methods: {},
};
</script>

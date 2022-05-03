<template>
	<div class="developing_box common_box">
		<div class="common_title">发展路线</div>
		<div class="developing_wrap">
			<div class="develop_process" v-for="(item, index) in processList" :key="index">
				<div class="line">
					<em></em>
				</div>
				<span>{{ item.time }}</span>
				<div class="txt" v-html="item.text"></div>
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
		processList() {
			return [
				{
					time: '2021 Q4',
					text: `
						<p>HL（赫拉基金会）成立</p>
					`,
					className: 'left',
				},
				{
					time: '2021 Q4',
					text: `
						<p>HL联合技术极客构建HL业务基础设施</p>
						<p>HL启动产品开发节奏，并制定开发时间表</p>
					`,
					className: 'left',
				},
				{
					time: '2021 Q4',
					text: `
						<p>首款 DAPP将推出</p>
						<p>正式打开 NFT的拍卖交易等功能</p>
					`,
					className: 'left',
				},
				{
					time: '2021 Q4',
					text: `
						<p>PC端、WE端、移动端正式上线</p>
						<p>逐渐丰富HL的业务生态系统</p>
					`,
					className: 'left',
				},
				{
					time: '2021 Q4',
					text: `
						<p>产品更新UGC功能</p>
						<p>开始用户创建、投票、NFT化和商业化</p>
					`,
					className: 'left',
				},
				{
					time: '2021 Q4',
					text: `
						<p>用户端场景优化</p>
						<p>界面UI升级迭代</p>
					`,
					className: 'left',
				},
				{
					time: '2021 Q4',
					text: `
						<p>HL 游戏上线</p>
						<p>HL元宇宙土地开放拍卖</p>
						<p>实现NFT高效流通，加入元宇宙IP NFT</p>
					`,
					className: 'left',
				},
			];
		},
	},
	methods: {},
};
</script>

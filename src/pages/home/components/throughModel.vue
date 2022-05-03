<template>
	<div class="through_model common_box">
		<div class="common_title">通证模型</div>
		<div class="hl_token_wrap">
			<div class="hl_title clearfix">
				<img src="@/assets/images/h_img.png" alt="" />
				<p class="fl">HL TOKEN</p>
				<span class="fr">总量：999亿</span>
			</div>
			<div class="hl_content clearfix">
				<div class="point_box fl" :class="item.className" v-for="(item, index) in pointList" :key="index">
					<span>{{ item.title }}</span>
					<p>{{ item.value }}</p>
				</div>
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
		pointList() {
			return [
				{
					title: '买卖滑点',
					value: '9%',
					className: 'left',
				},
				{
					title: '回流资金池',
					value: '9%',
					className: 'right',
				},
				{
					title: '持币分红',
					value: '9%',
					className: 'left',
				},
				{
					title: '营销资金',
					value: '9%',
					className: 'right',
				},
			];
		},
	},
	methods: {},
};
</script>

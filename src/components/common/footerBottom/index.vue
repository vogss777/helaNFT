<template>
	<div class="footer_bottom">
		<div class="footer">
			<!-- <span>Gmail: eaglegamedao@gmail.com</span> -->
			<div class="foot_relate">
				<div class="relate_box clearfix">
					<!-- <a :href="item.url" :target="item.target" v-for="(item, index) in relateList" :key="index">
						<img :src="item.img" alt="" />
					</a> -->
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'footerBottom',
	data() {
		return {};
	},
	computed: {
		/**
		 * 获取当前屏幕尺寸大小
		 * return Object
		 * Object.type     // 对应xs, ms, md, lg, xl
		 * Object.index    // 对应0-xs, 1-ms, 2-md, 3-lg, 4-xl
		 * Object.clientWidth    // 宽度
		 */
		// screenData() {
		// 	return this.$store.state.screen;
		// },
	},
};
</script>

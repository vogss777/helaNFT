<template>
	<div class="header_small header_right" :class="{ on: firstShow }">
		<!-- <div class="nav_wrap_box">
			<div class="nav_wrap" @click="switchNav">
				<div class="span_box">
					<span v-for="(item, index) in 3" :key="index"></span>
				</div>
			</div>
		</div> -->
		<collapse-transition>
			<div class="navs_list_wrap" v-show="firstShow">
				<BaseNav :showFlag="showFlag" :type="'small'" @callback="switchNav" />
			</div>
		</collapse-transition>
	</div>
</template>
<script>
import BaseNav from './baseNav';
import { CollapseTransition } from '@ivanv/vue-collapse-transition';
export default {
	name: 'smallNav',
	props: {
		// 头部下拉flag
		showFlag: {
			type: Boolean,
			default: false,
		},
	},
	components: {
		BaseNav,
		CollapseTransition,
	},
	data() {
		return {
			firstShow: false, // 一级导航
		};
	},
	computed: {
		/**
		 * 获取当前屏幕尺寸大小
		 * return Object
		 * Object.type     // 对应xs, ms, md, lg, xl
		 * Object.index    // 对应0-xs, 1-ms, 2-md, 3-lg, 4-xl
		 * Object.clientWidth    // 宽度
		 */
		screenData() {
			return this.$store.state.options.screen;
		},
	},
	methods: {
		/**
		 * 切换导航
		 */
		switchNav() {
			this.firstShow = !this.firstShow;
		},
	},
};
</script>

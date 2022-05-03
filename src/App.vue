<template>
	<div id="app">
		<router-view></router-view>
	</div>
</template>
<script>
export default {
	name: 'app',
	data() {
		return {};
	},
	mounted() {
		this.getScrrenWidth();
	},
	methods: {
		/**
		 * getScrrenWidth 获取页面宽度
		 */
		getScrrenWidth() {
			this.$store.commit('SETSCREENWIDTH', {
				width: document.documentElement.clientWidth || window.innerWidth,
				height: document.documentElement.clientHeight || window.innerHeight,
			});
			window.onresize = () => {
				return (() => {
					let currentWidth = {
						width: document.documentElement.clientWidth || window.innerWidth,
						height: document.documentElement.clientHeight || window.innerHeight,
					};
					this.$store.commit('SETSCREENWIDTH', currentWidth);
				})();
			};
		},
	},
};
</script>

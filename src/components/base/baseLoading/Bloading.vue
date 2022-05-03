<template>
	<transition :enter-active-class="'animated fadeIn'" :leave-active-class="'animated fadeOut'">
		<div class="comLoading" v-if="isLoading">
			<div class="loading">
				<div class="rect rect1"></div>
				<div class="rect rect2"></div>
				<div class="rect rect3"></div>
				<div class="rect rect4"></div>
				<div class="rect rect5"></div>
			</div>
		</div>
	</transition>
</template>
<script>
export default {
	name: 'loading',
	props: {
		isLoading: {
			type: Boolean,
			default: false,
		},
	},
};
</script>

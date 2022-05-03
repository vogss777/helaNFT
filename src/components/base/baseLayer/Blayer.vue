<template>
	<div>
		<transition :enter-active-class="'animated fadeIn'" :leave-active-class="'animated fadeOut'">
			<div class="common_layer" v-if="flag">
				<div class="content_wrap">
					<div class="vertical_content">
						<div class="content_mark" @click="closeConnect"></div>
						<div class="fime_layer" :class="className">
							<slot></slot>
						</div>
					</div>
				</div>
			</div>
		</transition>
	</div>
</template>

<script>
import bus from '@/utils/bus.js';
export default {
	name: '',
	props: {
		flag: {
			type: Boolean,
			default: false,
		},
		className: {
			type: String,
			default: '',
		},
	},
	data() {
		return {};
	},
	mounted() {
		bus.$on('closeConnect', this.closeConnect);
	},
	methods: {
		closeConnect() {
			this.$emit('callback');
		},
	},
};
</script>

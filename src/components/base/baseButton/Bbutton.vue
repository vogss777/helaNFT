<template>
	<div class="base_components_button_layout" :class="[{ disabled: disabled }, type]" @click="callback">
		<a :href="href" :target="target"><slot></slot></a>
	</div>
</template>
<script>
export default {
	props: {
		type: {
			type: String,
			default: '',
		},
		disabled: {
			type: Boolean,
			default: false,
		},
		href: {
			type: String,
			default: 'javascript:;',
		},
		target: {
			type: String,
			default: '_self',
		},
	},
	methods: {
		callback() {
			if (this.disabled) return;
			this.$emit('callback');
		},
	},
};
</script>

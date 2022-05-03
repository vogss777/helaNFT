<template>
	<component :is="renderComponent" v-bind="$attrs" v-on="$listeners"></component>
</template>

<script>
import Vue from 'vue';
export default {
	name: 'common',
	props: {
		path: {
			type: String,
			required: true,
			default: () => null,
		},
	},
	computed: {
		renderComponent() {
			if (this.path) {
				let render;
				render = require(`@/${this.path}.vue`).default;
				return render;
			} else {
				return null;
			}
		},
	},
};
</script>

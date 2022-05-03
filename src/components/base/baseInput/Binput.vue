<template>
	<div class="base_components_input_layout">
		<div class="input_wrap">
			<input
				:type="text"
				ref="input"
				:value="currentValue"
				:placeholder="placeholder"
				:disabled="disabled"
				@input="handlerInput"
			/>
		</div>
	</div>
</template>

<script>
export default {
	name: 'inputlsit',
	props: {
		text: String,
		placeholder: String,
		inputName: String,
		disabled: {
			type: Boolean,
			default: false,
		},
		value: {
			type: [String, Number],
			default: '',
		},
	},
	watch: {
		value(newVal) {
			// console.log('newVal', newVal);
			this.setCurrentValue(newVal);
		},
	},
	data() {
		return { currentValue: this.value };
	},
	methods: {
		setCurrentValue(value) {
			if (value === this.currentValue) return;
			this.currentValue = value;
			this.$forceUpdate();
		},
		handlerInput(event) {
			let value = event.target.value;
			const reg = /^[0-9]*$/g;
			if (this.inputName === 'mintPass') {
				value = value.replace(/[^0-9]+/, '');
			}
			this.setCurrentValue(value);
			this.$emit('input', this.currentValue);
			this.$forceUpdate();
		},
	},
};
</script>

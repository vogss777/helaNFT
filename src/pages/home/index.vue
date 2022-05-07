<template>
	<div class="inner_home">
		<CommonComponent path="pages/home/components/bannerTop"></CommonComponent>
		<CommonComponent path="pages/home/components/contractAddress"></CommonComponent>
		<CommonComponent path="pages/home/components/explainText"></CommonComponent>
		<CommonComponent path="pages/home/components/videoItem"></CommonComponent>
		<CommonComponent path="pages/home/components/getNft"></CommonComponent>
		<CommonComponent path="pages/home/components/throughModel"></CommonComponent>
		<CommonComponent path="pages/home/components/developing"></CommonComponent>
		<CommonComponent path="pages/home/components/partners"></CommonComponent>
	</div>
</template>

<script>
export default {
	name: '',
	data() {
		return {};
	},
	computed: {
		i18nText() {
			return {
				common: this.$t('common'),
			};
		},
	},
	methods: {
	},
};
</script>

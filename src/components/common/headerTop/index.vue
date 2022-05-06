<template>
	<div class="header_top">
		<div class="header_content clearfix" :class="{ on: firstShow }">
			<div class="nav_wrap_box head_item">
				<div class="nav_wrap" @click="switchNav">
					<div class="span_box">
						<span v-for="(item, index) in 3" :key="index"></span>
					</div>
				</div>
			</div>
			<div class="small_connet head_item">
				<connectWallet></connectWallet>
			</div>
			<a href="javascript:;" @click="changeLang" class="langs head_item">
				<img src="@/assets/images/zh.png" v-if="langId === 'en_US'" alt="" />
				<img src="@/assets/images/en.png" v-if="langId === 'zh_CN'" alt="" />
			</a>
		</div>
		<collapse-transition>
			<div class="navs_list_wrap" v-show="firstShow">
				<div class="navs_list">
					<div class="navs">
						<router-link to="/" @click.native="firstShow = false" class="tit">{{ i18nText.common.home }}</router-link>
					</div>
					<div class="navs">
						<router-link to="/fundraising" @click.native="firstShow = false" class="tit">{{ i18nText.common.mint }}</router-link>
					</div>
				</div>
			</div>
		</collapse-transition>
	</div>
</template>

<script>
import { changeLanguage } from '@/locale';
import connectWallet from '@/components/common/connectWallet/index.vue';
import { CollapseTransition } from '@ivanv/vue-collapse-transition';
export default {
	name: 'headerTop',
	components: {
		connectWallet,
		CollapseTransition,
	},
	data() {
		return {
			showFlag: false, // 显示导航
			showLimit: 0, // 显示的阈值
			langId: localStorage.getItem('lang'),
			firstShow: false, // 一级导航
		};
	},
	computed: {
		// 当前语言
		currentLangText() {
			return this.langId === 'en_US' ? '简体中文' : 'ENGLISH';
		},
		i18nText() {
			return {
				common: this.$t('common'),
			};
		},
	},
	methods: {
		/**
		 * 切换导航
		 */
		switchNav() {
			this.firstShow = !this.firstShow;
		},
		changeLang() {
			this.langId = this.langId === 'en_US' ? 'zh_CN' : 'en_US';
			changeLanguage(this.langId);
			// this.$store.commit('SETCHNAGELANG', this.langId);
		},
	},
};
</script>

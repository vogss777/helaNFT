<template>
	<div class="navs_list clearfix" :class="{ dark: showFlag }">
		<div class="navs clarfix">
			<!-- <div class="language_list clarfix" :class="{ active: langFlag }">
				<h3 v-if="type === 'big'" @click="showLang">{{ langList[currentLangText].name }}</h3>
				<div class="lang_box" v-show="langFlag || type === 'small'">
					<span
						class="lang"
						v-for="(item, index) in langList"
						:key="item.id"
						@click="changeLang(index)"
						:class="{ show: currentLangText === index }"
					>
						<p>{{ item.name }}</p>
						{{ type === 'small' ? item.bias : '' }}
					</span>
				</div>
			</div> -->
			<div class="buy_wrap" v-if="screenData.index > 1">
				<connectWallet></connectWallet>
			</div>
		</div>
	</div>
</template>
<script>
import { getCookie, setCookie } from '@/utils/cookie';
import connectWallet from '@/components/common/connectWallet/index.vue';
export default {
	name: 'BaseNav',
	props: {
		// 大屏, 小屏
		type: {
			type: String,
			default: 'small',
		},
		// 头部下拉flag
		showFlag: {
			type: Boolean,
			default: false,
		},
	},
	components: {
		connectWallet,
	},
	data() {
		return {
			secondShow: false, // 二级导航
			langFlag: false, // 显示语言
			langId: getCookie('lang'), // 国际化id
			currentLangText: 0,
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
		/**
		 * 国际化
		 */
		i18nText() {
			return {
				navTitle: this.$t('navTitle'),
			};
		},
		/**
		 * 导航栏
		 */
		// navList() {
		// 	return [
		// 		{ path: '/index', text: this.i18nText.navTitle.home, isRouter: true },
		// 		{ path: '/nftMine', text: this.i18nText.navTitle.nftMine, isRouter: true },
		// 		{ path: '/lpMine', text: this.i18nText.navTitle.lpMine, isRouter: true },
		// 		{
		// 			path: 'https://eaglegame.gitbook.io/eaglegame-white-paper/',
		// 			text: this.i18nText.navTitle.document,
		// 			isRouter: false,
		// 		},
		// 		{ path: '/mint', text: this.i18nText.navTitle.mint, isRouter: true },
		// 	];
		// },
		// 切换语言列表
		// EN/中文/日本語/Español/русский
		langList() {
			return [
				{ id: 'en_US', name: 'Main Market', bias: '/' },
				{ id: 'zh_CN', name: 'Innovation Market' },
			];
		},
	},
	mounted() {
		window.addEventListener('mouseup', this.setHide);
	},
	destroyed() {
		window.removeEventListener('mouseup', this.setHide);
	},
	methods: {
		// 点击空白消息
		setHide(e) {
			const _con = document.querySelector('.lang_box');
			if (_con && !_con.contains(e.target)) {
				this.langFlag = false;
			}
		},
		// 点击消失
		navHide(e) {
			if (this.type === 'small') {
				this.$emit('callback', false);
			}
		},
		// 显示语言
		showLang() {
			this.langFlag = !this.langFlag;
		},
		// 切换语言
		changeLang(index) {
			this.currentLangText = index;
			this.langFlag = false;
		},
	},
};
</script>

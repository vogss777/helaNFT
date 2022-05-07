<template>
	<div class="header_top">
		<div class="header_content clearfix" :class="{ on: firstShow }">
			<div class="nav_text" v-if="routerName === 'myNft'">{{ i18nText.common.myNft }}</div>
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
			<div class="lang_list head_item" v-on-clickaway="away">
				<a href="javascript:;" class="langs" @click="langFlag = !langFlag">
					<img :src="currentLangText" alt="" />
				</a>
				<transition :enter-active-class="'animated fadeIn'" :leave-active-class="'animated fadeOut'">
					<div class="lang_item" v-if="langFlag">
						<a href="javascript:;" v-for="(item, key) in langsList" :key="key" @click="changeLang(item.text)">
							<img :src="item.img" alt=""
						/></a>
					</div>
				</transition>
			</div>
		</div>
		<collapse-transition>
			<div class="navs_list_wrap" v-show="firstShow">
				<div class="navs_list">
					<div class="navs">
						<router-link to="/" @click.native="firstShow = false" class="tit">{{ i18nText.common.home }}</router-link>
					</div>
					<div class="navs">
						<router-link to="/fundraising" @click.native="firstShow = false" class="tit">{{
							i18nText.common.mint
						}}</router-link>
					</div>
					<div class="navs">
						<router-link to="/myNft" @click.native="firstShow = false" class="tit">{{
							i18nText.common.myNft
						}}</router-link>
					</div>
					<div class="navs">
						<a href="/static/HL White Paper.pdf" target="_blank" @click="firstShow = false" class="tit">{{
							i18nText.common.whiteBook
						}}</a>
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
import { directive as onClickaway } from 'vue-clickaway';
export default {
	name: 'headerTop',
	components: {
		connectWallet,
		CollapseTransition,
	},
	directives: {
		onClickaway: onClickaway,
	},
	data() {
		return {
			showFlag: false, // 显示导航
			showLimit: 0, // 显示的阈值
			langId: localStorage.getItem('lang'),
			firstShow: false, // 一级导航
			langFlag: false,
			routerName: '',
		};
	},
	watch: {
		$route: {
			// $route可以用引号，也可以不用引号
			handler(to, from) {
				this.routerName = to.name;
				console.log('routerName', this.routerName);
			},
			deep: true, // 深度监听
			immediate: true, // 第一次初始化渲染就可以监听到
		},
	},
	computed: {
		// 当前语言
		currentLangText() {
			return this.langsList[this.langId].img;
		},
		langsList() {
			return {
				zh_CN: {
					img: require('@/assets/images/zh.png'),
					text: 'zh_CN',
				},
				en_US: {
					img: require('@/assets/images/en.png'),
					text: 'en_US',
				},
				ja_JP: {
					img: require('@/assets/images/ja.png'),
					text: 'ja_JP',
				},
				ko_KR: {
					img: require('@/assets/images/ko.png'),
					text: 'ko_KR',
				},
				de_DE: {
					img: require('@/assets/images/de.png'),
					text: 'de_DE',
				},
			};
		},
		i18nText() {
			return {
				common: this.$t('common'),
			};
		},
	},
	methods: {
		away() {
			this.langFlag = false;
		},
		/**
		 * 切换导航
		 */
		switchNav() {
			this.firstShow = !this.firstShow;
		},
		changeLang(name) {
			this.langId = name;
			this.langFlag = false;
			changeLanguage(this.langId);
			// this.$store.commit('SETCHNAGELANG', this.langId);
		},
	},
};
</script>

import Vue from 'vue';
import VueI18n from 'vue-i18n';
import en from './en';
import zh from './zh';
Vue.use(VueI18n, {
	i18n: function (path, options) {
		let value = i18n.t(path, options);
		if (value !== null && value !== undefined) {
			return value;
		}
		return '';
	},
});
!localStorage.getItem('lang') && localStorage.setItem('lang', 'en_US');
let lang = localStorage.getItem('lang');
export const i18n = new VueI18n({
	locale: lang,
	messages: {
		en_US: {
			...en,
		},
		zh_CN: {
			...zh,
		},
	},
});

export function changeLanguage(lang) {
	i18n.locale = lang;
	localStorage.setItem('lang', lang);
}

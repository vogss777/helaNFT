import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import 'animate.css';
import '@/assets/css/index.styl';
import axios from '@/https/index.js';
import { i18n } from '@/locale';
import publicMethod from './utils/public';
import { registerComponent } from '@/components/base/index'; // 注册全局组件
import VueFullpage from 'vue-fullpage.js';
import Toast from 'vue-toastification';
import 'vue-toastification/dist/index.css';
import VueClipboard from 'vue-clipboard2';
import webContract from './config/webContract';
import VueSocialSharing from 'vue-social-sharing';
import 'swiper/dist/css/swiper.css';
import VueAwesomeSwiper from 'vue-awesome-swiper';
// 注册全局插件
import CommonComponent from './components/CommonComponent/index';
Vue.use(VueAwesomeSwiper /* { default options with global component } */);
Vue.use(VueSocialSharing);
Vue.use(Toast, {});
Vue.use(VueFullpage);
Vue.use(axios);
Vue.use(publicMethod);
Vue.use(VueClipboard);
Vue.use(webContract);
registerComponent();
Vue.component('CommonComponent', CommonComponent);
Vue.config.productionTip = false;
new Vue({
	i18n,
	router,
	store,
	render: (h) => h(App),
}).$mount('#app');

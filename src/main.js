import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import 'animate.css';
import '@/assets/css/index.styl';
import axios from '@/https/index.js';
import rem from '@/https/rem.js';
import { i18n } from '@/locale';
import publicMethod from './utils/public';
import { registerComponent } from '@/components/base/index'; // 注册全局组件
import Toast from 'vue-toastification';
import 'vue-toastification/dist/index.css';
import VueClipboard from 'vue-clipboard2';
import webContract from './config/webContract';
import { Picker, Popup } from 'vant';
import 'vant/lib/picker/style';
import 'vant/lib/popup/style';

// 注册全局插件
import CommonComponent from './components/CommonComponent/index';
Vue.use(Toast, {});
Vue.use(axios);
Vue.use(Picker);
Vue.use(Popup);
Vue.use(publicMethod);
Vue.use(VueClipboard);
Vue.use(webContract);
registerComponent();
Vue.component('CommonComponent', CommonComponent);
Vue.config.productionTip = false;
rem();
new Vue({
	i18n,
	router,
	store,
	render: (h) => h(App),
}).$mount('#app');

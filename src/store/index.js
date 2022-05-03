import Vue from 'vue';
import Vuex from 'vuex';
import options from './options';
import instance from './instance';
import contractMethod from './contractMethod';
import baseData from './baseData';

Vue.use(Vuex);
export default new Vuex.Store({
	modules: {
		options,
		instance,
		baseData,
		contractMethod,
	},
});

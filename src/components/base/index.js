import Vue from 'vue';
// ------------- 获取文件名作为全局组件名 ----------- //
const getFileName = (str) => {
	return str.replace(/(.*\/)*([^.]+).*/gi, '$2');
};
// ------------- 注册全局组件 ----------- //
export function registerComponent() {
	// for (const key in componentObj) {
	// 	app.component(key, componentObj[key]);
	// }
	const requireComponent = require.context(
		// 其组件目录的相对路径
		'./',
		// 是否查询其子目录
		true,
		// 匹配大写开头组件文件名的正则表达式
		/[A-Z]\w+\.(vue)$/ // 大写开头, "./baseButton/Bbutton.vue"
	);
	requireComponent.keys().forEach((fileName) => {
		// 获取组件配置
		const componentConfig = requireComponent(fileName);
		// 获取组件的 PascalCase 命名, 如Bbutton
		const componentName = getFileName(fileName);
		// 全局注册组件
		// 如果这个组件选项是通过 `export default` 导出的，
		// 那么就会优先使用 `.default`，
		// 否则回退到使用模块的根。
		Vue.component(componentName, componentConfig.default || componentConfig);
	});
}

/** 
	import Bbutton from './baseButton/Bbutton.vue';
	import Bswitch from './baseSwitch/Bswitch.vue';
	const componentObj = {
		Bbutton,
		Bswitch,
	};
	export function registerComponent(app: any): void {
		for (const key in componentObj) {
			app.component(key, componentObj[key]);
		}
	}
*/

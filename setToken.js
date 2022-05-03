'use strict';
/**
 * process.env.npm_config_argv => 返回 {"remain":[],"cooked":["run","dev"],"original":["run","dev"]} | {"remain":[],"cooked":["run","build"],"original":["run","build"]}
 * runType => 执行哪个环境
 */
const setToken = function () {
	const fs = require('fs');
	const development = 'serve';
	const production = 'pro';
	const path = require('path');
	const hostUrl = path.resolve(__dirname, './src/config/index.js');
	const configArgv = process.env.npm_config_argv;
	const params = process.argv.splice(2);
	let runType = configArgv ? JSON.parse(configArgv).cooked[1] : '';
	// 如果是alpha不缩则不处理
	if (params.indexOf('alphaex') !== -1 || params.indexOf('alphaotc') !== -1) return;
	// 如果是启动 => npm run dev, 如果传参是dev => node setToken.js dev
	let type = runType ? (runType === development ? development : production) : params[0];
	if (type === 'serve') {
		type = 'test';
	} else {
		if (runType === 'test') {
			type = 'test';
		} else {
			// console.error('ERRL: 执行开发环境：node setToken.js serve');
			type = 'main';
		}
	}
	console.log(`执行${type}环境`, runType);
	let routerContent = `import { main, test } from './token';\nexport default ${type}`;
	fs.writeFile(hostUrl, routerContent, (err, data) => {
		console.log(`执行setToken.js成功`);
	});
};
setToken();

module.exports = {
	root: true,
	env: {
		node: true,
	},
	extends: ['plugin:vue/essential', 'eslint:recommended'],
	parserOptions: {
		parser: 'babel-eslint',
	},
	rules: {
		'no-new': 0,
		'space-before-function-paren': [0, 'always'],
		'no-irregular-whitespace': 'off',
		semi: [0, 'always'],
		'comma-dangle': [0, 'always'],
		quotes: [0, 'single'],
		'no-mixed-spaces-and-tabs': 0,
		// allow async-await
		'generator-star-spacing': 'off',
		'no-tabs': 'off',
		'no-console': 'off',
		'no-unused-vars': 'off',
		'no-irregular-whitespace': 'off',
		'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
	},
	globals: {
		Web3: true,
		TruffleContract: true,
	},
};

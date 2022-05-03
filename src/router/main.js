export default [
	{
		path: '',
		name: 'index',
		meta: {
			title: 'index',
		},
		component: () => import('@/pages/home/index'),
	},
	{
		path: '/mint',
		name: 'mint',
		meta: {
			title: 'mint',
		},
		component: () => import('@/pages/mint/index'),
	},
];

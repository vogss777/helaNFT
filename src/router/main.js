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
		path: '/fundraising',
		name: 'mint',
		meta: {
			title: 'mint',
		},
		component: () => import('@/pages/mint/index'),
	},
	{
		path: '/myNft',
		name: 'myNft',
		meta: {
			title: 'myNft',
		},
		component: () => import('@/pages/myNft/index'),
	},
];

import poolABI from '@/contract/poolABI.json';
import token from '@/config/index.js';

export function getTokenPool(data) {
	const list = {};
	const obj = {
		ZTZ: {
			ztzToken: token.ztzToken,
			NFTToken: token.NFTToken,
		},
		// 'ZTZ--BNB': token.NFTToken,
	};
	for (const key in token) {
		if (key === 'ztzPool') {
			list[data.token] = {
				token: data.token,
				abi: poolABI,
				lp: obj[data.type].ztzToken,
				NFTToken: obj[data.type].NFTToken,
			};
			break;
		}
	}

	return list[data.token];
}

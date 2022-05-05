import to from 'await-to-js';
// 获取Matic余额
export async function getBalance(_that) {
	if (!_that.fullAccount) return;
	// provider对象
	const provider = new _that.ethers.providers.Web3Provider(window.ethereum);
	const signer = provider.getSigner();
	let [errValue, value] = await to(signer.getBalance());
	let balance = _that.ethers.utils.formatUnits(value.toString(), '18').toString();
	// console.log('获取Matic余额', balance);
	return +balance;
}

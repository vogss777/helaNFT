import token from '@/config/index.js';
export default function inviteCode(that) {
	let inviteCode = that.$route.query.inviteCode;
	const code = localStorage.getItem('inviteCode');
	if (!inviteCode) {
		if (code === 'undefined' || code === 'null' || code === '' || !code) {
			localStorage.setItem('inviteCode', token.defaultReferrerAddress);
			that.$store.commit('SETINVITECODE', token.defaultReferrerAddress);
		} else {
			that.$store.commit('SETINVITECODE', localStorage.getItem('inviteCode'));
		}
	} else {
		localStorage.setItem('inviteCode', inviteCode);
		that.$store.commit('SETINVITECODE', inviteCode);
	}
}

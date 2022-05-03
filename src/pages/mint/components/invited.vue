<template>
	<div class="invited_content">
		<div class="invited_url">
			<div class="invited_title">
				<h3>合约地址</h3>
				<div class="copy_t">
					<img src="@/assets/images/file-copy.png" alt="" />
					<span>复制</span>
				</div>
			</div>
			<div class="invited_input">
				<span>{{ inviteAddress }}</span>
			</div>
			<span class="invited_text">用募捐推荐码推荐新地址能加速释放推荐地址</span>
		</div>

    <div class="next_time_box">
      <span>下次提取时间：2022-04-02</span>
    </div>
	</div>
</template>

<script>
export default {
	name: '',
	data() {
		return {};
	},
	computed: {
		// 完整地址
		fullAccount() {
			return this.$store.state.instance.fullAccount;
		},
		inviteAddress() {
			return `${window.location.protocol}//${window.location.host}?inviteCode=${this.fullAccount}`;
		},
	},
	methods: {},
};
</script>

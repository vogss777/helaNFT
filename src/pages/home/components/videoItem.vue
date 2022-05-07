<template>
	<div class="exp_video">
		<a href="javascript:;" class="play" @click="onPlay" v-if="!isPlay && isFisrt">
			<img src="@/assets/images/play.png" alt="" />
		</a>
		<a href="javascript:;" class="pause" @click="onPlay" v-if="isPause">
			<img src="@/assets/images/pause.png" alt="" />
		</a>
		<video
			id="bannerVideo"
			x5-video-player-type="h5"
			controlsList="nofullscreen"
			playsinline
			@click="onvidePlay"
			preload="@/assets/images/video_preload.png"
		>
			<source :src="src" type="video/mp4" />
		</video>
	</div>
</template>

<script>
export default {
	name: '',
	data() {
		return {
			src: require('@/assets/images/30f065899d4c100f81a3f251a9d2ebbc.mp4'),
			preloadImg: require('@/assets/images/video_preload.png'),
			isPlay: false,
			isPause: false,
			isFisrt: true,
		};
	},
	mounted() {
		// document.getElementById('bannerVideo').onclick(() => {});
	},
	methods: {
		onPlay() {
			if (!this.isPlay) {
				document.getElementById('bannerVideo').play();
				this.isPlay = true;
				this.isPause = false;
				this.isFisrt = false;
			}
		},
		onvidePlay() {
			document.getElementById('bannerVideo').pause();
			this.isPlay = false;
			this.isPause = true;
		},
	},
};
</script>

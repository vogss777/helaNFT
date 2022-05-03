<template>
  <div class="header_big header_right">
    <div class="navs_list_wrap">
      <BaseNav :showFlag="showFlag" :type="'big'" />
    </div>
  </div>
</template>
<script>
import BaseNav from "./baseNav";
export default {
  name: "smallNav",
  props: {
    // 头部下拉flag
    showFlag: {
      type: Boolean,
      default: false
    }
  },
  components: {
    BaseNav
  },
  data() {
    return {
      secondShow: false // 二级导航
    };
  },
  computed: {
    /**
     * 获取当前屏幕尺寸大小
     * return Object
     * Object.type     // 对应xs, ms, md, lg, xl
     * Object.index    // 对应0-xs, 1-ms, 2-md, 3-lg, 4-xl
     * Object.clientWidth    // 宽度
     */
    screenData() {
      return this.$store.state.options.screen;
    }
  },
  methods: {
    /**
     * 二级导航
     */
    navsMore() {
      this.secondShow = !this.secondShow;
    }
  }
};
</script>

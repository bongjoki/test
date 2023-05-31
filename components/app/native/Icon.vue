<style lang="less" scoped>
.native-icon {
  cursor: pointer;
}
</style>

<template lang="pug">
  img.native-icon(
    :src="require(`~/assets/icons/${src}.png`)"
    :style="computedSize"
    @click="$emit('click')")
</template>
<script>
export default {
  computed: {
    computedSize() {
      const { size, width, height } = this;
      if (width && height) {
        return `width:${width}px; height:${height}px`;
      }
      return `width:${size}px; height:${size}px`;
    },
  },
  props: {
    src: { type: String, default: null },
    size: { type: Number, default: 24 },
    width: { type: Number, default: 0 },
    height: { type: Number, default: 0 },
  },
};
</script>

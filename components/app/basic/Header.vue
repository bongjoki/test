<style lang="less" scoped>
.basic-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: linear-gradient(180deg, #25282d 0%, rgba(37, 40, 45, 0) 100%);
  .content {
    margin: 0 auto;
    max-width: 1440px;
    padding: 18px 60px;
  }
}
</style>

<template lang="pug">
  .basic-header
    .content
      native-icon(src="logo" :width="90" :height="20")
</template>

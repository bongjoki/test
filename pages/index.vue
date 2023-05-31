<style lang="less" scoped>
.index {
  min-height: 100vh;
  background: #25282D;
  &.login-page {
    background: url(https://picsum.photos/1920/1080);
    background-repeat: no-repeat;
    background-size: cover;
  }
  .content {
    width: 100%;
    max-width: 1440px;
    margin:  0 auto;
    min-height: calc(100vh - 230px);
    padding-top: 56px;
  }
}
</style>

<template lang="pug">
  .index(:class="{ 'login-page' : $route.path === '/login' }")
    .content
      basic-header
      nuxt-child.page
    basic-footer
</template>

<script>
export default {

};

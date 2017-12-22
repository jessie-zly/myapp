<template>
  <div class="fadeIn app-mask">
    <div class="mask"></div>
  </div>
</template>

<script>
  export default {
    name: "app-mask"
  }
</script>

<style scoped>
  .app-mask{
    width: 100%;
    height: 500px;
  }
  .mask {
    background: rgba(0, 0, 0, 0.5);
    margin-top: 50px;
    height: 502px;
  }
</style>

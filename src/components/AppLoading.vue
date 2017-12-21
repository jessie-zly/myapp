<template>
  <div class="app-loading">
    <div class="loading-area">
      <vue-loading type="spiningDubbles" color="#399" :size="{ width: '80px', height: '80px' }"></vue-loading>
    </div>
  </div>

</template>
<script>
  import vueLoading from 'vue-loading-template';

  export default {
    components: {
      vueLoading
    }
  }
</script>

<style scoped>
  .app-loading {
    width: 100%;
    height: 502px;
    margin-top: 50px;
    position: absolute;
    background: #EBEBEB;
    z-index: 100;
  }

  .app-loading > .loading-area {
    position: absolute;
    left: 120px;
    top: 40%;
  }

</style>

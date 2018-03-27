<template>
  <div class="app-error">
    您访问的页面不存在~~

    <div v-html='rmb'></div>

    <div>
      <span v-html='rmb2'></span>
      <span class='money'>5000.00</span>

    </div>

    <div v-html='dollar'></div>
  </div>
</template>

<script>
  export default {
    //
    data() {
      return {
        rmb: '<p>我用v-html 解析的</p>',
        rmb2: '<b>¥</b>',
        dollar: '<span>我是用 mustache 解析出来的</span>'
      }
    },
  }
</script>

<style scoped>

  .app-error {
    font: 12px/18px '';
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  div > > > b {
    font: 20px/30px '';
    color: #0ff;
  }

  div > > > span {
    color: #355;
    font-size: 20px;
  }

  .money{
    margin-left: 50px;

  }

</style>

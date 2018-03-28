<template>
  <div class="app-error">
    您访问的页面不存在~~


    <div ref="hello">傻逼测试</div>

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
    methods:{
      test(){
        console.log('div=>$ref 的 this 值',this);
        console.log('div=>$ref 的 this.$refs 值',this.$refs);
        console.log('div=>$ref 的 this.$refs.hello 值',this.$refs.hello);
        console.log('div=>$ref 的 this.$refs.hello.innerHTML 值',this.$refs.hello.innerHTML);
      }
    },
    mounted(){
      this.test();
    }
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

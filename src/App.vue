<template>
  <div id="app">
    <!--loading-->
    <vueLoading v-show="getLoading"></vueLoading>
    <!--nav 栏-->
    <AppNav></AppNav>
    <!--home列表-->
    <router-view>展示区</router-view>
  </div>
</template>

<script>
  /**
   * App.vue
   * author: jessie-zly
   * 2017/12/16
   * description: 顶层组件
   */

  // 模块引入
  import AppNav from './components/AppNav';
  import vueLoading from './components/AppLoading';
  import {mapGetters} from 'vuex';
  //
  export default {
    components: {
      AppNav, // 模块注册
      vueLoading
    },

    watch: {
      $route(route) {
        // 监听路由路径
        if (/detail\/*/.test(route.path)) {
          this.$store.dispatch('hideAppName');
        } else {
          this.$store.dispatch('showAppName');
        }

        // // nav-menu
        // if (/menu/.test(route.path)) {
        //   this.$store.dispatch('showNavMenu',{'nav-menu': true, 'nav-menu-active': false});
        // } else {
        //   this.$store.dispatch('hideNavMenu',{'nav-menu': false, 'nav-menu-active': true});
        // }
        //
        // // nav-user
        // if (/user/.test(route.path)) {
        //   this.$store.dispatch('showNavUser');
        // } else {
        //   this.$store.dispatch('hideNavUser');
        // }
      }
    },
    methods: {},
    mounted() {
      if (/user|detail\/*/.test(this.$route.path)) {
        this.$store.dispatch('hideAppName');
      } else {
        this.$store.dispatch('showAppName');
      }
    },

    computed: mapGetters([
      'getLoading',
    ]),
  }
</script>

<style scoped>
  #app {
    width: 320px;
    height: 552px;
    /*position: relative;*/
  }

</style>

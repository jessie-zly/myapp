<template>
  <div class="app-nav">
    <ul>
      <router-link tag='li' active-class="active" to="/menu">
        <a href="javascript:;" class="nav-menu"></a>
      </router-link>
      <router-link tag='li' active-class="active" to="/home">
        <a href="javascript:;" v-show="getAppName">苹果电影</a>
      </router-link>
      <router-link tag='li' active-class="active" to="/user">
        <a href="javascript:;" class="nav-user"></a>
      </router-link>
    </ul>
  </div>
</template>

<script>

  import {mapGetters} from 'vuex';

  export default {
    name: "app-nav",
    data() {
      return {}
    },
    methods: {
    },
    computed: mapGetters([
      'getAppName',
    ]),
  }
</script>

<style scoped>

  * {
    margin: 0;
    padding: 0;
  }

  .app-nav {
    background: #282828;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
  }

  ul {
    display: flex;
    justify-content: space-between;
  }

  ul > li {
    list-style: none;
  }

  ul > li > a {
    display: block;
    text-decoration: none;
    color: #ccc;
    font: 16px/50px "";
    padding: 0 15px;
  }

  ul > li > a.nav-menu {
    width: 30px;
    height: 50px;
    border-right: 1px solid #222;
    background: url(../../assets/images/menu.png) no-repeat center;
    background-size: 20px 20px;
  }

  ul > li > a.nav-menu-active {
    width: 30px;
    height: 50px;
    border-right: 1px solid #222;
    background: url(../../assets/images/menu-active.png) no-repeat center;
    background-size: 20px 20px;
  }

  ul > li > a.nav-user {
    width: 30px;
    height: 50px;
    background: url(../../assets/images/user.png) no-repeat center;
    background-size: 20px 20px;
  }

  ul > li > a.nav-user-active {
    width: 30px;
    height: 50px;
    background: url(../../assets/images/user-active.png) no-repeat center;
    background-size: 20px 20px;
  }

  ul > li.active > a {
    color: #fff;
  }

</style>

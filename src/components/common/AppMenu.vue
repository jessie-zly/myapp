<template>
  <div class="fadeIn app-menu">
    <ul class="fadeInLeft menu-list">
      <router-link to="/home" tag="li"><span>首页</span><i>&gt;</i></router-link>
      <router-link to="/film" tag="li"><span>影片</span><i>&gt;</i></router-link>
      <router-link to="/cinema" tag="li"><span>影院</span><i>&gt;</i></router-link>
      <router-link to="/mall" tag="li"><span>商城</span><i>&gt;</i></router-link>
      <router-link to="/user" tag="li"><span>我的</span><i>&gt;</i></router-link>
      <router-link to="/" tag="li"><span>卖座卡</span><i>&gt;</i></router-link>
    </ul>
  </div>

</template>

<script>

  export default {
    name: "app-menu",
    data() {
      return {}
    },
    components: {},
  }
</script>

<style scoped>
  .app-menu {
    background: rgba(0, 0, 0, 0.5);
    margin-top: 50px;
    height: 500px;
    position: relative;
  }

  .app-menu > .menu-list {
    width: 210px;
    height: 100%;
    border-top: 1px solid #222;
    background: #282828;
    margin: 0;
    padding: 0;
  }

  .app-menu > .menu-list > li {
    display: flex;
    justify-content: space-between;
    list-style: none;
    font: 14px/50px '';
    border-bottom: 1px dashed #222;
    color: #9a9a9a;
    box-sizing: border-box;
    padding: 0 20px;
  }

  .app-menu > .menu-list > li > span {
    display: block;
  }

  .app-menu > .menu-list > li > i {
    display: block;
    font-style: normal;
    font: 12px/50px '';
    color: #666;
  }

</style>

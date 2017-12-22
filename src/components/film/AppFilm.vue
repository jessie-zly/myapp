<template>
  <div class="app-film">
    <ul>
      <router-link tag='li' active-class="active" to="/film/playing">
        <a href="javascript:;">正在热映</a>
      </router-link>
      <router-link tag='li' active-class="active" to="/film/coming">
        <a href="javascript:;">即将上映</a>
      </router-link>
    </ul>
    <router-view>展示区</router-view>
  </div>
</template>

<script>
  export default {
    name: "app-film"
  }
</script>

<style scoped>
  * {
    margin: 0;
    padding: 0;
  }

  .app-film {
    padding: 0 15px;
    margin-top: 50px;
  }

  ul {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #fe6e00;
  }

  ul > li {
    list-style: none;
  }

  ul > li > a {
    display: block;
    width: 145px;
    text-align: center;
    text-decoration: none;
    color: #6a6a6a;
    font: 16px/46px "";
    border-bottom: 3px solid #EBEBEB;
  }

  ul > li.active > a {
    color: #fe6e00;
    border-bottom: 3px solid #fe6e00;
  }

</style>

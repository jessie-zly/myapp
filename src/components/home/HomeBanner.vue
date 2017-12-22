<template>
  <div class="home-banner">
    <swipe class="my-swipe" :showIndicators="false">
      <swipe-item class="slide" v-for="(item) in this.filmBoard" :key="item.id">
        <router-link to="" tag="div">
          <img :src="item.imageUrl" alt="加载失败">
        </router-link>
      </swipe-item>
    </swipe>
  </div>
</template>

<script>
  import 'vue-swipe/dist/vue-swipe.css';
  import {Swipe, SwipeItem} from 'vue-swipe';

  export default {
    data() {
      return {
        filmBoard: []
      }
    },
    components: {
      Swipe, SwipeItem
    },
    mounted() {
      this.$http({
        // https://m.maizuo.com/v4/api/billboard/home?__t=1513736281420
        url: '/api/v4/api/billboard/home?',
      }).then((res) => {
        // console.log(res.data.data.billboards);
        if (res.status === 200) {
          this.filmBoard = res.data.data.billboards;
        } else {
          console.log('网络异常~~', res);
        }
      }).catch((res) => {
        console.log('film data error', res)
      });
    }
  }

</script>
<style scoped>

  .home-banner {
    margin-top: 50px;
  }

  .home-banner img {
    display: block;
    width: 100%;
    height: 100%;
  }

  .my-swipe {
    height: 200px;
    color: #fff;
    font-size: 30px;
    text-align: center;
  }

  .slide {
    height: inherit;
  }

</style>

<template>
  <div class="app-home">
    <!--轮播组件-->
    <HomeBanner></HomeBanner>

    <div class="home-film-list">
      <!--热映电影-->
      <ul class="film-play">
        <li v-for="item of filmList" :key="item.id">
          <router-link :to="'/detail/'+item.id" tag="div">
            <img :src="item.cover.origin" alt="图片未找到">
            <dl class="film-list-item">
              <dt class="film-name">{{item.name}}</dt>
              <dd class="film-info">
                <span>{{item.cinemaCount}}家影院上映</span>
                <span>{{item.watchCount}}人购票</span>
              </dd>
              <dd class="film-grade">{{item.grade}}</dd>
            </dl>
          </router-link>
        </li>
      </ul>
      <button class="film-more" @click="goToPlaying">更多热映电影</button>

      <div class="list-divide">
        <p></p>
        <span>即将上映</span>
      </div>

      <!--即将上映电影-->
      <ul class="film-soon">
        <li v-for="item of filmSoon" :key="item.id">
          <router-link :to="'/detail/'+item.id" tag="div">
            <img :src="item.cover.origin" alt="图片未找到">
            <div class="film-list-item">
              <span class="film-name">{{item.name}}</span>
              <span class="film-premiereAt">{{item.premiereAt|date}}上映</span>
            </div>
          </router-link>
        </li>
      </ul>
      <button class="film-more" @click="goToComing">更多即将上映电影</button>

    </div>
  </div>
</template>

<script>
  /**
   * AppHome.vue
   * author: jessie-zly
   * 2017/12/17
   * description:
   */
  import HomeBanner from './HomeBanner';

  export default {
    data() {
      return {
        filmList: [],
        filmSoon: []
      };
    },
    methods:{
      goToPlaying(){
        // 路由跳转 /film/playing
        this.$router.push({path:'/film/playing'});
      },
      goToComing(){
        // 路由跳转到 /film/coming
        this.$router.push({path:'/film/coming'});
      }
    },
    components: {
      HomeBanner,
    },
    mounted() {
      /**
       * 正在上映
       */
      this.$http({
        // url: '/data/filmList.json',

        // https://m.maizuo.com/v4/api/film/now-playing?__t=1513735567414&page=1&count=5
        url: '/api/v4/api/film/now-playing?page=1&count=3',
      }).then((res) => {
        // console.log(res.data.data.films);
        if (res.status === 200) {
          this.filmList = res.data.data.films;
        } else {
          console.log('网络异常~~', res);
        }
      }).catch((res) => {
        console.log('film data error', res)
      });

      /**
       * 即将上映
       */
      this.$http({
        // url: '/data/filmComingList.json',

        // https://m.maizuo.com/v4/api/film/coming-soon?__t=1513735567421&page=1&count=3
        url: '/api/v4/api/film/coming-soon?page=1&count=3',
      }).then((res) => {
        // console.log(res.data.data.films);
        if (res.status === 200) {
          this.filmSoon = res.data.data.films;
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
  .app-home {
    min-height: 552px;
    background: #EBEBEB;
  }

  .home-film-list {
    /*margin-top: 17px;*/
  }

  .home-film-list > ul {
    margin: 0;
    padding: 0;
  }

  .home-film-list > ul > li {
    list-style: none;
    margin: 0 17px 17px;
    background: #fff;
  }

  .home-film-list > ul > li img {
    display: block;
    width: 100%;
  }

  .home-film-list > ul > li .film-list-item {
    line-height: 14px;
    text-align: left;
    text-indent: 10px;
    padding-bottom: 5px;
    position: relative;
  }

  .home-film-list > ul > li .film-list-item > .film-name {
    margin: 0;
    padding: 0;
    font-size: 12px;
  }

  .home-film-list > ul > li .film-list-item > .film-info {
    font-size: 8px;
    color: #999;
    margin: 0;
    padding: 0;
  }

  .home-film-list > ul > li .film-list-item > .film-premiereAt {
    font: 12px/24px '';
    color: #ffb375;
    margin: 0;
  }

  .home-film-list > ul > li .film-list-item > .film-info > span:nth-of-type(2) {
    margin-left: 10px;
  }

  .home-film-list > ul > li .film-list-item > .film-grade {
    font-size: 24px;
    color: #f99;
    position: absolute;
    right: 10px;
    bottom: 10px;
  }

  .home-film-list > .film-more {
    display: block;
    margin: 0 auto;
    font: 12px/30px '';
    color: #616161;
    border-radius: 15px;
    border: 1px solid #aaa;
    background: #EBEBEB;
    width: 160px;
    outline: none;
  }

  .home-film-list > .list-divide {
    width: 100%;
    height: 10px;
    margin: 30px 0 40px;
    position: relative;
  }

  .home-film-list > .list-divide > p {
    display: block;
    height: 100%;
    border-bottom: 1px solid #a8a8a8;
  }

  .home-film-list > .list-divide > span {
    display: block;
    width: 60px;
    height: 20px;
    text-align: center;
    font: 10px/20px '';
    color: #eee;
    background: #a7a7a7;
    border-radius: 5px;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    margin: 0 auto;
  }

  .film-soon .film-list-item {
    display: flex;
    justify-content: space-between;
  }

  .film-soon .film-list-item > span {
    display: inline-block;
    font: 12px/24px '';
    text-align: center;
  }

</style>

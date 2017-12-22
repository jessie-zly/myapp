<template>
  <div class="film-playing">
    <ul>
      <li v-for="item of filmPlayingList" :key="item.id">
        <router-link :to="'/detail/'+item.id" tag="div">
          <div class="film-img">
            <img :src="item.poster.origin" alt="图片未找到">
          </div>
          <div class="film-info">
            <dl class="film-item">
              <dt class="film-name">{{item.name}}</dt>
              <dd class="film-intro">
                <span>{{item.intro}}</span>
              </dd>
              <dd class="film-count">
                <div><b>{{item.cinemaCount}}</b><span>家影院上映</span></div>
                <div><b>{{item.watchCount}}</b><span>人购票</span></div>
              </dd>
              <dd class="film-grade">{{item.grade}}</dd>
            </dl>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>

  export default {
    name: "film-playing",
    data() {
      return {
        filmPlayingList: [],
      };
    },

    mounted() {
      this.$http({
        // https://m.maizuo.com/v4/api/film/now-playing?page=1&count=7
        url: '/api/v4/api/film/now-playing?page=1&count=10'
      }).then((res) => {
        if (res.status === 200) {
          this.filmPlayingList = res.data.data.films;
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

  .film-playing > ul {
    margin: 0;
    padding: 0;
  }

  .film-playing > ul > li {
    list-style: none;
    background: #f5f5f5;
  }

  .film-playing > ul > li > div {
    height: 125px;
    box-sizing: border-box;
    display: flex;
    justify-content: flex-start;
    padding: 20px 0;
    border-bottom: 1px dashed #EBEBEB;
  }

  .film-playing > ul > li .film-img {
    margin-right: 15px;
  }

  .film-playing > ul > li .film-img > img {
    display: block;
    width: 60px;
    height: 100%;
  }

  .film-playing > ul > li .film-info {
    width: 100%;
    padding-right: 20px;
  }

  .film-playing > ul > li .film-info > .film-item {
    text-align: left;
    margin: 0;
    padding: 0;
    position: relative;
  }

  .film-playing > ul > li .film-info > .film-item > .film-name {
    font: 16px/32px '';
  }

  .film-playing > ul > li .film-info > .film-item > .film-intro {
    font: 12px/24px '';
    color: #8e8e8e;
    margin: 0;
  }

  .film-playing > ul > li .film-info > .film-item > .film-count {
    font: 12px/24px '';
    color: #8e8e8e;
    margin: 0;
    display: flex;
    justify-content: space-between;
  }

  .film-playing > ul > li .film-info > .film-item > .film-count > div > b {
    display: inline-block;
    font-weight: 900;
    color: #8aa2bf;
  }

  .film-playing > ul > li .film-info > .film-item > .film-count > div > span {
    display: inline-block;
  }

  .film-playing > ul > li .film-info > .film-item > .film-grade {
    margin: 0;
    font: 16px/32px '';
    color: #fc7103;
    position: absolute;
    right: 0;
    top: 0;
  }
</style>

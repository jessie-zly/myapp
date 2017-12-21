<template>
  <div class="film-coming">
    <ul>
      <li v-for="item of filmComingList" :key="item.id">

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
              <dd class="film-premiereAt">
                <span>{{item.premiereAt|date}} 上映</span>
              </dd>
            </dl>
          </div>
        </router-link>
      </li>

    </ul>
  </div>
</template>

<script>
  export default {
    name: "film-coming",
    data() {
      return {
        filmComingList: []
      };
    },
    mounted() {
      this.$http({
        // 本地数据
        // url: '/data/filmComingList.json',

        // 请求的接口
        // https://m.maizuo.com/v4/api/film/coming-soon?page=1&count=7
        url: '/api/v4/api/film/coming-soon?page=1&count=10',
      }).then((res) => {
        // console.log(res.data.data.films, 2222);
        if (res.status === 200) {
          this.filmComingList = res.data.data.films;
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

  .film-coming > ul {
    margin: 0;
    padding: 0;
  }

  .film-coming > ul > li {
    list-style: none;
    background: #f5f5f5;
  }

  .film-coming > ul > li > div {
    height: 125px;
    box-sizing: border-box;
    display: flex;
    justify-content: flex-start;
    padding: 20px 0;
    border-bottom: 1px dashed #EBEBEB;
  }

  .film-coming > ul > li .film-img {
    margin-right: 15px;
  }

  .film-coming > ul > li .film-img > img {
    display: block;
    width: 60px;
    height: 100%;
  }

  .film-coming > ul > li .film-info {

  }

  .film-coming > ul > li .film-info > .film-item {
    text-align: left;
    margin: 0;
    padding: 0;
  }

  .film-coming > ul > li .film-info > .film-item > .film-name {
    font: 16px/32px '';
    height: 32px;
  }

  .film-coming > ul > li .film-info > .film-item > .film-intro {
    font: 12px/24px '';
    height: 24px;
    color: #8e8e8e;
    margin: 0;
  }

  .film-coming > ul > li .film-info > .film-item > .film-premiereAt {
    font: 12px/24px '';
    color: #ffb375;
    margin: 0;
  }

</style>

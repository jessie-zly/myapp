<template>
  <div class="app-detail">
    <div class="detail-name">{{filmDetail.name}}</div>
    <div class="detail-origin">
      <img :src="filmDetail.cover.origin" alt="图片未找到">
    </div>
    <dl class="detail-info">
      <dt class="detail-introduction">影片简介</dt>
      <dd class="detail-director"><span>导演</span>: <span>{{filmDetail.director}}</span></dd>
      <dd class="detail-actors"><span>主演</span>:
        <span v-for="item of filmDetail.actors">{{item.name}}&nbsp;&nbsp;</span>
      </dd>

      <dd class="detail-language"><span>地区语言</span>:
        <span>{{filmDetail.nation}}</span><span>({{filmDetail.language}})</span></dd>
      <dd class="detail-category"><span>类型</span>: <span>{{filmDetail.category}}</span></dd>
      <dd class="detail-date">
        <span>上映日期</span>: <span>{{filmDetail.premiereAt|date}}</span>上映
      </dd>
      <dd class="detail-synopsis">{{filmDetail.synopsis}}
      </dd>
    </dl>
    <div class="detail-buy">
      <button @click.prevent="buyNow"> 立即购票</button>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        filmDetail: {
          cover: {
            origin: {}
          }
        },
      };
    },
    // components: {

    // },
    mounted() {
      // 获取 id
      const filmDetailId = this.$route.params.id;
      this.$http({
        // url: '/data/filmDetail.json',

        // https://m.maizuo.com/v4/api/film/3551?__t=1513736515707
        url: '/api/v4/api/film/' + filmDetailId,
      }).then((res) => {
        if (res.status === 200) {
          // 获取电影信息
          this.filmDetail = res.data.data.film;
          // console.log(this.filmDetail);

        } else {
          console.log('网络异常~~', res);
        }
      }).catch((res) => {
        console.log('film data error', res)
      });
    },
    methods: {
      /**
       * 立即购票
       */
      buyNow() {
        alert('成功加入订单');
      }
    }
  }
</script>

<style scoped>
  .app-detail {
    background: #EBEBEB;
    margin-top: 50px;
    position: relative;
  }

  .app-detail > .detail-name {
    text-decoration: none;
    color: #fff;
    font: 16px/50px "";
    padding: 0 15px;
    position: absolute;
    top: -50px;
    left: 50px;
  }

  .app-detail > .detail-origin {
    width: 100%;
    height: 100%;
  }

  .app-detail > .detail-origin > img {
    display: block;
    width: 100%;
    height: 100%;
  }

  .app-detail > .detail-info {
    padding-left: 20px;
  }

  .app-detail > .detail-info > dt {
    font: 16px/24px '';
    margin: 16px 0;
  }

  .app-detail > .detail-info > dd {
    margin: 0 0 5px 0;
    font: 12px/18px '';
  }

  .app-detail > .detail-info > dd.detail-synopsis {
    padding-right: 20px;
    margin: 0;
  }

  .app-detail > .detail-info > dd > span {
    display: inline-block;
  }

  .app-detail > .detail-info > dd > span:nth-of-type(1) {
    width: 50px;
    text-align-last: justify;
  }

  .app-detail > .detail-buy {
    display: flex;
    justify-content: center;
    margin: 20px 0;
  }

  .app-detail > .detail-buy > button {
    font: 14px/36px '';
    color: #fff;
    background: #fe8233;
    border-radius: 18px;
    min-width: 156px;
    outline: none;
  }

  /*.app-detail > .detail-buy > button.active {*/
  /*background: #f00;*/
  /*}*/
</style>

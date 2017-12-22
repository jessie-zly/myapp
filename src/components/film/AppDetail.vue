<template>
  <div class="app-detail">
    <div class="slideInUp detail-wrap">
      <div class="detail-origin">
        <img :src="filmDetail.cover.origin" alt="图片未找到">
      </div>
      <dl class="detail-info">
        <dt class="detail-introduction">影片简介
          <div class="detail-name">{{filmDetail.name}}</div>
        </dt>
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
        count: 0,
      };
    },
    // components: {

    // },
    mounted() {
      // 获取 id
      const filmDetailId = this.$route.params.id;
      this.$http({
        // https://m.maizuo.com/v4/api/film/3551?__t=1513736515707
        url: '/api/v4/api/film/' + filmDetailId,
      }).then((res) => {
        if (res.status === 200) {
          // 获取电影信息
          this.filmDetail = res.data.data.film;
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
        if (!localStorage.username) {
          confirm('尚未登录,现在登录?') === true && this.$router.push({path: '/user/login'});
        } else {
          // 购物车处理
          if (this.$root.list.length === 0) {
            // 购物车为空的情况
            this.count = 1;
            this.$root.userInfo.order.id = this.filmDetail.id;
            this.$root.userInfo.order.orderName = this.filmDetail.name;
            this.$root.userInfo.order.price = ~~(10 + Math.random() * 40) + '';
            this.$root.userInfo.order.count = this.count + '';
            this.$root.userInfo.order.cash = this.count * this.$root.userInfo.order.price + '';
            // 存入购物车
            this.$root.list.push(this.$root.userInfo.order);
          } else {
            // 标志
            let bstop = true;
            // 购物车有相同影片的时候
            this.$root.list.forEach(item => {
                if (item.id / 1 === this.filmDetail.id / 1) {
                  // 存在对应影片的时候
                  item.count++;
                  item.cash = item.count * item.price;
                  // 有相同影片的时候改变标志状态
                  bstop = false;
                }
              }
            );
            // 不存在对应影片的时候
            if (bstop) {
              // 赋值
              this.count = 1;
              const price = ~~(10 + Math.random() * 40);
              // 解构
              const newOrder = {
                id: this.filmDetail.id,
                orderName: this.filmDetail.name,
                count: this.count,
                price: price,
                cash: this.count * price,
              };
              // 存入购物车
              this.$root.list.unshift(newOrder);
            }
          }
        }
        console.log(this.$root.list, 2222);
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

  .app-detail > .detail-wrap > .detail-origin {
    width: 100%;
    height: 100%;
  }

  .app-detail > .detail-wrap > .detail-origin > img {
    display: block;
    width: 100%;
    height: 100%;
  }

  .app-detail > .detail-wrap > .detail-info {
    padding-left: 20px;
  }

  .app-detail > .detail-wrap > .detail-info > dt {
    font: 16px/24px '';
    margin: 16px 0;
    position: relative;
  }

  .app-detail > .detail-wrap > .detail-info > dt > .detail-name {
    text-decoration: none;
    color: #fe8233;
    font: 16px/50px "";
    padding: 0 15px;
    z-index: 200;
    position: absolute;
    top: -14px;
    right: 50px;
    transform: rotateZ(-15deg) scale3d(1.2, 1, 1.5);
  }

  .app-detail > .detail-wrap > .detail-info > dd {
    margin: 0 0 5px 0;
    font: 12px/18px '';
  }

  .app-detail > .detail-wrap > .detail-info > dd.detail-synopsis {
    padding-right: 20px;
    margin: 0;
  }

  .app-detail > .detail-wrap > .detail-info > dd > span {
    display: inline-block;
  }

  .app-detail > .detail-wrap > .detail-info > dd > span:nth-of-type(1) {
    width: 50px;
    text-align-last: justify;
  }

  .app-detail > .detail-wrap > .detail-buy {
    display: flex;
    justify-content: center;
    margin: 20px 0;
  }

  .app-detail > .detail-wrap > .detail-buy > button {
    font: 14px/36px '';
    color: #fff;
    background: #fe8233;
    border-radius: 18px;
    min-width: 156px;
    outline: none;
  }

</style>

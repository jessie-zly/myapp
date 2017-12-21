<template>
  <div class="user-origin">
    <dl class="user-info">
      <dd class="user-name">
        <div>
          <i></i>
          <span>用户名</span>
        </div>
        <div>
          <span>18662334606</span>
          <b>&gt;</b>
        </div>
      </dd>
      <dd class="user-pay" @click="goToOrder">
        <div>
          <i></i>
          <span>影票订单</span>
        </div>
        <div>
          <span>10</span>张
          <b>&gt;</b>
        </div>
      </dd>
      <dd class="user-order" @click="goToOrder">
        <div>
          <i></i>
          <span>影票待付订单</span>
        </div>
        <div>
          <span>1</span>张
          <b>&gt;</b>
        </div>
      </dd>
      <dd>
        <div>
          <i></i>
          <span>我的现金券</span>
        </div>
        <div>
          <span>0</span>张
          <b>&gt;</b>
        </div>
      </dd>
      <dd class="user-cash">
        <div>
          <i></i>
          <span>账户余额</span>
        </div>
        <div>
          <span>0</span>元
          <b>&gt;</b>
        </div>
      </dd>
      <dd class="user-exit" @click="goToLogin">
        <div>
          <i></i>
          <span>退出</span>
        </div>
        <div>
          <b>&gt;</b>
        </div>
      </dd>
    </dl>
  </div>

</template>

<script>
  export default {
    name: "user-origin",
    methods: {
      goToLogin() {
        this.$router.push({path: '/user/login'});
      },
      goToOrder() {
        this.$router.push({path: '/user/order'});
      },
    },
    mounted() {
      this.$http({
        // 请求的接口
        // https://m.maizuo.com/v4/api/me?__t=1513839754934
        url: '/api/v4/api/me',
      }).then((res) => {

        // console.log(res, 1111);
        if (res.status === 200) {
          // this.filmComingList = res.data.data.films;
        } else {
          console.log('网络异常~~', res);
        }
      }).catch((res) => {
        console.log('film data error', res)
      });
    },
  }
</script>

<style scoped>
  .user-origin {
    margin-top: 50px;
    background: #EBEBEB;
  }

  .user-origin > .user-info {
    margin-top: 64px;
  }

  .user-origin > .user-info > dd {
    margin: 14px 0;
    padding: 0 12px;
    font: 14px/60px '';
    color: #222;
    background: #fff;
    display: flex;
    justify-content: space-between;
  }

  .user-origin > .user-info > dd > div {
    display: flex;
    justify-content: flex-start;
  }

  .user-origin > .user-info > dd > div > i {
    display: inline-block;
    width: 20px;
    height: 20px;
    background: #7bcdcc;
    margin-top: 20px;
    border-radius: 50%;
    font-style: normal;
  }

  .user-origin > .user-info > dd > div > span {
    display: inline-block;
    margin-left: 10px;
  }

  .user-origin > .user-info > dd > div:nth-of-type(2) > span {
    color: #e7a858;
  }

  .user-origin > .user-info > dd > div:nth-of-type(2) > b {
    display: inline-block;
    font: 18px/60px '';
    color: #bdbdbd;
    margin-left: 5px;
    font-style: normal;
    background: none;
  }

</style>

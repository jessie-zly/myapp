<template>
  <div class="user-login">
    <form class="form">
      <input type="text" name="username" placeholder="请输入手机号" v-model="username">
      <span class="form-check" v-show="(/^1[3|4|5|8]\d{9}$/.test(this.username))||false" @click="sendCode">发送验证码</span>
      <input type="password" name="password" placeholder="请输入密码/验证码" v-model="password">
      <div class="form-msg">
        <span v-show="showMsg">{{msg}}</span>
      </div>
      <button class="form-login" @click="checkForm">登录</button>
      <a class="form-reg" @click="goToReg">没有账号？马上注册</a>
    </form>
  </div>
</template>

<script>

  /**
   * UserLogin.vue
   * author: jessie-zly
   * 2017/12/18
   * description: 用户登录
   */

  export default {
    name: "user-login",
    data() {
      return {
        username: '',
        password: '',
        msg: '',
        showMsg: false,
        code: '',
      }
    },

    methods: {
      checkForm() {
        // 用户名验证
        if (!(/^1[3|4|5|8]\d{9}$/.test(this.username))) {
          this.showMsg = true;
          this.msg = '请输入正确手机号...';
          return false;
        } else {
          this.showMsg = false;
        }
        // 密码验证
        // if (!(/\w{6,20}/.test(this.password))) {
        if (this.code / 1 !== this.password / 1) {
          this.showMsg = true;
          this.msg = '验证码输入有误...';
        } else {
          // 密码强度校验
          let level = 0;
          if (/\d/.test(this.password)) {
            level++;
          }
          if (/[a-z]/.test(this.password)) {
            level++;
          }
          if (/[A-Z]/.test(this.password)) {
            level++;
          }
          if (/_/.test(this.password)) {
            level++;
          }
          // 提示信息
          this.showMsg = true;
          this.msg = '密码强度为' + level + ', 登录跳转中...';
          // 路由跳转
          this.$router.push({path: '/user'});
        }
      },
      sendCode() {
        let arr = [];
        for (let i = 0; i <= 5; i++) {
          arr[i] = Math.floor(Math.random() * 10);
        }
        this.code = arr.join("");
        this.showMsg = true;
        this.msg = '验证码为:' + this.code;
      },
      goToReg() {
        this.$router.push({path: './reg'});
      },

    },
    mounted() {
      // this.checkForm();
    }

  }
</script>

<style scoped>
  .user-login {
    margin-top: 50px;
    padding: 0 30px;
    background: #EBEBEB;
  }

  .user-login > .form {
    position: relative;
  }

  .user-login > .form > input {
    outline: none;
    width: 100%;
    font: 14px/22px '';
    padding: 6px 12px;
    margin-top: 30px;
    box-sizing: border-box;
    color: #555;
  }

  .user-login > .form > .form-check {
    display: block;
    font: 12px/30px '';
    color: #fff;
    text-align: center;
    border-radius: 3px;
    width: 95px;
    background: #29a097;
    position: absolute;
    top: 34px;
    right: 5px;
  }

  .user-login > .form > .form-msg {
    height: 16px;
    margin: 5px 0;
  }

  .user-login > .form > .form-msg > span {
    display: block;
    font: 12px/16px '';
    color: #fe8233;
  }

  .user-login > .form > .form-login {
    font: 14px/22px '';
    color: #fff;
    margin: 45px 50px 0;
    background: #fe8233;
    border-radius: 36px;
    width: 160px;
    outline: none;
    padding: 8px 12px;
  }

  .user-login > .form > .form-reg {
    display: block;
    font: 14px/22px '';
    color: #ccc;
    text-align: center;
    margin-top: 10px;
  }


</style>

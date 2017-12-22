<template>
  <div class="user-login">
    <form class="form">
      <input type="text" name="username" placeholder="请输入手机号" v-model="username">
      <span class="form-check" v-show="(/^1[3|4|5|8]\d{9}$/.test(this.username))||false"
        @click.prevent="sendCode">发送验证码</span>
      <input type="text" placeholder="请输入密码" v-model="password">
      <input type="text" name="password" placeholder="请输入验证码" v-model="checkCode">

      <div class="form-msg">
        <span v-show="showMsg">{{msg}}</span>
      </div>
      <button class="form-login" @click.prevent="checkForm">登录</button>
      <a class="form-reg" @click.prevent="goToReg">没有账号？马上注册</a>
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
        checkCode: '',
        code: '',
      }
    },

    methods: {
      checkForm() {
        // 用户名验证
        if (this.username === '') {
          this.showMsg = true;
          this.msg = '账号不能为空!';
          return false;
        } else if (this.$root.userInfo.username !== this.username) {
          this.showMsg = true;
          this.msg = '此用户尚未注册';
          return false;
        } else {
          this.msg = '';
          this.showMsg = false;
        }
        // 密码验证
        if (this.password === '') {
          this.showMsg = true;
          this.msg = '密码不能为空!';
          return false;
        } else if (this.$root.userInfo.password !== this.password) {
          this.showMsg = true;
          this.msg = '账号或密码有误';
          return false;
        } else {
          this.msg = '';
          this.showMsg = false;
        }
        // 验证码
        if (this.checkCode === '') {
          this.showMsg = true;
          this.msg = '验证码不能为空!';
        } else if (this.code !== this.checkCode) {
          this.showMsg = true;
          this.msg = '验证码输入有误...';
          return false;
        } else {
          this.msg = '';
          this.showMsg = false;
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
      if (localStorage.username) {
        this.username = localStorage.username;
        this.password = localStorage.password;
      } else {
        this.username = '';
        this.password = '';
      }
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

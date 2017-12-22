<template>
  <div class="user-reg">
    <form>
      <div class="reg-name">
        <input type="number" name="username" placeholder=" 请输入手机号码" v-model="username">
        <span class="phone-check" v-show="(/^1[3|4|5|8]\d{9}$/.test(this.username))||false">✔</span>
        <span class="phone-check" v-show="!((/^1[3|4|5|8]\d{9}$/.test(this.username))||false)">×</span>
      </div>

      <div class="reg-password">
        <input type="text" name="password" placeholder=" 请输入密码" v-model="password">
        <span class="password-check" v-show="(/\w{6,20}/.test(this.password))||false">✔</span>
        <span class="password-check" v-show="!((/\w{6,20}/.test(this.password))||false)">×</span>
      </div>

      <div class="reg-password">
        <input type="text" name="password" placeholder=" 请确认密码" v-model="check_password">
      </div>

      <div class="reg-msg">
        <span v-show="showMsg">{{msg}}</span>
      </div>

      <div class="reg-sub">
        <button class="form-reg" @click.prevent="checkForm">注册</button>
      </div>
      <a class="form-login" @click.prevent="goToLogin">已有账号？马上登录</a>
    </form>

  </div>
</template>

<script>

  export default {
    name: "user-reg",
    data() {
      return {
        username: '',
        password: '',
        check_password: '',
        showMsg: false,
        msg: '',
      }
    },
    methods: {
      checkForm() {
        // 用户名验证
        if (this.username === '') {
          this.showMsg = true;
          this.msg = '手机号不能为空!';
          return false;
        } else if (!(/^1[3|4|5|8]\d{9}$/.test(this.username))) {
          this.showMsg = true;
          this.msg = '请输入正确手机号...';
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
        } else if (!(/\w{6,20}/.test(this.password))) {
          this.showMsg = true;
          this.msg = '密码格式有误...';
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
          this.msg = '密码强度为' + level;

          // 密码确认
          if (this.check_password !== this.password) {
            this.msg = '两次密码不一致!!!';
            return false;
          } else {
            // 存储信息
            this.$root.userInfo.username = this.username;
            this.$root.userInfo.password = this.password;
            // 存到 Local Storage
            localStorage.setItem('username', this.username);
            localStorage.setItem('password', this.password);
            // 注册成功进行路由跳转
            this.$router.push({path: '/user'});
          }
        }
      },
      goToLogin() {
        this.$router.push({path: './login'});
      },

    },
    mounted() {

    },
  }
</script>

<style scoped>
  .user-reg {
    margin-top: 50px;
    padding: 0 30px;
    background: #EBEBEB;
  }

  .user-reg > form input {
    outline: none;
    width: 100%;
    font: 14px/22px '';
    padding: 6px 12px;
    margin-top: 30px;
    box-sizing: border-box;
    color: #555;
  }

  .user-reg > form {

  }

  .user-reg > form > .reg-name {
    position: relative;
  }

  .user-reg > form > .reg-name > .phone-check {
    width: 38px;
    height: 38px;
    font: 14px/38px '';
    display: block;
    text-align: center;
    color: #fe8233;
    position: absolute;
    bottom: 0;
    right: 0;
  }

  .user-reg > form > .reg-password {
    position: relative;
  }

  .user-reg > form > .reg-password > .password-check {
    width: 38px;
    height: 38px;
    font: 14px/38px '';
    display: block;
    text-align: center;
    color: #fe8233;
    position: absolute;
    bottom: 0;
    right: 0;
  }

  .user-reg > form > .reg-msg {
    height: 16px;
    margin: 5px 0;
  }

  .user-reg > form > .reg-msg > span {
    display: block;
    font: 12px/16px '';
    color: #fe8233;
  }

  .user-reg > form .form-reg {
    font: 14px/22px '';
    color: #fff;
    margin: 45px 50px 0;
    background: #fe8233;
    border-radius: 36px;
    width: 160px;
    outline: none;
    padding: 8px 12px;
  }

  .user-reg > form > .form-login {
    display: block;
    font: 14px/22px '';
    color: #ccc;
    text-align: center;
    margin-top: 10px;
  }

</style>

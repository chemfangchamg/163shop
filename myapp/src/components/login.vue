<template>
  <div>
    <h1>用户登录</h1>
    <form id="login-form">
      用户名:
      <input type="text" class="login-username" v-model="value1"/>
      <br />密码:
      <input type="password" class="login-password" />
      <br />
      <button @click="handClickLogin">登录</button>
    </form>
  </div>
</template>

<script>
// const axios = require("../../utils/request");
export default {
    name:'login',
    data() {
        return {
            value1:1
        }
    },
  methods: {
    // 点击登录的回调
    handClickLogin() {
      console.log("'dianle'");
    //   axios.POST("/user/login", { name: "laoer", password: "9527" });
    }
  }
}
</script>
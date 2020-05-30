<template>
  <div>
    <h1>用户登录</h1>
    <form id="login-form">
      用户名:
      <input type="text" class="login-username" />
      <br />密码:
      <input type="password" class="login-password" />
      <br />
      <button type="submit" @click="handClickLogin">登录</button>
    </form>
  </div>
</template>
<script>
export default {
  methods: {
    // 点击登录的回调
    handClickLogin: function(e) {
      e.preventDefault();
      // 发送ajax请求
    }
  }
};
</script>
<style>
#box {
  background-color: red;
  width: 220px;
  height: 100px;
}
</style>
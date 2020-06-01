<template>
  <div>
    <van-tabbar v-model="active">
      <van-tabbar-item icon="wap-home-o">首页</van-tabbar-item>
      <van-tabbar-item icon="photo-o">值得买</van-tabbar-item>
      <van-tabbar-item icon="apps-o">分类</van-tabbar-item>
      <van-tabbar-item icon="shopping-cart-o">购物车</van-tabbar-item>
      <van-tabbar-item icon="contact">个人</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
// 引入组件

export default {
  data() {
    return {
      active: 0
    };
  },
  // 注册组件
  components: {}
};
</script>

<style>
</style>

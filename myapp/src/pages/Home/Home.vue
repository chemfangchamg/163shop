<template>
  <div>
    <p>Home</p>
    <Slide />
    <!-- 品牌退货退款 -->
    <div class="flag">
      <van-grid direction="horizontal" :column-num="3">
        <van-grid-item icon="chart-trending-o" text="网易自营品牌" />
        <van-grid-item icon="certificate" text="30天无忧退货" />
        <van-grid-item icon="after-sale" text="48小时快速退款" />
      </van-grid>
    </div>
    <!-- 商品宫格 -->
    <div class="grid">
      <van-grid clickable :column-num="3">
        <van-grid-item icon="home-o" text="路由跳转" to="/" />
        <van-grid-item icon="home-o" text="路由跳转" to="/" />
        <van-grid-item icon="home-o" text="路由跳转" to="/" />
        <van-grid-item icon="home-o" text="路由跳转" to="/" />
      </van-grid>
    </div>
    <Page1Box />
    <Page1Box />
  </div>
</template>

<script>
// 引入组件
import Page1Box from "../../components/Page1Box/Page1Box";
import Slide from "../../components/Slide/Slide";
// 引入api
import {reqHomeData} from '../../../api'

export default {
  data() {
    return {};
  },
  // 注册组件
  components: {
    Page1Box,
    Slide
  },
  // 生命周期函数
  beforeMount() {
    // const data1 = reqHomeData()
    // console.log(data1);
    
    console.log(reqHomeData());
    // console.log(reqHomeData());
    
  },
};
</script>

<style>
</style>

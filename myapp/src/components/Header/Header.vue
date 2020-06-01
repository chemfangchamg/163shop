<template>
  <div>
    <van-sticky>
      <van-button type="primary">基础用法</van-button>
    </van-sticky>
    <DownloadBanner v-if="isShow"></DownloadBanner>
    <div id="hd">
      <div class="logo">
        <img
          src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png?imageView&type=webp"
          alt
        />
      </div>
      <div class="searchBar">
        <!-- input搜索 -->
        <van-search v-model="value" placeholder="请输入搜索关键词" input-align="center" />
      </div>
      <div class="loginBtn">
        <!-- 登录按钮 -->
        <van-button square type="primary">登录</van-button>
      </div>
    </div>
    <!-- 水平列表栏 -->
    <div class="navBar">
      <van-grid direction="horizontal" :column-num="5">
        <van-grid-item text="文字" />
        <van-grid-item text="文字" />
        <van-grid-item icon="arrow-down" text />
        <van-grid-item icon="arrow-up" text />
      </van-grid>
    </div>
  </div>
</template>

<script>
// 引入组件
import DownloadBanner from "./DownloadBanner";
export default {
  data() {
    return {
      isShow: true,
      value: "",
      activeNames: ["1"]
    };
  },
  components: {
    DownloadBanner
  },
  methods: {}
};
</script>

<style lang="less" scoped>
#hd {
  width: 100%;
  height: 90px;
  margin: 20px;
  display: flex;
  .logo {
    flex: 1;
    height: 50px;
    img {
      width: 140px;
      height: 40px;
    }
  }
  .searchBar {
    flex: 3;
    height: 60px;
    van-search {
      height: 56px;
    }
  }
  .loginBtn {
    flex: 1;
    height: 50px;
  }
}
</style>

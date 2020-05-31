<template>
  <div>
          <!-- 轮播图 -->
    <div class="swipe">
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(image, index) in images" :key="index">
          <img v-lazy="image" />
        </van-swipe-item>
      </van-swipe>
    </div>
  </div>
</template>

<script>
  // 引入组件

export default {
  data () {
    return {
      images: [
        "https://yanxuan.nosdn.127.net/053451b3a787f4d5dec04bcb3cd129cb.jpg?type=webp&imageView&quality=75&thumbnail=750x0",
        "http://yanxuan-miaobi.nos-jd.163yun.com/1152176_1_6_wap_727631487696e9635e5d3e33371b20f9.jpg?type=webp&imageView&quality=75&thumbnail=750x0",
        "https://yanxuan.nosdn.127.net/03b1449a34931dce521dc1a8ba01ff04.png?type=webp&imageView&quality=75&thumbnail=750x0",
        "https://yanxuan.nosdn.127.net/119c18336c9cf9065d7caa4e213e3727.jpg?type=webp&imageView&quality=75&thumbnail=750x0",
        "https://yanxuan.nosdn.127.net/f56030cc88fa234850f7ffcff41880e2.jpg?type=webp&imageView&quality=75&thumbnail=750x0",
        "https://yanxuan.nosdn.127.net/8b05e827e62a78bb73a01f7bcddbcfd3.jpg?type=webp&imageView&quality=75&thumbnail=750x0",
        "https://yanxuan.nosdn.127.net/c25f9461ac49048b7064d45d86e8e73a.jpg?type=webp&imageView&quality=75&thumbnail=750x0"
      ]
    }
  },
  // 注册组件
  components: {
    
  }
}
</script>

<style lang="less" scoped>

// 轮播图
.swipe {
  height: 296px;
  width: 100%;
  .van-swipe {
    height: 296px;
  }
  .van-swipe-item {
    color: #fff;
    font-size: 20px;
    text-align: center;
    background-color: #39a9ed;
    img {
      width: 750px;
      height: 370px;
    }
  }
}
 
</style>

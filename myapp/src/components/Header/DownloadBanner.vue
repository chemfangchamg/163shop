<template>
  <div>
      <div class="downloadBanner">
        <div class="img">
          <img src="../../static/headerTop.webp">
        </div>
        <div class="clickClose"></div>
      </div>
  </div>
</template>

<script>
  // 引入组件

export default {
  data () {
    return {
      
    }
  },
  // 注册组件
  components: {

  }
}
</script>

<style lang="less" scoped>
  .downloadBanner{
    width: 100%;
    height: 104px;
    position: relative;
    img{
      width: 100%;
      height: 104px;
    }
    .clickClose{
      width: 19px;
      height: 19px;
      background-image: url(../../static/精灵图1.webp);
      // background-size: 230px 300px;
      position: absolute;
      left: 0;
      top: 0;
      background-position: 0 225px;
    }
  }
</style>>


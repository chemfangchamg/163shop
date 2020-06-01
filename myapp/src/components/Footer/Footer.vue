<template>
  <div>
    <div class="ft-Wrap">
      <div class="ft-Row-Btn">
        <a href="###">下载app</a>
        <a href="###">电脑版</a>
      </div>
      <div class="copyright">
        <p>
          "网易公司版权所有 © 1997-"
          "2020"
          <br />"食品经营许可证：JY13301080111719"
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  components: {
    // 注册组件
  }
};
</script>

<style lang="less" scoped>
.ft-Wrap {
  width: 100%;
  height: 250px;
  background-color: #414141;
  box-sizing: border-box;
  padding-top: 54px;
  padding-bottom: 28px;
  padding-left: 20px;
  padding-right: 20px;
  .ft-Row-Btn {
    width: 710px;
    height: 62px;
    margin-bottom: 36px;
    text-align: center;
    a {
      display: inline-block;
      width: 172px;
      height: 62px;
      text-align: center;
      line-height: 62px;
      color: #aaa;
      font-size: 18px;
      border: 1px solid;
    }
    :first-child {
      margin-right: 50px;
    }
  }
  .copyright{
    font-size: 14px;
    text-align: center;
    color: #aaaaaa;
  }
}
</style>
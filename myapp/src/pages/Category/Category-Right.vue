<template>
  <div>
    <div class="rightList">
      <div class="banner">
        <img src />
      </div>
      <div class="cateList">
        <van-grid :border="false" :column-num="3">
          <van-grid-item v-for="(item,index) in categoryL2List" :key="index">
            <p>{{item.frontName}}</p>
            <van-image :src=item.wapBannerUrl />
          </van-grid-item>
        </van-grid>
      </div>
    </div>
  </div>
</template>

<script>
// 引入组件
import { mapState } from "vuex";
export default {
  data() {
    return {};
  },
  // 计算属性
    computed: {
    ...mapState({
      // 右侧列表数据
      categoryL2List: state => {
        if (state.category.categoryRightList[0]) {
          return state.category.categoryRightList[0].subCateList
        }else{
          console.log("前三个另外处理");
        }
      }
    })
  },

  // 注册组件
  components: {}
};
</script>

<style lang="less" scoped>
.rightList {
  width: 590px;
  margin: auto;
  .banner {
    width: 100%;
    height: 120px;
    margin-bottom: 30px;
  }
}
</style>

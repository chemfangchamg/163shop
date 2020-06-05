<template>
  <div>
    <div class="category">
      <div class="categoryList">
        <div class="leftList">
          <van-sidebar v-model="activeKey">
            <van-sidebar-item
              v-for="(item,index) in categoryL1List"
              :key="index"
              :title="item.name"
              link-type="switchTab"
              :url="'/category?categoryid='+item.id"
            />
          </van-sidebar>
        </div>
        <CategoryRight></CategoryRight>
      </div>
    </div>
    <p>Category</p>
  </div>
</template>

<script>
// 引入组件
import CategoryRight from "./Category-Right";
// 引入vuex的辅助函数
import { mapState } from "vuex";
export default {
  data() {
    return {
      activeKey: 0
    };
  },
  // 注册组件
  components: {
    CategoryRight
  },
  // 生命周期函数
  beforeMount() {},
  mounted() {
    // dispatch (getCategoryData:获取左侧导航数据，getCategoryRightData：右侧列表数据)
    this.$store.dispatch("getCategoryData", this.$route.query);
    // 查询的参数来自于路由传参
    console.log("666", this.$route.query);

    // this.$store.dispatch("getCategoryRightData",this.$route.query);
    this.$store.state.isShowHeader = false;
  },
  //   计算属性
  computed: {
    ...mapState({
      // 左侧导航数据
      categoryL1List: state => state.category.categoryList
      // 右侧的数据在categoryRight中的计算属性获取
    })
  }
};
</script>

<style lang="less" scoped>
.category {
  width: 750px;
  background-color: #fff;
  .categoryList {
    width: 750px;
    display: flex;
    .leftList {
      width: 159px;
      border-right: 1px solid #ccc;
      .van-sidebar {
        width: 159px;
        a {
          color: #333;
          font-size: 28px;
          margin-left: 5px;
          margin-top: 10px;
          line-height: 36px;
        }
      }
    }
  }
}
</style>

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
      <van-grid clickable :column-num="5">
        <van-grid-item
          v-for="(item,index) in kingKongList"
          :key="index"
          :text="item.text"
          :to="item.schemeUrl"
        >
          <van-image fit="scale-down" class="kingkongImg" :src="item.picUrl" />
        </van-grid-item>
      </van-grid>
    </div>
    <!-- 新人礼包 -->
    <div class="new-Gift">
      <div class="new-Gift-Top"></div>
      <div class="new-Gift-Bottom">
        <div></div>
        <div></div>
      </div>
    </div>
    <!-- 新人专享礼 -->
    <div class="outer">
      <div class="freshGift">
        <h2>一 新人专享礼 一</h2>
        <div class="freshGift-content">
          <div class="freshGift-left">
            <span>新人专享礼包</span>
            <img src="//yanxuan.nosdn.127.net/352b0ea9b2d058094956efde167ef852.png" alt />
          </div>
          <div class="freshGift-right">
            <div class="freshGift-right-item">
              <div>
                <p>福利社</p>
                <p>今日特价</p>
              </div>

              <img
                src="https://yanxuan-item.nosdn.127.net/f444ac11115a8249a92dc95dccad6e07.png?quality=75&type=webp&imageView&thumbnail=200x200"
                alt
              />
            </div>
            <div class="freshGift-right-item">
              <div>
                <p>新人拼团</p>
                <p>1元起包邮</p>
              </div>

              <img
                src="https://yanxuan-item.nosdn.127.net/08ed8b0e068a3ff2a0aae8c427db1858.png?quality=75&type=webp&imageView&thumbnail=200x200"
                alt
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 类目热销榜categoryList -->
    <div class="outer">
      <div class="hotClass">
        <div class="moduleTitle">
          <p>类目热销榜</p>
        </div>
        <div class="item-big">
          <div v-for="(item,index) in categoryList1" :key="index" class="item">
            <p>{{item.categoryName}}</p>
            <van-image :src="item.picUrl" />
          </div>
        </div>
        <van-grid :gutter="5" :column-num="4">
          <van-grid-item v-for="(item,index) in categoryList2" :key="index">
            <van-image :src="item.picUrl" />
            <span v-text="item.categoryName"></span>
          </van-grid-item>
        </van-grid>
      </div>
    </div>

    <!-- 人气推荐popularItemList -->
    <div class="outer">
      <div class="popular">
        <van-nav-bar left-text="人气推荐" right-text="更多" class="popular-title" />
        <div class="popular-m-img">
          <div class="img-show">
            <van-image :src="categoryOne.scenePicUrl" />
          </div>
          <div class="text-show">
            <!-- <p v-text="this"></p> -->
            <p v-text="categoryOne.simpleDesc"></p>
          </div>
        </div>
        <div class="popular-s-img">
          <van-grid>
            <van-grid-item v-for="(item,index) in popularItemList" :key="index">
              <van-image :src="item.scenePicUrl" />
              <span v-text="item.simpleDesc"></span>
            </van-grid-item>
          </van-grid>
        </div>
      </div>
    </div>
    <!-- 限时购 -->
    <div class="outer">
      <div class="flashSale">
        <div class="title">限时抢购</div>
        <div class="flashSaleList">
          <van-grid clickable :column-num="3">
            <van-grid-item v-for="(item) in flashSaleList" :key="item.itemId">
              <van-image fit="scale-down" class="flashSaleImg" :src="item.showPicUrl" />
              <p>
                <span style="color:red">￥{{item.activityPrice}}</span>
                <span style="text-decoration:line-through">￥{{item.originPrice}}</span>
              </p>
            </van-grid-item>
          </van-grid>
        </div>
      </div>
    </div>
    <!-- 新品首发 -->
    <div class="outer">
      <div class="newItem">
        <div class="title">新品首发</div>
        <div class="newItemList">
          <van-grid clickable :column-num="3">
            <van-grid-item v-for="(item) in newItemList" :key="item.itemId">
              <van-image fit="scale-down" class="flashSaleImg" :src="item.listPicUrl" />
              <p>{{item.name}}</p>
              <p>
                <span style="color:red">￥{{item.sellVolume}}</span>
              </p>
            </van-grid-item>
          </van-grid>
        </div>
      </div>
    </div>

    <Page1Floor />
    <!-- 底部导航 -->
    <BottomNav />
  </div>
</template>

<script>
// 引入组件
import Page1Floor from "../../components/Page1Floor/Page1Floor";
import Slide from "../../components/Slide/Slide";
import BottomNav from "../../components/BottomNav/BottomNav";
// 通过dispatch提交对应的action

// 引入vuex的辅助函数
import { mapState } from "vuex";

export default {
  data() {
    return {
      // categoryOne:[]
    };
  },
  // 注册组件
  components: {
    Page1Floor,
    Slide,
    BottomNav
  },
  // 生命周期函数
  beforeMount() {
    // dispatch
    this.$store.dispatch("getHomeData");
    this.$store.state.isShowHeader = true
  },
  // 计算属性，取得数据
  computed: {
    ...mapState({
      // 商品宫格的数据
      kingKongList: state => state.home.kingKongModule.kingKongList,
      // 热榜数据
      categoryList1: state => state.home.categoryList1,
      categoryList2: state => state.home.categoryList2,
      // 人气推荐
      popularItemList: state => state.home.popularItemList,
      //categoryOne: state => {return state.home.popularItemList[0]}
      // 限时购数据
      flashSaleList: state => state.home.flashSaleList,
      // 新品
      newItemList: state => state.home.newItemList,
      isShowHeader:state => state.isShowHeader
    }),
    categoryOne() {
      return this.popularItemList[0] || {};
    }
  }
};
</script>

<style lang="less" scoped>
.kingkongImg {
  width: 110px;
  height: 110px;
}
// 新人红包
.new-Gift {
  width: 690px;
  .new-Gift-Top {
    width: 100%;
    height: 240px;
    background: url("https://yanxuan.nosdn.127.net/5d07f2917f7831cd868fc0a0cdf4b9b5.jpeg?quality=75&type=webp&imageView&thumbnail=750x0")
      0% 0%;
    background-size: 100% 100%;
  }
  .new-Gift-Bottom {
    width: 100%;
    height: 220px;
    background-color: #fff;
    margin: 20px;
    border-color: red;
    box-sizing: border-box;
    display: flex;
    div {
      flex: 1;
    }
    :first-child {
      background: url("https://yanxuan.nosdn.127.net/a526ae177b5302d3143d88520d330604.png?quality=75&type=webp&imageView&thumbnail=375x0")
        0% 0%;
      background-size: 100% 100%;
    }
    :last-child {
      background: url("https://yanxuan.nosdn.127.net/b601a0fdb7e0ae4ee2affd12182b6971.png?quality=75&type=webp&imageView&thumbnail=375x0")
        0% 0%;
      background-size: 100% 100%;
    }
  }
}
// 新人专享
.freshGift {
  width: 690px;
  margin: auto;
  position: relative;
  overflow: hidden;
  h2 {
    padding: 20px;
    font-size: 36px;
    text-align: center;
  }
  .freshGift-content {
    .freshGift-left {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
      float: left;
      width: 340px;
      height: 430px;
      font-size: 36px;
      background-color: #f9e9cf;
      margin-right: 10px;
      img {
        width: 260px;
        height: 260px;
      }
    }
    .freshGift-right {
      float: right;

      .freshGift-right-item {
        display: flex;
        justify-content: space-between;
        background-color: #f9e9cf;
        margin-bottom: 10px;
        div {
          margin-top: 20px;
          p {
            &:nth-child(1) {
              font-size: 24px;
            }
            &:nth-child(2) {
              font-size: 24px;
            }
          }
        }
      }
      img {
        width: 210px;
      }
    }
  }
}

// 类目热销
.outer {
  width: 750px;
  background-color: #ffffff;
}
.hotClass {
  width: 690px;
  margin: auto;
  margin-top: 20px;
  background-color: #fff;
  .moduleTitle {
    width: 100%;
    height: 100px;
    p {
      font-size: 32px;
      text-align: left;
      line-height: 100px;
    }
  }
  .item-big {
    width: 690px;
    display: flex;
    div {
      flex: 1;
      margin: 10px;
      text-align: center;
      .van-image {
        width: 50%;
        float: right;
      }
      p {
        float: left;
        line-height: 200px;
      }
    }
    .item:nth-child(1) {
      background-color: #f9f3e4;
    }
    .item:nth-child(2) {
      background-color: #ebeff6;
    }
  }
}
// 人气推荐
.popular {
  .popular-title {
    width: 100%;
    padding: 30px;
    height: 100px;
  }
  .popular-m-img {
    width: 690px;
    height: 280px;
    margin: 30px;
    background-color: #fef0df;
    box-sizing: border-box;
    display: flex;
    .img-show {
      flex: 1;
      width: 280px;
      height: 280px;
      van-image {
        height: 280px;
      }
    }
    .text-show {
      flex: 1;
      padding: 20px 50px;
      text-align: center;
      font-size: 28px;
    }
  }
}

// 限时购
.flashSale {
  width: 690px;
  margin: auto;

  .flashSaleList {
    .van-image {
      background-color: #f5f5f5;
    }
    p {
      line-height: 80px;
    }
  }
}
// 新品
.newItem {
  width: 690px;
  margin: auto;
  .newItemList {
    .van-image {
      background-color: #f5f5f5;
    }
    p{
      font-size: 16px;
    }
  }
}
</style>



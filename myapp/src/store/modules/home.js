/**
 * home组件用的的请求，状态数据等都在这个文件中
 *  
 * 数据分析：中部的分类+图片展示的数据在kingKongModule数组中
 *  - kingKongModule数组中元素对应的是每一个方框
 *  - indexActivityModule  新人专享礼
 *  - categoryHotSellModule  中 categoryList  类目热销榜
 *  - itemPicBeanList榜内数据
 *  - newItemList 新品首发
 *  - flashSaleModule  中的itemList限时抢购
    - policyDescList 快速退款
 *  - indexActivityModule 新人专享
    - popularItemList 人气推荐
 * */
// 引入api中的方法
import { reqHomeData } from '../../../api'

// 保存状态数据
const state = {
    HomeData: [], // 首页所有数据
    kingKongModule: [], // 类型分类数据（商品宫格）
    indexActivityModule: [], //新人专享数据
    categoryList1: [], // 热销榜数据
    categoryList2: [], // 热销榜数据
    popularItemList: [], // 人气推荐数据
    flashSaleList: [], // 限时购
    newItemList:[], // 新品
}
// 直接修改数据的方法
const mutations = {
    // 得到首页所有数据的方法
    RECEIVE_REQHOMEDATA (state,HomeData){
        state.HomeData = HomeData, // 总的
        state.kingKongModule = HomeData.kingKongModule // 商品宫格
        state.categoryList2 = HomeData.categoryHotSellModule.categoryList
        state.categoryList1 = state.categoryList2.splice(0,2)
        // 人气推荐数据
        state.popularItemList= HomeData.popularItemList
        // 限时购数据
        state.flashSaleList = HomeData.flashSaleModule.itemList
        // 新品首发
        state.newItemList = HomeData.newItemList
        console.log(state.newItemList);
    }
}
// 间接修改状态数据的方法
const actions = {
    async  getHomeData({commit}) {
        const result = await reqHomeData()
        console.log('获得首页数据')
        // console.log(result);
        commit('RECEIVE_REQHOMEDATA',result.data.data)
        // 提交到直接修改的方法中去（方法，数据）
    }
}
export default {
    state,
    actions,
    mutations,
}
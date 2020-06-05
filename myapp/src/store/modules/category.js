// category组件用的的请求,数据
// 引入api中的方法
import { reqCategoryData } from '../../../api'
// import { reqCategoryRightData } from '../../../api'
// 保存状态数据
const state = {
    categoryList: [], // 左边导航栏的数据
    // leftList: [], // 左边导航栏的数据
    categoryRightList: [], // 右边的数据
    bigImgUrl: "", // 大图的数据
}

const mutations = {
    // 获取本页数据的方法
    RECEIVE_REQCATEGORY(state, categoryList) {
        // 左侧导航的数据
        state.categoryList = categoryList
    },
    RECEIVE_REQCATEGORYRIGHT(state, categoryRightList) {
        // 右侧列表数据
        state.categoryRightList = categoryRightList
    }
}

const actions = {
    // 获得左侧分类数据
    async  getCategoryData({ commit },reqItem) {
        const result = await reqCategoryData(reqItem)
        console.log('获得分类页数据',result.data.data2)
        commit('RECEIVE_REQCATEGORY', result.data.data1)
        // 提交到直接修改的方法中去（方法，数据）
        commit('RECEIVE_REQCATEGORYRIGHT', result.data.data2)

    },
    // 根据传入的参数获取右侧的列表数据
    // async  getCategoryRightData({ commit },reqItem) {
    //     const result = await reqCategoryRightData(reqItem)
    //     console.log('获得分类页右侧数据')
    //     console.log(result.data.data);
    //     commit('RECEIVE_REQCATEGORYRIGHT', result.data.data)
    //     // 提交到直接修改的方法中去（方法，数据）
    // },
}
export default {
    state,
    actions,
    mutations,
}
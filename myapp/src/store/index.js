// store的代表文件（这是我自己的叫法）
/**
 *  引入modules(modules/index。js中已经将模块全部引入了)
 *  引入首页home模块
 *  
 * */
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

// 引入模块
import modules from './modules'

// 实例化Vuex仓库并暴露出去
export default new Vuex.Store(
    {
        modules,
        // 没有引入公共的state，mutation，action等
    }
)
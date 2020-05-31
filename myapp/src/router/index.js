// 引入vue
import Vue from 'vue'
// 引入VueRouter
import VueRouter from 'vue-router'
// 引入routes
import routes from './routes'


// 声明使用路由
Vue.use(VueRouter)
const router = new VueRouter({
    mode: 'hash', // 设置路由地址的模式---hash是带#,history---不带#
  routes,  
  
})



// 实例化路由器对象并暴露出去
export default router
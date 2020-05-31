// 引入组件，注册路由,暴露出一个数组

// 引入测试页面
// console.log(@);

import Test1 from '../pages/test/test1.vue'
import Test2 from '../pages/test/test2.vue'
import Home from '../pages/Home/Home.vue'

// 暴露路由
export default[
    {
        path:'/home',
        component:Home
    },
    {
        path:'/test1',
        component:Test1
    },
    {
        path:'/test2',
        component:Test2
    },
]
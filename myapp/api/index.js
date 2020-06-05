// 引入二次封装的axios文件
import ajax from './ajax'

// 获取首页数据
export const reqHomeData = ()=>{
    return ajax.get('api/home')
}
// 获取分类页数据
export const reqCategoryData = (reqItem)=>{
    // 根据传入参数的不同而得到不同的数据
    return ajax.get('api/category',{params:reqItem})
}

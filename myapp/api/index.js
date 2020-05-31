// 引入二次封装的axios文件
import ajax from './ajax'

// 获取首页数据
export const reqHomeData = ()=>{
    console.log("发送get")
    return ajax.get('api/home')
}
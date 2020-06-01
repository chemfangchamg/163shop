// 对axios进行二次封装
import axios from 'axios'

// 1. 配置一个通用的基础路径和请求超时时间
const ajax = axios.create({
    // 注意大小写
    baseURL: '', // 前缀路径
    timeOut: 20000 // 连接请求超时时间
  })


// 请求拦截器
ajax.interceptors.request.use(
    (config)=>{        
        return config
    },
    (err)=>{
        console.log(err)
    }
)


// 响应拦截器
ajax.interceptors.response.use(
    (response)=>{
        return response
    },
    (err)=>{
        console.log("错误了");
        console.log(err)
    }
)

// 暴露
export default ajax
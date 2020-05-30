// 封装ajax
import axios from 'axios'

// 创建一个新的axios
const service = axios.creat({
    baseURL: 'localhost:3000', // url = base url + request url
    timeout: 20000 // 请求超时时间
})

// 请求拦截器
service.intercepters.request.use(
    (config) => {
        return config
    },
    (err) => {
        console.log(err)
    })


// 响应拦截器
service.intercepters.response(
    (response)=>{
        console.log(response)
    },
    (err)=>{
        console.log(err)
    }
)
export default service
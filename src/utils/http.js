// 对axios进行封装
import axios  from 'axios'
import { ElMessage } from 'element-plus'

const httpInstance = axios.create({
  baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
  timeout: 5000,
})

// 配置请求拦截器
httpInstance.interceptors.request.use((config) => {
  return config
}, e => Promise.reject(e))

// 配置响应拦截器
httpInstance.interceptors.response.use(res => res.data, e=> {
  // 统一错误提示
  ElMessage({
    type:'warning',
    message:e.response.data.message
  })
  return Promise.reject(e)
  
})

export default httpInstance
// 对axios进行封装
import axios  from 'axios'
import { ElMessage } from 'element-plus'
import { useUserStore } from '@/stores/userStore'
import router from '@/router'

const httpInstance = axios.create({
  baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
  timeout: 5000,
})

// 配置请求拦截器
httpInstance.interceptors.request.use((config) => {
  // 1.从pinia中获取数据
  const userStore = useUserStore()
  // 2.按照后端要求拼接token
  const token = userStore.userInfo.token
  if(token){
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
}, e => Promise.reject(e))

// 配置响应拦截器
httpInstance.interceptors.response.use(res => res.data, e=> {
  // 统一错误提示
  ElMessage({
    type:'warning',
    message:e.response.data.message
  })
  // 401token失效处理
  // 1.清除本地用户数据
  // 2.跳转到登录页
  if(e.response.status === 401){
    const userStore = useUserStore()
    userStore.clearUserInfo()
    router.push('/login')
  }
  return Promise.reject(e)
  
})

export default httpInstance
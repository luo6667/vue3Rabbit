// 封装倒计时逻辑函数
import { ref, computed, onUnmounted } from 'vue'
import dayjs from 'dayjs'

export const useCountDown = () => {
  let timer = null
  // 响应式数据
  const formatTime = ref(0)
  // 格式化时间为xx分xx秒
  const timegap = computed(() => { 
    return dayjs.unix(formatTime.value).format('mm分ss秒')
   })
  // 开启倒计时函数
  const start = (currentTime) => {
    // 开启倒计时的逻辑
    // 核心逻辑 每隔1s减1
      formatTime.value = currentTime
      timer = setInterval(()=>{
        formatTime.value--
      },1000)
  }
  // 组件销毁时清除定时器
  onUnmounted(() => {
    timer && clearInterval(timer)
  })
  return{
    formatTime,
    start,
    timegap
  }
}
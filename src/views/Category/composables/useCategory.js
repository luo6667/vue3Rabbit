// 封装分类数据业务相关代码
import { getCategoryAPI } from '@/apis/category'
import { useRoute } from 'vue-router'
import { onMounted, ref } from 'vue'
import { onBeforeRouteUpdate } from 'vue-router'
export function useCategory(){
  // 获取数据
  const categoryData = ref({})
  const route = useRoute()

  const getCategory = async (id = route.params.id) => {
    const res = await getCategoryAPI(id)
    categoryData.value = res.result
  }
  onMounted(() => {
    getCategory()
  })

  // 在路由参数变化的时候 可以把分类数据接口重新发送
  onBeforeRouteUpdate((to) => {
    getCategory(to.params.id)
    // 存在问题，要使用最新的路由参数请求最新的分类数据
  })
  return{
    categoryData
  }
}
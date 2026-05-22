<script setup>
    import LayoutNav from './components/LayoutNav.vue';
    import LayoutHeader from './components/LayoutHeader.vue';
    import LayoutFooter from './components/LayoutFooter.vue';
    import LatoutFixed from './components/LayoutFixed.vue'
    import { onMounted } from 'vue'

    // 触发获取导航列表数据的action
    import { useCategoryStore} from '@/stores/category'

    const categoryStore = useCategoryStore()

    onMounted(() => categoryStore.getCategoryList())
</script>


<template>
  <div>
    <LatoutFixed></LatoutFixed>
    <LayoutNav></LayoutNav>
    <LayoutHeader></LayoutHeader>
    <!-- 二级路由出口 -->
     <router-view></router-view>
    <LayoutFooter></LayoutFooter>
    
  </div>
</template>
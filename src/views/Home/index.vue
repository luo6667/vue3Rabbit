<script setup>
  import HomeBanner from './components/HomeBanner.vue'
  import HomeNew from './components/HomeNew.vue'
  import HomeHot from './components/HomeHot.vue'
  import homeProduct from './components/HomeProduct.vue'
  import HomeCategory from './components/HomeCategory.vue'
  import Homepanel from './components/Homepanel.vue'
</script>

<template>
  <div class="container">
    <HomeCategory />
    <HomeBanner />
  </div>
    <HomeNew />
    <HomeHot />
    <homeProduct />
    <!-- 测试面板组件 -->
     <Homepanel title="新鲜好物" sub-title="新鲜好物 好多商品">
       
     </Homepanel>
     <Homepanel title="人气推荐" sub-title="人气推荐 好多商品">
       
     </Homepanel>
</template>
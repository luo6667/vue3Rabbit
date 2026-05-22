<script setup></script>

<template>
  <!-- 一级路由出口组件 -->
   <router-view></router-view>
  <el-button type="primary" disabled>Primary</el-button>
  <div class="test">测试</div>
</template>

<style scoped lang="scss">
    .test{
      color: $priceColor;
    }
</style>

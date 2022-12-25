<template>
  <el-main class="main">
    <el-scrollbar>
      <RouterView></RouterView>
    </el-scrollbar>
  </el-main>
</template>

<script setup>
import { RouterView } from "vue-router";
</script>

<style lang="scss" scoped>
.main {
  height: calc(100% - 300px);
  :deep(.el-scrollbar__view) {
    /*height: 50%;*/
  }
}
</style>

<template>
  <el-main>
    <el-scrollbar>
      <RouterView></RouterView>
    </el-scrollbar>
  </el-main>
</template>

<script setup>
import { RouterView } from "vue-router";
</script>

<style lang="scss" scoped></style>

<template>
  <el-container class="layout-container">
    <MenuLeft />

    <el-container direction="vertical" class="main-container">
      <HeaderBar />
      <MainContent class="main" />
    </el-container>
  </el-container>
</template>
<script setup>
import HeaderBar from "../components/layouts/HeaderBar.vue";
import MenuLeft from "../components/layouts/MenuLeft.vue";
import MainContent from "../components/layouts/MainContent.vue";
import { useRoute } from "vue-router";
import { ref, computed } from "vue";

const router = ref(useRoute());
const isNotFound = computed(() => {
  return router.value.name === "notFound";
});
</script>

<style lang="scss" scoped>
.layout-container {
  height: 100vh;
}
.layout-container .el-header {
  position: relative;
  background-color: var(--el-color-primary-light-7);
  color: var(--el-text-color-primary);
  border: 1px solid red;
}
.layout-container .el-aside {
  color: var(--el-text-color-primary);
  background: var(--el-color-primary-light-8);
}
.layout-container .el-menu {
  border-right: none;
}
.layout-container .el-main {
  padding: 0;
}
.layout-container .toolbar {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  right: 20px;
}
.main-container {
  max-width: 70vw;
  margin: 20px auto 0px;
  .main {
    margin-top: 20px;
  }
}
</style>

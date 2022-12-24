<template>
  <el-aside class="menu-left">
    <el-scrollbar>
      <el-menu default-active="2" class="el-menu-vertical" :router="true">
        <div class="menu-header">Farmhub</div>
        <el-sub-menu index="1">
          <template #title>
            <el-icon><Tools /></el-icon>
            <span>Tools</span>
          </template>
          <el-menu-item index="/encode">Encrypt tool</el-menu-item>
        </el-sub-menu>
        <el-menu-item index="/navigator">
          <el-icon><icon-menu /></el-icon>
          <span>Navigator Two</span>
        </el-menu-item>
        <el-menu-item index="/navigator" disabled>
          <el-icon><document /></el-icon>
          <span>Navigator Three</span>
        </el-menu-item>
        <el-menu-item index="/navigator">
          <el-icon><setting /></el-icon>
          <span>Navigator Four</span>
        </el-menu-item>
      </el-menu>
    </el-scrollbar>
  </el-aside>
</template>

<script setup>
import {
  Document,
  Menu as IconMenu,
  Tools,
  Setting,
} from "@element-plus/icons-vue";
</script>

<style lang="scss" scoped>
.menu-left {
  background-color: white;
  height: 100vh;
  .el-menu {
    height: 100vh;
    /*padding-top: 20px;*/
    padding: 20px;
    :deep(.el-sub-menu__title) {
      border-radius: 8px;
    }

    .el-sub-menu__title span,
    .el-menu-item {
      border-radius: 8px;
      color: rgba(51, 48, 60, 0.68);
      font-weight: 600;
      &.is-active {
        color: var(--el-color-primary);
      }
    }

    .menu-header {
      margin-bottom: 20px;
      font-size: 30px;
      font-weight: bold;
      letter-spacing: 2px;
      padding-left: calc(
        var(--el-menu-base-level-padding) + var(--el-menu-level) *
          var(--el-menu-level-padding)
      );
    }
  }
}
</style>

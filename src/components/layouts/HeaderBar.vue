<template>
  <el-card class="header">
    <div class="header-content">
      <div class="left"></div>
      <div class="right">
        <el-icon><Bell /></el-icon>
        <v-icon name="bi-moon-stars" @click.stop="toggleDark()" />
        <el-avatar
          src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        />
      </div>
    </div>
  </el-card>
</template>

<script setup>
import { useDark, useToggle } from "@vueuse/core";
import { Bell } from "@element-plus/icons-vue";

const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>

<style lang="scss" scoped>
.header {
  height: 60px;
  border-radius: 8px;
  border: none !important;
  box-shadow: 0px 14px 23px -15px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  flex-shrink: 0;
  /*justify-content: space-between;*/
  width: 100%;
  :deep(.el-card__body) {
    width: 100%;
  }
  &-content {
    width: 100%;
    display: flex;
    justify-content: space-between;

    .right {
      cursor: pointer;
      user-select: none;
      display: flex;
      align-items: center;
      gap: 20px;
      i {
        font-size: 20px;
        font-weight: bold;
      }
    }
  }
}
</style>

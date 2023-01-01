<template>
  <div class="menu-left">
    <el-scrollbar>
      <el-menu
        class="el-menu-vertical"
        :router="true"
        :collapse="!openMenu"
        :default-active="activePath"
      >
        <div class="menu-header">
          <p v-if="openMenu" @click.stop="router.push('/')">Farmhub</p>
          <div class="pin" @click.stop="openMenu = !openMenu"></div>
        </div>

        <el-sub-menu index="1">
          <template #title>
            <el-icon><Tools /></el-icon>
            <span>Tools</span>
          </template>
          <el-menu-item index="/encode">Encrypt tool</el-menu-item>
          <el-menu-item index="/jsonview">Json tool</el-menu-item>
        </el-sub-menu>
        <el-menu-item index="/navigator">
          <el-icon><icon-menu /></el-icon>
          <span>Navigator Two</span>
        </el-menu-item>
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script setup>
import { Menu as IconMenu, Tools } from "@element-plus/icons-vue";
import { useRouter, useRoute } from "vue-router";
import { ref, watch } from "vue";

const openMenu = ref(true);
const router = useRouter();
const route = useRoute();
const activePath = ref(route.path);
watch(
  () => route.path,
  (val) => {
    activePath.value = val;
  }
);
</script>

<style lang="scss" scoped>
.menu-left {
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  height: 100vh;
  .el-menu {
    &:not(.el-menu--collapse) {
      width: 300px;
    }
    height: 100vh;
    :deep(.el-sub-menu__title) {
      border-radius: 8px;
    }
    border-right: unset;

    .el-sub-menu__title span,
    .el-menu-item {
      border-radius: 8px;
      font-weight: 600;
      &.is-active {
        color: var(--el-color-primary);
      }
    }
    .menu-header {
      cursor: pointer;
      user-select: none;
      margin-bottom: 20px;
      font-size: 30px;
      font-weight: bold;
      letter-spacing: 2px;
      padding-top: 30px;
      padding-right: 20px;
      padding-left: calc(
        var(--el-menu-base-level-padding) + var(--el-menu-level) *
          var(--el-menu-level-padding)
      );
      display: flex;
      gap: 10px;
      align-items: center;
      width: 100%;
      justify-content: space-between;
      .pin {
        /*box-shadow: 0px 0px 20px rgb(121 109 241 / 70%);*/
        animation: glowPin 0.5s ease-in-out infinite;
        justify-self: flex-end;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        border: solid 2px var(--el-color-primary);
        display: flex;
        justify-content: center;
        align-items: center;
        &::after {
          content: "";
          width: 10px;
          height: 10px;

          border-radius: 50%;
          transition: all 0.6s;
        }
      }
    }
    &:not(.el-menu--collapse) {
      .menu-header .pin::after {
        background-color: var(--el-color-primary);
      }
    }
  }
}
@keyframes glowPin {
  to {
    /*box-shadow: 0px 0px 20px 5px rgb(121 109 241 / 40%);*/
  }
}
</style>

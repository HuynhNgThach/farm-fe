<template>
  <el-button class="btn-custom" :type="type">
    <span>{{ text }}</span>
    <v-icon :name="icon" class="icon"></v-icon>
  </el-button>
</template>

<script setup>
defineProps(["icon", "text", "type"]);
</script>

<style lang="scss" scoped>
.btn-custom {
  .icon {
    margin-left: 10px;
  }
}
</style>

<template>
  <v-main>
    <div class="main-container">
      <AppBar v-if="!notfound" />
      <router-view />
    </div>
  </v-main>
</template>

<script setup>
import AppBar from "./AppBar.vue";
import { defineProps } from "vue";

const props = defineProps({
  notfound: Boolean,
});
</script>
<style lang="scss">
.main-container {
  padding: 20px 0;
  max-width: 90%;
  margin: 0 auto;
  height: 100%;
  display: flex;
  flex-direction: column;
  .card {
    margin-top: 20px;
    background: rgb(var(--v-theme-blockColor)) !important;
    flex-grow: 1;
    border-radius: 10px;
    padding: 24px;
  }
}
</style>

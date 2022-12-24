<template>
  <router-view />
</template>
<script setup>
import { useStore } from "vuex";
import { onMounted } from "vue";
const store = useStore();
onMounted(() => {
  store.dispatch("doInit");
});
</script>

<style lang="scss">
.v-application {
  background: rgb(var(--v-theme-backgroundColor)) !important;
}
</style>

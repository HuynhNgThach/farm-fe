<template>
  <v-app id="inspire">
    <AppDrawer v-if="!isNotFound" />
    <AppContent :notfound="isNotFound" />
  </v-app>
</template>
<script setup>
import AppDrawer from "../components/layouts/AppDrawer.vue";
import AppContent from "../components/layouts/AppContent.vue";
import { useRoute } from "vue-router";
import { ref, computed } from "vue";

const router = ref(useRoute());
const isNotFound = computed(() => {
  return router.value.name === "notFound";
});
</script>

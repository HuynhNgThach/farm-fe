<template>
  <v-app id="inspire">
    <!--<v-layout>-->
    <AppDrawer />
    <AppContent />

    <!--</v-layout>-->
  </v-app>
</template>
<script>
import AppDrawer from "../components/layouts/AppDrawer.vue";
import AppContent from "../components/layouts/AppContent.vue";
export default {
  components: {
    AppDrawer,
    AppContent,
  },
};
</script>

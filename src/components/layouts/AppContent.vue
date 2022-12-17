<template>
  <v-main>
    <div class="main-container">
      <AppBar />
      <router-view />
    </div>
  </v-main>
</template>

<script>
import AppBar from "./AppBar.vue";

export default {
  name: "AppContent",
  components: { AppBar },
};
</script>
<style lang="scss">
.main-container {
  padding-top: 20px;
  max-width: 90%;
  margin: 0 auto;
}
</style>

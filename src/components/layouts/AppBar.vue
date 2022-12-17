<template>
  <div class="app-bar">
    <v-spacer></v-spacer>

    <div class="right">
      <v-badge content="2" color="error">
        <v-icon>mdi-bell-outline</v-icon>
      </v-badge>

      <v-btn
        variant="plain"
        :icon="
          theme.global.current.value.dark
            ? 'mdi-white-balance-sunny'
            : 'mdi-weather-night'
        "
        @click="toggleTheme"
      ></v-btn>
    </div>
  </div>
</template>

<script>
import { useTheme } from "vuetify";

export default {
  name: "AppBar",
  setup() {
    const theme = useTheme();

    return {
      theme,
      toggleTheme: () =>
        (theme.global.name.value = theme.global.current.value.dark
          ? "light"
          : "dark"),
    };
  },
};
</script>
<style lang="scss">
.app-bar {
  padding: 0 1rem;
  background: rgb(var(--v-theme-blockColor)) !important;
  height: 70px;
  position: sticky;
  display: flex;
  align-items: center;
  /*top: 10px;*/
  border-radius: 5px;
  box-shadow: 0 3px 3px -2px rgba(0, 0, 0, 0.2),
    0 3px 4px 0 rgba(12, 16, 27, 0.15), 0 1px 8px 0 rgba(0, 0, 0, 0.12);

  width: 100% !important;
  margin: 0 auto !important;
  .right {
    display: flex;
    gap: 10px;
    align-items: center;
    cursor: pointer;
  }
}
</style>

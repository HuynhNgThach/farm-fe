<template>
  <v-navigation-drawer elevation="5" width="256">
    <v-list>
      <v-list-item
        prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg"
        title="thachhn3"
        subtitle="thachhn3@vng.com.vn"
      ></v-list-item>
    </v-list>

    <v-divider></v-divider>

    <v-list density="compact" nav>
      <v-list-item
        prepend-icon="mdi-folder"
        title="My Files"
        value="myfiles"
      ></v-list-item>
      <v-list-item
        prepend-icon="mdi-account-multiple"
        title="Encode Tool"
        value="Encode Tool"
      ></v-list-item>
      <v-list-item
        prepend-icon="mdi-star"
        title="Encode Tool"
        value="Encode Tool"
      ></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
// Utilities
export default {
  name: "DashboardCoreDrawer",
  props: {
    expandOnHover: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    items: [],
  }),
  computed: {},
  methods: {},
};
</script>

<style lang="scss">
.v-navigation-drawer {
  .v-navigation-drawer__content {
    background-color: rgb(var(--v-theme-blockColor)) !important;
  }
}
</style>

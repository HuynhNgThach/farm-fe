<template>
  <v-navigation-drawer elevation="5" width="300">
    <v-list>
      <v-list-item
        prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg"
        title="thachhn3"
        subtitle="thachhn3@vng.com.vn"
      ></v-list-item>
    </v-list>

    <v-divider></v-divider>

    <v-list density="compact" nav class="menu">
      <v-list-subheader>Apps & tool</v-list-subheader>

      <v-list-item
        prepend-icon="mdi-folder"
        title="My Files"
        value="myfiles"
      ></v-list-item>
      <v-list-group value="Encode/decode tools">
        <template v-slot:activator="{ props }">
          <v-list-item
            prepend-icon="mdi-star"
            v-bind="props"
            title="Encode/decode tools"
          ></v-list-item>
        </template>

        <v-list-item
          :title="'Base64 encode/decode'"
          :value="'Base64 encode/decode'"
        ></v-list-item>
        <v-list-item
          :title="'Base64 encode/decode'"
          :value="'Base64 encode/decode1'"
        ></v-list-item>
      </v-list-group>
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
  border-right: unset;
  .v-navigation-drawer__content {
    background-color: rgb(var(--v-theme-blockColor)) !important;
  }
  .menu {
    margin-top: 30px;
  }
}
</style>

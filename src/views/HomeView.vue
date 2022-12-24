<template>home</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["getTheme"]),
  },
  mounted: async () => {},
};
</script>

<style lang="scss"></style>

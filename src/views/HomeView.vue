<template>
  <v-card class="card"> dark </v-card>
</template>

<script>
import { mdiAccount } from "@mdi/js";
import { doGetSupportMethod } from "../services";
import { mapGetters } from "vuex";
import { saveToStorage, getFromStorage } from "../utils";
export default {
  data: () => ({
    mdiAccount,
  }),
  computed: {
    ...mapGetters(["getTheme"]),
  },
  mounted: async () => {
    const resp = await doGetSupportMethod();
    console.log(resp);
    saveToStorage("test", "resp");
    console.log(getFromStorage("test"));
  },
};
</script>

<style lang="scss"></style>

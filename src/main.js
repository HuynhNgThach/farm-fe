import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import themes from "./theme";
// Vuetify
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import store from "./store";

import { aliases, md } from "vuetify/iconsets/md";

const vuetify = new Vuetify({
  defaults: {
    VCard: {
      elevation: 4,
    },
  },
  themes: {
    light: {
      ...themes.light,
    },
    dark: {
      ...themes.dark,
    },
  },
  icons: {
    defaultSet: "md",
    aliases,
    sets: {
      md,
    },
  },
});

import "./assets/base.css";

const app = createApp(App);

app.use(router);
app.use(vuetify);
app.use(store);

app.mount("#app");

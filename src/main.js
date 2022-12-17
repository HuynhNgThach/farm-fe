import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import themes from "./theme";
// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    themes: {
      light: {
        colors: themes.light,
      },
      dark: {
        colors: themes.dark,
      },
    },

    defaultTheme: "dark",
  },
});

import "./assets/base.css";

const app = createApp(App);

app.use(router);
app.use(vuetify);

app.mount("#app");

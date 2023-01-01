import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { autoAnimatePlugin } from "@formkit/auto-animate/vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import "./assets/base.css";
import { OhVueIcon, addIcons } from "oh-vue-icons";
import "./styles/index.scss";
import {
  MdKeyboardarrowright,
  CoSwapHorizontal,
  BiMoonStars,
} from "oh-vue-icons/icons";

addIcons(MdKeyboardarrowright, CoSwapHorizontal, BiMoonStars);

const app = createApp(App);
app.component("v-icon", OhVueIcon);
app.use(router);
app.use(store);
app.use(ElementPlus, {});
app.use(autoAnimatePlugin);
app.mount("#app");

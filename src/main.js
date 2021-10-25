import { createApp } from "vue";
import App from "./App.vue";
import "@/assets/css/tailwind.css";

import { VueSpinners } from "@saeris/vue-spinners";
import VueChartkick from "vue-chartkick";
import "chartkick/chart.js";

import router from "@/router";
import filters from "@/Filters";

const app = createApp(App).use(router).use(VueSpinners);
app.use(VueChartkick);
app.config.globalProperties.$filters = filters;
app.mount("#app");

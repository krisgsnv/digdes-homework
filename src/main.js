import Vue from "vue";
import App from "./App.vue";

import "@/utils/register-assets.js";
import "@/utils/register-components.js";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");

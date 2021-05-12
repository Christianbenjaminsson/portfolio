import Vue from "vue";
import router from "./router";
import App from "./App.vue";
//import Navbar from "./components/header";

Vue.config.productionTip = false;
//Vue.component("navbar", Navbar);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");

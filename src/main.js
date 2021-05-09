import Vue from "vue";
import App from "./App.vue";
import Navbar from "./components/header";

Vue.config.productionTip = false;
Vue.component("navbar", Navbar);

new Vue({
  render: (h) => h(App),
}).$mount("#app");

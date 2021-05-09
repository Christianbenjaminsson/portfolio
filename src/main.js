import Vue from "vue";
import App from "./App.vue";
import PageHeaders from "./components/header";

Vue.config.productionTip = false;
Vue.component("headers", PageHeaders);

new Vue({
  render: (h) => h(App),
}).$mount("#app");

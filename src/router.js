import Vue from "vue";
import Router from "vue-router";
import home from "./components/home.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: home,
    },
    {
      path: "/contact",
      name: "contact",
      component: () => import("./components/contact.vue"),
    },
  ],
});

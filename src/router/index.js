import { createRouter, createWebHashHistory } from "vue-router";

import HomeView from "@/views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
  },
  {
    path: "/home",
    component: HomeView,
    name: "home",
  },

];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
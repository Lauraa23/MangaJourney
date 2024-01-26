import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../../views/HomeView.vue";

const router = [
  {
    path: "/home",
    component: "HomeView",
    name: "/Home",
  },
];

export default router;

import { createRouter, createWebHistory } from "vue-router";

import HomeView from "@/views/home/HomeView.vue";
import OneManga from "@/views/manga/OneManga.vue";

const routes = [
  {
    path: "/home",
    component: HomeView,
    name: "Home",
  },
  {
    path: "/mangas",
    component: OneManga,
    name: "OneManga",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

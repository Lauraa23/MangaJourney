import { createRouter, createWebHistory } from "vue-router";

import HomeView from "@/views/home/HomeView.vue";
import AllMangasView from "@/views/manga/AllMangasView.vue";
import OneMangaView from "@/views/manga/OneMangaView.vue";

const routes = [
  {
    path: "/home",
    component: HomeView,
    name: "Home",
  },
  {
    path: "/mangas",
    component: AllMangasView,
    name: "AllMangas",
  },
  {
    path: "/onemanga",
    component: OneMangaView,
    name: "OneManga",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

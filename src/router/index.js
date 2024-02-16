import { createRouter, createWebHistory } from "vue-router";

import HomeView from "@/views/home/HomeView.vue";
import AllMangasView from "@/views/manga/AllMangasView.vue";
import OnePageMangaView from "@/views/manga/OnePageMangaView.vue";
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
    path: "/onemanga/:name",
    component: OneMangaView,
    name: "OneManga",
  },
  {
    path: "/onepagemanga/:name/:id",
    component: OnePageMangaView,
    name: "OnePageManga",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

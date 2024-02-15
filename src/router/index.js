import { createRouter, createWebHistory } from "vue-router";

import HomeView from "@/views/home/HomeView.vue";
<<<<<<< HEAD
import OneManga from "@/views/manga/OneMangaView.vue";
=======
import AllMangasView from "@/views/manga/AllMangasView.vue";
>>>>>>> 2f446a9 (new view)

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
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

<template>
  <HomeView />
  <NavBar class="head__menu__nav" :links="navLinks" />
</template>

<script>
import HomeView from "./views/HomeView.vue";
import NavBar from "./components/navbar/NavBar.vue";

export default {
  components: { HomeView, NavBar },
  data() {
    return {
      navLinks: [
        { text: "Home", to: "/home" },
        { text: "Mangas", to: "/mangas" },
      ],
    };
  },
};
</script>
<style></style>

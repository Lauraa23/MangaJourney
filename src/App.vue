<template>
  <NavBar class="head__menu__nav" :links="navLinks" />
  <home-view />
</template>

<script>
import NavBar from "./components/navbar/NavBar.vue";
import HomeView from "./views/home/HomeView.vue";

export default {
  components: { NavBar, HomeView },
};
</script>
<style></style>

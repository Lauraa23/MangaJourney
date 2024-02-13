<template>
  <NavBar class="head__menu__nav" />
  <!-- <home-view /> -->
  <router-view />
</template>

<script>
import NavBar from "./components/navbar/NavBar.vue";
// import HomeView from "./views/home/HomeView.vue";

export default {
  components: { NavBar },
};
</script>
<style></style>

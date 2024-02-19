<template>
  <NavBar class="head__menu__nav" />
  <router-view />
</template>

<script>
import NavBar from "./components/navbar/NavBar.vue";

export default {
  components: { NavBar },
};
</script>
<style></style>

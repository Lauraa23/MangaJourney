<template>
  <header class="head">
    
    <div class="head__title">
      <h1 class="head__title__text">Manga Journey</h1>
    </div>
    <NavBar class="head__nav" :links="navLinks" />
  </header>
</template>
<script>
import NavBar from "../navbar/NavBar.vue";

export default {
  components: { NavBar },
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
<style lang="scss" scoped src="./_Header.scss">
/* .head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.2em;
  background-color: #32333a;
  color: white;
}

.title {
  font-size: 1.5em;
  font-weight: bold;
}
h1 {
  text-shadow: 2px 2px 5px #183438;
} */
</style>

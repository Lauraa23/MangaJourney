<template>
  <nav class="navigationBar">
    <div class="navigationBar__container">
      <router-link to="/home" class="navigationBar__container__logo">
        <span class="navigationBar__container__logo__text">Manga Journey</span>
      </router-link>
      <ul class="navigationBar__container__list">
        <li class="navigationBar__container__list__item">
          <router-link
            class="navigationBar__container__list__item__link"
            to="/home"
            style="text-decoration: none; color: inherit"
            >Home</router-link
          >
        </li>
        <li class="navigationBar__container__list__item">
          <router-link
            class="navigationBar__container__list__item__link"
            to="/mangas"
            style="text-decoration: none; color: inherit"
            >Mangas</router-link
          >
        </li>
      </ul>
    </div>
  </nav>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped src="./_NavBar.scss"></style>

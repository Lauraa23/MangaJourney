<template>
  <nav class="navigationBar">
    <div class="navigationBar__container">
      <router-link to="/home" class="navigationBar__container__logo">
        <span class="navigationBar__container__logo__text">Manga Journey</span>
      </router-link>
      <ul class="navigationBar__container__list">
        <li
          v-for="(link, index) in links"
          :key="index"
          class="navigationBar__container__list__item"
        >
          <router-link
            :to="link.to"
            class="navigationBar__container__list__item__link"
            >{{ link.text }}</router-link
          >
        </li>
      </ul>
    </div>
  </nav>
</template>
<script>
export default {
  props: {
    links: {
      type: Array,
      required: true,
    },
  },
};
</script>
<style lang="scss" scoped src="./_NavBar.scss"></style>

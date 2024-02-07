<template>
  <nav class="navigationBar">
    <ul class="navigationBar__list">
      <li class="navigationBar__list__items" v-for="(link, index) in links" :key="index">
        <router-link class="navigationBar__list__items__links" :to="link.to">{{ link.text }}</router-link>
      </li>
    </ul>
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
<style lang="scss" scoped src="./_NavBar.scss">
</style>

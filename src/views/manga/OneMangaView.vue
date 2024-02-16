<template>
  <h1>{{ routeId }}</h1>
  <div class="container">
    <div class="container__left">
      <div class="container__left__spam">Spam!</div>
      <div class="container__left__spam">Spam!</div>
      <div class="container__left__spam">Spam!</div>
    </div>
    <div class="container__right">
      <div class="container__right__spam">Spam!</div>
      <div class="container__right__spam">Spam!</div>
      <div class="container__right__spam">Spam!</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "OneManga",

  data() {
    return {
      routeId: null,
    };
  },
  mounted() {
    this.routeId = this.$route.params.name;
  },
};
</script>
<style lang="scss" scoped src="./_OneManga.scss"></style>

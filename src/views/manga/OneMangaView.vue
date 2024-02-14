<template>
  <div class="buttons">
    <previous-button />
    <next-button />
  </div>
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
import PreviousButton from "@/components/buttons/PreviousButton.vue";
import NextButton from "@/components/buttons/NextButton.vue";
export default {
  name: "OneManga",
  components: { PreviousButton, NextButton },
};
</script>
<style lang="scss" scoped src="./_OneManga.scss"></style>

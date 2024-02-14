<template>
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
  <previous-button />
  <next-button />
</template>
<script>
import PreviousButton from '@/components/buttons/PreviousButton.vue';
import NextButton from '@/components/buttons/NextButton.vue';
export default {
  components: { PreviousButton, NextButton },};
</script>
<style lang="scss" scoped src="./_HomeView.scss"></style>

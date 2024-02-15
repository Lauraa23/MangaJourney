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
    <div>
      <AdvancedImage :cld-img="myImg" /> 
    </div>
    </div>
</template>
<script>
import { cld } from '@/services/cloudinary/cloudinaryConfig';
import { AdvancedImage } from '@cloudinary/vue';

const myImg = cld.image('gato');

export default {
  components: {
    AdvancedImage
  },
  data() {
    return { myImg }
  }
};

</script>

<style lang="scss" scoped src="./_HomeView.scss"></style>

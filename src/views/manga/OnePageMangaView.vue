<template>
  <div class="container">
    <div class="container__buttons">
      <previous-button />
      <next-button />
    </div>
    <AdvancedImage class="container__image" :cld-img="sukunaEpisode" />
  </div>
</template>
<script>
import PreviousButton from "@/components/buttons/PreviousButton.vue";
import NextButton from "@/components/buttons/NextButton.vue";
import { cld } from "@/services/cloudinary/cloudinaryConfig";
import { AdvancedImage } from "@cloudinary/vue";

const sukunaEpisode = cld.image("mangas/sukuna");

export default {
  components: { PreviousButton, NextButton, AdvancedImage },
  data() {
    return { sukunaEpisode };
  },
};
</script>
<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 25px;

  &__buttons {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    width: 100%;
  }
}
</style>

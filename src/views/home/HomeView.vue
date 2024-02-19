<template>
  <div class="container">
    <div class="container__left">
      <div class="container__left__spam">Spam!</div>
      <div class="container__left__spam">Spam!</div>
      <div class="container__left__spam">Spam!</div>
    </div>
    <div class="container__images">
      <AdvancedImage :cld-img="jujutsu.image" @click="goToOneManga" />
      <AdvancedImage :cld-img="chainsawImage" />
    </div>
    <div class="container__right">
      <div class="container__right__spam">Spam!</div>
      <div class="container__right__spam">Spam!</div>
      <div class="container__right__spam">Spam!</div>
    </div>
  </div>
</template>
<script>
import { cld } from "@/services/cloudinary/cloudinaryConfig";
import { AdvancedImage } from "@cloudinary/vue";
import { thumbnail } from "@cloudinary/url-gen/actions/resize";

const jujutsuImage = cld.image("portadas/JujutsuKaisen");
const chainsawImage = cld.image("portadas/ChainsawMan");

jujutsuImage.resize(thumbnail().width(160).height(250));
chainsawImage.resize(thumbnail().width(160).height(250));

export default {
  components: {
    AdvancedImage,
  },
  data() {
    return {
      chainsawImage,
      jujutsu: {
        name: "JujutsuKaisen",
        epNum: 0,
        image: jujutsuImage,
      },
    };
  },
  methods: {
    goToOneManga() {
      this.$router.push(`/onemanga/${this.jujutsu.name}`);
    },
  },
};
</script>

<style lang="scss" scoped src="./_HomeView.scss"></style>

<template>
  <h1>{{ routeId }}</h1>
  <div class="container">
    <div class="container__left">
      <div class="container__left__spam">Spam!</div>
      <div class="container__left__spam">Spam!</div>
      <div class="container__left__spam">Spam!</div>
    </div>
    <div class="container__manga">
      <div class="container__manga__head">
        <AdvancedImage :cld-img="jujutsuFront" />
        <p>
          La historia gira en torno al estudiante Yūji Itadori, quien se une a
          una organización secreta de hechiceros para matar a una poderosa
          maldición llamada Ryomen Sukuna tras convertirse en su anfitrión.
        </p>
      </div>
      <div class="container__manga__episodes">
        <ul>
          <li class="container__manga__episodes__item" @click="goToOneEpisode">
            Episodio 1
          </li>

          <li class="container__manga__episodes__item">Episodio 2</li>

          <li class="container__manga__episodes__item">Episodio 3</li>

          <li class="container__manga__episodes__item">Episodio 4</li>

          <li class="container__manga__episodes__item">Episodio 5</li>
        </ul>
      </div>
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

const jujutsuFront = cld.image("portadas/JujutsuFront");

jujutsuFront.resize(thumbnail().width(140).height(210));

export default {
  name: "OneManga",
  components: {
    AdvancedImage,
  },

  data() {
    return {
      jujutsuFront,
      routeId: null,
    };
  },
  methods: {
    goToOneEpisode() {
      this.$router.push("/onepagemanga");
    },
  },
  mounted() {
    this.routeId = this.$route.params.name;
  },
};
</script>
<style lang="scss" scoped src="./_OneManga.scss"></style>

<script setup>
import { useRoute } from 'vue-router';
import Star from 'vue-material-design-icons/Star.vue';

const route = useRoute();
const { country, genre, image, name, premiered, rate, summary } = route.params;
</script>

<template>
<h1 class="movie-name">
  {{ name }}
</h1>
  <div class="movie-information">
    {{ country }} > {{ premiered }} > {{ genre }}
  </div>
<section class="show-container">
  <section class="general-information">
    <aside class="show-img">
      <figure>
        <img v-if="image" :src="image" :alt="`Movie poster: ${name}`"/>
        <img v-if="image === 0" src="@/assets/no-img.png" :alt="`Movie poster: ${name}`"/>
      </figure>
      <div class="rating">
        <Star  fillColor="#FFFFFF" fill-color="#FFFFFF" :size="40"></Star>
        <span> {{rate}}</span>

      </div>
    </aside>
    <article class="summary" v-html="summary">
    </article>
  </section>
</section>

</template>

<style lang="scss">
.movie-name {
  text-align: center;
  margin-bottom: 20px;
}
.movie-information {
  font-size: 1.125em;
  line-height: 1.75em;
  margin-bottom: 10px;
}

.general-information {
  display: flex;

  .show-img {
    flex: 0 0 auto;
    margin-right: 20px;
    text-align: center;
    font-size: 1.2em;
    background: #007aff;
    max-height: 400px;

    figure {
      margin: 0;
    }

    img {
      max-width: 100%;
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
      opacity: 0.9;
    }

    .rating {
      color: #fff;
      padding: 0 2px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  .summary {
    flex: 1;
    margin: 0;
  }
}
</style>
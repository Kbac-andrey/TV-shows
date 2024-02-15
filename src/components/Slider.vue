<script setup>
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';

import Star  from 'vue-material-design-icons/Star.vue';
import 'swiper/css';
import 'swiper/css/navigation';

defineProps(['genreCollection']);

const SWIPER_BRAKE_POINTS = {
  320: {
    slidesPerView: 1,
    spaceBetween: 10,
  },
  420: {
    slidesPerView: 2,
    spaceBetween: 10,
  },
  640: {
    slidesPerView: 3,
    spaceBetween: 20,
  },
  768: {
    slidesPerView: 4,
    spaceBetween: 40,
  },
  1024: {
    slidesPerView: 6,
    spaceBetween: 50,
  }
};
const NOT_FOUND = 'No result. Try to Search more';
</script>

<template>
  <div v-for="(value, key) in genreCollection" :key="key" class="slider-container">
    <h2 v-if="genreCollection[key]" class="slider-title"> {{ key }}</h2>
    <div class="slider-no-movie" v-if="!genreCollection[key] || !genreCollection">
      {{NOT_FOUND}}
    </div>
    <swiper
        :modules="[Navigation]"
        :lazy="true"
        :allowTouchMove="false"
        :navigation="true"
        :breakpoints="SWIPER_BRAKE_POINTS"
        class="slider"
    >
      <swiper-slide  v-for="slide in genreCollection[key]" :key="slide" class="slider-slide">
        <router-link :to="{ name: 'details', params: {
          id:slide.id,
          name: slide.name,
          country:'USA',
          premiered: slide?.premiered ? slide?.premiered : '?',
          genre: key,
          summary: slide?.summary ? slide.summary : 'no information',
          image: slide?.image?.medium ? slide.image.medium : 0,
          rate: slide?.rating?.average ? slide.rating.average : 0}}"
          class="router-link">
          <div class="slider-slide__details">
            <img v-if="slide.image" :src="slide.image.medium" alt="Movie poster"/>
            <img v-if="!slide.image" src="@/assets/no-img.png" alt="Movie poster"/>
            <div class="slider-slide__description">
              <h1>{{slide.name}}</h1>
              <div class="slider-slide__rating">
                <Star  fillColor="#FFFFFF" fill-color="#FFFFFF" :size="40"></Star>
                <span> {{slide.rating.average}}</span>
              </div>
            </div>
          </div>
        </router-link>
      </swiper-slide>
    </swiper>
  </div>
</template>

<style scoped lang="scss">
.slider-title {
  font-weight: 700;
  margin-bottom: 20px;
}
.slider-no-movie {
  font-size: 2em;
}
.slider {
  border-radius: 15px;
  margin-bottom: 15px;

  .slider-slide {
    text-align: center;
    font-size: 1.2em;
    background: #007aff;
    width: 100%;
    height: 100%;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      opacity: 0.9;
    }

    &__description {
      color: #fff;
      height: 120px;
      padding: 0 2px;
      h1 {
        font-size: 1rem;
        font-weight: bold;
        border-bottom: 1px solid #71c5bd;
        margin-bottom: 10px;
      }
    }
    &__rating{
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      align-content: center;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>
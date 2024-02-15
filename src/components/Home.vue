<script setup>
import Slider from '@/components/Slider.vue';
import { tvmazeApiState } from '@/hooks/state-api.js';
import { watch } from 'vue';

const state = tvmazeApiState();


watch(
    () => state.movies,
    (movies) => {
      state.genreCollection = state.createGenreCollection(movies);
      state.filterByGender();
    }
)
</script>

<template>
  <Slider :genreCollection="state.genreCollection"></Slider>
</template>

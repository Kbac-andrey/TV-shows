<script setup>
import { ref } from 'vue';
import { watchDebounced } from '@vueuse/core';
import { tvmazeApiState } from '@/hooks/state-api.js';
import { useRoute } from 'vue-router';

defineProps(['genres']);

const ALL_TV_SHOWS = 'All';

const route = useRoute();
const query = ref('');
const state = tvmazeApiState();
const genreValue = ref(ALL_TV_SHOWS);

watchDebounced(
    query,
    () => {
      state.query = query.value;
    },
    { debounce: 300, maxWait: 1000 },
);

const handleGenreValue = (genre) => {
  state.selectedGenre = genre;
  state.filterByGender();
  state.genres =  [ALL_TV_SHOWS, ...state.genres];
}
</script>

<template>
  <div :class="{ 'center-title': route.params.id  }" class="main-header">
    <router-link to="/" class="router-link">
      <div class="main-header--title">TV shows</div>
    </router-link>
    <section v-if="!route.params.id" class="main-header-filter-container">
      <input class="main-header-filter-search" v-model="query" type="text" placeholder="Search Shows and Peoples"/>
      <select class="main-header-filter-select" v-model="genreValue" @change="handleGenreValue(genreValue)">
        <option v-for="genre in state.genres" :value="genre" :key="genre">{{ genre }}</option>
      </select>
    </section>
  </div>
</template>



<style lang="scss">
.main-header {
  background-color: #007aff;
  height: 68px;
  justify-content: space-between;
  align-items: center;
  display: flex;
  font-size: 1rem;
  padding: 0 20px;
  position: relative;
  transition: background-color .4s;
  z-index: 2;

  &--title {
    font-size: 2em;
    color: #ffffff;
    cursor: pointer;
  }
}
.main-header-filter-search {
  padding: 5px 10px 5px 30px;
  margin-right: 20px;
  border: none;
  background: #FFFFFF;
  background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='15' height='15' viewBox='0 0 20 20'><path fill='%23838D99' d='M13.22 14.63a8 8 0 1 1 1.41-1.41l4.29 4.29a1 1 0 1 1-1.41 1.41l-4.29-4.29zm-.66-2.07a6 6 0 1 0-8.49-8.49 6 6 0 0 0 8.49 8.49z'></path></svg>");
  background-repeat: no-repeat;
  background-position: 5px 5px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.08);
  border-radius: 5px;
  width: 286px;

  &::placeholder {
    color: #545454A5;
  }
  &:focus {
    outline: none;
    box-shadow: 0 4px 10px 0 rgba(0,0,0,0.16);
  }
}
.main-header-filter-select {
  background: #FFFFFF;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.08);
  border-radius: 5px;
  height: 25px;
  border: none;
  &:focus {
    outline: none;
    box-shadow: 0 4px 10px 0 rgba(0,0,0,0.16);
  }
}
.center-title {
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: center;
}

@media only screen and (max-width: 615px) {
  .main-header {
    display: block;
    text-align: center;
    &--title {
      font-size: 1.2rem;
      margin-bottom: 5px;
    }
    .main-header-filter-container {
      text-align: center;
      display: flex;
      flex-wrap: nowrap;
      justify-content: space-between;
      align-items: center;
      .main-header-filter-search {
        padding: 5px 5px 5px 20px;
        width: 200px;
        margin-right: 10px;
      }
      .main-header-filter-select {
        background: #FFFFFF;
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.08);
        border-radius: 5px;
        width: 200px;
      }
    }
  }
}
</style>
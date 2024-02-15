<script setup>
import Header from './components/Header.vue';
</script>

<template>
  <div class="wrap">
    <header>
      <Header/>
    </header>
    <main>
      <div class="container">
        <router-view></router-view>
      </div>
    </main>
  </div>
</template>

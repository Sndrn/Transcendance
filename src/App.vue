<template>
  <div class="app">
    <!-- <Header siteName="Nom du site" menu="Menu" /> -->
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Header from './components/Header.vue';

export default defineComponent({
  components: {
    Header,
  },
});
</script>

<style>
/* Vos styles globaux ici */
</style>
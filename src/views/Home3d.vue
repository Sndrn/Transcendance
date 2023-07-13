<template>
    <div class="app">
      <Header siteName="Nom du site" menu="Menu" />
      <main>
        <!-- <Scene @loading="loading = $event" /> -->
        <Scene/>
      </main>
      <!-- <ModalLoading :show="loading" />
      <ModalLogin :show="showModal" @login="onLogin" @logout="onLogout" /> -->
    </div>
  </template>
  
  
  <script lang="ts">
  // import { ref, provide, onBeforeMount } from 'vue';
  import Header from '../components/Header.vue';
  import Scene from '../components/Scene.vue';
  // import ModalLoading from '../components/ModalLoading.vue';
  // import ModalLogin from '../components/ModalLogin.vue';
  // import eventBus from '../TSFiles/eventBus';
  // import * as OBJECTS from '../TSFiles/addObjects'
  // import * as COLLIDER from '../TSFiles/addColliders'
  
  
  export default {
    name: 'Home3D',
    components: {
      Header,
      Scene
      // ModalLoading,
      // ModalLogin
    },
    setup() {
      // const loading = ref(true);
      // const showModal = ref(false);
  
      // const openModalLoading = () => {
      //   loading.value = true;
      // };
  
      // const closeModalLoading = () => {
      //   loading.value = false;
      // };
  
      // eventBus.on('openModal', () => {
      //   showModal.value = true;
      // });
  
      // eventBus.on('closeModal', () => {
      //   showModal.value = false;
      // });
  
      // const onLogin = () => {
      //   console.log('click login');
      //   OBJECTS.fence.position.y = -50;
      //   COLLIDER.Box15.setFromObject(OBJECTS.fence);
      // };
  
      // const onLogout = () => {
      //   console.log('click logout');
      //   OBJECTS.fence.position.y = 0;
      //   COLLIDER.Box15.setFromObject(OBJECTS.fence);
      // };
  
      // onBeforeMount(() => {
      //   provide('loading', loading);
      //   provide('openModal', openModalLoading);
      //   provide('closeModal', closeModalLoading);
      // });
  
      // return {
      //   loading,
      //   showModal,
      //   onLogin,
      //   onLogout
      // };
    },
  };
  </script>
  
  
  
  <style>
  /* ... */
  </style>
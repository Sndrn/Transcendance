<template>
    <div class="Landing">
      <h1>Landing page</h1>
      <router-link to="/home3d"><button>3D</button></router-link>
      <router-link to="/home"><button>Normal</button></router-link>
    </div>
  </template>
    
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'Landing',
  });
  </script>
    
  <style scoped>
  div {
    position: absolute;
    /* display: flex; */
    width: 100%;
    height: calc(100vh - 50px);
    left: 0;
    right: 0;
    bottom: 0;
    /* padding-top: 50px; */
    box-sizing: border-box;
  }
  </style>
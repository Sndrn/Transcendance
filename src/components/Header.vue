<template>
    <header class="header">
      <div class="site-name">{{ siteName }}</div>
      <div class="menu">{{ menu }}</div>
    </header>
  </template>
  
  <script lang="ts">
  // interface HeaderProps {
  //   siteName: string;
  //   menu: string;
  // }
  
  export default {
    name: 'Header',
    props: {
      siteName: {
        type: String,
        required: true,
      },
      menu: {
        type: String,
        required: true,
      },
    },
  };
  </script>
  
  <style>
  .header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  max-width: 100%;
  height: 50px;
  background-color: #333;
  color: #fff;
  padding: 10px;
  box-sizing: border-box;
}
  
  .site-name {
    font-size: 24px; /* Taille de police du nom du site */
    font-weight: bold; /* Police en gras */
  }
  
  .menu {
    /* Ajoutez ici le style pour le menu à droite, par exemple : */
    font-size: 24px;
    font-weight: bold;
  }
  </style>
  
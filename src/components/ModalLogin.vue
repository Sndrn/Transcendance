<template>
  <div v-if="show" class="modal">
    <h1>Conditions d'acces
      <p>bla bla bla</p>
      <button @click="onLogin">Login</button> 
      <button @click="onLogout">Logout</button>
    </h1>
  </div>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ModalLogin',
  props: {
    show: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    onLogin() {
      this.$emit('login');
      console.log("login");
    },
    onLogout() {
      this.$emit('logout');
    },
  },
});
</script>
  
<style scoped>
.modal {
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
}

.modal h1 {
  background-color: #fefefe;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
}
</style>

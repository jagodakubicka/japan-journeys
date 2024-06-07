<template>
  <Navbar />

  <router-view />
  <footer>Footer content</footer>
</template>

<script lang="ts">
import Navbar from './components/Navbar.vue';
export default {
  components: { Navbar },
};
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

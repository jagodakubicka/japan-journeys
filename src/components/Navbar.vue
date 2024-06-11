<template>
  <nav>
    <router-link to="/">Home</router-link>
    <router-link :to="{ name: 'destinations' }">Destinations</router-link>
  </nav>
</template>

<script>
export default {};
</script>

<style>
nav {
  position: fixed;
  z-index: 100;
  right: 0;
  left: 0;
  padding: 1rem;
  background: rgba(93, 93, 93, 0.35);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  max-width: 600px;
  margin: 0 auto;
  border-radius: 0 0 10px 10px;
}

nav a {
  font-family: var(--brand-font);
  color: rgb(246, 246, 247);
  opacity: 0.7;
  text-decoration: none;
  margin: 0 10px;
}

nav a.router-link-exact-active {
  font-weight: bold;
  opacity: 1;
}
</style>

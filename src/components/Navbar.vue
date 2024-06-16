<template>
  <nav>
    <div class="logo-wrapper">
      <router-link to="/">Japan Journeys</router-link>
    </div>
    <div class="link-wrapper">
      <router-link to="/">Home</router-link>
      <router-link :to="{ name: 'destinations' }">Destinations</router-link>
    </div>
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
  max-width: 1200px;
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.link-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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

@media (min-width: 678px) {
  .link-wrapper {
    flex-direction: row;
  }
}
</style>

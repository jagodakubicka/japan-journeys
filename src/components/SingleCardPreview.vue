<template>
  <router-link :to="{ name: 'destination', params: { id: place.id } }">
    <div class="card">
      <div class="card-content">{{ place.title }}</div>
      <img :src="previewImg" :alt="place.title" />
    </div>
  </router-link>
</template>

<script>
import { toRefs } from 'vue';
export default {
  props: ['place'],

  setup(props) {
    const { place } = toRefs(props);
    const previewImg = place.value.images.length ? place.value.images[0] : '';

    return { previewImg };
  },
};
</script>

<style scoped>
.card {
  width: 300px;
  height: 200px;
  border-radius: 1rem;
  position: relative;
  z-index: 0;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
}
.card img {
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: inherit;
}
.card-content {
  position: relative;
  z-index: 1;
  background: rgb(0, 0, 0);
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.7) 59%,
    rgba(0, 0, 0, 0.1) 87%
  );
  width: 100%;
  padding: 1rem 0;
  border-radius: inherit;
}

@media (min-width: 998px) {
  .card {
    width: 500px;
    height: 400px;
  }
}
</style>

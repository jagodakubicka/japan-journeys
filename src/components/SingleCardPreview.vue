<template>
  <router-link :to="{ name: 'destination', params: { id: place.id } }">
    <div class="card">
      <div class="card-content">
        <h3 class="card-title">{{ place.title }}</h3>
        <div class="card-tags">
          <div v-for="tag in place.tags" :key="tag" class="card-tag">
            #{{ tag }}
          </div>
        </div>
      </div>
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
a {
  color: var(--white-color);
  text-decoration: none;
  margin: 0 10px;
}

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
  padding: 1rem;
  border-radius: inherit;
}
.card-title {
  color: var(--white-color);
  text-align: left;
  margin: 0;
  padding: 0;
}
.card-tags {
  display: flex;
  gap: 0.4rem;
  padding: 0;
  margin: 0;
}
.card-tag {
  opacity: 0.6;
}
@media (min-width: 998px) {
  .card {
    width: 400px;
    height: 300px;
  }
}
</style>

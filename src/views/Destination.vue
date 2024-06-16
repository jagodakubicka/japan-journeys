<template>
  <div class="destination-wrapper">
    <TopImg :img="singlePlace.images" />
    <div class="about">
      <h2>{{ singlePlace.title }}</h2>
      <p>{{ singlePlace.about }}</p>
    </div>
  </div>
</template>

<script>
import { useRoute } from 'vue-router';
import getSingleData from '../composables/getSingleData';
import TopImg from '../components/single-place/TopImg.vue';

export default {
  props: ['id'],
  components: { TopImg },
  setup(props) {
    const route = useRoute();
    const { error, singlePlace, load } = getSingleData(route.params.id);

    load();

    return { error, singlePlace };
  },
};
</script>

<style scoped>
.destination-wrapper {
  width: 100%;
}
.about {
  padding: 1rem;
}

@media (min-width: 689px) {
  .about {
    margin-top: -5%;
    margin-left: 5%;
    max-width: 50%;
    background-color: var(--white-color);
    color: var(--black-color);
  }
}
</style>

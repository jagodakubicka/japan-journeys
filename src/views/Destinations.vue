<template>
  <br /><br /><br />
  <div v-if="error">{{ error }}</div>
  <div v-if="places.length" class="destinations cards-list">
    <div class="cards-list__item" v-for="place in places" :key="place.id">
      <SingleCardPreview :place="place" />
    </div>
  </div>
  <div v-else>Loading...</div>
</template>

<script>
import getData from '../composables/getData';
import SingleCardPreview from '../components/SingleCardPreview.vue';
export default {
  components: { SingleCardPreview },
  setup() {
    const { places, error, load } = getData();

    load();

    return { places, error };
  },
};
</script>

<style>
.cards-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 2rem;
}
</style>

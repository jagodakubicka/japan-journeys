<template>
  <br /><br /><br />
  <div class="destinations">
    <div v-for="place in places" :key="place.id">
      <SingleCardPreview :place="place" />
    </div>
  </div>
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

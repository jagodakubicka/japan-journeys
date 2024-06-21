<template>
  <div class="home">
    <Header />
    <div class="home-wrapper">
      <AboutJapan />
      <ReasonsToVisit />
      <section>
        <h2>Top Ranked</h2>
        <div v-if="error">{{ error }}</div>
        <div v-if="favouritePlaces.length" class="cards-list">
          <div
            class="cards-list__item"
            v-for="place in favouritePlaces"
            :key="place.id">
            <SingleCardPreview :place="place" />
          </div>
        </div>
        <div v-else>Loading...</div>
        <div class="button-wrapper">
          <div class="button-primary">
            <router-link :to="{ name: 'destinations' }">See all</router-link>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import Header from '../components/Header.vue';
import SingleCardPreview from '../components/SingleCardPreview.vue';
import ReasonsToVisit from '../components/ReasonsToVisit.vue';
import AboutJapan from '../components/AboutJapan.vue';
import getData from '../composables/getData';
import { computed } from 'vue';

export default {
  name: 'HomeView',
  components: { Header, AboutJapan, SingleCardPreview, ReasonsToVisit },
  setup() {
    const { places, error, load } = getData();

    load();

    const favouritePlaces = computed(() => {
      return places.value.filter((p) => p.favourite === true);
    });
    console.log(favouritePlaces);
    return { favouritePlaces, error };
  },
};
</script>

<style scoped>
.home {
  width: 100%;
}
.home-wrapper {
  max-width: 1200px;
  margin: 0 auto;
}
.button-wrapper {
  display: flex;
  justify-content: flex-end;
}
</style>

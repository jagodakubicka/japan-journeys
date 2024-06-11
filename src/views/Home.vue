<template>
  <div class="home">
    <Header />
    <h1>Home page</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo a qui
      quae optio quos, impedit ducimus adipisci accusamus recusandae, maiores
      dolorum dolor et? Officiis quasi incidunt consequatur libero ipsam. Autem
      perferendis laborum reiciendis itaque, explicabo sapiente suscipit fugit
      quos necessitatibus iusto similique laboriosam excepturi error quidem
      mollitia, veritatis dolore nostrum? Minima culpa dicta sed adipisci
      inventore dolore et, debitis quos ab deserunt nemo odio quo repellat optio
      natus necessitatibus eius quas suscipit nam velit eligendi! Ratione harum
      excepturi dolores voluptate odio necessitatibus et fuga sapiente tempora
      non, asperiores illum sequi eligendi praesentium molestiae nihil vel,
      temporibus enim. Aut quaerat consectetur omnis nostrum placeat numquam nam
      atque tenetur deleniti sed commodi officiis non dolorem nesciunt minus
      distinctio veritatis est, illo minima laboriosam? Quisquam porro ipsum
      repellendus perferendis quos voluptatem eaque mollitia in provident rerum
      molestias earum numquam, nisi minima aperiam, nulla delectus hic sunt,
      deleniti dignissimos. Enim recusandae nisi veritatis, porro omnis fugiat
      deserunt, sed inventore itaque eaque asperiores tempora nihil eveniet
      laudantium voluptatibus culpa perspiciatis, reiciendis assumenda quam
      optio. Sint inventore quibusdam esse, ducimus obcaecati adipisci iste
      recusandae cumque exercitationem expedita nisi a asperiores pariatur rem.
      Praesentium veritatis ab quidem rerum architecto inventore modi, nulla
      repellat veniam asperiores necessitatibus tempora? Lorem ipsum dolor sit
      amet consectetur adipisicing elit. Tenetur accusantium voluptatum amet qui
      laborum perspiciatis aliquid suscipit modi consequatur ipsum saepe
      adipisci, dolore distinctio atque sequi cumque necessitatibus repellat id!
    </p>
  </div>
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
    <div class="button-primary">
      <router-link :to="{ name: 'destinations' }">See all</router-link>
    </div>
  </section>
</template>

<script>
import Header from '../components/Header.vue';
import SingleCardPreview from '../components/SingleCardPreview.vue';
import getData from '../composables/getData';
import { computed } from 'vue';

export default {
  name: 'HomeView',
  components: { Header, SingleCardPreview },
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

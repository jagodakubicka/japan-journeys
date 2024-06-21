<template>
  <div class="destination-wrapper">
    <TopImg :img="singlePlace.images" />
    <div class="content-wrapper">
      <div class="about">
        <h2>{{ singlePlace.title }}</h2>
        <p>{{ singlePlace.about }}</p>
      </div>
      <div class="content">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
          architecto porro? Dolore suscipit doloribus pariatur amet id accusamus
          soluta quam officiis porro laborum sapiente corporis ipsum possimus
          tenetur eos modi eaque quaerat ab, sequi excepturi ullam vel alias
          natus? Animi laboriosam exercitationem eos? Omnis dignissimos,
          assumenda quisquam voluptatum illo sit libero, provident ad veritatis
          sequi ullam earum rem voluptates perspiciatis in eos aut. Inventore,
          sed? Sit vel harum adipisci explicabo asperiores est consequuntur ex
          obcaecati, quo fugiat iure officia similique tempore soluta itaque
          corporis sunt necessitatibus amet? Molestias natus repellat iusto
          accusamus magnam recusandae, nostrum deleniti aut dolores laudantium
          nemo?
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit,
          distinctio iste. Eaque praesentium beatae eum et, in qui voluptatibus
          tenetur aut facere commodi pariatur. Laborum consectetur velit vel,
          dolor sequi reprehenderit voluptas neque quos alias ipsum nesciunt
          facilis quibusdam sunt totam officiis debitis earum! Pariatur error
          facilis aspernatur natus fuga tenetur dolor id. Aliquam quam ullam,
          alias possimus unde rerum, dolor neque, fuga placeat maiores aut
          ducimus aliquid quia? Saepe, aperiam neque quas illum beatae eligendi?
          Odit labore laboriosam fugiat, repudiandae, officiis facere quibusdam
          ipsum mollitia necessitatibus incidunt fuga, consectetur voluptatibus?
          Enim aliquid rerum consectetur! Corporis porro quam beatae quasi?
        </p>
      </div>
      <Comments />
    </div>
  </div>
</template>

<script>
import { useRoute } from 'vue-router';
import getSingleData from '../composables/getSingleData';
import TopImg from '../components/single-place/TopImg.vue';
import Comments from '../components/comments/Comments.vue';

export default {
  props: ['id'],
  components: { TopImg, Comments },
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

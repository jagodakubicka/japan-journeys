<template>
  <div style="margin-top: 200px">{{ singlePlace.title }}</div>
  <p>{{ singlePlace.about }}</p>
</template>

<script>
import { useRoute } from 'vue-router';
import getSingleData from '../composables/getSingleData';

export default {
  props: ['id'],
  setup(props) {
    const route = useRoute();
    const { error, singlePlace, load } = getSingleData(route.params.id);

    load();

    return { error, singlePlace };
  },
};
</script>

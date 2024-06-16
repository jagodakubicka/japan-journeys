<template>
  <section class="header" :style="{ backgroundImage: `url(${img})` }"></section>
</template>

<script>
export default {
  props: ['img'],
  setup(props) {},
};
</script>

<style scoped>
.header {
  width: 100%;
  min-height: 80vh;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.header img {
  width: 100%;
  object-fit: cover;
}
</style>

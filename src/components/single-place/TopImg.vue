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
  border-image: fill 1
    linear-gradient(0deg, rgba(29, 29, 29, 1) 0%, rgba(48, 48, 87, 0) 90%);
}
</style>

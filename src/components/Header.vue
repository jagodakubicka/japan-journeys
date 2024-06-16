<template>
  <section class="hero">
    <h1 ref="text" id="hero-header">Japan Journeys</h1>
  </section>
</template>

<script>
import { ref, onMounted, onBeforeUnmount } from 'vue';
export default {
  setup() {
    const text = ref(null);
    const scrollPosition = ref(0);

    const handleScroll = () => {
      scrollPosition.value = window.scrollY;

      const moveDistance = Math.min(scrollPosition.value * 0.5, 50);
      text.value.style.transform = `translateY(-${moveDistance}px)`;
    };

    onMounted(() => {
      window.addEventListener('scroll', handleScroll);
    });

    onBeforeUnmount(() => {
      window.removeEventListener('scroll', handleScroll);
    });

    return {
      text,
    };
  },
};
</script>

<style scoped>
.hero {
  width: 100%;
  height: 100vh;
  background-image: url(../assets/hero/hero-img.jpg);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;
}
.hero::before {
  content: '';
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 100px;
  background: linear-gradient(to top, rgb(24, 15, 13), transparent);
  z-index: 100;
}
.hero img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.hero img#level-1 {
  display: none;
  z-index: 10;
}
.hero img#level-2 {
  display: none;
  z-index: 9;
}
.hero img#level-3 {
  z-index: 8;
}
.hero img#level-4 {
  z-index: 7;
}
.hero img#fuji {
  z-index: 6;
}
.hero img#clouds {
  z-index: 5;
}
#hero-header {
  position: absolute;
  white-space: nowrap;
  z-index: 9;
  font-size: 1.5rem;
}

@media (min-width: 678px) {
  .hero img#level-1 {
    display: block;
  }
  .hero img#level-2 {
    display: block;
  }
  #hero-header {
    font-size: 3rem;
  }
}
</style>

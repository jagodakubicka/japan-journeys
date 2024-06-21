<template>
  <section class="hero">
    <div class="hero-circle"></div>
    <h1 ref="text" id="hero-header">Japan Journeys</h1>
    <a class="hero-link" href="#about">
      <div class="hero-link__circle">
        <FontAwesomeIcon :icon="faArrowDownLong" />
      </div>
      <p>explore</p>
    </a>
  </section>
</template>

<script>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faArrowDownLong } from '@fortawesome/free-solid-svg-icons';

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
      FontAwesomeIcon,
      faArrowDownLong,
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
  border-image: fill 1
    linear-gradient(0deg, rgba(29, 29, 29, 1) 0%, rgba(48, 48, 87, 0) 50%);
}
.hero-circle {
  position: absolute;
  z-index: 0;
  width: 200px;
  height: 200px;
  background: #bf2222b4;
  border-radius: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.hero-link {
  position: absolute;
  z-index: 0;
  bottom: 0%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: var(--white-color);
}
.hero-link__circle {
  width: 40px;
  height: 40px;
  background: var(--primary-color);
  border-radius: 50%;
}
.hero img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

#hero-header {
  position: absolute;
  white-space: nowrap;
  z-index: 9;
  font-size: 3.5rem;
}

@media (min-width: 678px) {
  .hero {
    background-position: center;
  }
  .hero-circle {
    height: 300px;
    width: 300px;
  }
  .hero-link {
    bottom: 5%;
  }

  #hero-header {
    font-size: 5rem;
  }
}
</style>

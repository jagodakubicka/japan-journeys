import { ref } from 'vue';

const getData = () => {
  const places = ref([]);
  const error = ref(null);

  const load = async () => {
    try {
      let data = await fetch('http://localhost:3000/japan');
      if (!data.ok) {
        throw Error('no available data');
      }
      places.value = await data.json();
    } catch (err) {
      error.value = err.message;
    }
  };

  return { places, error, load };
};

export default getData;

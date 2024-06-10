import { ref } from 'vue';

const getPost = (id) => {
  const singlePlace = ref(null);
  const error = ref(null);

  const load = async () => {
    try {
      let data = await fetch(`http://localhost:3000/japan/${id}`);
      if (!data.ok) {
        throw Error('That place does not exist');
      }
      singlePlace.value = await data.json();
    } catch (err) {
      error.value = err.message;
    }
  };

  return { singlePlace, error, load };
};

export default getPost;

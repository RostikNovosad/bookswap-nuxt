import { collection, getDocs } from 'firebase/firestore';

export const useGenresStore = defineStore('genres', () => {
  const { $db } = useNuxtApp();
  const genresDB = ref([])

  const getGenres = async () => {
    try {
      const genresCollection = collection($db, 'genres');

      const querySnapshot = await getDocs(genresCollection);
      genresDB.value = querySnapshot.docs.map(doc => doc.data());
    } catch (err) { }
  }


  return {
    genresDB,
    getGenres
  }
})
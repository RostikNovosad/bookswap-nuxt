import { collection, getDocs, query, orderBy } from 'firebase/firestore';

export const useGenresStore = defineStore('genres', () => {
  const { $db } = useNuxtApp();
  const genresDB = ref([])

  const getGenres = async () => {
    try {
      const genresCollection = collection($db, 'genres');

      const q = query(genresCollection, orderBy('id', 'asc'));

      const querySnapshot = await getDocs(q);

      genresDB.value = querySnapshot.docs.map(doc => doc.data());
    } catch (err) { }
  }

  return {
    genresDB,
    getGenres
  }
})
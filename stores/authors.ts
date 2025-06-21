import { collection, getDocs, query, orderBy } from 'firebase/firestore';

export const useAuthorsStore = defineStore('authorsStore', () => {
  const { $db } = useNuxtApp();
  const authorsDB = ref([])

  const getAuthors = async () => {
    try {
      const authorsCollection = collection($db, 'authors');

      const q = query(authorsCollection, orderBy('id', 'asc'));

      const querySnapshot = await getDocs(q);

      authorsDB.value = querySnapshot.docs.map(doc => doc.data());
    } catch (err) { }
  }

  return {
    authorsDB,
    getAuthors,
  }
})
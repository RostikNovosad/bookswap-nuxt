import { collection, getDocs } from 'firebase/firestore';
import { defineStore } from 'pinia';

export const useAuthorsStore = defineStore('authors', () => {
  const { $db } = useNuxtApp();
  const authorsDB = ref([])

  const getAuthors = async () => {
    try {
      const authorsCollection = collection($db, 'authors');

      const querySnapshot = await getDocs(authorsCollection);
      authorsDB.value = querySnapshot.docs.map(doc => doc.data());
    } catch (err) { }
  }


  return {
    getAuthors,
    authorsDB,
  }
})
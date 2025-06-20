import { collection, getDocs } from 'firebase/firestore';
import { defineStore } from 'pinia'

export const useAuthorsStore = defineStore('authorsStore', () => {
  console.log('🔥 getAuthors defined in store')

  const { $db } = useNuxtApp();
  const authorsDB = ref([])

  const getAuthors = async () => {
    try {
      const authorsCollection = collection($db, 'citys');
      const querySnapshot = await getDocs(authorsCollection);
      authorsDB.value = querySnapshot.docs.map(doc => doc.data());
    } catch (err) {
      console.error('Error fetching authors:', err)
    }
  }

  return {
    authorsDB,
    getAuthors,
  }
})
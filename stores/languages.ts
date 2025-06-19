import { collection, getDocs } from 'firebase/firestore';

export const useLanguagesStore = defineStore('languages', () => {
  const { $db } = useNuxtApp();
  const languagesDB = ref([])

  const getLanguages = async () => {
    try {
      const querySnapshot = await getDocs(collection($db, 'languages'));
      languagesDB.value = querySnapshot.docs.map(doc => doc.data());
    } catch (err) { }
  }

  return {
    languagesDB,
    getLanguages
  }
})

import { collection, getDocs, query, orderBy } from 'firebase/firestore';

export const useLanguagesStore = defineStore('languages', () => {
  const { $db } = useNuxtApp();
  const languagesDB = ref([])

  const getLanguages = async () => {
    try {
      const languagesCollection = collection($db, 'languages');

      const q = query(languagesCollection, orderBy('id', 'asc'));

      const querySnapshot = await getDocs(q);

      languagesDB.value = querySnapshot.docs.map(doc => doc.data());
    } catch (err) { }
  }

  return {
    languagesDB,
    getLanguages
  }
})
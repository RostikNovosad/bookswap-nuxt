import { collection, getDocs, query, orderBy } from 'firebase/firestore';

export const useCitysStore = defineStore('citys', () => {
  const { $db } = useNuxtApp();
  const citysDB = ref([])

  const getCitys = async () => {
    try {
      const citysCollection = collection($db, 'citys');

      const q = query(citysCollection, orderBy('id', 'asc'));

      const querySnapshot = await getDocs(q);

      citysDB.value = querySnapshot.docs.map(doc => doc.data());
    } catch (err) { }
  }


  return {
    citysDB,
    getCitys
  }
})
import { collection, getDocs } from 'firebase/firestore';

export const useCitysStore = defineStore('citys', () => {
  const { $db } = useNuxtApp();
  const citysDB = ref([])

  const getCitys = async () => {
    try {
      const citysCollection = collection($db, 'citys');

      const querySnapshot = await getDocs(citysCollection);
      citysDB.value = querySnapshot.docs.map(doc => doc.data());
    } catch (err) { }
  }


  return {
    citysDB,
    getCitys
  }
})
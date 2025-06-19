import { collection, getDocs, query, where, QueryConstraint } from 'firebase/firestore';

interface Book {
  id: number
  imageUrl: string
  title: string
  description: string
  condition: number
  contact: string
  authorId: number
  cityId: number
  genreId: number
}

interface BookFilterParams {
  authorId?: number;
  cityId?: number;
  genreId?: number;
  languageId?: number;
  condition?: number;
  title?: string;
}

export const useBooksStore = defineStore('books', () => {
  const { $db } = useNuxtApp();
  const booksDB = ref<Book[]>([])
  const isLoading = ref(true)

  const getBooks = async (params: BookFilterParams = {}) => {
    try {
      const booksCollection = collection($db, 'books');
      const queryConstraints: QueryConstraint[] = [];

      if (typeof params.authorId === 'number') {
        queryConstraints.push(where('authorId', '==', params.authorId));
      }
      if (typeof params.cityId === 'number') {
        queryConstraints.push(where('cityId', '==', params.cityId));
      }
      if (typeof params.genreId === 'number') {
        queryConstraints.push(where('genreId', '==', params.genreId));
      }
      if (typeof params.languageId === 'number') {
        queryConstraints.push(where('languageId', '==', params.languageId));
      }
      if (typeof params.condition === 'number') {
        queryConstraints.push(where('condition', '==', params.condition));
      }
      if (typeof params.title === 'string' && params.title.trim() !== '') {
        queryConstraints.push(where('title', '==', params.title));
      }
      const q = query(booksCollection, ...queryConstraints);

      const querySnapshot = await getDocs(q);
      booksDB.value = querySnapshot.docs.map(doc => doc.data());
      isLoading.value = false

    } catch (err) { }
  }


  return {
    booksDB,
    getBooks
  }
})
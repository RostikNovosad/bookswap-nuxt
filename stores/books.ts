import { defineStore } from 'pinia';
import { supabase } from '#imports';

interface Book {
  id: string
  imageUrl: string | null
  title: string
  description: string
  condition: string
  contact: string
  author: string | null
  city: string | null
  genre: string | null
  language: string | null
  created_at: string
  user_id: string | null
}

interface BookFilterParams {
  authorId?: number
  cityId?: number
  genreId?: number
  languageId?: number
  condition?: number
  title?: string
  page?: number
  perPage?: number
  showAll?: boolean
}

export const useBooksStore = defineStore('books', () => {

  const booksDB = ref<Book[]>([]);
  const isLoading = ref(true);
  const bookById = ref<Book | null>(null);
  const totalCount = ref(0);

  const getBooks = async (params: BookFilterParams = {}) => {
    isLoading.value = true;
    try {
      let query = supabase
        .from('books')
        .select('*', { count: 'exact' });

      if (params.authorId || params.authorId == 0) {
        query = query.eq('authorId', params.authorId);
      }
      if (params.cityId || params.cityId == 0) {
        query = query.eq('cityId', params.cityId);
      }
      if (params.genreId || params.genreId == 0) {
        query = query.eq('genreId', params.genreId);
      }
      if (params.languageId || params.languageId == 0) {
        query = query.eq('languageId', params.languageId);
      }
      if (params.condition) {
        query = query.eq('condition', params.condition);
      }
      if (params.title && params.title.trim() !== '') {
        query = query.ilike('title', `%${params.title.trim()}%`);
      }

      const perPage = params.perPage || 12;
      const page = params.page || 1;
      const from = (page - 1) * perPage;
      const to = from + perPage - 1;

      if (!params.showAll) {
        query = query.range(from, to);
      }

      const { data, count, error } = await query;

      if (error) {
        throw error;
      }

      booksDB.value = data as Book[];
      isLoading.value = false;
      totalCount.value = count ?? 0;


    } catch (err) {
      console.error("Помилка при отриманні книг:", err);
      isLoading.value = false;
    }
  };

  const getBookById = async (bookId: string) => {
    try {
      const { data, error } = await supabase
        .from('books')
        .select('*')
        .eq('id', bookId)
        .single();

      if (error) {
        throw error;
      }

      bookById.value = data as Book;

    } catch (err) {
      console.error("Помилка при отриманні книги за ID:", err);
      bookById.value = null;
    }
  };

  const addBook = async (bookData: Partial<Book>) => {
    try {
      const { data, error } = await supabase
        .from('books')
        .insert([bookData])
        .select();

      if (error) {
        throw error;
      }

      console.log("Книгу успішно додано:", data[0]);
      return data[0] as Book;

    } catch (error) {
      console.error("Помилка при додаванні книги: ", error);
      throw error;
    }
  };

  return {
    booksDB,
    isLoading,
    getBooks,
    getBookById,
    bookById,
    addBook,
    totalCount
  };
});
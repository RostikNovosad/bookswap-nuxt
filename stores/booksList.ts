import axios from "axios";
import { genre } from "@/composables/genreFilter";
import { author } from "@/composables/authorFilter";
import { city } from "@/composables/cityFilter";
import { language } from "@/composables/languageFilter";

export const useBooksListStore = defineStore('booksL', () => {
  const url = useRuntimeConfig().public.baseURL

  const booksList = ref([])
  const bookById = ref()
  const isLoading = ref(false)
  const notFound = ref(false)

  const getBooks = async () => {
    try {
      notFound.value = false;
      isLoading.value = true;
      const response = await axios.get(`${url}/books?genre=${genre.value}&author=${author.value}&city=${city.value}&language=${language.value}`);
      booksList.value = response.data;
    }
    catch (error) {
      notFound.value = true;
    } finally {
      isLoading.value = false;
    }
  }

  const getBookById = async (id: number) => {
    try {
      const response = await axios.get(`${url}/books?id=${id}`);
      bookById.value = response.data[0];
    } catch (error) {
      console.error('Error fetching book by ID:', error);
    }
  }

  const createBook = async (bookData: {
    imageUrl: string;
    title: string;
    description: string;
    condition: number;
    genre: string;
    author: string;
    city: string;
    language: string;
    contact: string;
  }) => {
    try {
      const response = await axios.post(`${url}/books`, bookData);
      console.log('Book posted successfully:', response.data);
    } catch (error: any) {
      console.error('Failed to post book:', error);
    }
  };

  return {
    booksList,
    bookById,
    isLoading,
    notFound,
    getBooks,
    getBookById,
    createBook
  }
})


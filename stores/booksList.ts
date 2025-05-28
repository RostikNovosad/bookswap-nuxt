import axios from "axios";
import { genre } from "@/composables/genreFilter";
import { author } from "@/composables/authorFilter";
import { city } from "@/composables/cityFilter";
import { language } from "@/composables/languageFilter";

export const useBooksListStore = defineStore('books', () => {
  const booksList = ref([])
  const bookById = ref()
  const isLoading = ref(false)
  const notFound = ref(false)

  const getBooks = async () => {
    try {
      notFound.value = false;
      isLoading.value = true;
      const response = await axios.get(`https://677034a52ffbd37a63cc63c7.mockapi.io/books?genre=${genre.value}&author=${author.value}&city=${city.value}&language=${language.value}`);
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
      const response = await axios.get(`https://677034a52ffbd37a63cc63c7.mockapi.io/books?id=${id}`);
      bookById.value = response.data[0];
    } catch (error) {
      console.error('Error fetching book by ID:', error);
    }
  }

  return {
    booksList,
    bookById,
    isLoading,
    notFound,
    getBooks,
    getBookById
  }
})


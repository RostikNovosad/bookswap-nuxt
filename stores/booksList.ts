import { defineStore } from 'pinia';
import axios from "axios";
import { genre } from "@/composables/genreFilter";
import { author } from "@/composables/authorFilter";
import { city } from "@/composables/cityFilter";
import { language } from "@/composables/languageFilter";

export const useBooksList =  defineStore('books', {
    state: () => ({
        books: [],
        isLoading: false,
        notFound: false,
    }),
    actions: {
        async fetchBooks() {
            try {
                this.notFound = false;
                this.isLoading = true;
                const response = await axios.get(`https://677034a52ffbd37a63cc63c7.mockapi.io/books?genre=${genre.value}&author=${author.value}&city=${city.value}&language=${language.value}`);
                this.books = response.data;
            } catch (error) {
                this.notFound = true;
            } finally {
                this.isLoading = false;
            }
        }
    }
})


import { defineStore } from 'pinia';
import axios from "axios";


export const useBooksList =  defineStore('books', {
    state: () => ({
        books: [],
        isLoading: false,
    }),
    actions: {
        async fetchBooks() {
            try {
                this.isLoading = true;
                const response = await axios.get('https://677034a52ffbd37a63cc63c7.mockapi.io/books');
                this.books = response.data;
            } catch (error) {
                console.log(error);
            } finally {
                this.isLoading = false;
            }
        }
    }
})
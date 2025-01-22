import { defineStore } from 'pinia';

export const useBooksList =  defineStore('books', {
    state: () => ({
        books: [
        {
            id: 1,
            imageUrl: '/images/books/book-1.jpg',
            title: "The Time Has Come",
            description: "Lindbergh's Pharmacy is an Athens, Georgia. Lindbergh's Pharmacy is an Athens, Georgia.",
            condition: 9
        },
        {
            id: 2,
            imageUrl: '/images/books/book-2.jpg',
            title: "The Time Has Come",
            description: "Lindbergh's Pharmacy is an Athens, Georgia. Lindbergh's Pharmacy is an Athens, Georgia.",
            condition: 8
        },
        {
            id: 3,
            imageUrl: '/images/books/book-3.jpg',
            title: "The Time Has Come",
            description: "Lindbergh's Pharmacy is an Athens, Georgia. Lindbergh's Pharmacy is an Athens, Georgia.",
            condition: 6
        },
        {
            id: 4,
            imageUrl: '/images/books/book-4.jpg',
            title: "The Time Has Come",
            description: "Lindbergh's Pharmacy is an Athens, Georgia. Lindbergh's Pharmacy is an Athens, Georgia.",
            condition: 10
        },
        {
            id: 5,
            imageUrl: '/images/books/book-5.jpg',
            title: "The Time Has Come",
            description: "Lindbergh's Pharmacy is an Athens, Georgia. Lindbergh's Pharmacy is an Athens, Georgia.",
            condition: 7
        },
        {
            id: 6,
            imageUrl: '/images/books/book-6.jpg',
            title: "The Time Has Come",
            description: "Lindbergh's Pharmacy is an Athens, Georgia. Lindbergh's Pharmacy is an Athens, Georgia.",
            condition: 8
        },
        ]
    })
})
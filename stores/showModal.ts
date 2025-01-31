import { defineStore } from 'pinia';

export const useShowModalStore = defineStore('showModal', {
    state: () => ({
        showModal: false,
    }),
});
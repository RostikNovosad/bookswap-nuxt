import { defineStore } from 'pinia';

export const useBurgerMenuStore = defineStore('burgerMenu', {
  state: () => ({
    burgerOpen: false,
  }),
});

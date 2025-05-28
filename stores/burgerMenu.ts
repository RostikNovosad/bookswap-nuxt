export const useBurgerMenuStore = defineStore('burgerMenu', () => {
  const burgerOpen = ref(false)

  return {
    burgerOpen
  }
});

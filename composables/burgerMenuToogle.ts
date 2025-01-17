import { useBurgerMenuStore } from '@/stores/burgerMenu';
const store = useBurgerMenuStore();

export const burgerMenuToogle = (): boolean => {
  return (store.burgerOpen = !store.burgerOpen);
};

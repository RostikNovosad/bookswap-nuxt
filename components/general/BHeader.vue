<script setup>
import { burgerMenuToogle } from '@/composables/burgerMenuToogle';
import { useBurgerMenuStore } from '@/stores/burgerMenu';
const store = useBurgerMenuStore();
</script>

<template>
  <div class="flex justify-between px-10 lg:px-25 py-4 bg-slate-100">
    <div class="">
      <nuxt-link to="/">
        <img src="~/assets/images/logo.png" alt="" width="40" height="40" />
      </nuxt-link>
    </div>
    <div class="flex sm:hidden">
      <img src="~/assets/images/menu.svg" alt="" @click="burgerMenuToogle" />
      <div
        :class="{ 'translate-x-0': store.burgerOpen, 'translate-x-full': !store.burgerOpen }"
        class="absolute bg-slate-100 h-screen w-screen top-0 right-0 flex flex-col pt-8 px-10 transition-transform duration-300 ease-in-out"
      >
        <div class="flex justify-between items-center">
          <h3>BookSwap</h3>
          <img src="~/assets/images/close.png" alt="" @click="burgerMenuToogle" />
        </div>
        <div class="flex flex-col flex-auto gap-8 mt-20">
          <BButton>
            <nuxt-link to="/add">Додати книгу</nuxt-link>
          </BButton>
          <BButton>
            <nuxt-link to="/catalog">Знайти книгу</nuxt-link>
          </BButton>
        </div>
        <img src="~/assets/images/books-footer.png" alt="" />
      </div>
    </div>
    <div class="hidden sm:flex gap-8">
      <BButton>
        <nuxt-link to="/add">Додати книгу</nuxt-link>
      </BButton>
      <BButton>
        <nuxt-link to="/catalog">Знайти книгу</nuxt-link>
      </BButton>
    </div>
  </div>
</template>

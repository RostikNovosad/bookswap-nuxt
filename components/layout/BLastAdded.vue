<script setup lang="ts">
import {onMounted} from "vue";
import BBookCard from "~/components/general/BBookCard.vue";
import BSectionTitle from "~/components/general/BSectionTitle.vue";
import { useBooksList } from "@/stores/booksList";
const store = useBooksList();
const books = store.books;
onMounted(() => {
  store.fetchBooks(); // Завантаження даних при монтуванні
});


const containerRef = ref(null)
const swiper = useSwiper(containerRef, {
  effect: 'creative',
  loop: true,
  autoplay: {
    delay: 1000,
    disableOnInteraction: false, // Запобігає зупинці autoplay при взаємодії

  },
  breakpoints: {
    1440: {
      spaceBetween: 40,
      slidesPerView: 2.6,

    },
    1280: {
      spaceBetween: 40,
      slidesPerView: 2.15,

    },
    1024: {
      spaceBetween: 20,
      slidesPerView: 2.1,
    },
    768: {
      spaceBetween: 20,
      slidesPerView: 2,
    },
    320: {
      spaceBetween: 20,
      slidesPerView: 1,
    },
  },
  creativeEffect: {
    prev: {
      shadow: true,
      translate: [0, 0, -400],
    },
    next: {
      shadow: true,
      translate: [0, 0, -400],
    },
  },
})
</script>

<template>
  <section class="pb-10 lg:pb-20 -mx-2.5 px-2.5">
    <div class="flex justify-between items-end mb-5">
      <BSectionTitle>Останні додані</BSectionTitle>

      <div class="flex gap-4 ">
        <button @click="swiper.prev()" class="">
          <img src="~/assets/images/prev.svg" alt="">
        </button>

        <button @click="swiper.next()" class="">
          <img src="~/assets/images/next.svg" alt="">
        </button>
      </div>
    </div>

    <ClientOnly>
    <swiper-container ref="containerRef" class="flex gap-10 overflow-x-hidden">
      <swiper-slide
          v-for="(book, idx) in books"
          :key="idx"
          class="pb-10"
      >
        <BBookCard  :key="book.id" :id="book.id" :imageUrl="book.imageUrl" :title="book.title" :description="book.description" :condition="book.condition" cardDirection="row" />
      </swiper-slide>
    </swiper-container>
  </ClientOnly>

  </section>
</template>
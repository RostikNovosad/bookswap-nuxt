<script setup lang="ts">
import {onMounted} from "vue";
import BBookCard from "~/components/general/BBookCard.vue";
import {useBooksList} from "@/stores/booksList";
const store = useBooksList();
const books = store.books;
onMounted(() => {
    console.log("books: ", books)
}
)
// Create 10 slides
const containerRef = ref(null)
const slides = ref(Array.from({ length: 5 }))

const swiper = useSwiper(containerRef, {
  effect: 'creative',
  loop: true,
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
  autoplay: {
    delay: 500,
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

onMounted(() => {
  // Access Swiper instance
  // Read more about Swiper instance: https://swiperjs.com/swiper-api#methods--properties
  console.log(swiper.instance)
})
</script>

<template>
  <div class="flex justify-between items-end mb-5">
    <h2 class="text-darkBlue text-2xl font-medium">Останні додані</h2>
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
        <BBookCard  :key="book.id" :id="book.id" :imageUrl="book.imageUrl" :title="book.title" :description="book.description" :condition="book.condition" />
      </swiper-slide>
    </swiper-container>
  </ClientOnly>


</template>

<style scoped>

</style>
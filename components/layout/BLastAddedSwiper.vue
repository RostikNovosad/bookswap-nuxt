<script setup lang="ts">
const { getBooks } = useBooksListStore()
const { booksList } = storeToRefs(useBooksListStore())

const books = ref();

onMounted(async () => {
  await getBooks();
  books.value = booksList.value;
});


const containerRef = ref(null)
const swiper = useSwiper(containerRef, {
  effect: 'creative',
  loop: books.length > 1 ? true : false,
  autoplay: {
    delay: 1000,
    disableOnInteraction: false,

  },
  breakpoints: {
    1440: {
      spaceBetween: 40,
      slidesPerView: 2.15,

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
  <ClientOnly>
    <div v-if="booksList.length === 0">Loading...</div>

    <swiper-container ref="containerRef" class="flex gap-10 overflow-x-hidden">
      <swiper-slide v-for="(book, idx) in books" :key="idx" class="pb-10">
        <BBookCard :key="book.id" :id="Number(book.id)" :imageUrl="book.imageUrl" :title="book.title"
          :description="book.description" :condition="book.condition" cardDirection="row" />
      </swiper-slide>
    </swiper-container>
  </ClientOnly>
  <div class="flex justify-end gap-4 ">
    <button @click="swiper.prev()" class="">
      <img src="~/assets/images/prev.svg" alt="">
    </button>

    <button @click="swiper.next()" class="">
      <img src="~/assets/images/next.svg" alt="">
    </button>
  </div>
</template>

<style scoped></style>
<template>
  <section class="pt-16 pb-10 lg:pb-30">
  <h1 class="text-darkBlue text-3xl md:text-4xl font-medium text-balance">Бібліотека можливостей: шукай, обмінюйся, читай.</h1>
  <div class="pt-10 flex flex-col md:flex-row gap-5">
    <aside class="flex flex-col gap-4">
      <BFilters/>
    </aside>

    <div class="">
      <BSectionTitle>Всі книги, готові до нового життя</BSectionTitle>
      <div v-if="isLoading">Завантаження...</div>
      <div v-else class="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 mt-5">
        <BBookCard v-for="book in books" :key="book.id" :id="book.id" :imageUrl="book.imageUrl"  :title="book.title" :description="book.description" :condition="book.condition" cardDirection="col" />
      </div>
    </div>
  </div>
  </section>

</template>

<script setup>
import { onMounted } from "vue";
import { useBooksList } from "@/stores/booksList";
const store = useBooksList();

onMounted(() => {
  store.fetchBooks();
});

const { books, isLoading } = storeToRefs(store);
</script>
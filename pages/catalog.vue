<template>
  <section class="pt-16 pb-10 lg:pb-30">
    <h1 class="text-darkBlue text-3xl md:text-4xl font-medium text-balance">Бібліотека можливостей: шукай, обмінюйся,
      читай.</h1>
    <div class="pt-10 flex flex-col md:flex-row gap-5">
      <div class="flex flex-col gap-4">
        <BFilters />
      </div>

      <div class="">
        <BSectionTitle>Всі книги, готові до нового життя</BSectionTitle>
        <div v-if="isLoading" class="text-xl mt-5 text-darkBlue">Завантаження...</div>
        <div v-if="notFound" class="text-xl mt-5 text-darkBlue">На жаль, за даним запитом результатів не знайдено :(
        </div>
        <ul v-else
          class="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 mt-5"
          v-auto-animate>
          <BBookCard v-for="book in booksList" :key="book.id" :id="Number(book.id)" :imageUrl="book.imageUrl"
            :title="book.title" :description="book.description" :condition="book.condition" cardDirection="col" />
        </ul>
      </div>
    </div>
  </section>

</template>

<script setup>
const { getBooks } = useBooksListStore()

onMounted(async () => {
  await getBooks();
});
watchEffect(async () => {
  await getBooks();
});

const { booksList, isLoading, notFound } = storeToRefs(useBooksListStore());
</script>
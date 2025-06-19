<template>
  <section class="pt-16 pb-10 lg:pb-30">
    <h1 class="text-darkBlue text-3xl md:text-4xl font-medium text-balance">Бібліотека можливостей: шукай, обмінюйся,
      читай.</h1>
    <div class="pt-10 flex flex-col md:flex-row gap-5">
      <div
        class="grid grid-cols-1 xs:grid-cols-2 md:flex flex-row flex-wrap md:flex-col gap-4 md:min-w-[200px] md:max-w-[200px]">
        <Dropdown v-model="params.genreId" :options="genresDB" optionLabel="title" optionValue="id"
          placeholder="Оберіть жанр" class="w-full w-[200px]" showClear></Dropdown>
        <Dropdown v-model="params.authorId" :options="authorsDB" optionLabel="title" optionValue="id"
          placeholder="Оберіть автора" class="w-full w-[200px]" showClear></Dropdown>
        <Dropdown v-model="params.cityId" :options="citysDB" optionLabel="title" optionValue="id"
          placeholder="Оберіть місто" class="w-full w-[200px]" showClear></Dropdown>
        <Dropdown v-model="params.languageId" :options="languagesDB" optionLabel="title" optionValue="id"
          placeholder="Оберіть мову" class="w-full w-[200px]" showClear></Dropdown>
      </div>

      <div class="flex flex-col gap-5">
        <BSectionTitle>Всі книги, готові до нового життя</BSectionTitle>
        <div v-if="isLoading" class="text-xl mt-5 text-darkBlue">Завантаження...</div>
        <div v-if="booksDB && booksDB.length === 0" class="text-xl mt-5 text-darkBlue">На жаль, за даним запитом
          результатів
          не знайдено :(
        </div>
        <ul v-else
          class="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 "
          v-auto-animate>
          <BBookCard v-for="book in booksDB" :key="book.id" :id="Number(book.id)" :imageUrl="book.imageUrl"
            :title="book.title" :description="book.description" :condition="book.condition" :author="book.author"
            cardDirection="col" />
        </ul>
      </div>
    </div>
  </section>

</template>

<script setup>
const { getBooks } = useBooksStore()
const { booksDB, isLoading } = storeToRefs(useBooksStore())

const { getLanguages } = useLanguagesStore()
const { languagesDB } = storeToRefs(useLanguagesStore())

const { getCitys } = useCitysStore()
const { citysDB } = storeToRefs(useCitysStore())

const { getAuthors } = useAuthorsStore()
const { authorsDB } = storeToRefs(useAuthorsStore())

const { getGenres } = useGenresStore()
const { genresDB } = storeToRefs(useGenresStore())

const params = ref({
  authorId: null,
  genreId: null,
  languageId: null
})


onMounted(async () => {
  await getBooks(params.value);
  await getLanguages()
  await getCitys()
  await getAuthors()
  await getGenres()
});

watch(params, async () => {
  await getBooks(params.value);
}, { deep: true })

</script>
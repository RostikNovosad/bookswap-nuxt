<script setup lang="ts">
const { getBookById } = useBooksStore()
const { bookById } = storeToRefs(useBooksStore())


const id = useRoute().params.id;

const { getLanguages } = useLanguagesStore()
const { languagesDB } = storeToRefs(useLanguagesStore())

const { getCitys } = useCitysStore()
const { citysDB } = storeToRefs(useCitysStore())

const { getAuthors } = useAuthorsStore()
const { authorsDB } = storeToRefs(useAuthorsStore())

const { getGenres } = useGenresStore()
const { genresDB } = storeToRefs(useGenresStore())

const isLoading = ref(true)

onMounted(async () => {
  await getBookById(id);
  await getLanguages()
  await getCitys()
  await getAuthors()
  await getGenres()
  isLoading.value = false
});
</script>

<template>
  <nuxt-link to="/catalog">
    <div class="flex gap-3 items-center mt-5">
      <img src="~/assets/images/prev.svg" alt="Стрілка повернутися">
      <span class="text-2xl font-medium">Знайти більше книг</span>
    </div>
  </nuxt-link>
  <div>
    <div v-if="isLoading">Loading...</div>
    <div v-else>
      <div class="flex flex-col md:flex-row items-start gap-5 md:gap-10 lg:gap-20 xl:gap-32 my-20 w-full">
        <div
          class="bg-white min-w-full mx-auto xs:min-w-[400px] md:min-h-[400px] rounded-3xl p-8 flex justify-center items-center border border-gray-200">
          <img :src="bookById.imageUrl">
        </div>
        <div class="flex flex-col gap-5 lg:gap-10 md:pt-8">
          <div class="flex flex-col gap-3">
            <h1 class="text-5xl font-medium text-darkBlue">{{ bookById.title }}</h1>
            <p class="text-xl text-darkBlue">{{ authorsDB[bookById.authorId].title }}</p>
          </div>
          <div class="flex flex-col gap-3">
            <h3 class="text-2xl lg:text-3xl font-medium text-darkBlue">📖 Короткий опис: </h3>
            <p class="text-xl xl:text-2xl text-darkBlue">{{ bookById.description }}</p>
          </div>
          <div class="flex flex-col gap-3">
            <h3 class="text-2xl lg:text-3xl font-medium text-darkBlue">📚 Інформація про книгу: </h3>

            <div class="flex flex-col gap-2">
              <p class="text-xl text-darkBlue">Стан книги: <span class="font-medium tracking-widest">{{
                bookById.condition }}/10</span></p>
              <p class="text-xl text-darkBlue">Жанр книги: <span class="font-medium">{{ genresDB[bookById.genreId].title
                  }}</span></p>
              <p class="text-xl text-darkBlue">Знаходиться у: <span class="font-medium">{{
                citysDB[bookById.cityId].title
                  }}</span></p>
              <p class="text-xl text-darkBlue">Мова видання: <span class="font-medium">{{
                languagesDB[bookById.languageId].title }}</span>
              </p>
            </div>
          </div>

          <div>
            <BButton>📩 Зв’язатися з власником</BButton>
          </div>
        </div>
      </div>

    </div>
  </div>

</template>

<style scoped></style>
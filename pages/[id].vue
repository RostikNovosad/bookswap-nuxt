<script setup lang="ts">
const { getBookById } = useBooksListStore()
const { bookById } = storeToRefs(useBooksListStore())


const id = Number(useRoute().params.id);
const genreTitle = ref('');
const authorTitle = ref('');
const cityTitle = ref('');
const languageTitle = ref('');


const { genresList } = storeToRefs(useGenresListStore())
const { authorsList } = storeToRefs(useAuthorsListStore())
const { citysList } = storeToRefs(useCitysListStore())
const { languagesList } = storeToRefs(useLanguagesListStore())

const genres = genresList.value;
const authors = authorsList.value;
const citys = citysList.value;
const languages = languagesList.value;

const isLoading = ref(true)

onMounted(async () => {
  await getBookById(id);
  isLoading.value = false
  for (const genre in genres) {
    genres[genre].key === bookById.value.genre ? genreTitle.value = genres[genre].title : "";
  }
  for (const author in authors) {
    authors[author].key === bookById.value.author ? authorTitle.value = authors[author].title : "";
  }
  for (const city in citys) {
    citys[city].key === bookById.value.city ? cityTitle.value = citys[city].title : "";
  }
  for (const language in languages) {
    languages[language].key === bookById.value.language ? languageTitle.value = languages[language].title : "";
  }
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
            <p class="text-xl text-darkBlue">{{ authorTitle }}</p>
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
              <p class="text-xl text-darkBlue">Жанр книги: <span class="font-medium">{{ genreTitle }}</span></p>
              <p class="text-xl text-darkBlue">Знаходиться у: <span class="font-medium">{{ cityTitle }}</span></p>
              <p class="text-xl text-darkBlue">Мова видання: <span class="font-medium">{{ languageTitle }}</span></p>
            </div>
          </div>

          <!--          <p>{{ store.bookById.wasAdded }}</p>-->
          <div>
            <BButton>📩 Зв’язатися з власником</BButton>
          </div>
        </div>
      </div>

    </div>
  </div>

</template>

<style scoped></style>
<script setup lang="ts">
import {useBooksList} from "@/stores/booksList";
const store = useBooksList();
const id = Number(useRoute().params.id);
const authorTitle = ref(null);

import {useAuthorsList} from "@/stores/authorsList";
const storeAuthor = useAuthorsList();
const authors = storeAuthor.$state;

onMounted(async () => {
  await store.fetchBookById(id);
  for (const author in authors) {
    authors[author].key === store.bookById.author ? authorTitle.value = authors[author].title : "";
  }
});
</script>

<template>
<BSectionTitle>Сторінка книжки {{id}}</BSectionTitle>
  <div>
    <div v-if="!store.bookById">Loading...</div>
    <div v-else>
      <div class="flex gap-20 mt-20 w-full">
        <div class="bg-white min-w-[400px] min-h-[400px] rounded-3xl p-8 flex justify-center items-center border border-gray-200">
          <img :src="store.bookById.imageUrl">
        </div>
        <div class="flex flex-col">
          <h1 class="text-3xl font-medium text-darkBlue">{{ store.bookById.title }}</h1>
          <p class="text-darkBlue">{{ authorTitle }}</p>
          <p class="text-lg text-darkBlue">{{ store.bookById.description }}</p>
          <p class="text-darkBlue">Стан книги: <span class="font-medium tracking-widest">{{ store.bookById.condition }}/10</span></p>

          <p>{{ store.bookById.genre }}</p>
          <p>{{ store.bookById.city }}</p>
          <p>{{ store.bookById.language }}</p>
          <p>{{ store.bookById.wasAdded }}</p>
        </div>
      </div>

    </div>
  </div>

</template>

<style scoped>

</style>
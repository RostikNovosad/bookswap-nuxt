<script setup lang="ts">
import {useBooksList} from "@/stores/booksList";
const store = useBooksList();
const id = Number(useRoute().params.id);
onMounted(async () => {
  await store.fetchBookById(id);
});

</script>

<template>
<BSectionTitle>Сторінка книжки {{id}}</BSectionTitle>
  <div>
    <div v-if="!store.bookById">Loading...</div>
    <div v-else>
      <img :src="store.bookById.imageUrl">
      <h1>{{ store.bookById.title }}</h1>
      <p>{{ store.bookById.description }}</p>
      <p>{{ store.bookById.condition }}</p>
      <p>{{ store.bookById.genre }}</p>
      <p>{{ store.bookById.author }}</p>
      <p>{{ store.bookById.city }}</p>
      <p>{{ store.bookById.language }}</p>
      <p>{{ store.bookById.wasAdded }}</p>
    </div>
  </div>

</template>

<style scoped>

</style>
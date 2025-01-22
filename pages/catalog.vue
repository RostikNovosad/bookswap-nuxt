<template>
  <section class="pt-16 pb-10 lg:pb-30">
  <h1 class="text-darkBlue text-4xl font-medium text-balance">Бібліотека можливостей: шукай, обмінюйся, читай.</h1>
  <div class="pt-10 flex flex-col md:flex-row gap-5">
    <aside class="flex flex-col gap-4">
      <h3>Фільтри</h3>

      <ul id="genre" class="bg-darkGrey text-darkBlue px-2.5 py-2 flex flex-col gap-3 w-[200px]">
        <li @click="genreOpenToogle" class="flex justify-between items-center">
          {{chosenGenre}}
          <img src="~/assets/images/drop.svg" alt="">
        </li>
        <li v-if="genreOpen" class="flex flex-col gap-3">
          <li id="fantasy" @click="chooseGenre">Фантастика</li>
          <li id="detective" @click="chooseGenre">Детектив</li>
          <li id="novels" @click="chooseGenre">Романи</li>
          <li id="horrors" @click="chooseGenre">Жахи</li>
        </li>
      </ul>


    </aside>

    <div class="">
      <BSectionTitle>Всі книги, готові до нового життя</BSectionTitle>
      <div class="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
        <BBookCard v-for="book in books" :key="book.id" :id="book.id" :imageUrl="book.imageUrl"  :title="book.title" :description="book.description" :condition="book.condition" cardDirection="col" />
      </div>
    </div>
  </div>
  </section>

</template>

<script setup>
import BBookCard from "~/components/general/BBookCard.vue";
import { useBooksList } from "@/stores/booksList";
const store = useBooksList();
const books = store.books;

const genreOpen = ref(false);
const genre = ref('');
const genreOpenToogle = () => {
  return genreOpen.value = !genreOpen.value;
}
const chooseGenre = (e) => {
  return genre.value = e.target.id;
}
const chosenGenre = computed(() => {
  return genre.value != "" ? genre : "Оберіть жанр";
})
watch(genre, (newX) => {
  console.log(`genre — це ${newX}`)
})
</script>
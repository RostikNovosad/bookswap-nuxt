<script setup>
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

<template>
  <h3>Фільтри</h3>

  <div id="genre" class="bg-darkGrey text-darkBlue px-2.5 py-2 flex flex-col w-[200px]">
    <div @click="genreOpenToogle" class="flex justify-between items-center">
      {{chosenGenre}}
      <img src="~/assets/images/drop.svg" alt="">
    </div>
    <div class="grid transition-all duration-300" :class="genreOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]' ">
      <div class="overflow-hidden min-h-0 flex flex-col gap-3">
        <div id="fantasy" @click="chooseGenre" class="pt-2">Фантастика</div>
        <div id="detective" @click="chooseGenre">Детектив</div>
        <div id="novels" @click="chooseGenre">Романи</div>
        <div id="horrors" @click="chooseGenre">Жахи</div>
      </div>
    </div>
  </div>
</template>
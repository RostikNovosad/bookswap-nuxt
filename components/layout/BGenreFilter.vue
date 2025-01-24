<script setup lang="ts">
import { genreOpenToogle, selectedGenre, genreOpen, genreHandler } from "@/composables/genreFilter"
</script>

<template>
  <div id="genre" class="bg-darkGrey text-darkBlue px-2.5 py-2 flex flex-col min-w-[200px] max-w-full rounded-md">
    <div @click="genreOpenToogle" class="flex justify-between items-center">
      {{selectedGenre}}
      <img src="~/assets/images/drop.svg" alt="">
    </div>
    <div class="grid transition-all duration-300" :class="genreOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]' ">
      <div class="overflow-hidden min-h-0 flex flex-col gap-3">
        <div id="fantasy" @click="genreHandler" class="pt-2">Фантастика</div>
        <div id="detective" @click="genreHandler">Детектив</div>
        <div id="novels" @click="genreHandler">Романи</div>
        <div id="horrors" @click="genreHandler">Жахи</div>
      </div>
    </div>
  </div>
</template>

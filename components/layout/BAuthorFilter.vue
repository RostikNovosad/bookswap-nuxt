<script setup lang="ts">
import { author, authorOpenToogle, selectedAuthor, authorOpen, authorHandler } from "@/composables/authorFilter"

const { authorsList } = storeToRefs(useAuthorsListStore())
const authors = authorsList.value;
</script>

<template>
  <div id="author" class="bg-darkGrey text-darkBlue px-2.5 py-2 flex flex-col min-w-[200px] max-w-full rounded-md">
    <div @click="authorOpenToogle" class="flex justify-between items-center">
      {{ selectedAuthor }}
      <img src="~/assets/images/drop.svg" alt="">
    </div>
    <div class="grid transition-all duration-300" :class="authorOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'">
      <div class="overflow-hidden min-h-0 flex flex-col gap-1">
        <div v-for="author in authors" :id="author.key" @click="authorHandler" class="pt-2">{{ author.title }}</div>
      </div>
    </div>
  </div>
</template>
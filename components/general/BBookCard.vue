<script setup lang="ts">
const props = defineProps({
  id: Number,
  imageUrl: String,
  title: String,
  description: String,
  condition: Number,
})
</script>

<template>
  <div class="bg-white p-3 xl:p-4 rounded-2xl	flex gap-6 xl:gap-10 w-full min-w-[314px] transition duration-300 ease-in hover:shadow-card ">
    <img :src="props.imageUrl" class="w-1/2" :alt="props.title">
    <div class="flex flex-col justify-end">
      <h5 class="text-darkBlue font-medium mb-4">{{ props.title }}</h5>
      <p class="text-darkBlue text-sm	line-clamp-2 mb-4 opacity-50">{{ props.description }}</p>
      <p class="text-darkBlue mb-6">Стан книги: <span class="font-medium tracking-widest">{{ props.condition }}/10</span></p>
      <BBookButton>Дізнатися більше</BBookButton>
    </div>
  </div>
</template>

<style scoped>

</style>
<script setup lang="ts">
const { authorsList } = storeToRefs(useAuthorsListStore())

const props = defineProps({
  id: String,
  imageUrl: String,
  title: String,
  author: String,
  description: String,
  condition: Number,
  cardDirection: String,
})

const cardDirection = computed(() => {
  return props.cardDirection === 'row' ? 'flex-row' : 'flex-col'
})
const imageSize = computed(() => {
  return props.cardDirection === 'row' ? 'w-1/2' : 'max-h-80 lg:max-h-96 object-contain'
})
const textWrap = computed(() => {
  return props.cardDirection === 'row' ? 'text-wrap' : ''
})
</script>

<template>
  <nuxt-link :to="`${props.id}`">
    <div
      class="bg-white p-3 xl:p-4 rounded-2xl flex gap-3 xl:gap-10  w-full transition duration-300 ease-in hover:shadow-card "
      :class="cardDirection">
      <img :src="props.imageUrl" :class="imageSize" class="flex-auto h-[300px] object-contain" :alt="props.title">
      <div class="flex flex-col justify-end">
        <h5 class="text-darkBlue text-lg font-medium mb-4 truncate" :class="textWrap">{{ props.title }}</h5>
        <p class="text-darkBlue text-sm	line-clamp-1 mb-4 opacity-50">{{ props.description }}</p>
        <p class="text-darkBlue mb-6">Стан книги:
          <span class="font-medium tracking-widest"> {{ props.condition }}/10</span>
        </p>
        <BBookButton :id="props.id">Дізнатися більше</BBookButton>
      </div>
    </div>
  </nuxt-link>

</template>

<style scoped></style>
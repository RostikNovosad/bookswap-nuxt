<script setup lang="ts">
import type { NuxtError } from '#app';

const props = defineProps({
  error: Object as () => NuxtError,
});
</script>

<template>
  <div class="flex flex-col items-center justify-center">
    <img src="/img/books-404.png" class="lg:w-1/2" alt="" />
    <div class="px-10 text-center mt-8 md:mt-0">
      <h1 class="text-yellow text-9xl md:text-10xl font-medium">404</h1>
      <p class="text-darkBlue text-3xl md:text-4xl mt-4">Здається, ви заблукали...</p>
      <p class="text-lightBlue text-lg md:text-2xl mt-5 mb-7">
        Сторінка, яку ви шукаєте, не існує або була переміщена.
      </p>
      <NuxtLink to="/" class="text-yellow text-xl md:text-xl font-bold font-nunitoSans"
        >Go Home</NuxtLink
      >
    </div>
  </div>
</template>

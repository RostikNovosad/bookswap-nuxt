<template>
  <div class="wrapper flex flex-col min-h-screen">
    <BHeader />
    <main class="px-5 sm:px-10 lg:px-25 flex flex-col flex-auto">
      <slot></slot>
    </main>
    <BFooter />
  </div>
</template>
<script setup lang="ts">
import { watch } from "vue";
import { useBurgerMenuStore } from '@/stores/burgerMenu';
const store = useBurgerMenuStore();
watch(() => store.burgerOpen, (newValue) => {
  if (newValue) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
});
</script>
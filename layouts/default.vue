<template>
  <BHeader />

  <main>
    <slot></slot>
  </main>
  <BFooter />
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
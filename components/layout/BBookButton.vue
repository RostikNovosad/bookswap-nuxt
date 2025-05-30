<script setup lang="ts">
const props = defineProps(
    {
      id: Number,
    }
)
</script>

<template>
  <nuxt-link :to="`${props.id}`"
      class="px-2 py-2 bg-yellow rounded-lg text-white text-center font-bold font-nunitoSans shadow-yellow border border-yellow transition duration-300 hover:bg-white hover:text-yellow hover:ease-in"
  >
    <slot></slot>
  </nuxt-link>
</template>

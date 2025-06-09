<template>
  <section class="pt-16 pb-10 flex flex-col flex-auto">

    <!-- <div class="flex gap-4 py-4"> -->
    <!-- <nuxt-link to="/profile/favorite">
        <BButton>Інформація</BButton>
      </nuxt-link> -->
    <!-- <BButton @click="logout()" class="ml-auto">Вихід</BButton> -->

    <!-- </div> -->
    <div class="text-darkBlue flex flex-col gap-3 flex-grow mt-8">
      <BSectionTitle class="text-2xl">Вітаємо! {{ user?.email }}</BSectionTitle>

      <div class="mt-8 flex flex-col gap-4">

        <p class="text-darkBlue text-xl font-medium">Дякуємо, що обрали Bookswap!</p>
        <p class="text-darkBlue">Скоро тут зʼявиться більше інформації!</p>
      </div>
    </div>

    <BButton @click="logout()" class="ml-auto">Вихід</BButton>

  </section>
</template>
<script setup lang="ts">

const { user } = storeToRefs(authStore())
const { logout } = authStore()

definePageMeta({
  middleware: ['auth']
});
</script>
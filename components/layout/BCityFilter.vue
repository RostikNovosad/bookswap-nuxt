<script setup lang="ts">
import {city, cityOpenToogle, cityOpen, selectedCity, cityHandler } from  "@/composables/cityFilter"
watch(city, (newX) => {
  console.log(`city — це ${newX}`)
})
import { useCitysList } from "@/stores/citysList";
const store = useCitysList()
const citys = store.$state;
</script>

<template>
  <div id="city" class="bg-darkGrey text-darkBlue px-2.5 py-2 flex flex-col min-w-[200px] max-w-full rounded-md">
    <div @click="cityOpenToogle" class="flex justify-between items-center">
      {{selectedCity}}
      <img src="~/assets/images/drop.svg" alt="">
    </div>
    <div class="grid transition-all duration-300" :class="cityOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]' ">
      <div class="overflow-hidden min-h-0 flex flex-col gap-1">
        <div v-for="city in citys" :id="city.key" @click="cityHandler" class="pt-2">{{ city.title }}</div>
      </div>
    </div>
  </div>
</template>

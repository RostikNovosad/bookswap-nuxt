<script setup lang="ts">
import { languageOpenToogle, selectedLanguage, languageOpen, languageHandler} from "@/composables/languageFilter"
</script>

<template>
  <div id="city" class="bg-darkGrey text-darkBlue px-2.5 py-2 flex flex-col min-w-[200px] max-w-full rounded-md">
    <div @click="languageOpenToogle" class="flex justify-between items-center">
      {{selectedLanguage}}
      <img src="~/assets/images/drop.svg" alt="">
    </div>
    <div class="grid transition-all duration-300" :class="languageOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]' ">
      <div class="overflow-hidden min-h-0 flex flex-col gap-3">
        <div id="ua" @click="languageHandler" class="pt-2">Українська</div>
        <div id="en" @click="languageHandler">Англійська</div>
      </div>
    </div>
  </div>
</template>

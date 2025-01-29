<template>
  <div class="bg-white md:w-[688px] h-full min-h-[200px] my-10 sm:my-20 mx-auto">
    <div class=" border-b-2 border-gray-200 px-10 py-5">
      <BSectionTitle>Add Book</BSectionTitle>
    </div>
    <div class="px-10 pt-10 pb-16 flex flex-col gap-5">
      <div class="flex flex-col gap-1">
        <label for="title">Назва</label>
        <input type="text" name="title" id="title" placeholder="Назва книги" minlength="4" maxlength="50" class="w-full py-2 pl-6 px-3 font-medium border border-yellow rounded-lg	outline-none	truncate"/>
      </div>

      <div class="flex flex-col gap-1">
        <label for="author">Автор</label>
        <select class="w-full py-2 pl-6 px-3 font-medium text-black border border-yellow rounded-lg	outline-none truncate">
          <option>Оберіть автора</option>
          <option v-for="author in authors" :id="author.key">{{author.title}}</option>
        </select>
      </div>

      <div class="flex flex-col gap-1">
        <label for="genre">Жанр</label>
        <select class="w-full py-2 pl-6 px-3 font-medium text-black border border-yellow rounded-lg	outline-none truncate">
          <option>Оберіть жанр</option>
          <option v-for="genre in genres" :id="genre.key">{{genre.title}}</option>
        </select>
      </div>

      <div class="flex flex-col gap-1">
        <label for="description">Опис</label>
        <textarea name="description" id="description" class="overlay-scroll custom-scroll w-full py-2 pl-6 px-3 font-medium text-black border border-yellow rounded-lg	outline-none resize-none overflow-y-auto	" rows="6"></textarea>
      </div>

      <div class="flex flex-col gap-1">
        <label for="condition">Стан: {{conditionShow}}</label>
        <input type="range" @input="conditionHadler" min="1" max="10" class="slider w-full py-2 pl-6 px-3 font-medium text-black border border-yellow rounded-lg	outline-none">
      </div>

      <div class="flex flex-col gap-1">
        <label>Мова</label>
        <select class="w-full py-2 pl-6 px-3 font-medium text-black border border-yellow rounded-lg	outline-none truncate">
          <option>Оберіть мову</option>
          <option v-for="language in languages" :id="language.key">{{language.title}}</option>
        </select>
      </div>

      <div class="flex flex-col gap-1">
        <label>Місто</label>
        <select class="w-full py-2 pl-6 px-3 font-medium text-black border border-yellow rounded-lg	outline-none truncate">
          <option>Оберіть місто</option>
          <option v-for="city in citys" :id="city.key">{{city.title}}</option>
        </select>
      </div>

      <div class="">
        <label for="photo">Фото</label>
        <input type="file" class="w-full py-2 pl-6 px-3 font-medium text-black border border-yellow rounded-lg outline-none" accept="image/png, image/jpeg">
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { getAuthors, getGenrers, getCitys, getLanguages } from "@/composables/addBook";
const authors = getAuthors();
const genres = getGenrers();
const citys = getCitys();
const languages = getLanguages();
const conditionRange = ref();
const conditionHadler = (e) => {
  return conditionRange.value = e.target.value;
}
const conditionShow = computed(() => {
  return conditionRange.value ? conditionRange.value : "Не обрано";
})
</script>
<style scoped>
.overlay-scroll {
  overflow-y: overlay;
}
.custom-scroll::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}
.custom-scroll::-webkit-scrollbar-thumb {
  background-color: #00000000;
  border: 5px solid #00000040;
  border-radius: 24px;
  box-shadow: 4px 0px 0px 4px #00000040 inset;
}
.custom-scroll::-webkit-scrollbar-track {
  background: transparent;
}
.slider {
  -webkit-appearance: none;
  width: 100%;
  height: 10px;
  background: #FFFFFF;
  outline: none;
  opacity: 0.7;
  -webkit-transition: .2s;
  transition: opacity .2s;
}

.slider:hover {
  opacity: 1;
}

.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background: #FFCE1A;
  cursor: pointer;
}

.slider::-moz-range-thumb {
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background: #FFCE1A;
  cursor: pointer;
}

input::file-selector-button {
  font-weight: bold;
  color: white;
  padding: 8px 24px;
  background-color: #FFCE1A;
  border: thin solid #FFCE1A;
  border-radius: 8px;
  transition: all 0.3s ease-in;
}
input::file-selector-button:hover {
  color: #FFD633;
  background-color: #fff;
  border: thin solid #FFD633;
}
</style>
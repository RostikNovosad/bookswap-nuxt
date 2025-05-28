<template>
  <div class="bg-white md:w-[688px] h-full min-h-[200px] my-10 sm:my-20 mx-auto">
    <div class=" border-b-2 border-gray-200 px-10 py-5">
      <BSectionTitle>Додати книгу</BSectionTitle>
    </div>
    <form @submit.prevent ref="form" class="px-10 pt-10 pb-16 flex flex-col gap-5">
      <div class="flex flex-col gap-1">
        <label for="title">Назва</label>
        <input type="text" name="title" id="title" v-model="title" placeholder="Назва книги" minlength="4"
          maxlength="50"
          class="w-full py-2 pl-6 px-3 font-medium border border-yellow rounded-lg  outline-none  truncate" />
      </div>

      <div class="flex flex-col gap-1">
        <label for="author">Автор</label>
        <select
          class="w-full py-2 pl-6 px-3 font-medium text-black border border-yellow rounded-lg outline-none truncate"
          v-model="author">
          <option :value="undefined">Оберіть автора</option>
          <option v-for="authorOption in authors" :key="authorOption.key" :value="authorOption.key">{{
            authorOption.title }}</option>
        </select>
      </div>

      <div class="flex flex-col gap-1">
        <label for="genre">Жанр</label>
        <select
          class="w-full py-2 pl-6 px-3 font-medium text-black border border-yellow rounded-lg outline-none truncate"
          v-model="genre">
          <option :value="undefined">Оберіть жанр</option>
          <option v-for="genreOption in genres" :key="genreOption.key" :value="genreOption.key">{{ genreOption.title }}
          </option>
        </select>
      </div>

      <div class="flex flex-col gap-1">
        <label for="description">Опис</label>
        <textarea name="description" id="description" v-model="description"
          class="overlay-scroll custom-scroll w-full py-2 pl-6 px-3 font-medium text-black border border-yellow rounded-lg  outline-none resize-none overflow-y-auto  "
          rows="6"></textarea>
      </div>

      <div class="flex flex-col gap-1">
        <label for="condition">Стан: {{ conditionShow }}</label>
        <input type="range" id="condition" v-model="condition" min="1" max="10"
          class="slider w-full py-2 pl-6 px-3 font-medium text-black border border-yellow rounded-lg  outline-none">
      </div>

      <div class="flex flex-col gap-1">
        <label>Мова</label>
        <select
          class="w-full py-2 pl-6 px-3 font-medium text-black border border-yellow rounded-lg outline-none truncate"
          v-model="language">
          <option :value="undefined">Оберіть мову</option>
          <option v-for="languageOption in languages" :key="languageOption.key" :value="languageOption.key">{{
            languageOption.title }}</option>
        </select>
      </div>

      <div class="flex flex-col gap-1">
        <label>Місто</label>
        <select
          class="w-full py-2 pl-6 px-3 font-medium text-black border border-yellow rounded-lg outline-none truncate"
          v-model="city">
          <option :value="undefined">Оберіть місто</option>
          <option v-for="cityOption in citys" :key="cityOption.key" :value="cityOption.key">{{ cityOption.title }}
          </option>
        </select>
      </div>

      <div class="flex flex-col gap-1">
        <label for="contact">Контакт</label>
        <input type="text" name="contact" id="contact" v-model="contact" placeholder="Введіть свій телеграм"
          minlength="4" maxlength="50"
          class="w-full py-2 pl-6 px-3 font-medium border border-yellow rounded-lg  outline-none  truncate" />
      </div>

      <div v-if="unCompleteForm" class="flex flex-col gap-1">
        <p class="text-red-500	text-center">Форма заповнена не повністю!</p>
      </div>

      <!--      <div class="">-->
      <!--        <label for="photo">Фото</label>-->
      <!--        <input type="file" class="w-full py-2 pl-6 px-3 font-medium text-black border border-yellow rounded-lg outline-none" accept="image/png, image/jpeg">-->
      <!--      </div>-->

      <BButton @click="checkForm">Відправити</BButton>

    </form>
  </div>

  <div v-if="store.showModal"
    class="h-screen w-screen absolute top-0 bottom-0 right-0 left-0  z-50	px-5 py-10 flex justify-center items-center modal ">
    <div class="bg-white rounded-3xl py-10 px-5 flex flex-col gap-4 justify-center items-center">
      <p v-if="successPost">Вашу книгу було успішно додано!</p>
      <p v-if="errorPost">Упс..! сталася помилка, спробуйте ще раз!</p>
      <nuxt-link to="/">
        <BButton @click="closeModal">На головну</BButton>
      </nuxt-link>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useShowModalStore } from "@/stores/showModal";
const store = useShowModalStore();
import axios from "axios";
import { watch } from "vue";

const { genresList } = storeToRefs(useGenresListStore())
const { authorsList } = storeToRefs(useAuthorsListStore())
const { citysList } = storeToRefs(useCitysListStore())
const { languagesList } = storeToRefs(useLanguagesListStore())
const { createBook } = useBooksListStore()

const genres = genresList.value;
const authors = authorsList.value;
const citys = citysList.value;
const languages = languagesList.value;

const title = ref();
const author = ref();
const genre = ref();
const description = ref();
const condition = ref();
const language = ref();
const city = ref();
const contact = ref();
const successPost = ref(false);
const errorPost = ref(false);
const unCompleteForm = ref(false);

const checkForm = () => {
  if (title.value && description.value && condition.value && genre.value && author.value && city.value && language.value && contact.value) {
    handlePostBook()
  } else {
    unCompleteForm.value = true;
  }
}
const closeModal = () => {
  return store.showModal = false;
}

async function handlePostBook() {
  const randomNumber = Math.floor(Math.random() * 9) + 1;

  const bookData = {
    imageUrl: `/images/books/book-${randomNumber}.jpg`,
    title: title.value,
    description: description.value,
    condition: condition.value,
    genre: genre.value,
    author: author.value,
    city: city.value,
    language: language.value,
    contact: contact.value
  };

  await createBook(bookData);

  title.value = '';
  description.value = '';
  condition.value = 0;
  genre.value = '';
  author.value = '';
  city.value = '';
  language.value = '';
  contact.value = '';
}

const conditionShow = computed(() => {
  return condition.value ? condition.value : "Не обрано";
})

watch(() => store.showModal, (newValue) => {
  if (newValue) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
});

</script>
<style scoped>
.modal {
  background: rgba(0, 0, 0, 0.5);
}

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
<template>
  <div class="bg-white md:w-[688px] h-full min-h-[200px] my-10 sm:my-20 mx-auto">
    <div class=" border-b-2 border-gray-200 px-10 py-5">
      <BSectionTitle>Додати книгу</BSectionTitle>
    </div>
    <form @submit.prevent ref="form" class="px-10 pt-10 pb-16 flex flex-col gap-5">
      <div class="flex flex-col gap-1">
        <label for="title">Назва</label>
        <input type="text" name="title" id="title" v-model="newBook.title" placeholder="Назва книги" minlength="4"
          maxlength="50"
          class="w-full py-2 pl-6 px-3 font-medium border border-yellow rounded-lg outline-none truncate text-black" />
      </div>

      <div class="flex flex-col gap-1">
        <label for="author">Автор</label>
        <Dropdown v-model="newBook.author" :options="authorsDB" optionLabel="title" optionValue="id"
          placeholder="Оберіть автора" class="w-full border border-yellow font-medium"></Dropdown>
      </div>

      <div class="flex flex-col gap-1">
        <label for="genre">Жанр</label>
        <Dropdown v-model="newBook.genre" :options="genresDB" optionLabel="title" optionValue="id"
          placeholder="Оберіть жанр" class="w-full border border-yellow font-medium"></Dropdown>
      </div>

      <div class="flex flex-col gap-1">
        <label>Мова</label>
        <Dropdown v-model="newBook.language" :options="languagesDB" optionLabel="title" optionValue="id"
          placeholder="Оберіть мову" class="w-full border border-yellow font-medium text-black"></Dropdown>
      </div>

      <div class="flex flex-col gap-1">
        <label>Місто</label>
        <Dropdown v-model="newBook.city" :options="citysDB" optionLabel="title" optionValue="id"
          placeholder="Оберіть місто" class="w-full border border-yellow font-medium text-black"></Dropdown>
      </div>

      <div class="flex flex-col gap-1">
        <label for="description">Опис</label>
        <textarea name="description" id="description" v-model="newBook.description"
          class="overlay-scroll custom-scroll w-full py-2 pl-6 px-3 font-medium text-black border border-yellow rounded-lg  outline-none resize-none overflow-y-auto  "
          rows="6"></textarea>
      </div>

      <div class="flex flex-col gap-1">
        <label for="condition">Стан: {{ conditionShow }}</label>
        <input type="range" id="condition" v-model="newBook.condition" min="1" max="10"
          class="slider w-full py-2 pl-6 px-3 font-medium text-black border border-yellow rounded-lg  outline-none">
      </div>

      <div class="flex flex-col gap-1">
        <label for="contact">Контакт</label>
        <input type="text" name="contact" id="contact" v-model="newBook.contact" placeholder="Введіть свій телеграм"
          minlength="4" maxlength="50"
          class="w-full py-2 pl-6 px-3 font-medium border border-yellow rounded-lg outline-none truncate text-black" />
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
import { serverTimestamp } from "firebase/firestore";
import { useShowModalStore } from "@/stores/showModal";
const store = useShowModalStore();

const { $auth } = useNuxtApp();
const user = $auth.currentUser;

const { addBook } = useBooksStore()

const { getLanguages } = useLanguagesStore()
const { languagesDB } = storeToRefs(useLanguagesStore())

const { getCitys } = useCitysStore()
const { citysDB } = storeToRefs(useCitysStore())

const { getAuthors } = useAuthorsStore()
const { authorsDB } = storeToRefs(useAuthorsStore())

const { getGenres } = useGenresStore()
const { genresDB } = storeToRefs(useGenresStore())

const { createBook } = useBooksListStore()

const newBook = ref({
  title: null,
  author: null,
  genre: null,
  description: null,
  condition: null,
  language: null,
  city: null,
  contact: null,
})
const successPost = ref(false);
const errorPost = ref(false);
const unCompleteForm = ref(false);

const completeForm = computed(() => {
  return newBook.value.title !== null
    && newBook.value.description !== null
    && newBook.value.condition !== null
    && newBook.value.genre !== null
    && newBook.value.author !== null
    && newBook.value.city !== null
    && newBook.value.language !== null
    && newBook.value.contact !== null
})

const checkForm = () => {
  if (completeForm.value) {
    console.log("completeForm ", completeForm.value);
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
    title: newBook.value.title,
    description: newBook.value.description,
    condition: newBook.value.condition,
    genre: newBook.value.genre,
    author: newBook.value.author,
    city: newBook.value.city,
    language: newBook.value.language,
    contact: newBook.value.contact,
    wasAdded: serverTimestamp(),
    userId: user?.uid

  };

  await addBook(bookData);


  newBook.value = {
    title: null,
    author: null,
    genre: null,
    description: null,
    condition: null,
    language: null,
    city: null,
    contact: null,
  }
}

const conditionShow = computed(() => {
  return newBook.value.condition ? newBook.value.condition : "Не обрано";
})

onMounted(async () => {
  await getLanguages()
  await getCitys()
  await getAuthors()
  await getGenres()
});

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
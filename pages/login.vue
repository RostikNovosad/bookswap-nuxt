<script setup lang="ts">
import { useRouter } from 'vue-router';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

const { user, error, isRegistering } = storeToRefs(authStore())

const { handleLoginButton } = authStore()
const { $auth } = useNuxtApp();
const router = useRouter();

const email = ref('');
const password = ref('');

</script>
<template>

  <div class=" w-full mx-10 md:w-[600px] bg-white p-8 mx-auto my-20 border border-yellow  rounded-2xl flex-grow">
    <h2 class="text-2xl font-semibold text-center">{{ isRegistering ? "Реєстрація" : "Вхід" }}</h2>

    <form @submit.prevent="handleLoginButton(email, password)" class="mt-4 flex flex-col gap-4">
      <div class="flex flex-col gap-1">
        <label for="email" class="ml-1 text-darkBlue font-medium">Email:</label>
        <input type="email" id="email" v-model="email" placeholder="Введіть email"
          class="w-full py-2 pl-6 px-3 font-medium border border-yellow rounded-l-lg	outline-none	truncate" required />
      </div>
      <div class="flex flex-col gap-1">
        <label for="password" class="ml-1 text-darkBlue font-medium">Пароль:</label>
        <input type="password" id="password" v-model="password" placeholder="Введіть пароль"
          class="w-full py-2 pl-6 px-3 font-medium border border-yellow rounded-l-lg	outline-none	truncate" required />
      </div>
      <div class="flex justify-center mt-8 ">
        <BButton type="submit">{{ isRegistering ? 'Зареєструватися' : 'Увійти' }}</BButton>
      </div>
    </form>
    <p v-if="error" class="text-red-500 text-center mt-2 ">{{ error }}</p>
    <p @click.stop="isRegistering = !isRegistering"
      class="mt-8 text-darkBlue text-center font-medium cursor-pointer transition duration-300 hover:underline underline-offset-[4px]">
      {{ isRegistering ? 'Вже є акаунт? Увійти' : 'Немає акаунту? Зареєструватися' }}
    </p>
  </div>
</template>
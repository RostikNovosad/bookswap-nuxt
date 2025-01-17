<template>
  <div class="flex justify-between px-25 py-4 bg-slate-100">
    <div class="">
      <nuxt-link to="/">
        <img src="~/assets/images/logo.png" alt="" width="40" height="40" />
      </nuxt-link>
    </div>
    <div class="flex gap-8">
      <BButton>
        <nuxt-link to="/add">Додати книгу</nuxt-link>
      </BButton>
      <BButton>
        <nuxt-link to="/catalog">Знайти книгу</nuxt-link>
      </BButton>
    </div>
  </div>
</template>

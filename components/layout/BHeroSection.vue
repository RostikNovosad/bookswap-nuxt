<template>
  <section class="flex flex-col justify-between gap-5 lg:gap-10 pb-10 lg:pb-30">
    <div class="flex flex-col lg:flex-row gap-5 lg:gap-10 lg:pt-10">
      <div class="flex flex-col gap-4 lg:gap-8 pt-10">
        <h1 class="text-4xl sm:text-5xl md:text-7xl lg:text-5xl xl:text-7xl  font-semibold text-balance lg:max-w-3xl	">Віддавайте свої – знаходьте чужі! Обмінюйтеся книгами легко.</h1>
        <p class="md:text-2xl lg:text-xl xl:text-2xl font-semibold text-balance lg:max-w-3xl text-lightBlack">Даруйте нове життя своїм книгам і знаходь історії, які надихають. Економно, екологічно, захопливо!</p>
      </div>
      <img src="~/assets/images/hero.png"  alt="">
    </div>
    <div class="flex items-center gap-4 sm:gap-10">
        <nuxt-link to="/catalog">
          <BButton>Знайти книгу</BButton>
        </nuxt-link>
      <BVideoButton>Про сервіс</BVideoButton>
    </div>
  </section>
</template>
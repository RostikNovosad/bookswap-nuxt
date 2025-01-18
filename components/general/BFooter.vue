<template>
    <img src="~/assets/images/books-footer.png" alt="books-image" class="block w-full md:hidden">
  <footer class="relative flex flex-col gap-y-40 px-10 lg:px-25 py-5 bg-yellowFooter md:bg-slate-100">
    <div class="hidden md:flex justify-between gap-20">
      <div class="flex flex-col gap-10">
        <img src="~/assets/images/logo.png" width="97" height="90" alt="logo image" />
        <ul class="flex gap-8 text-darkBlue" >
          <a href="#">About</a>
          <a href="#">Features</a>
          <a href="#">Gallery</a>
          <a href="#">Team</a>
        </ul>
      </div>
      <div class="flex flex-col gap-10 justify-end">
        <p class="break-normal text-darkBlue">Subscribe to stay tuned for new product and latest updates. <br> Let’s do it!</p>
        <BInput/>
      </div>
    </div>
    <div class="flex flex-col md:flex-row justify-between footer-bottom gap-5">
      <ul class="flex flex-col items-center  md:flex-row text-white md:text-darkBlue font-semibold	md:font-normal gap-8 ">
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Use</a>
        <a href="#">Sales and Refunds</a>
        <a href="#">Legal</a>
      </ul>
      <BSocialMedia/>
    </div>
  </footer>
</template>

<style>
@media (min-width: 768px) {
  footer::after {
    content: "";
    position: absolute;
    bottom: 60px;
    left: 0;
    width: 100%;
    height: 1px;
    background: rgba(13, 8, 66, 0.1);
  }
}

</style>
<script setup lang="ts">
import BSocialMedia from "~/components/layout/BSocialMedia.vue";
import BInput from "~/components/forms/BInput.vue";
</script>
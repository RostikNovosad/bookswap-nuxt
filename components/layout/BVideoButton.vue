<template>
  <div class="flex items-center gap-3">
    <a href="#" class="inline-block play-icon bg-yellow rounded-full border border-yellow p-3 transition duration-300 ease-in hover:bg-white">
        <svg width="16" height="16" viewBox="0 0 35 36" fill="none" xmlns="http://www.w3.org/2000/svg" class=" transition duration-300 ease-in">
          <path d="M31.8603 12.9792C32.7155 13.43 33.4309 14.103 33.9297 14.926C34.4286 15.7491 34.6921 16.6912 34.6921 17.6513C34.6921 18.6115 34.4286 19.5536 33.9297 20.3767C33.4309 21.1997 32.7155 21.8727 31.8603 22.3235L9.04687 34.6208C5.37344 36.6012 0.861328 34.0242 0.861328 29.9504V5.35403C0.861328 1.2767 5.37344 -1.29856 9.04687 0.680099L31.8603 12.9792Z" fill="#ffffff"/>
        </svg>
    </a>
    <span class="font-medium">
      <slot></slot>
    </span>
  </div>
</template>

<style scoped>
.play-icon:hover svg path {
  transition: all 0.3s ease-in;
  fill: #FFCE1A;
}
</style>
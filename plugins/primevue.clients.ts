import PrimeVue from 'primevue/config';
import Dropdown from 'primevue/dropdown';
// 1
// import 'primevue/resources/themes/lara-light-amber/theme.css';
// 2
import 'primevue/resources/themes/aura-light-amber/theme.css';

import 'primevue/resources/primevue.min.css';

import 'primeicons/primeicons.css';

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.use(PrimeVue);
  nuxtApp.vueApp.component('Dropdown', Dropdown);
});
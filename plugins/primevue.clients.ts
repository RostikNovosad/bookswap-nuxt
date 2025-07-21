import PrimeVue from 'primevue/config';
import Dropdown from 'primevue/dropdown';

import 'primevue/resources/themes/aura-light-amber/theme.css';

import 'primevue/resources/primevue.min.css';

import 'primeicons/primeicons.css';

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.use(PrimeVue);
  nuxtApp.vueApp.component('Dropdown', Dropdown);
});
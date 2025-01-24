export const cityOpen = ref(false);
export const city = ref('');
export const cityTitle = ref('');

export const cityOpenToogle = () => {
    return cityOpen.value = !cityOpen.value;
}
export const choiseCity = (e) => {
    return city.value = e.target.id;
}
export const choiseCityTitle = (e) => {
    return cityTitle.value = e.target.textContent;
}
export const selectedCity = computed(() => {
    return city.value !== "" ? cityTitle : "Оберіть місто";
})
export const cityHandler = (e) => {
    choiseCity(e);
    choiseCityTitle(e);
    cityOpenToogle()
}
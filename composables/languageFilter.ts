export const languageOpen = ref(false);
export const language = ref('');
export const languageTitle = ref('');
export const languageOpenToogle = () => {
    return languageOpen.value = !languageOpen.value;
}
export const choiseLanguage = (e) => {
    return language.value = e.target.id;
}
export const choiseLanguageTitle = (e) => {
    return languageTitle.value = e.target.textContent;
}
export const selectedLanguage = computed(() => {
    return language.value !== "" ? languageTitle : "Оберіть мову";
})
export const languageHandler = (e) => {
    choiseLanguage(e);
    choiseLanguageTitle(e);
    languageOpenToogle()
}
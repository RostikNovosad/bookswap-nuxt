export const useLanguagesListStore = defineStore('languagesL', () => {
  const languagesList = ref([
    {
      key: 'ua',
      title: 'Українська',
    },
    {
      key: 'en',
      title: 'Англійська',
    }
  ])

  return {
    languagesList
  }
})
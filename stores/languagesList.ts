export const useLanguagesListStore = defineStore('languages', () => {
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
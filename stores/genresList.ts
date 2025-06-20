export const useGenresListStore = defineStore("genresL", () => {
  const genresList = ref([
    {
      key: 'fantasy',
      title: 'Фантастика',
    },
    {
      key: 'detective',
      title: 'Детектив',
    },
    {
      key: 'novels',
      title: 'Романи',
    },
    {
      key: 'horrors',
      title: 'Жахи',
    },
    {
      key: 'other',
      title: 'Інший...',
    }
  ])

  return {
    genresList
  }
})
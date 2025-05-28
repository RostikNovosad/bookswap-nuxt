export const useAuthorsListStore = defineStore('authors', () => {
  const authorsList = ref([
    {
      key: 'stephen-king',
      title: 'Стівен Кінг',
    },
    {
      key: 'agatha-christie',
      title: 'Агата Крісті',
    },
    {
      key: 'joanne-rowling',
      title: 'Джоан Роулінг',
    },
    {
      key: 'george-orwell',
      title: 'Джордж Орвелл',
    },
    {
      key: 'other',
      title: 'Інший...',
    }
  ])

  return {
    authorsList
  }

})
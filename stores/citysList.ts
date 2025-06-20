export const useCitysListStore = defineStore("citysL", () => {
  const citysList = ref([
    {
      key: 'ternopil',
      title: 'Тернопіль',
    },
    {
      key: 'lviv',
      title: 'Львів',
    },
    {
      key: 'kyiv',
      title: 'Київ',
    },
    {
      key: 'other',
      title: 'Інше...',
    }
  ])

  return {
    citysList
  }
})
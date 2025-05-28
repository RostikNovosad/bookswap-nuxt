export const useCitysListStore = defineStore("citys", () => {
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
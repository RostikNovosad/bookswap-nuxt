export const useCitysList = defineStore("citys", {
    state: () => [
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
    ]
})
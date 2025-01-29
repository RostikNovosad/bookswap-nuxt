export const useLanguagesList = defineStore('languages', {
    state: () => [
        {
            key: 'ua',
            title: 'Українська',
        },
        {
            key: 'en',
            title: 'Англійська',
        }
    ]
})
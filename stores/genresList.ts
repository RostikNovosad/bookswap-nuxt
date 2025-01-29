export const useGenresList = defineStore("genres", {
    state: () => [
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
    ]
})
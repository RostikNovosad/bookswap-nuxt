export const useAuthorsList = defineStore('authors', {
    state: () => [
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
    ]
})
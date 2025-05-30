const { genresList } = storeToRefs(useGenresListStore())
const { authorsList } = storeToRefs(useAuthorsListStore())
const { citysList } = storeToRefs(useCitysListStore())
const { languagesList } = storeToRefs(useLanguagesListStore())


export function getAuthors() {
    const authors = authorsList.value;
}

export function getGenrers() {
    const genres = genresList.value;
}

export function getCitys() {
    const citys = citysList.value;
}

export function getLanguages() {
    const languages = languagesList.value;
}
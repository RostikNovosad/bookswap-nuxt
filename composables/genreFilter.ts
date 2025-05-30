export const genreOpen = ref(false);
export const genre = ref('');
export const genreTilte = ref('');
export const genreOpenToogle = () => {
    return genreOpen.value = !genreOpen.value;
}
export const choiseGenre = (e) => {
    return genre.value = e.target.id;
}
export const choiseGenreTitle = (e) => {
    return genreTilte.value = e.target.textContent;
}
export const selectedGenre = computed(() => {
    return genre.value !== "" ? genreTilte : "Оберіть жанр";
})
export const genreHandler = (e) => {
    choiseGenre(e);
    choiseGenreTitle(e);
    genreOpenToogle()
}

export const authorOpen = ref(false);
export const author = ref('');
export const authorTitle = ref('');
export const authorOpenToogle = () => {
    return authorOpen.value = !authorOpen.value;
}
export const choiseAuthor = (e) => {
    return author.value = e.target.id;
}
export const choiseAuthorTitle = (e) => {
    return authorTitle.value = e.target.textContent;
}
export const selectedAuthor = computed(() => {
    return author.value !== "" ? authorTitle : "Оберіть автора";
})
export const authorHandler = (e) => {
    choiseAuthor(e);
    choiseAuthorTitle(e);
    authorOpenToogle()
}
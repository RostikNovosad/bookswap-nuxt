import { useAuthorsList } from "@/stores/authorsList";
import { useGenresList } from "@/stores/genresList";
import { useCitysList } from "@/stores/citysList";
import { useLanguagesList } from "@/stores/languagesList";

export function getAuthors() {
    const storeAuthors = useAuthorsList();
    return storeAuthors.$state;
}

export function getGenrers() {
    const storeGenres = useGenresList();
    return storeGenres.$state;
}

export function getCitys() {
    const storeCitys = useCitysList();
    return storeCitys.$state;
}

export function getLanguages() {
    const storeLanguages = useLanguagesList();
    return storeLanguages.$state;
}
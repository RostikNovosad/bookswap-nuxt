import { defineStore } from 'pinia';
import { useSupabaseClient } from '#imports';

export const useGenresStore = defineStore('genres', () => {
  const supabase = useSupabaseClient();

  const genresDB = ref([]);

  const getGenres = async () => {
    try {
      const { data, error } = await supabase
        .from('genres')
        .select('*')
        .order('id', { ascending: true });
      if (error) {
        console.error('Помилка при отриманні жанрів з Supabase:', error.message);
        return [];
      }
      genresDB.value = data;
    } catch (err) {
      console.error('Загальна помилка в getGenres:', err);
    }
  };

  return {
    genresDB,
    getGenres
  };
});
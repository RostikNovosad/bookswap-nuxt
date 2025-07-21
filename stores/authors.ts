import { defineStore } from 'pinia';
import { useSupabaseClient } from '#imports';

export const useAuthorsStore = defineStore('authors', () => {
  const supabase = useSupabaseClient();

  const authorsDB = ref([]);

  const getAuthors = async () => {
    try {
      const { data, error } = await supabase
        .from('authors')
        .select('*')
        .order('id', { ascending: true });

      if (error) {
        console.error('Помилка при отриманні авторів з Supabase:', error.message);
        return [];
      }

      authorsDB.value = data;
    } catch (err) {
      console.error('Загальна помилка в getAuthors:', err);
    }
  };

  return {
    authorsDB,
    getAuthors,
  };
});
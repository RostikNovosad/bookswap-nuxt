import { defineStore } from 'pinia';
import { useSupabaseClient } from '#imports';

export const useLanguagesStore = defineStore('languages', () => {
  const supabase = useSupabaseClient();

  const languagesDB = ref([]);

  const getLanguages = async () => {
    try {
      const { data, error } = await supabase
        .from('languages')
        .select('*')
        .order('id', { ascending: true });

      if (error) {
        console.error('Помилка при отриманні мов з Supabase:', error.message);
        return [];
      }

      languagesDB.value = data;
    } catch (err) {
      console.error('Загальна помилка в getLanguages:', err);
    }
  };

  return {
    languagesDB,
    getLanguages
  };
});
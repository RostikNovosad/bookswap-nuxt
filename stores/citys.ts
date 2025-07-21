import { defineStore } from 'pinia';
import { useSupabaseClient } from '#imports';

export const useCitysStore = defineStore('citys', () => {
  const supabase = useSupabaseClient();

  const citysDB = ref([]);

  const getCitys = async () => {
    try {
      const { data, error } = await supabase
        .from('citys')
        .select('*')
        .order('id', { ascending: true });

      if (error) {
        console.error('Помилка при отриманні міст з Supabase:', error.message);
        return [];
      }

      citysDB.value = data;
    } catch (err) {
      console.error('Загальна помилка в getCitys:', err);
    }
  };

  return {
    citysDB,
    getCitys
  };
});
import { defineStore } from 'pinia';
import { useRouter } from 'vue-router';
import { useSupabaseClient, useSupabaseUser } from '#imports';

export const authStore = defineStore('auth', () => {
  const supabase = useSupabaseClient();
  const router = useRouter();

  const user = useSupabaseUser();

  const error = ref<string | null>(null);
  const isRegistering = ref(false);

  const userAuthStatus = computed(() => !!user.value);

  const handleAuth = async (email: string, password: string) => {
    error.value = null;

    try {
      if (isRegistering.value) {
        const { error: signUpError } = await supabase.auth.signUp({
          email: email,
          password: password,
        });

        if (signUpError) {
          throw signUpError;
        }

        alert('Реєстрація успішна! Перевірте свою пошту для підтвердження. Після підтвердження ви зможете увійти.');
        isRegistering.value = false;

      } else {
        const { error: signInError } = await supabase.auth.signInWithPassword({
          email: email,
          password: password,
        });

        if (signInError) {
          throw signInError;
        }

        router.push('/profile');
      }
    } catch (err: any) {
      console.error('Auth error:', err.message);
      switch (err.message) {
        case 'Invalid login credentials':
          error.value = 'Неправильний email або пароль.';
          break;
        case 'Email already registered':
          error.value = 'Цей email вже зареєстрований.';
          break;
        case 'Email not confirmed':
          error.value = 'Будь ласка, підтвердьте свою пошту.';
          break;
        case 'User already registered':
          error.value = 'Користувач з таким email вже зареєстрований.';
          break;
        case 'Invalid email or password':
          error.value = 'Невірний email або пароль.';
          break;
        default:
          error.value = err.message || 'Виникла помилка. Спробуйте ще раз.';
          break;
      }
    }
  };

  const logout = async () => {
    try {
      const { error: signOutError } = await supabase.auth.signOut();

      if (signOutError) {
        throw signOutError;
      }

      router.push('/');
    } catch (err: any) {
      console.error('Помилка виходу:', err.message);
      error.value = err.message || 'Виникла помилка при виході.';
    }
  };

  return {
    user,
    error,
    isRegistering,
    userAuthStatus,
    handleAuth,
    logout,
  };
});
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, User as FirebaseUser } from 'firebase/auth';


export const authStore = defineStore('auth', () => {

  const { $auth } = useNuxtApp();
  const router = useRouter();
  const user = ref<FirebaseUser | null>(null);

  const error = ref(null);
  const isRegistering = ref(false)

  const userAuthStatus = ref(false)

  const handleLoginButton = async (email: string, password: string) => {
    error.value = null;

    try {
      if (isRegistering.value) {
        await createUserWithEmailAndPassword($auth, email, password);
        alert('Реєстрація успішна! Тепер ви можете увійти.');
        isRegistering.value = false;
        router.push('/profile');

      } else {
        await signInWithEmailAndPassword($auth, email, password);
        userAuthStatus.value = true;
        router.push('/profile');

      }
    } catch (err) {
      console.error('Auth error:', err.code, err.message);
      switch (err.code) {
        case 'auth/invalid-email':
          error.value = 'Неправильний формат email.';
          break;
        case 'auth/user-disabled':
          error.value = 'Користувач заблокований.';
          break;
        case 'auth/user-not-found':
          error.value = 'Користувача не знайдено.';
          break;
        case 'auth/wrong-password':
          error.value = 'Неправильний email або пароль.';
          break;
        case 'auth/email-already-in-use':
          error.value = 'Цей email вже використовується.';
          break;
        case 'auth/invalid-credential':
          error.value = 'Невірні дані для входу.';
          break;
        case 'auth/weak-password':
          error.value = 'Пароль занадто слабкий (повинен бути не менше 6 символів).';
          break;
        default:
          error.value = 'Виникла помилка. Спробуйте ще раз.';
          break;
      }
    }
  }

  const logout = async () => {
    try {
      await signOut($auth);
      router.push('/');
    } catch (error) {
      console.error('Помилка виходу:', error);
    }
  };

  onAuthStateChanged($auth, (firebaseUser) => {
    user.value = firebaseUser;

    if (user.value) {
      userAuthStatus.value = true
    }
    else {
      userAuthStatus.value = false
    }
  })

  return {
    user,
    error,
    isRegistering,
    userAuthStatus,
    handleLoginButton,
    logout
  }
})

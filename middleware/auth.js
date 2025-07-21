// middleware/auth.ts
import { useSupabaseUser } from '#imports';

export default defineNuxtRouteMiddleware(() => {
  const user = useSupabaseUser();

  if (to.path.startsWith('/profile') && !user.value) {
    return navigateTo('/login');
  }
});

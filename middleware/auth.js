// middleware/auth.ts
import { useSupabaseUser } from '#imports';

export default defineNuxtRouteMiddleware(() => {
  const user = useSupabaseUser();

  if (!user && to.path.startsWith('/profile')) {
    return navigateTo('/login');
  }
});

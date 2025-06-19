export default defineNuxtRouteMiddleware((to, from) => {
  const { $auth } = useNuxtApp();
  const user = $auth.currentUser;

  if (!user && to.path.startsWith('/profile')) {
    return navigateTo('/login');
  }

  if (user && (to.path === '/login')) {
    return navigateTo('/profile');
  }
});
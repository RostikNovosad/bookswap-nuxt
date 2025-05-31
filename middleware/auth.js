// middleware/auth.js
export default defineNuxtRouteMiddleware((to, from) => {
  const { $auth } = useNuxtApp();
  const user = $auth.currentUser;

  if (!user && to.path === '/user') {
    return navigateTo('/login');
  }

  if (user && (to.path === '/login')) {
    return navigateTo('/user');
  }
});
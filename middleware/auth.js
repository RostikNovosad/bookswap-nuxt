export default defineNuxtRouteMiddleware((to, from) => {
  const { $auth } = useNuxtApp();
  const user = $auth.currentUser;

  if (!user && to.path === '/profile/' || '/profile') {
    console.log("user: ", user);
    return navigateTo('/login');
  }

  if (user && (to.path === '/login')) {
    return navigateTo('/profile');
  }
});
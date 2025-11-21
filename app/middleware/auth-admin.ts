
const useAdminIsLoggedIn = () => useState<boolean>('adminIsLoggedIn', () => {
    if (process.client) {
        return localStorage.getItem('adminLoggedIn') === 'true';
    }
    return false;
});

export default defineNuxtRouteMiddleware((to, from) => {
    const isLoggedIn = useAdminIsLoggedIn().value;

    if (!isLoggedIn && to.path.startsWith('/admin') && to.path !== '/admin/login') {
        return navigateTo('/admin/login');
    }

    if (isLoggedIn && to.path === '/admin/login') {
        return navigateTo('/admin');
    }
});
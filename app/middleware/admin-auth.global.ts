// app/middleware/admin-auth.global.ts
export default defineNuxtRouteMiddleware((to) => {
    // 1. Отримуємо кукі з ключем
    const adminKey = useCookie('admin_key');

    // Визначаємо, куди намагається перейти користувач
    const isLoginPage = to.path === '/admin';
    const isAdminSection = to.path.startsWith('/admin');

    // 2. Сценарій "НЕМАЄ ДОСТУПУ":
    // Якщо користувач хоче зайти в адмінку (будь-яка сторінка /admin/...),
    // але у нього немає ключа і це НЕ сторінка логіну
    if (isAdminSection && !isLoginPage && !adminKey.value) {
        // Перенаправляємо на вхід
        return navigateTo('/admin');
    }

    // 3. Сценарій "ВЖЕ ЗАЛОГІНЕНИЙ":
    // Якщо користувач має ключ і намагається відкрити сторінку логіну (/admin)
    if (isLoginPage && adminKey.value) {
        // Одразу кидаємо його на дашборд, щоб не показувати форму входу
        return navigateTo('/admin/dashboard');
    }
});
<template>
  <div class="min-h-screen bg-gray-50">
    <AdminSidebar />

    <div class="ml-64">
      <AdminHeader :title="pageTitle" />

      <main class="pt-24 px-8 pb-8">
        <slot />
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
// Імпортуємо ваші компоненти
import AdminSidebar from '~/components/AdminSidebar.vue';
import AdminHeader from '~/components/AdminHeader.vue';

const route = useRoute();

// Логіка заголовків, яка раніше була в сторінках, тепер тут централізована
const pageTitle = computed(() => {
  const titles: Record<string, string> = {
    '/admin/dashboard': 'Дашборд',
    '/admin/ads': 'Оголошення',
    '/admin/users': 'Користувачі',
    '/admin/analytics': 'Статистика',
    '/admin/reports': 'Скарги',
    '/admin/settings': 'Налаштування'
  };
  return titles[route.path] || 'Адмін Панель';
});
</script>
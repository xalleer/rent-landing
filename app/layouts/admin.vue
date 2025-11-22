<template>
  <div class="min-h-screen bg-gray-50">
    <div
        v-if="isSidebarOpen"
        class="fixed inset-0 bg-black/50 z-30 md:hidden backdrop-blur-sm transition-opacity"
        @click="isSidebarOpen = false"
    ></div>

    <AdminSidebar
        :is-open="isSidebarOpen"
        @close="isSidebarOpen = false"
    />

    <div class="md:ml-64 transition-all duration-300 min-h-screen flex flex-col">
      <AdminHeader
          :title="pageTitle"
          @toggle-sidebar="isSidebarOpen = !isSidebarOpen"
      />

      <main class="pt-24 px-4 md:px-8 pb-8 flex-grow">
        <slot />
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue';
import { useRoute } from 'vue-router';
import AdminSidebar from '~/components/AdminSidebar.vue';
import AdminHeader from '~/components/AdminHeader.vue';

const route = useRoute();
const isSidebarOpen = ref(false);

watch(() => route.fullPath, () => {
  isSidebarOpen.value = false;
});

const pageTitle = computed(() => {
  const titles: Record<string, string> = {
    '/admin/dashboard': 'Дашборд',
    '/admin/ads': 'Оголошення',
    '/admin/users': 'Користувачі',
    '/admin/analytics': 'Статистика',
    '/admin/reports': 'Скарги',
    '/admin/income': 'Доходи',
    '/admin/settings': 'Налаштування'
  };
  return titles[route.path] || 'Адмін Панель';
});
</script>
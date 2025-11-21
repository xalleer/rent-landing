<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Sidebar -->
    <aside class="w-64 bg-dark fixed left-0 top-0 h-screen z-30 flex flex-col shadow-xl overflow-y-auto">
      <!-- Logo -->
      <div class="p-6 border-b border-white/10">
        <div class="flex items-center gap-3">
          <div class="bg-primary p-2 rounded-lg">
            <ion-icon name="home" class="text-white text-2xl"></ion-icon>
          </div>
          <div>
            <div class="text-white text-xl font-bold">
              <span class="text-primary">Rent</span>ora
            </div>
            <div class="text-xs text-gray-400">Admin Panel</div>
          </div>
        </div>
      </div>

      <!-- Navigation -->
      <nav class="flex-grow overflow-y-auto p-4">
        <ul class="space-y-2">
          <li>
            <NuxtLink
                to="/admin/dashboard"
                class="flex items-center p-3 text-white rounded-xl hover:bg-white/10 transition duration-200 group"
                active-class="bg-primary hover:bg-primary"
            >
              <ion-icon name="grid-outline" class="text-xl mr-3"></ion-icon>
              <span class="font-medium">Дашборд</span>
            </NuxtLink>
          </li>

          <li>
            <NuxtLink
                to="/admin/ads"
                class="flex items-center p-3 text-white rounded-xl hover:bg-white/10 transition duration-200 group"
                active-class="bg-primary hover:bg-primary"
            >
              <ion-icon name="document-text-outline" class="text-xl mr-3"></ion-icon>
              <span class="font-medium">Оголошення</span>
              <span class="ml-auto text-xs bg-primary/20 text-primary py-1 px-2.5 rounded-full font-bold">245</span>
            </NuxtLink>
          </li>

          <li>
            <NuxtLink
                to="/admin/users"
                class="flex items-center p-3 text-white rounded-xl hover:bg-white/10 transition duration-200 group"
                active-class="bg-primary hover:bg-primary"
            >
              <ion-icon name="people-outline" class="text-xl mr-3"></ion-icon>
              <span class="font-medium">Користувачі</span>
              <span class="ml-auto text-xs bg-primary/20 text-primary py-1 px-2.5 rounded-full font-bold">1.2K</span>
            </NuxtLink>
          </li>

          <li class="pt-4">
            <div class="text-xs text-gray-400 font-semibold uppercase px-3 mb-2 tracking-wider">
              Аналітика
            </div>
            <NuxtLink
                to="/admin/analytics"
                class="flex items-center p-3 text-white rounded-xl hover:bg-white/10 transition duration-200 group"
                active-class="bg-primary hover:bg-primary"
            >
              <ion-icon name="stats-chart-outline" class="text-xl mr-3"></ion-icon>
              <span class="font-medium">Статистика</span>
            </NuxtLink>
          </li>

          <li>
            <NuxtLink
                to="/admin/reports"
                class="flex items-center p-3 text-white rounded-xl hover:bg-white/10 transition duration-200 group"
                active-class="bg-primary hover:bg-primary"
            >
              <ion-icon name="flag-outline" class="text-xl mr-3"></ion-icon>
              <span class="font-medium">Скарги</span>
              <span class="ml-auto text-xs bg-red-500/20 text-red-400 py-1 px-2.5 rounded-full font-bold">3</span>
            </NuxtLink>
          </li>
        </ul>
      </nav>

      <!-- Settings -->
      <div class="p-4 border-t border-white/10">
        <NuxtLink
            to="/admin/settings"
            class="flex items-center p-3 text-white rounded-xl hover:bg-white/10 transition duration-200"
            active-class="bg-primary hover:bg-primary"
        >
          <ion-icon name="settings-outline" class="text-xl mr-3"></ion-icon>
          <span class="font-medium">Налаштування</span>
        </NuxtLink>
      </div>
    </aside>

    <!-- Main Content Area -->
    <div class="ml-64">
      <!-- Header -->
      <header class="bg-white shadow-sm h-20 flex items-center px-8 fixed top-0 left-64 right-0 z-20 border-b border-gray-200">
        <div class="flex-grow">
          <h1 class="text-2xl font-bold text-dark">{{ pageTitle }}</h1>
        </div>

        <div class="flex items-center gap-4">
          <!-- Notifications -->
          <button class="relative p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition">
            <ion-icon name="notifications-outline" class="text-2xl"></ion-icon>
            <span class="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>

          <!-- User Profile -->
          <div class="flex items-center gap-3 px-3 py-2 hover:bg-gray-50 rounded-lg cursor-pointer transition">
            <div class="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
              <ion-icon name="person" class="text-primary text-xl"></ion-icon>
            </div>
            <div class="text-left hidden md:block">
              <div class="text-sm font-semibold text-dark">Адміністратор</div>
              <div class="text-xs text-gray-500">admin@rentora.com</div>
            </div>
          </div>

          <!-- Logout Button -->
          <button
              @click="logout"
              class="py-2.5 px-5 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition duration-200 flex items-center gap-2 text-sm"
          >
            <ion-icon name="log-out-outline" class="text-lg"></ion-icon>
            <span class="hidden md:inline">Вийти</span>
          </button>
        </div>
      </header>

      <!-- Page Content -->
      <main class="pt-24 px-8 pb-8">
        <slot />
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

const pageTitle = computed(() => {
  const titles = {
    '/admin/dashboard': 'Панель Адміністратора',
    '/admin/ads': 'Оголошення',
    '/admin/users': 'Користувачі',
    '/admin/analytics': 'Статистика',
    '/admin/reports': 'Скарги',
    '/admin/settings': 'Налаштування'
  };
  return titles[route.path] || 'Адмін Панель';
});

const logout = () => {
  if (confirm('Ви впевнені, що хочете вийти?')) {
    router.push('/admin');
  }
};
</script>
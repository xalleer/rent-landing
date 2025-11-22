<template>
  <aside class="w-64 bg-dark fixed left-0 top-0 h-screen z-30 flex flex-col shadow-xl overflow-y-auto">
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
            <span v-if="stats.listings > 0" class="ml-auto text-xs bg-primary/20 text-primary py-1 px-2.5 rounded-full font-bold">
              {{ stats.listings }}
            </span>
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
            <span v-if="stats.users > 0" class="ml-auto text-xs bg-primary/20 text-primary py-1 px-2.5 rounded-full font-bold">
              {{ stats.users }}
            </span>
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
              to="/admin/income"
              class="flex items-center p-3 text-white rounded-xl hover:bg-white/10 transition duration-200 group"
              active-class="bg-primary hover:bg-primary"
          >
            <ion-icon name="wallet-outline" class="text-xl mr-3"></ion-icon>
            <span class="font-medium">Доходи</span>
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
            <span v-if="stats.reports > 0" class="ml-auto text-xs bg-red-500/20 text-red-400 py-1 px-2.5 rounded-full font-bold">
              {{ stats.reports }}
            </span>
          </NuxtLink>
        </li>
      </ul>
    </nav>

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
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

const stats = ref({
  listings: 0,
  reports: 0,
  users: 0
});

const fetchStats = async () => {
  try {
    const { data, error } = await useAdminFetch('/admin/sidebar-stats');

    if (data.value) {
      stats.value = data.value;
    }
  } catch (e) {
    console.error('Failed to fetch sidebar stats', e);
  }
};

onMounted(() => {
  fetchStats();

});
</script>
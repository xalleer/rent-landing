<template>
  <div class="max-w-7xl mx-auto">

    <div v-if="pending" class="flex justify-center py-20">
      <div class="text-gray-500">Завантаження даних...</div>
    </div>

    <div v-else>
      <div class="grid md:grid-cols-4 gap-6 mb-8">

        <div class="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition border border-gray-100">
          <div class="flex items-center justify-between mb-4">
            <div class="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center">
              <ion-icon name="document-text-outline" class="text-2xl"></ion-icon>
            </div>
          </div>
          <div class="text-3xl font-bold text-dark mb-1">{{ stats.activeListings }}</div>
          <div class="text-sm text-gray-500 font-medium">Активних оголошень</div>
        </div>

        <div class="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition border border-gray-100">
          <div class="flex items-center justify-between mb-4">
            <div class="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center">
              <ion-icon name="people-outline" class="text-2xl"></ion-icon>
            </div>
          </div>
          <div class="text-3xl font-bold text-dark mb-1">{{ stats.totalUsers }}</div>
          <div class="text-sm text-gray-500 font-medium">Користувачів</div>
        </div>

        <div class="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition border border-gray-100">
          <div class="flex items-center justify-between mb-4">
            <div class="w-12 h-12 bg-green-50 text-green-600 rounded-xl flex items-center justify-center">
              <ion-icon name="shield-checkmark-outline" class="text-2xl"></ion-icon>
            </div>
          </div>
          <div class="text-3xl font-bold text-dark mb-1">{{ stats.verifiedUsers }}</div>
          <div class="text-sm text-gray-500 font-medium">Верифікованих</div>
        </div>

        <div class="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition border border-gray-100">
          <div class="flex items-center justify-between mb-4">
            <div class="w-12 h-12 bg-orange-50 text-orange-600 rounded-xl flex items-center justify-center">
              <ion-icon name="wallet-outline" class="text-2xl"></ion-icon>
            </div>
          </div>
          <div class="text-3xl font-bold text-dark mb-1">{{ formatCurrency(stats.totalIncome) }}</div>
          <div class="text-sm text-gray-500 font-medium">Загальний дохід</div>
        </div>
      </div>

      <div class="grid md:grid-cols-2 gap-6 mb-8">
        <div class="bg-white rounded-2xl shadow-sm p-6 border border-gray-100 relative overflow-hidden">
          <div class="flex items-center justify-between mb-6 relative z-10">
            <h3 class="text-lg font-bold text-dark flex items-center gap-2">
              <ion-icon name="stats-chart-outline" class="text-primary text-xl"></ion-icon>
              Статистика
            </h3>
            <NuxtLink to="/admin/analytics" class="text-sm text-primary hover:underline">Детальніше</NuxtLink>
          </div>
          <div class="h-64 flex items-center justify-center text-gray-400 bg-gray-50 rounded-xl">
            <div class="text-center">
              <ion-icon name="bar-chart-outline" class="text-5xl mb-2"></ion-icon>
              <p class="text-sm">Повна статистика доступна в розділі "Аналітика"</p>
            </div>
          </div>
        </div>

        <div class="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
          <div class="flex items-center justify-between mb-6">
            <h3 class="text-lg font-bold text-dark flex items-center gap-2">
              <ion-icon name="pie-chart-outline" class="text-primary text-xl"></ion-icon>
              Категорії
            </h3>
          </div>
          <div class="h-64 flex items-center justify-center text-gray-400 bg-gray-50 rounded-xl">
            <div class="text-center">
              <ion-icon name="analytics-outline" class="text-5xl mb-2"></ion-icon>
              <p class="text-sm">Діаграма категорій доступна в розділі "Аналітика"</p>
            </div>
          </div>
        </div>
      </div>

      <div class="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
        <div class="flex items-center justify-between mb-6">
          <h3 class="text-lg font-bold text-dark flex items-center gap-2">
            <ion-icon name="time-outline" class="text-primary text-xl"></ion-icon>
            Остання активність
          </h3>
        </div>

        <div class="space-y-3">
          <div v-if="activity.length === 0" class="text-center py-8 text-gray-500 bg-gray-50 rounded-xl">
            <ion-icon name="cafe-outline" class="text-3xl mb-2"></ion-icon>
            <p>Поки що немає активності</p>
          </div>

          <div v-else v-for="(item, index) in activity" :key="index" class="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition cursor-default group">
            <div :class="item.color" class="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 shadow-sm group-hover:scale-110 transition-transform">
              <ion-icon :name="item.icon" class="text-xl"></ion-icon>
            </div>
            <div class="flex-grow min-w-0">
              <div class="font-semibold text-dark text-sm">{{ item.title }}</div>
              <div class="text-sm text-gray-500 truncate">{{ item.description }}</div>
            </div>
            <div class="text-sm text-gray-400 whitespace-nowrap">{{ formatDate(item.time) }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

definePageMeta({
  layout: 'admin'
});

const { data, pending } = await useAdminFetch('/admin/dashboard');

//@ts-ignore
const stats = computed(() => data.value?.stats || {
  activeListings: 0,
  totalUsers: 0,
  verifiedUsers: 0,
  totalIncome: 0
});

//@ts-ignore
const activity = computed(() => data.value?.recentActivity || []);

const formatCurrency = (val: number) => {
  return new Intl.NumberFormat('uk-UA', { style: 'currency', currency: 'UAH', maximumFractionDigits: 0 }).format(val);
};

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  if (diffInSeconds < 60) return 'щойно';
  if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)} хв тому`;
  if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)} год тому`;

  return date.toLocaleDateString('uk-UA', { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' });
};
</script>
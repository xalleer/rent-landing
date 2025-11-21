<template>
  <div class="max-w-7xl mx-auto">
    <!-- Time Period Selector -->
    <div class="bg-white rounded-2xl shadow-sm p-4 mb-6 border border-gray-100">
      <div class="flex items-center justify-between">
        <h2 class="text-lg font-bold text-dark">Період аналізу</h2>
        <div class="flex gap-2">
          <button
              v-for="period in periods"
              :key="period.value"
              @click="selectedPeriod = period.value"
              :class="selectedPeriod === period.value ? 'bg-primary text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'"
              class="px-4 py-2 rounded-lg text-sm font-medium transition"
          >
            {{ period.label }}
          </button>
        </div>
      </div>
    </div>

    <!-- Key Metrics -->
    <div class="grid md:grid-cols-4 gap-6 mb-8">
      <div class="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
        <div class="flex items-center justify-between mb-4">
          <div class="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center">
            <ion-icon name="eye-outline" class="text-2xl"></ion-icon>
          </div>
          <span class="text-xs font-semibold text-green-600 bg-green-50 px-2 py-1 rounded-full">+23%</span>
        </div>
        <div class="text-3xl font-bold text-dark mb-1">45.2K</div>
        <div class="text-sm text-gray-500 font-medium">Переглядів</div>
      </div>

      <div class="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
        <div class="flex items-center justify-between mb-4">
          <div class="w-12 h-12 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center">
            <ion-icon name="person-add-outline" class="text-2xl"></ion-icon>
          </div>
          <span class="text-xs font-semibold text-green-600 bg-green-50 px-2 py-1 rounded-full">+15%</span>
        </div>
        <div class="text-3xl font-bold text-dark mb-1">1,234</div>
        <div class="text-sm text-gray-500 font-medium">Нових користувачів</div>
      </div>

      <div class="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
        <div class="flex items-center justify-between mb-4">
          <div class="w-12 h-12 bg-green-50 text-green-600 rounded-xl flex items-center justify-center">
            <ion-icon name="checkmark-done-outline" class="text-2xl"></ion-icon>
          </div>
          <span class="text-xs font-semibold text-green-600 bg-green-50 px-2 py-1 rounded-full">+8%</span>
        </div>
        <div class="text-3xl font-bold text-dark mb-1">892</div>
        <div class="text-sm text-gray-500 font-medium">Завершених угод</div>
      </div>

      <div class="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
        <div class="flex items-center justify-between mb-4">
          <div class="w-12 h-12 bg-orange-50 text-orange-600 rounded-xl flex items-center justify-center">
            <ion-icon name="card-outline" class="text-2xl"></ion-icon>
          </div>
          <span class="text-xs font-semibold text-green-600 bg-green-50 px-2 py-1 rounded-full">+31%</span>
        </div>
        <div class="text-3xl font-bold text-dark mb-1">₴89.4K</div>
        <div class="text-sm text-gray-500 font-medium">Дохід</div>
      </div>
    </div>

    <!-- Charts -->
    <div class="grid md:grid-cols-2 gap-6 mb-8">
      <div class="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
        <h3 class="text-lg font-bold text-dark mb-4 flex items-center gap-2">
          <ion-icon name="trending-up-outline" class="text-primary text-xl"></ion-icon>
          Динаміка реєстрацій
        </h3>
        <div class="h-72 flex items-center justify-center text-gray-400 bg-gray-50 rounded-xl">
          <div class="text-center">
            <ion-icon name="bar-chart-outline" class="text-5xl mb-2"></ion-icon>
            <p class="text-sm">Лінійний графік</p>
          </div>
        </div>
      </div>

      <div class="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
        <h3 class="text-lg font-bold text-dark mb-4 flex items-center gap-2">
          <ion-icon name="pie-chart-outline" class="text-primary text-xl"></ion-icon>
          Розподіл по містах
        </h3>
        <div class="h-72 flex items-center justify-center text-gray-400 bg-gray-50 rounded-xl">
          <div class="text-center">
            <ion-icon name="analytics-outline" class="text-5xl mb-2"></ion-icon>
            <p class="text-sm">Кругова діаграма</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Top Listings -->
    <div class="bg-white rounded-2xl shadow-sm p-6 border border-gray-100 mb-6">
      <h3 class="text-lg font-bold text-dark mb-4 flex items-center gap-2">
        <ion-icon name="flame-outline" class="text-primary text-xl"></ion-icon>
        Топ оголошень за переглядами
      </h3>
      <div class="space-y-3">
        <div v-for="(item, index) in topListings" :key="index" class="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition">
          <div class="w-8 h-8 bg-primary/10 text-primary rounded-lg flex items-center justify-center font-bold flex-shrink-0">
            {{ index + 1 }}
          </div>
          <div class="flex-grow min-w-0">
            <div class="font-semibold text-dark text-sm">{{ item.title }}</div>
            <div class="text-sm text-gray-500">{{ item.location }}</div>
          </div>
          <div class="flex items-center gap-6 text-sm">
            <div class="text-center">
              <div class="font-bold text-dark">{{ item.views }}</div>
              <div class="text-xs text-gray-500">переглядів</div>
            </div>
            <div class="text-center">
              <div class="font-bold text-dark">{{ item.contacts }}</div>
              <div class="text-xs text-gray-500">контактів</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- User Activity -->
    <div class="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
      <h3 class="text-lg font-bold text-dark mb-4 flex items-center gap-2">
        <ion-icon name="time-outline" class="text-primary text-xl"></ion-icon>
        Активність користувачів за годинами
      </h3>
      <div class="h-64 flex items-center justify-center text-gray-400 bg-gray-50 rounded-xl">
        <div class="text-center">
          <ion-icon name="stats-chart-outline" class="text-5xl mb-2"></ion-icon>
          <p class="text-sm">Heat map активності</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

definePageMeta({
  layout: 'admin'
});

const periods = [
  { label: 'Тиждень', value: 'week' },
  { label: 'Місяць', value: 'month' },
  { label: 'Квартал', value: 'quarter' },
  { label: 'Рік', value: 'year' }
];

const selectedPeriod = ref('month');

const topListings = ref([
  { title: '2-кімнатна квартира', location: 'Київ, Печерськ', views: '2.4K', contacts: 145 },
  { title: '1-кімнатна квартира', location: 'Київ, Позняки', views: '2.1K', contacts: 132 },
  { title: '3-кімнатна квартира', location: 'Львів, Центр', views: '1.8K', contacts: 98 },
  { title: 'Студія', location: 'Одеса, Аркадія', views: '1.6K', contacts: 87 },
  { title: '2-кімнатна квартира', location: 'Київ, Оболонь', views: '1.4K', contacts: 76 }
]);
</script>
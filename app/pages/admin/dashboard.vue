<template>
  <div class="max-w-7xl mx-auto">
    <!-- Stats Cards -->
    <div class="grid md:grid-cols-4 gap-6 mb-8">
      <div class="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition border border-gray-100">
        <div class="flex items-center justify-between mb-4">
          <div class="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center">
            <ion-icon name="document-text-outline" class="text-2xl"></ion-icon>
          </div>
          <span class="text-xs font-semibold text-green-600 bg-green-50 px-2 py-1 rounded-full">+12%</span>
        </div>
        <div class="text-3xl font-bold text-dark mb-1">245</div>
        <div class="text-sm text-gray-500 font-medium">Активних оголошень</div>
      </div>

      <div class="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition border border-gray-100">
        <div class="flex items-center justify-between mb-4">
          <div class="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center">
            <ion-icon name="people-outline" class="text-2xl"></ion-icon>
          </div>
          <span class="text-xs font-semibold text-green-600 bg-green-50 px-2 py-1 rounded-full">+8%</span>
        </div>
        <div class="text-3xl font-bold text-dark mb-1">1,234</div>
        <div class="text-sm text-gray-500 font-medium">Користувачів</div>
      </div>

      <div class="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition border border-gray-100">
        <div class="flex items-center justify-between mb-4">
          <div class="w-12 h-12 bg-green-50 text-green-600 rounded-xl flex items-center justify-center">
            <ion-icon name="shield-checkmark-outline" class="text-2xl"></ion-icon>
          </div>
          <span class="text-xs font-semibold text-green-600 bg-green-50 px-2 py-1 rounded-full">+15%</span>
        </div>
        <div class="text-3xl font-bold text-dark mb-1">892</div>
        <div class="text-sm text-gray-500 font-medium">Верифікованих</div>
      </div>

      <div class="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition border border-gray-100">
        <div class="flex items-center justify-between mb-4">
          <div class="w-12 h-12 bg-orange-50 text-orange-600 rounded-xl flex items-center justify-center">
            <ion-icon name="trending-up-outline" class="text-2xl"></ion-icon>
          </div>
          <span class="text-xs font-semibold text-green-600 bg-green-50 px-2 py-1 rounded-full">+24%</span>
        </div>
        <div class="text-3xl font-bold text-dark mb-1">89.2%</div>
        <div class="text-sm text-gray-500 font-medium">Рівень активності</div>
      </div>
    </div>

    <!-- Charts Row -->
    <div class="grid md:grid-cols-2 gap-6 mb-8">
      <!-- Chart 1 -->
      <div class="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
        <div class="flex items-center justify-between mb-6">
          <h3 class="text-lg font-bold text-dark flex items-center gap-2">
            <ion-icon name="stats-chart-outline" class="text-primary text-xl"></ion-icon>
            Статистика публікацій
          </h3>
          <select class="text-sm border border-gray-200 rounded-lg px-3 py-1.5 text-gray-600 focus:outline-none focus:ring-2 focus:ring-primary/20">
            <option>Останній тиждень</option>
            <option>Останній місяць</option>
            <option>Останній рік</option>
          </select>
        </div>
        <div class="h-64 flex items-center justify-center text-gray-400 bg-gray-50 rounded-xl">
          <div class="text-center">
            <ion-icon name="bar-chart-outline" class="text-5xl mb-2"></ion-icon>
            <p class="text-sm">Графік статистики</p>
          </div>
        </div>
      </div>

      <!-- Chart 2 -->
      <div class="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
        <div class="flex items-center justify-between mb-6">
          <h3 class="text-lg font-bold text-dark flex items-center gap-2">
            <ion-icon name="pie-chart-outline" class="text-primary text-xl"></ion-icon>
            Розподіл за категоріями
          </h3>
          <button class="text-sm text-primary font-semibold hover:underline">
            Детальніше
          </button>
        </div>
        <div class="h-64 flex items-center justify-center text-gray-400 bg-gray-50 rounded-xl">
          <div class="text-center">
            <ion-icon name="analytics-outline" class="text-5xl mb-2"></ion-icon>
            <p class="text-sm">Кругова діаграма</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Recent Activity -->
    <div class="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
      <div class="flex items-center justify-between mb-6">
        <h3 class="text-lg font-bold text-dark flex items-center gap-2">
          <ion-icon name="time-outline" class="text-primary text-xl"></ion-icon>
          Остання активність
        </h3>
        <button class="text-sm text-primary font-semibold hover:underline">
          Переглянути все
        </button>
      </div>

      <div class="space-y-3">
        <div class="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition cursor-pointer">
          <div class="w-10 h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center flex-shrink-0">
            <ion-icon name="checkmark" class="text-xl"></ion-icon>
          </div>
          <div class="flex-grow min-w-0">
            <div class="font-semibold text-dark text-sm">Нове оголошення верифіковано</div>
            <div class="text-sm text-gray-500 truncate">2-кімнатна квартира, Київ, Печерськ</div>
          </div>
          <div class="text-sm text-gray-400 whitespace-nowrap">5 хв тому</div>
        </div>

        <div class="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition cursor-pointer">
          <div class="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
            <ion-icon name="person-add" class="text-xl"></ion-icon>
          </div>
          <div class="flex-grow min-w-0">
            <div class="font-semibold text-dark text-sm">Новий користувач зареєстрований</div>
            <div class="text-sm text-gray-500 truncate">Олександр К. • alex.k@gmail.com</div>
          </div>
          <div class="text-sm text-gray-400 whitespace-nowrap">15 хв тому</div>
        </div>

        <div class="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition cursor-pointer">
          <div class="w-10 h-10 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
            <ion-icon name="flag" class="text-xl"></ion-icon>
          </div>
          <div class="flex-grow min-w-0">
            <div class="font-semibold text-dark text-sm">Скарга на оголошення</div>
            <div class="text-sm text-gray-500 truncate">Оголошення #45892 • Потребує модерації</div>
          </div>
          <div class="text-sm text-gray-400 whitespace-nowrap">1 год тому</div>
        </div>

        <div class="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition cursor-pointer">
          <div class="w-10 h-10 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
            <ion-icon name="card" class="text-xl"></ion-icon>
          </div>
          <div class="flex-grow min-w-0">
            <div class="font-semibold text-dark text-sm">Нова оплата отримана</div>
            <div class="text-sm text-gray-500 truncate">Стандарт пакет • 299 ₴</div>
          </div>
          <div class="text-sm text-gray-400 whitespace-nowrap">2 год тому</div>
        </div>

        <div class="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition cursor-pointer">
          <div class="w-10 h-10 bg-red-100 text-red-600 rounded-full flex items-center justify-center flex-shrink-0">
            <ion-icon name="alert-circle" class="text-xl"></ion-icon>
          </div>
          <div class="flex-grow min-w-0">
            <div class="font-semibold text-dark text-sm">Оголошення заблоковано</div>
            <div class="text-sm text-gray-500 truncate">Порушення правил • Оголошення #45123</div>
          </div>
          <div class="text-sm text-gray-400 whitespace-nowrap">3 год тому</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'admin'
});
</script>
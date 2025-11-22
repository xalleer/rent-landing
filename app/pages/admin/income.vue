<template>
  <div class="max-w-7xl mx-auto">
    <div class="grid md:grid-cols-3 gap-6 mb-8">
      <div class="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition">
        <div class="flex items-center justify-between mb-4">
          <div class="w-12 h-12 bg-green-50 text-green-600 rounded-xl flex items-center justify-center">
            <ion-icon name="wallet-outline" class="text-2xl"></ion-icon>
          </div>
          <span class="text-xs font-semibold text-green-600 bg-green-50 px-2 py-1 rounded-full">+12%</span>
        </div>
        <div class="text-3xl font-bold text-dark mb-1">124,500 ₴</div>
        <div class="text-sm text-gray-500 font-medium">Загальний дохід</div>
      </div>

      <div class="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition">
        <div class="flex items-center justify-between mb-4">
          <div class="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center">
            <ion-icon name="calendar-outline" class="text-2xl"></ion-icon>
          </div>
          <span class="text-xs font-semibold text-green-600 bg-green-50 px-2 py-1 rounded-full">+5%</span>
        </div>
        <div class="text-3xl font-bold text-dark mb-1">45,200 ₴</div>
        <div class="text-sm text-gray-500 font-medium">Дохід за цей місяць</div>
      </div>

      <div class="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition">
        <div class="flex items-center justify-between mb-4">
          <div class="w-12 h-12 bg-orange-50 text-orange-600 rounded-xl flex items-center justify-center">
            <ion-icon name="time-outline" class="text-2xl"></ion-icon>
          </div>
        </div>
        <div class="text-3xl font-bold text-dark mb-1">12,800 ₴</div>
        <div class="text-sm text-gray-500 font-medium">Очікує виплати</div>
      </div>
    </div>

    <div class="bg-white rounded-2xl shadow-sm p-6 border border-gray-100 mb-8">
      <div class="flex items-center justify-between mb-6">
        <h3 class="text-lg font-bold text-dark flex items-center gap-2">
          <ion-icon name="bar-chart-outline" class="text-primary text-xl"></ion-icon>
          Динаміка доходів
        </h3>
        <select class="text-sm border border-gray-200 rounded-lg px-3 py-1.5 text-gray-600 focus:outline-none focus:ring-2 focus:ring-primary/20">
          <option>Цей рік</option>
          <option>Минулий рік</option>
        </select>
      </div>
      <div class="h-64 flex items-center justify-center text-gray-400 bg-gray-50 rounded-xl border border-dashed border-gray-200">
        <div class="text-center">
          <ion-icon name="stats-chart-outline" class="text-5xl mb-2 text-gray-300"></ion-icon>
          <p class="text-sm">Тут буде графік доходів</p>
        </div>
      </div>
    </div>

    <div class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
      <div class="p-6 border-b border-gray-200 flex justify-between items-center">
        <h3 class="text-lg font-bold text-dark">Останні транзакції</h3>
        <button class="text-primary text-sm font-semibold hover:underline">Всі транзакції</button>
      </div>
      <div class="overflow-x-auto">
        <table class="w-full">
          <thead class="bg-gray-50 border-b border-gray-200">
          <tr>
            <th class="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">ID</th>
            <th class="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Користувач</th>
            <th class="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Послуга</th>
            <th class="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Сума</th>
            <th class="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Дата</th>
            <th class="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Статус</th>
          </tr>
          </thead>
          <tbody class="divide-y divide-gray-200">
          <tr v-for="transaction in transactions" :key="transaction.id" class="hover:bg-gray-50 transition">
            <td class="px-6 py-4 text-sm text-gray-500">#{{ transaction.id }}</td>
            <td class="px-6 py-4 text-sm font-medium text-dark">{{ transaction.user }}</td>
            <td class="px-6 py-4 text-sm text-gray-600">{{ transaction.service }}</td>
            <td class="px-6 py-4 text-sm font-bold text-green-600">+{{ transaction.amount }} ₴</td>
            <td class="px-6 py-4 text-sm text-gray-500">{{ transaction.date }}</td>
            <td class="px-6 py-4">
                <span class="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-700 border border-green-200">
                  Успішно
                </span>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

// Важливо для відображення сайдбару
definePageMeta({
  layout: 'admin'
});

const transactions = ref([
  { id: 4521, user: 'Олена М.', service: 'Публікація оголошення', amount: 299, date: '21.11.2025 14:30' },
  { id: 4520, user: 'Дмитро К.', service: 'Преміум пакет', amount: 549, date: '21.11.2025 12:15' },
  { id: 4519, user: 'Іван П.', service: 'Підняття в топ', amount: 99, date: '21.11.2025 10:45' },
  { id: 4518, user: 'Марія В.', service: 'Публікація оголошення', amount: 149, date: '20.11.2025 18:20' },
  { id: 4517, user: 'Олександр С.', service: 'Стандарт пакет', amount: 299, date: '20.11.2025 16:05' },
]);
</script>
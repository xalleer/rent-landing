<template>
  <div class="max-w-7xl mx-auto">
    <div class="grid md:grid-cols-3 gap-6 mb-8">
      <div class="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 relative overflow-hidden">
        <div class="relative z-10">
          <div class="text-gray-500 text-sm font-medium mb-1">Загальний дохід</div>
          <div class="text-3xl font-bold text-dark mb-2">{{ formatCurrency(stats.totalIncome) }}</div>
          <div class="inline-flex items-center px-2 py-1 rounded-lg bg-green-50 text-green-700 text-xs font-medium">
            <ion-icon name="trending-up" class="mr-1"></ion-icon>
            Весь час
          </div>
        </div>
        <div class="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-green-50 to-transparent opacity-50"></div>
      </div>

      <div class="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 relative overflow-hidden">
        <div class="relative z-10">
          <div class="text-gray-500 text-sm font-medium mb-1">Дохід за місяць</div>
          <div class="text-3xl font-bold text-dark mb-2">{{ formatCurrency(stats.monthlyIncome) }}</div>
          <div class="inline-flex items-center px-2 py-1 rounded-lg bg-blue-50 text-blue-700 text-xs font-medium">
            <ion-icon name="calendar-outline" class="mr-1"></ion-icon>
            Поточний місяць
          </div>
        </div>
      </div>

      <div class="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
        <div class="text-gray-500 text-sm font-medium mb-1">Всього транзакцій</div>
        <div class="text-3xl font-bold text-dark mb-2">{{ stats.totalTransactions }}</div>
        <div class="text-xs text-gray-400">Успішних та неуспішних</div>
      </div>
    </div>

    <div class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
      <div class="p-6 border-b border-gray-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <h2 class="text-lg font-bold text-dark">Історія транзакцій</h2>

        <select v-model="statusFilter" class="px-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 text-sm text-gray-600 bg-gray-50">
          <option value="all">Всі статуси</option>
          <option value="COMPLETED">Успішні</option>
          <option value="PENDING">Очікують</option>
          <option value="FAILED">Неуспішні</option>
        </select>
      </div>

      <div class="overflow-x-auto">
        <table class="w-full">
          <thead class="bg-gray-50">
          <tr>
            <th class="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase">ID / Дата</th>
            <th class="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase">Користувач</th>
            <th class="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase">Послуга</th>
            <th class="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase">Сума</th>
            <th class="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase">Статус</th>
          </tr>
          </thead>
          <tbody class="divide-y divide-gray-100">
          <tr v-if="pending" class="text-center"><td colspan="5" class="py-8 text-gray-500">Завантаження...</td></tr>
          <tr v-else-if="payments.length === 0" class="text-center"><td colspan="5" class="py-8 text-gray-500">Транзакцій не знайдено</td></tr>

          <tr v-else v-for="payment in payments" :key="payment.id" class="hover:bg-gray-50 transition">
            <td class="px-6 py-4">
              <div class="text-sm font-medium text-gray-900">#{{ payment.id }}</div>
              <div class="text-xs text-gray-500">{{ new Date(payment.createdAt).toLocaleString('uk-UA') }}</div>
            </td>
            <td class="px-6 py-4">
              <div class="text-sm text-gray-900 font-medium">{{ payment.user?.displayName || 'Unknown' }}</div>
              <div class="text-xs text-gray-500">{{ payment.user?.email }}</div>
            </td>
            <td class="px-6 py-4">
              <div class="text-sm text-gray-600">
                <span v-if="payment.listing">Просування оголошення #{{ payment.listing.id }}</span>
                <span v-else>Поповнення балансу</span>
              </div>
            </td>
            <td class="px-6 py-4">
              <div class="text-sm font-bold text-dark">{{ formatCurrency(payment.amount) }}</div>
            </td>
            <td class="px-6 py-4">
                <span :class="getStatusClass(payment.status)" class="px-2 py-1 text-xs font-semibold rounded-md">
                  {{ getStatusLabel(payment.status) }}
                </span>
            </td>
          </tr>
          </tbody>
        </table>
      </div>

      <div class="px-6 py-4 border-t border-gray-100 flex items-center justify-between" v-if="meta.total > 0">
        <div class="text-sm text-gray-600">Всього: {{ meta.total }}</div>
        <div class="flex gap-2">
          <button @click="page--" :disabled="page === 1" class="px-3 py-1 border rounded hover:bg-gray-50 disabled:opacity-50 text-sm">Назад</button>
          <button @click="page++" :disabled="page >= meta.last_page" class="px-3 py-1 border rounded hover:bg-gray-50 disabled:opacity-50 text-sm">Далі</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
definePageMeta({ layout: 'admin' });

const page = ref(1);
const statusFilter = ref('all');

const { data: statsData } = await useAdminFetch('/admin/finance/stats');
const stats = computed(() => statsData.value || { totalIncome: 0, monthlyIncome: 0, totalTransactions: 0 });

const { data, pending, refresh } = await useAdminFetch('/admin/finance/transactions', {
  query: { page, status: statusFilter },
  watch: [page, statusFilter]
});

const payments = computed(() => data.value?.data || []);
const meta = computed(() => data.value?.meta || { total: 0, last_page: 1 });

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('uk-UA', { style: 'currency', currency: 'UAH' }).format(value);
};

const getStatusLabel = (status: string) => {
  const map: Record<string, string> = { 'COMPLETED': 'Успішно', 'PENDING': 'Очікує', 'FAILED': 'Помилка' };
  return map[status] || status;
};

const getStatusClass = (status: string) => {
  if (status === 'COMPLETED') return 'bg-green-100 text-green-700';
  if (status === 'PENDING') return 'bg-yellow-100 text-yellow-700';
  if (status === 'FAILED') return 'bg-red-100 text-red-700';
  return 'bg-gray-100 text-gray-600';
};
</script>
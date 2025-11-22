<template>
  <div class="max-w-7xl mx-auto">
    <div class="grid md:grid-cols-4 gap-6 mb-6">
      <div class="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
        <div class="flex items-center justify-between">
          <div>
            <div class="text-3xl font-bold text-dark">{{ stats.total }}</div>
            <div class="text-sm text-gray-500 mt-1">Всього скарг</div>
          </div>
          <div class="w-12 h-12 bg-gray-50 text-gray-600 rounded-xl flex items-center justify-center">
            <ion-icon name="folder-open-outline" class="text-2xl"></ion-icon>
          </div>
        </div>
      </div>

      <div class="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
        <div class="flex items-center justify-between">
          <div>
            <div class="text-3xl font-bold text-dark">{{ stats.pending }}</div>
            <div class="text-sm text-gray-500 mt-1">Нові (В обробці)</div>
          </div>
          <div class="w-12 h-12 bg-orange-50 text-orange-600 rounded-xl flex items-center justify-center">
            <ion-icon name="alert-circle-outline" class="text-2xl"></ion-icon>
          </div>
        </div>
      </div>

      <div class="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
        <div class="flex items-center justify-between">
          <div>
            <div class="text-3xl font-bold text-dark">{{ stats.resolved }}</div>
            <div class="text-sm text-gray-500 mt-1">Вирішено</div>
          </div>
          <div class="w-12 h-12 bg-green-50 text-green-600 rounded-xl flex items-center justify-center">
            <ion-icon name="checkmark-circle-outline" class="text-2xl"></ion-icon>
          </div>
        </div>
      </div>

      <div class="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
        <div class="flex items-center justify-between">
          <div>
            <div class="text-3xl font-bold text-dark">{{ stats.rejected }}</div>
            <div class="text-sm text-gray-500 mt-1">Відхилено</div>
          </div>
          <div class="w-12 h-12 bg-red-50 text-red-600 rounded-xl flex items-center justify-center">
            <ion-icon name="close-circle-outline" class="text-2xl"></ion-icon>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-white rounded-2xl shadow-sm p-6 mb-6 border border-gray-100">
      <div class="flex flex-col md:flex-row gap-4">
        <div class="flex-grow">
          <div class="relative">
            <ion-icon name="search-outline" class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xl"></ion-icon>
            <input
                v-model="search"
                @input="debouncedSearch"
                type="text"
                placeholder="Пошук (опис, ім'я автора)..."
                class="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
            />
          </div>
        </div>
        <select v-model="typeFilter" class="px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 text-gray-600">
          <option value="all">Всі типи</option>
          <option value="FRAUD">Шахрайство</option>
          <option value="INACCURATE_INFO">Неправдива інформація</option>
          <option value="OFFENSIVE_CONTENT">Образливий контент</option>
          <option value="DUPLICATE">Дублікат</option>
          <option value="OTHER">Інше</option>
        </select>
        <select v-model="statusFilter" class="px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 text-gray-600">
          <option value="all">Всі статуси</option>
          <option value="PENDING">Нові</option>
          <option value="RESOLVED">Вирішено</option>
          <option value="REJECTED">Відхилено</option>
        </select>
      </div>
    </div>

    <div class="space-y-4">
      <div v-if="pending" class="text-center py-8 text-gray-500">Завантаження...</div>
      <div v-else-if="reports.length === 0" class="text-center py-8 text-gray-500">Скарг не знайдено</div>

      <div v-else v-for="report in reports" :key="report.id" class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div class="p-6">
          <div class="flex items-start justify-between mb-4">
            <div class="flex items-start gap-4 flex-grow">
              <div :class="getStatusColorClass(report.status)" class="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                <ion-icon name="flag" class="text-2xl"></ion-icon>
              </div>
              <div class="flex-grow">
                <div class="flex items-center gap-3 mb-2">
                  <h3 class="font-bold text-dark">{{ getTypeLabel(report.type) }}</h3>
                  <span :class="getStatusBadgeClass(report.status)" class="px-3 py-1 rounded-full text-xs font-semibold">
                    {{ getStatusLabel(report.status) }}
                  </span>
                </div>
                <p class="text-gray-600 text-sm mb-3">{{ report.description }}</p>
                <div class="flex items-center gap-6 text-sm text-gray-500">
                  <div class="flex items-center gap-2">
                    <ion-icon name="person-outline" class="text-base"></ion-icon>
                    <span>Від: {{ report.reporter?.displayName || report.reporter?.email }}</span>
                  </div>
                  <div class="flex items-center gap-2">
                    <ion-icon name="time-outline" class="text-base"></ion-icon>
                    <span>{{ new Date(report.createdAt).toLocaleString('uk-UA') }}</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="flex gap-2 ml-4" v-if="report.status === 'PENDING'">
              <button @click="resolve(report.id)" class="p-2 text-green-600 hover:bg-green-50 rounded-lg transition" title="Вирішити">
                <ion-icon name="checkmark-circle-outline" class="text-xl"></ion-icon>
              </button>
              <button @click="reject(report.id)" class="p-2 text-red-600 hover:bg-red-50 rounded-lg transition" title="Відхилити">
                <ion-icon name="close-circle-outline" class="text-xl"></ion-icon>
              </button>
            </div>
          </div>

          <div v-if="report.listing" class="bg-gray-50 rounded-xl p-4 border border-gray-200 mt-4">
            <div class="flex items-center gap-3">
              <div>
                <div class="font-semibold text-dark text-sm">Оголошення: {{ report.listing.title }}</div>
                <div class="text-xs text-gray-500">{{ report.listing.city }}</div>
                <div class="text-sm font-bold text-dark mt-1">{{ report.listing.price }} ₴/міс</div>
              </div>
              <a :href="`/listings/${report.listing.id}`" target="_blank" class="ml-auto text-primary text-sm hover:underline">Переглянути</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-6 flex items-center justify-between" v-if="meta.total > 0">
      <div class="text-sm text-gray-600">Всього: {{ meta.total }}</div>
      <div class="flex gap-2">
        <button @click="page--" :disabled="page === 1" class="px-4 py-2 border border-gray-200 rounded-lg text-sm disabled:opacity-50 hover:bg-gray-50">Попередня</button>
        <span class="px-4 py-2 text-sm font-medium">{{ page }} / {{ meta.last_page }}</span>
        <button @click="page++" :disabled="page >= meta.last_page" class="px-4 py-2 border border-gray-200 rounded-lg text-sm disabled:opacity-50 hover:bg-gray-50">Наступна</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
definePageMeta({ layout: 'admin' });

const page = ref(1);
const search = ref('');
const statusFilter = ref('all');
const typeFilter = ref('all');

const { data, pending, refresh } = await useAdminFetch('/admin/reports', {
  query: {
    page,
    status: statusFilter,
    type: typeFilter,
    search
  },
  watch: [page, statusFilter, typeFilter]
});

const { data: statsData, refresh: refreshStats } = await useAdminFetch('/admin/reports/stats');

const reports = computed(() => data.value?.data || []);
const meta = computed(() => data.value?.meta || { total: 0, last_page: 1 });

const stats = computed(() => statsData.value || { total: 0, pending: 0, resolved: 0, rejected: 0 });

let timeout: NodeJS.Timeout;
const debouncedSearch = () => {
  clearTimeout(timeout);
  timeout = setTimeout(() => { page.value = 1; }, 500);
};

const resolve = async (id: number) => {
  if(!confirm('Вирішити цю скаргу?')) return;
  await useAdminFetch(`/admin/reports/${id}/resolve`, { method: 'POST' });
  refresh();
  refreshStats();
};

const reject = async (id: number) => {
  if(!confirm('Відхилити цю скаргу?')) return;
  await useAdminFetch(`/admin/reports/${id}/reject`, { method: 'POST' });
  refresh();
  refreshStats();
};

const getStatusLabel = (status: string) => {
  const map: Record<string, string> = { 'PENDING': 'Нова', 'RESOLVED': 'Вирішено', 'REJECTED': 'Відхилено' };
  return map[status] || status;
}
const getTypeLabel = (type: string) => {
  const map: Record<string, string> = {
    'FRAUD': 'Шахрайство',
    'INACCURATE_INFO': 'Неправдива інформація',
    'OFFENSIVE_CONTENT': 'Образливий контент',
    'DUPLICATE': 'Дублікат',
    'OTHER': 'Інше'
  };
  return map[type] || type;
}

const getStatusColorClass = (status: string) => {
  if(status === 'PENDING') return 'bg-orange-50 text-orange-600';
  if(status === 'RESOLVED') return 'bg-green-50 text-green-600';
  return 'bg-red-50 text-red-600';
};

const getStatusBadgeClass = (status: string) => {
  if(status === 'PENDING') return 'bg-orange-100 text-orange-700';
  if(status === 'RESOLVED') return 'bg-green-100 text-green-700';
  return 'bg-red-100 text-red-700';
};
</script>
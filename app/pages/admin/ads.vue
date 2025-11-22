<template>
  <div class="max-w-7xl mx-auto">
    <div class="bg-white rounded-2xl shadow-sm p-6 mb-6 border border-gray-100">
      <div class="flex flex-col md:flex-row gap-4">
        <div class="flex-grow">
          <div class="relative">
            <ion-icon name="search-outline" class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xl"></ion-icon>
            <input
                v-model="search"
                type="text"
                placeholder="Пошук оголошень..."
                class="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                @input="debouncedSearch"
            />
          </div>
        </div>

        <select v-model="statusFilter" class="px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 text-gray-600">
          <option value="all">Всі статуси</option>
          <option value="ACTIVE">Активні</option>
          <option value="PENDING_REVIEW">На модерації</option>
          <option value="REJECTED">Відхилені</option>
          <option value="DRAFT">Чорновики</option>
          <option value="ARCHIVED">Архівовані</option>
        </select>

        <select v-model="cityFilter" class="px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 text-gray-600">
          <option value="all">Всі міста</option>
          <option value="Київ">Київ</option>
          <option value="Львів">Львів</option>
          <option value="Одеса">Одеса</option>
          <option value="Дніпро">Дніпро</option>
          <option value="Харків">Харків</option>
        </select>
      </div>
    </div>

    <div class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
      <div class="overflow-x-auto">
        <table class="w-full">
          <thead class="bg-gray-50 border-b border-gray-200">
          <tr>
            <th class="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">ID</th>
            <th class="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Оголошення</th>
            <th class="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Власник</th>
            <th class="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Ціна</th>
            <th class="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Статус</th>
            <th class="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Дії</th>
          </tr>
          </thead>
          <tbody class="divide-y divide-gray-200">
          <tr v-if="pending" class="text-center">
            <td colspan="6" class="py-8 text-gray-500">Завантаження...</td>
          </tr>
          <tr v-else-if="ads.length === 0" class="text-center">
            <td colspan="6" class="py-8 text-gray-500">Оголошень не знайдено</td>
          </tr>

          <tr v-else v-for="ad in ads" :key="ad.id" class="hover:bg-gray-50 transition">
            <td class="px-6 py-4 text-sm text-gray-500">#{{ ad.id }}</td>
            <td class="px-6 py-4">
              <div class="flex items-center gap-3">
                <div class="w-12 h-12 bg-gray-200 rounded-lg flex-shrink-0 overflow-hidden">
                  <img v-if="ad.photos && ad.photos[0]" :src="ad.photos[0].url" class="w-full h-full object-cover" alt="img">
                </div>
                <div>
                  <div class="font-semibold text-dark text-sm">{{ ad.title }}</div>
                  <div class="text-xs text-gray-500">{{ ad.city }}</div>
                </div>
              </div>
            </td>
            <td class="px-6 py-4 text-sm text-gray-600">
              <div>{{ ad.owner.displayName }}</div>
              <div class="text-xs text-gray-400">{{ ad.owner.email }}</div>
            </td>
            <td class="px-6 py-4 text-sm font-semibold text-dark">{{ ad.price }} {{ ad.currency }}</td>
            <td class="px-6 py-4">
                <span :class="getStatusClass(ad.status)" class="px-3 py-1 rounded-full text-xs font-semibold">
                  {{ getStatusLabel(ad.status) }}
                </span>
            </td>
            <td class="px-6 py-4">
              <div class="flex items-center gap-2">
                <button class="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition" title="Переглянути">
                  <ion-icon name="eye-outline" class="text-lg"></ion-icon>
                </button>
                <button v-if="ad.status === 'PENDING_REVIEW'" @click="approve(ad.id)" class="p-2 text-green-600 hover:bg-green-50 rounded-lg transition" title="Схвалити">
                  <ion-icon name="checkmark-circle-outline" class="text-lg"></ion-icon>
                </button>
                <button @click="remove(ad.id)" class="p-2 text-red-600 hover:bg-red-50 rounded-lg transition" title="Видалити">
                  <ion-icon name="trash-outline" class="text-lg"></ion-icon>
                </button>
              </div>
            </td>
          </tr>
          </tbody>
        </table>
      </div>

      <div class="px-6 py-4 border-t border-gray-200 flex items-center justify-between" v-if="meta.total > 0">
        <div class="text-sm text-gray-600">
          Всього: <span class="font-semibold">{{ meta.total }}</span>
        </div>
        <div class="flex gap-2">
          <button
              @click="page--"
              :disabled="page === 1"
              class="px-4 py-2 border border-gray-200 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 transition disabled:opacity-50">
            Попередня
          </button>
          <span class="px-4 py-2 text-sm font-medium">{{ page }} / {{ meta.last_page }}</span>
          <button
              @click="page++"
              :disabled="page >= meta.last_page"
              class="px-4 py-2 border border-gray-200 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 transition disabled:opacity-50">
            Наступна
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { useDebounceFn } from '@vueuse/core';

definePageMeta({
  layout: 'admin'
});


const page = ref(1);
const search = ref('');
const statusFilter = ref('all');
const cityFilter = ref('all');
const limit = 10;

const { data, pending, refresh } = await useAdminFetch('/admin/listings', {
  query: {
    page,
    limit,
    search,
    status: statusFilter,
    city: cityFilter
  },
  watch: [page, statusFilter, cityFilter]
});


const ads = computed(() => data.value?.data || []);
const meta = computed(() => data.value?.meta || { total: 0, last_page: 1 });


let timeout: NodeJS.Timeout;
const debouncedSearch = () => {
  clearTimeout(timeout);
  timeout = setTimeout(() => {
    page.value = 1;
  }, 500);
};


const getStatusLabel = (status: string) => {
  const labels: Record<string, string> = {
    'ACTIVE': 'Активне',
    'PENDING_REVIEW': 'На модерації',
    'REJECTED': 'Відхилено',
    'DRAFT': 'Чорновик',
    'ARCHIVED': 'Архів'
  };
  return labels[status] || status;
};

const getStatusClass = (status: string) => {
  const classes: Record<string, string> = {
    'ACTIVE': 'bg-green-100 text-green-700',
    'PENDING_REVIEW': 'bg-yellow-100 text-yellow-700',
    'REJECTED': 'bg-red-100 text-red-700',
    'DRAFT': 'bg-gray-100 text-gray-700',
    'ARCHIVED': 'bg-gray-200 text-gray-500'
  };
  return classes[status] || 'bg-gray-100 text-gray-700';
};


const approve = async (id: number) => {
  if (!confirm('Схвалити це оголошення?')) return;

  const { error } = await useAdminFetch(`/admin/listings/approve/${id}`, { method: 'POST' });
  if (!error.value) {
    refresh();
  } else {
    alert('Помилка: ' + error.value.data?.message);
  }
};

const remove = async (id: number) => {
  if (!confirm('Ви впевнені? Це дію не можна скасувати.')) return;

  // Тут треба перевірити, який ендпоінт ви хочете використовувати.
  // У вас є /admin/listings/reject/:id (відхилити з приміткою)
  // Або можна додати метод повного видалення.
  // Для прикладу використаємо reject з дефолтною приміткою "Видалено адміном"

  const { error } = await useAdminFetch(`/admin/listings/reject/${id}`, {
    method: 'POST',
    body: { notes: 'Видалено адміністратором' }
  });

  if (!error.value) {
    refresh();
  } else {
    alert('Помилка: ' + error.value.data?.message);
  }
};
</script>
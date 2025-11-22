<template>
    <div class="max-w-7xl mx-auto">
      <!-- Filters and Search -->
      <div class="bg-white rounded-2xl shadow-sm p-6 mb-6 border border-gray-100">
        <div class="flex flex-col md:flex-row gap-4">
          <div class="flex-grow">
            <div class="relative">
              <ion-icon name="search-outline" class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xl"></ion-icon>
              <input
                  type="text"
                  placeholder="Пошук оголошень..."
                  class="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
              />
            </div>
          </div>
          <select class="px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 text-gray-600">
            <option>Всі статуси</option>
            <option>Активні</option>
            <option>На модерації</option>
            <option>Заблоковані</option>
          </select>
          <select class="px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 text-gray-600">
            <option>Всі міста</option>
            <option>Київ</option>
            <option>Львів</option>
            <option>Одеса</option>
          </select>
        </div>
      </div>

      <!-- Ads List -->
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
            <tr v-for="ad in ads" :key="ad.id" class="hover:bg-gray-50 transition">
              <td class="px-6 py-4 text-sm text-gray-500">#{{ ad.id }}</td>
              <td class="px-6 py-4">
                <div class="flex items-center gap-3">
                  <div class="w-12 h-12 bg-gray-200 rounded-lg flex-shrink-0"></div>
                  <div>
                    <div class="font-semibold text-dark text-sm">{{ ad.title }}</div>
                    <div class="text-xs text-gray-500">{{ ad.location }}</div>
                  </div>
                </div>
              </td>
              <td class="px-6 py-4 text-sm text-gray-600">{{ ad.owner }}</td>
              <td class="px-6 py-4 text-sm font-semibold text-dark">{{ ad.price }} ₴</td>
              <td class="px-6 py-4">
                  <span :class="getStatusClass(ad.status)" class="px-3 py-1 rounded-full text-xs font-semibold">
                    {{ ad.status }}
                  </span>
              </td>
              <td class="px-6 py-4">
                <div class="flex items-center gap-2">
                  <button class="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition">
                    <ion-icon name="eye-outline" class="text-lg"></ion-icon>
                  </button>
                  <button class="p-2 text-green-600 hover:bg-green-50 rounded-lg transition">
                    <ion-icon name="checkmark-circle-outline" class="text-lg"></ion-icon>
                  </button>
                  <button class="p-2 text-red-600 hover:bg-red-50 rounded-lg transition">
                    <ion-icon name="trash-outline" class="text-lg"></ion-icon>
                  </button>
                </div>
              </td>
            </tr>
            </tbody>
          </table>
        </div>

        <!-- Pagination -->
        <div class="px-6 py-4 border-t border-gray-200 flex items-center justify-between">
          <div class="text-sm text-gray-600">
            Показано <span class="font-semibold">1-10</span> з <span class="font-semibold">245</span>
          </div>
          <div class="flex gap-2">
            <button class="px-4 py-2 border border-gray-200 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 transition">
              Попередня
            </button>
            <button class="px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium">1</button>
            <button class="px-4 py-2 border border-gray-200 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 transition">2</button>
            <button class="px-4 py-2 border border-gray-200 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 transition">3</button>
            <button class="px-4 py-2 border border-gray-200 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 transition">
              Наступна
            </button>
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

const ads = ref([
  { id: 45892, title: '2-кімнатна квартира', location: 'Київ, Печерськ', owner: 'Олена М.', price: 12000, status: 'Активне' },
  { id: 45891, title: '1-кімнатна квартира', location: 'Київ, Позняки', owner: 'Дмитро К.', price: 8500, status: 'Активне' },
  { id: 45890, title: '3-кімнатна квартира', location: 'Львів, Центр', owner: 'Марія В.', price: 15000, status: 'На модерації' },
  { id: 45889, title: 'Студія', location: 'Одеса, Аркадія', owner: 'Іван П.', price: 7000, status: 'Активне' },
  { id: 45888, title: '2-кімнатна квартира', location: 'Київ, Оболонь', owner: 'Олександр С.', price: 11000, status: 'Заблоковане' },
]);

const getStatusClass = (status: string) => {
  const classes = {
    'Активне': 'bg-green-100 text-green-700',
    'На модерації': 'bg-yellow-100 text-yellow-700',
    'Заблоковане': 'bg-red-100 text-red-700'
  };
  return classes[status] || 'bg-gray-100 text-gray-700';
};
</script>
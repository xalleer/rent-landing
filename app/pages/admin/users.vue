<template>
    <div class="max-w-7xl mx-auto">
      <!-- Stats -->
      <div class="grid md:grid-cols-3 gap-6 mb-6">
        <div class="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <div class="flex items-center justify-between">
            <div>
              <div class="text-3xl font-bold text-dark">1,234</div>
              <div class="text-sm text-gray-500 mt-1">Всього користувачів</div>
            </div>
            <div class="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center">
              <ion-icon name="people-outline" class="text-2xl"></ion-icon>
            </div>
          </div>
        </div>

        <div class="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <div class="flex items-center justify-between">
            <div>
              <div class="text-3xl font-bold text-dark">892</div>
              <div class="text-sm text-gray-500 mt-1">Верифіковані</div>
            </div>
            <div class="w-12 h-12 bg-green-50 text-green-600 rounded-xl flex items-center justify-center">
              <ion-icon name="shield-checkmark-outline" class="text-2xl"></ion-icon>
            </div>
          </div>
        </div>

        <div class="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <div class="flex items-center justify-between">
            <div>
              <div class="text-3xl font-bold text-dark">342</div>
              <div class="text-sm text-gray-500 mt-1">Не верифіковані</div>
            </div>
            <div class="w-12 h-12 bg-orange-50 text-orange-600 rounded-xl flex items-center justify-center">
              <ion-icon name="alert-circle-outline" class="text-2xl"></ion-icon>
            </div>
          </div>
        </div>
      </div>

      <!-- Filters -->
      <div class="bg-white rounded-2xl shadow-sm p-6 mb-6 border border-gray-100">
        <div class="flex flex-col md:flex-row gap-4">
          <div class="flex-grow">
            <div class="relative">
              <ion-icon name="search-outline" class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xl"></ion-icon>
              <input
                  type="text"
                  placeholder="Пошук користувачів..."
                  class="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
              />
            </div>
          </div>
          <select class="px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 text-gray-600">
            <option>Всі ролі</option>
            <option>Орендарі</option>
            <option>Власники</option>
          </select>
          <select class="px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 text-gray-600">
            <option>Всі статуси</option>
            <option>Верифіковані</option>
            <option>Не верифіковані</option>
            <option>Заблоковані</option>
          </select>
        </div>
      </div>

      <!-- Users List -->
      <div class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div class="overflow-x-auto">
          <table class="w-full">
            <thead class="bg-gray-50 border-b border-gray-200">
            <tr>
              <th class="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Користувач</th>
              <th class="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Email</th>
              <th class="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Телефон</th>
              <th class="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Роль</th>
              <th class="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Статус</th>
              <th class="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Дії</th>
            </tr>
            </thead>
            <tbody class="divide-y divide-gray-200">
            <tr v-for="user in users" :key="user.id" class="hover:bg-gray-50 transition">
              <td class="px-6 py-4">
                <div class="flex items-center gap-3">
                  <div class="w-10 h-10 bg-primary/10 text-primary rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    {{ user.name.charAt(0) }}
                  </div>
                  <div>
                    <div class="font-semibold text-dark text-sm">{{ user.name }}</div>
                    <div class="text-xs text-gray-500">ID: {{ user.id }}</div>
                  </div>
                </div>
              </td>
              <td class="px-6 py-4 text-sm text-gray-600">{{ user.email }}</td>
              <td class="px-6 py-4 text-sm text-gray-600">{{ user.phone }}</td>
              <td class="px-6 py-4">
                  <span :class="getRoleClass(user.role)" class="px-3 py-1 rounded-full text-xs font-semibold">
                    {{ user.role }}
                  </span>
              </td>
              <td class="px-6 py-4">
                <div class="flex items-center gap-2">
                  <div :class="user.verified ? 'bg-green-100' : 'bg-gray-100'" class="w-2 h-2 rounded-full"></div>
                  <span class="text-sm text-gray-600">{{ user.verified ? 'Верифікований' : 'Не верифікований' }}</span>
                </div>
              </td>
              <td class="px-6 py-4">
                <div class="flex items-center gap-2">
                  <button class="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition">
                    <ion-icon name="eye-outline" class="text-lg"></ion-icon>
                  </button>
                  <button class="p-2 text-green-600 hover:bg-green-50 rounded-lg transition">
                    <ion-icon name="create-outline" class="text-lg"></ion-icon>
                  </button>
                  <button class="p-2 text-red-600 hover:bg-red-50 rounded-lg transition">
                    <ion-icon name="ban-outline" class="text-lg"></ion-icon>
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
            Показано <span class="font-semibold">1-10</span> з <span class="font-semibold">1,234</span>
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

const users = ref([
  { id: 1001, name: 'Олена Мельник', email: 'olena.m@gmail.com', phone: '+380 67 123 4567', role: 'Власник', verified: true },
  { id: 1002, name: 'Дмитро Коваль', email: 'dmytro.k@gmail.com', phone: '+380 50 234 5678', role: 'Власник', verified: true },
  { id: 1003, name: 'Марія Василенко', email: 'maria.v@gmail.com', phone: '+380 63 345 6789', role: 'Орендар', verified: false },
  { id: 1004, name: 'Іван Петренко', email: 'ivan.p@gmail.com', phone: '+380 67 456 7890', role: 'Орендар', verified: true },
  { id: 1005, name: 'Олександр Сидоренко', email: 'alex.s@gmail.com', phone: '+380 50 567 8901', role: 'Власник', verified: false },
]);

const getRoleClass = (role: string) => {
  return role === 'Власник'
      ? 'bg-purple-100 text-purple-700'
      : 'bg-blue-100 text-blue-700';
};

definePageMeta({
  layout: 'admin'
});
</script>
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
                placeholder="Пошук (ім'я, email, телефон)..."
                class="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                @input="debouncedSearch"
            />
          </div>
        </div>
        <select v-model="roleFilter" class="px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 text-gray-600">
          <option value="all">Всі ролі</option>
          <option value="TENANT">Орендарі</option>
          <option value="LANDLORD">Власники</option>
        </select>
        <select v-model="verifiedFilter" class="px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 text-gray-600">
          <option value="all">Всі статуси</option>
          <option value="true">Верифіковані</option>
          <option value="false">Не верифіковані</option>
        </select>
      </div>
    </div>

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
          <tr v-if="pending" class="text-center"><td colspan="6" class="py-8 text-gray-500">Завантаження...</td></tr>
          <tr v-else-if="users.length === 0" class="text-center"><td colspan="6" class="py-8 text-gray-500">Користувачів не знайдено</td></tr>

          <tr v-else v-for="user in users" :key="user.id" class="hover:bg-gray-50 transition">
            <td class="px-6 py-4">
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 bg-primary/10 text-primary rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  {{ user.displayName ? user.displayName.charAt(0) : 'U' }}
                </div>
                <div>
                  <div class="font-semibold text-dark text-sm">{{ user.displayName || 'Без імені' }}</div>
                  <div class="text-xs text-gray-500">ID: {{ user.id }}</div>
                </div>
              </div>
            </td>
            <td class="px-6 py-4 text-sm text-gray-600">{{ user.email }}</td>
            <td class="px-6 py-4 text-sm text-gray-600">{{ user.phone || '-' }}</td>
            <td class="px-6 py-4">
                  <span :class="getRoleClass(user.role)" class="px-3 py-1 rounded-full text-xs font-semibold">
                    {{ user.role === 'LANDLORD' ? 'Власник' : 'Орендар' }}
                  </span>
            </td>
            <td class="px-6 py-4">
              <div class="flex items-center gap-2">
                <div :class="user.isVerified ? 'bg-green-100' : 'bg-gray-100'" class="w-2 h-2 rounded-full"></div>
                <span class="text-sm text-gray-600">{{ user.isVerified ? 'Верифікований' : 'Не верифікований' }}</span>
              </div>
            </td>
            <td class="px-6 py-4">
              <div class="flex items-center gap-2">
                <button class="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition">
                  <ion-icon name="eye-outline" class="text-lg"></ion-icon>
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
          <button @click="page--" :disabled="page === 1" class="px-4 py-2 border border-gray-200 rounded-lg text-sm disabled:opacity-50 hover:bg-gray-50">Попередня</button>
          <span class="px-4 py-2 text-sm font-medium">{{ page }} / {{ meta.last_page }}</span>
          <button @click="page++" :disabled="page >= meta.last_page" class="px-4 py-2 border border-gray-200 rounded-lg text-sm disabled:opacity-50 hover:bg-gray-50">Наступна</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
definePageMeta({ layout: 'admin' });

const page = ref(1);
const search = ref('');
const roleFilter = ref('all');
const verifiedFilter = ref('all');
const limit = 10;

// Запит до бекенду
const { data, pending } = await useAdminFetch('/admin/users', {
  query: { page, limit, search, role: roleFilter, verified: verifiedFilter },
  watch: [page, roleFilter, verifiedFilter]
});

const users = computed(() => data.value?.data || []);
const meta = computed(() => data.value?.meta || { total: 0, last_page: 1 });

// Debounce
let timeout: NodeJS.Timeout;
const debouncedSearch = () => {
  clearTimeout(timeout);
  timeout = setTimeout(() => { page.value = 1; }, 500);
};

const getRoleClass = (role: string) => {
  return role === 'LANDLORD' ? 'bg-purple-100 text-purple-700' : 'bg-blue-100 text-blue-700';
};
</script>
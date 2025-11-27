
<template>
  <div class="max-w-7xl mx-auto">
    <div class="flex space-x-1 rounded-xl bg-gray-200 p-1 mb-6 w-fit">
      <button
          v-for="tab in ['all', 'pending']"
          :key="tab"
          @click="activeTab = tab"
          :class="[
          'px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200',
          activeTab === tab ? 'bg-white text-dark shadow-sm' : 'text-gray-600 hover:text-dark'
        ]"
      >
        {{ tab === 'all' ? 'Всі користувачі' : 'Очікують верифікації' }}
        <span v-if="tab === 'pending' && pendingVerifications.length > 0" class="ml-2 bg-red-500 text-white text-[10px] px-1.5 py-0.5 rounded-full">
          {{ pendingVerifications.length }}
        </span>
      </button>
    </div>

    <div v-if="activeTab === 'all'">
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

    <div v-else-if="activeTab === 'pending'">
      <div class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div class="overflow-x-auto">
          <table class="w-full">
            <thead class="bg-gray-50 border-b border-gray-200">
            <tr>
              <th class="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Користувач</th>
              <th class="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Документи</th>
              <th class="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Дата подачі</th>
              <th class="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Дії</th>
            </tr>
            </thead>
            <tbody class="divide-y divide-gray-200">
            <tr v-if="pendingVerificationsLoading" class="text-center"><td colspan="4" class="py-8 text-gray-500">Завантаження...</td></tr>
            <tr v-else-if="pendingVerifications.length === 0" class="text-center"><td colspan="4" class="py-8 text-gray-500">Заявок не знайдено</td></tr>

            <tr v-else v-for="item in pendingVerifications" :key="item.id" class="hover:bg-gray-50 transition">
              <td class="px-6 py-4">
                <div class="flex items-center gap-3">
                  <div class="w-10 h-10 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    {{ item.displayName ? item.displayName.charAt(0) : 'U' }}
                  </div>
                  <div>
                    <div class="font-semibold text-dark text-sm">{{ item.displayName || 'Без імені' }}</div>
                    <div class="text-xs text-gray-500">{{ item.email }}</div>
                  </div>
                </div>
              </td>
              <td class="px-6 py-4">
                <div class="flex gap-2 flex-wrap">
                  <a v-for="(doc, i) in item.verification?.documentUrls" :key="i" :href="doc" target="_blank" class="block w-12 h-12 rounded-lg bg-gray-100 border border-gray-200 overflow-hidden hover:border-primary transition hover:scale-105" title="Переглянути документ">
                    <img :src="doc" class="w-full h-full object-cover" alt="doc">
                  </a>
                  <span v-if="!item.verification?.documentUrls?.length" class="text-sm text-gray-400">Немає документів</span>
                </div>
              </td>
              <td class="px-6 py-4 text-sm text-gray-600">
                {{ item.verification?.createdAt ? new Date(item.verification.createdAt).toLocaleString('uk-UA') : '-' }}
              </td>
              <td class="px-6 py-4">
                <div class="flex items-center gap-2">
                  <button @click="approveUser(item.id)" class="p-2 text-green-600 hover:bg-green-50 rounded-lg transition" title="Схвалити">
                    <ion-icon name="checkmark-circle-outline" class="text-xl"></ion-icon>
                  </button>
                  <button @click="rejectUser(item.id)" class="p-2 text-red-600 hover:bg-red-50 rounded-lg transition" title="Відхилити">
                    <ion-icon name="close-circle-outline" class="text-xl"></ion-icon>
                  </button>
                </div>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue';
definePageMeta({ layout: 'admin' });

const activeTab = ref('all');

// --- Logic for "All Users" Tab ---
const page = ref(1);
const search = ref('');
const roleFilter = ref('all');
const verifiedFilter = ref('all');
const limit = 10;

const { data, pending } = await useAdminFetch('/admin/users', {
  query: { page, limit, search, role: roleFilter, verified: verifiedFilter },
  watch: [page, roleFilter, verifiedFilter]
});

const users = computed(() => data.value?.data || []);
const meta = computed(() => data.value?.meta || { total: 0, last_page: 1 });

let timeout: NodeJS.Timeout;
const debouncedSearch = () => {
  clearTimeout(timeout);
  timeout = setTimeout(() => { page.value = 1; }, 500);
};

const getRoleClass = (role: string) => {
  return role === 'LANDLORD' ? 'bg-purple-100 text-purple-700' : 'bg-blue-100 text-blue-700';
};

const { data: pendingData, pending: pendingVerificationsLoading, refresh: refreshPending } = await useAdminFetch('/admin/users/pending');

const pendingVerifications = computed(() => pendingData.value || []);

watch(activeTab, (newTab) => {
  if (newTab === 'pending') {
    refreshPending();
  }
});

const approveUser = async (userId: number) => {
  if (!confirm('Підтвердити верифікацію цього користувача?')) return;

  try {
    const { error } = await useAdminFetch(`/admin/users/approve/${userId}`, { method: 'POST' });
    if (error.value) throw new Error(error.value.statusMessage);
    refreshPending();
  } catch (e) {
    alert('Не вдалося схвалити користувача. Спробуйте ще раз.');
  }
};

const rejectUser = async (userId: number) => {
  const notes = prompt('Вкажіть причину відхилення:');
  if (notes === null) return; // Cancelled
  if (!notes.trim()) {
    alert('Причина відхилення є обов\'язковою!');
    return;
  }

  try {
    const { error } = await useAdminFetch(`/admin/users/reject/${userId}`, {
      method: 'POST',
      body: { notes }
    });
    if (error.value) throw new Error(error.value.statusMessage);
    refreshPending();
  } catch (e) {
    alert('Не вдалося відхилити запит. Спробуйте ще раз.');
  }
};
</script>
}
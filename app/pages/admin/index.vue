// app/pages/admin/index.vue (раніше app/pages/admin.vue)
<template>
  <div class="min-h-screen flex flex-col bg-gray-50">
    <Header />
    <main class="flex-grow pt-32 pb-20">
      <div class="container mx-auto px-6 max-w-5xl">
        <div class="max-w-md mx-auto bg-white p-8 border border-gray-200 rounded-xl shadow-lg">
          <h2 class="text-3xl font-bold text-center mb-6 text-dark">Вхід до Адмін-панелі</h2>
          <form @submit.prevent="login">
            <div class="mb-4">
              <label for="username" class="block text-sm font-medium text-gray-700 mb-1">Ім'я користувача</label>
              <input
                  id="username"
                  v-model="username"
                  type="text"
                  required
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary transition duration-150"
                  placeholder="admin"
              />
            </div>

            <div class="mb-6">
              <label for="password" class="block text-sm font-medium text-gray-700 mb-1">Пароль</label>
              <input
                  id="password"
                  v-model="password"
                  type="password"
                  required
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary transition duration-150"
                  placeholder="password123"
              />
            </div>

            <p v-if="error" class="text-sm text-red-600 mb-4">{{ error }}</p>

            <button
                type="submit"
                :disabled="loading"
                class="w-full py-3 px-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span v-if="loading">Завантаження...</span>
              <span v-else>Увійти</span>
            </button>
          </form>
          <div class="mt-6 p-3 bg-blue-50 border border-blue-200 text-sm rounded-lg text-blue-700">
            <p><strong>Тестові дані:</strong></p>
            <p>Логін: <code class="font-mono text-xs">admin</code></p>
            <p>Пароль: <code class="font-mono text-xs">password123</code></p>
          </div>
        </div>
      </div>
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const username = ref('');
const password = ref('');
const error = ref('');
const loading = ref(false);
const router = useRouter();

const HARDCODED_USERNAME = 'admin';
const HARDCODED_PASSWORD = 'password123';

const login = async () => {
  error.value = '';
  loading.value = true;

  await new Promise(resolve => setTimeout(resolve, 800));

  if (username.value === HARDCODED_USERNAME && password.value === HARDCODED_PASSWORD) {
    error.value = '';
    router.push('/admin/dashboard');
    loading.value = false;
    return;
  } else {
    error.value = 'Невірне ім\'я користувача або пароль.';
  }

  loading.value = false;
};
</script>
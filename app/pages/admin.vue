<template>
  <div class="min-h-screen flex flex-col bg-gray-50">
    <Header />

    <main class="flex-grow pt-32 pb-20">
      <div class="container mx-auto px-6 max-w-5xl">
        <!-- Форма логіну -->
        <div v-if="!isLoggedIn" class="max-w-md mx-auto bg-white p-8 border border-gray-200 rounded-xl shadow-lg">
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

        <!-- Адмін-панель після логіну -->
        <div v-else>
          <div class="flex justify-between items-center mb-8">
            <h1 class="text-4xl font-bold text-primary">Панель Адміністратора</h1>
            <button
                @click="logout"
                class="py-2.5 px-6 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition duration-200 flex items-center gap-2"
            >
              <ion-icon name="log-out-outline"></ion-icon>
              Вийти
            </button>
          </div>

          <div class="grid md:grid-cols-3 gap-6 mb-8">
            <div class="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
              <div class="flex items-center gap-4">
                <div class="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center">
                  <ion-icon name="document-text-outline" class="text-2xl"></ion-icon>
                </div>
                <div>
                  <div class="text-2xl font-bold text-dark">245</div>
                  <div class="text-sm text-gray-500">Активних оголошень</div>
                </div>
              </div>
            </div>

            <div class="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
              <div class="flex items-center gap-4">
                <div class="w-12 h-12 bg-green-100 text-green-600 rounded-xl flex items-center justify-center">
                  <ion-icon name="people-outline" class="text-2xl"></ion-icon>
                </div>
                <div>
                  <div class="text-2xl font-bold text-dark">1,234</div>
                  <div class="text-sm text-gray-500">Користувачів</div>
                </div>
              </div>
            </div>

            <div class="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
              <div class="flex items-center gap-4">
                <div class="w-12 h-12 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center">
                  <ion-icon name="shield-checkmark-outline" class="text-2xl"></ion-icon>
                </div>
                <div>
                  <div class="text-2xl font-bold text-dark">892</div>
                  <div class="text-sm text-gray-500">Верифікованих</div>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-6">
            <h3 class="text-xl font-bold mb-4 text-dark flex items-center gap-2">
              <ion-icon name="stats-chart-outline" class="text-primary"></ion-icon>
              Статистика за останній тиждень
            </h3>
            <div class="h-64 flex items-center justify-center text-gray-400">
              <div class="text-center">
                <ion-icon name="bar-chart-outline" class="text-5xl mb-2"></ion-icon>
                <p>Графік статистики (демо)</p>
              </div>
            </div>
          </div>

          <div class="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
            <h3 class="text-xl font-bold mb-4 text-dark flex items-center gap-2">
              <ion-icon name="list-outline" class="text-primary"></ion-icon>
              Останні дії
            </h3>
            <div class="space-y-3">
              <div class="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div class="flex items-center gap-3">
                  <div class="w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm">
                    <ion-icon name="checkmark"></ion-icon>
                  </div>
                  <div>
                    <div class="font-medium text-dark">Нове оголошення верифіковано</div>
                    <div class="text-sm text-gray-500">2-кімнатна квартира, Київ, Печерськ</div>
                  </div>
                </div>
                <div class="text-sm text-gray-400">5 хв тому</div>
              </div>

              <div class="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div class="flex items-center gap-3">
                  <div class="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm">
                    <ion-icon name="person-add"></ion-icon>
                  </div>
                  <div>
                    <div class="font-medium text-dark">Новий користувач зареєстрований</div>
                    <div class="text-sm text-gray-500">Олександр К.</div>
                  </div>
                </div>
                <div class="text-sm text-gray-400">15 хв тому</div>
              </div>

              <div class="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div class="flex items-center gap-3">
                  <div class="w-8 h-8 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center text-sm">
                    <ion-icon name="flag"></ion-icon>
                  </div>
                  <div>
                    <div class="font-medium text-dark">Скарга на оголошення</div>
                    <div class="text-sm text-gray-500">Потребує модерації</div>
                  </div>
                </div>
                <div class="text-sm text-gray-400">1 год тому</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>

    <Footer />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const isLoggedIn = ref(false);
const username = ref('');
const password = ref('');
const error = ref('');
const loading = ref(false);

const HARDCODED_USERNAME = 'admin';
const HARDCODED_PASSWORD = 'password123';

const login = async () => {
  error.value = '';
  loading.value = true;

  // Імітація затримки мережі
  await new Promise(resolve => setTimeout(resolve, 800));

  if (username.value === HARDCODED_USERNAME && password.value === HARDCODED_PASSWORD) {
    // Успішний вхід
    isLoggedIn.value = true;
    error.value = '';
  } else {
    error.value = 'Невірне ім\'я користувача або пароль.';
  }

  loading.value = false;
};

const logout = () => {
  isLoggedIn.value = false;
  username.value = '';
  password.value = '';
  error.value = '';
};
</script>
<template>
  <AdminShell title="Налаштування">
    <div class="max-w-4xl mx-auto">
      <!-- Profile Settings -->
      <div class="bg-white rounded-2xl shadow-sm p-8 mb-6 border border-gray-100">
        <h3 class="text-xl font-bold text-dark mb-6 flex items-center gap-2">
          <ion-icon name="person-outline" class="text-primary text-2xl"></ion-icon>
          Профіль адміністратора
        </h3>

        <div class="space-y-6">
          <div class="flex items-center gap-6">
            <div class="w-20 h-20 bg-primary/10 text-primary rounded-full flex items-center justify-center text-3xl font-bold">
              А
            </div>
            <div>
              <button class="px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary-dark transition">
                Змінити фото
              </button>
              <p class="text-xs text-gray-500 mt-2">JPG, PNG. Максимум 2MB</p>
            </div>
          </div>

          <div class="grid md:grid-cols-2 gap-4">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Ім'я</label>
              <input
                  type="text"
                  value="Адміністратор"
                  class="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
              />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input
                  type="email"
                  value="admin@rentora.com"
                  class="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
              />
            </div>
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Телефон</label>
            <input
                type="tel"
                value="+380 67 123 4567"
                class="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
            />
          </div>

          <div class="pt-4">
            <button class="px-6 py-3 bg-primary text-white rounded-xl font-medium hover:bg-primary-dark transition">
              Зберегти зміни
            </button>
          </div>
        </div>
      </div>

      <!-- Security Settings -->
      <div class="bg-white rounded-2xl shadow-sm p-8 mb-6 border border-gray-100">
        <h3 class="text-xl font-bold text-dark mb-6 flex items-center gap-2">
          <ion-icon name="lock-closed-outline" class="text-primary text-2xl"></ion-icon>
          Безпека
        </h3>

        <div class="space-y-6">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Поточний пароль</label>
            <input
                type="password"
                placeholder="••••••••"
                class="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
            />
          </div>

          <div class="grid md:grid-cols-2 gap-4">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Новий пароль</label>
              <input
                  type="password"
                  placeholder="••••••••"
                  class="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
              />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Підтвердіть пароль</label>
              <input
                  type="password"
                  placeholder="••••••••"
                  class="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
              />
            </div>
          </div>

          <div class="pt-4">
            <button class="px-6 py-3 bg-primary text-white rounded-xl font-medium hover:bg-primary-dark transition">
              Змінити пароль
            </button>
          </div>
        </div>
      </div>

      <!-- App Settings -->
      <div class="bg-white rounded-2xl shadow-sm p-8 border border-gray-100">
        <h3 class="text-xl font-bold text-dark mb-6 flex items-center gap-2">
          <ion-icon name="settings-outline" class="text-primary text-2xl"></ion-icon>
          Налаштування додатку
        </h3>

        <div class="space-y-4">
          <div class="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
            <div>
              <div class="font-semibold text-dark">Email сповіщення</div>
              <div class="text-sm text-gray-500">Отримувати сповіщення про важливі події</div>
            </div>
            <label class="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" checked class="sr-only peer">
              <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
            </label>
          </div>

          <div class="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
            <div>
              <div class="font-semibold text-dark">Автомодерація</div>
              <div class="text-sm text-gray-500">Автоматично схвалювати оголошення від верифікованих користувачів</div>
            </div>
            <label class="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" class="sr-only peer">
              <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
            </label>
          </div>

          <div class="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
            <div>
              <div class="font-semibold text-dark">SMS верифікація</div>
              <div class="text-sm text-gray-500">Вимагати SMS підтвердження для нових користувачів</div>
            </div>
            <label class="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" checked class="sr-only peer">
              <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
            </label>
          </div>
        </div>
      </div>
    </div>
  </AdminShell>
</template>

<script setup lang="ts">
import AdminShell from '~/components/AdminShell.vue';
</script>
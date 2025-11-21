<template>
  <AdminShell title="Панель Адміністратора">
    <div class="container mx-auto px-6 max-w-5xl">
      <div class="grid md:grid-cols-3 gap-6 mb-8">
        <div class="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition">
          <div class="flex items-center gap-4">
            <div class="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center">
              <ion-icon name="document-text-outline" class="text-2xl"></ion-icon>
            </div>
            <div>
              <div class="text-2xl font-bold text-dark">245</div>
              <div class="text-sm text-gray-500">Активних оголошень</div>
            </div>
          </div>
        </div>

        <div class="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition">
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

        <div class="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition">
          <div class="flex items-center gap-4">
            <div class="w-12 h-12 bg-green-100 text-green-600 rounded-xl flex items-center justify-center">
              <ion-icon name="shield-checkmark-outline" class="text-2xl"></ion-icon>
            </div>
            <div>
              <div class="text-2xl font-bold text-dark">892</div>
              <div class="text-sm text-gray-500">Верифікованих</div>
            </div>
          </div>
        </div>
      </div>

      <div class="bg-white rounded-xl shadow-lg p-6 mb-6">
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

      <div class="bg-white rounded-xl shadow-lg p-6">
        <h3 class="text-xl font-bold mb-4 text-dark flex items-center gap-2">
          <ion-icon name="list-outline" class="text-primary"></ion-icon>
          Останні дії
        </h3>
        <div class="space-y-3">
          <div class="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition">
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

          <div class="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition">
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

          <div class="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition">
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
  </AdminShell>
</template>

<script setup lang="ts">
import AdminShell from '~/components/AdminShell.vue';
// У реальному проекті тут потрібно додати перевірку авторизації (Nuxt Middleware)
// для захисту сторінки. Якщо користувач не авторизований, його потрібно
// перенаправляти на /admin.
</script>
<template>
  <aside class="w-64 bg-gray-900 text-white min-h-screen p-6 fixed top-0 left-0 z-40">
    <div class="text-2xl font-bold text-primary mb-10 flex items-center gap-2">
      <ion-icon name="home"></ion-icon>
      Rentora Admin
    </div>
    <nav>
      <ul class="space-y-3">
        <li>
          <NuxtLink to="/admin/dashboard" class="flex items-center gap-3 p-3 rounded-lg transition duration-150" :class="{ 'bg-primary text-white': $route.path === '/admin/dashboard', 'text-gray-300 hover:bg-gray-800': $route.path !== '/admin/dashboard' }">
            <ion-icon name="stats-chart-outline"></ion-icon>
            Дашборд
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/admin/listings" class="flex items-center gap-3 p-3 rounded-lg transition duration-150 text-gray-300 hover:bg-gray-800">
            <ion-icon name="list-outline"></ion-icon>
            Оголошення (245)
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/admin/users" class="flex items-center gap-3 p-3 rounded-lg transition duration-150 text-gray-300 hover:bg-gray-800">
            <ion-icon name="people-outline"></ion-icon>
            Користувачі (1,234)
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/admin/settings" class="flex items-center gap-3 p-3 rounded-lg transition duration-150 text-gray-300 hover:bg-gray-800">
            <ion-icon name="settings-outline"></ion-icon>
            Налаштування
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<script setup lang="ts">
// В Nuxt 3 $route доступний, але для реактивності краще використовувати useRoute()
</script>
<template>
  <header class="bg-white shadow-sm h-20 flex items-center px-8 fixed top-0 left-64 right-0 z-20 border-b border-gray-200">
    <div class="flex-grow">
      <h1 class="text-2xl font-bold text-dark">{{ title }}</h1>
    </div>

    <div class="flex items-center gap-4">
      <!-- Notifications -->
      <button class="relative p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition">
        <ion-icon name="notifications-outline" class="text-2xl"></ion-icon>
        <span class="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
      </button>

      <!-- User Profile -->
      <div class="flex items-center gap-3 px-3 py-2 hover:bg-gray-50 rounded-lg cursor-pointer transition">
        <div class="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
          <ion-icon name="person" class="text-primary text-xl"></ion-icon>
        </div>
        <div class="text-left hidden md:block">
          <div class="text-sm font-semibold text-dark">Адміністратор</div>
          <div class="text-xs text-gray-500">admin@rentora.com</div>
        </div>
      </div>

      <!-- Logout Button -->
      <button
          @click="logout"
          class="py-2.5 px-5 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition duration-200 flex items-center gap-2 text-sm"
      >
        <ion-icon name="log-out-outline" class="text-lg"></ion-icon>
        <span class="hidden md:inline">Вийти</span>
      </button>
    </div>
  </header>
</template>

<script setup lang="ts">
const props = defineProps<{
  title: string;
}>();

const logout = () => {
  if (confirm('Ви впевнені, що хочете вийти?')) {
    window.location.href = '/admin';
  }
};
</script>
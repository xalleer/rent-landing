<template>
  <header class="bg-white/95 backdrop-blur-sm shadow-md h-16 flex items-center px-6 fixed top-0 right-0 left-64 z-30">
    <div class="flex-grow">
      <h1 class="text-xl font-semibold text-dark">{{ title }}</h1>
    </div>
    <button
        @click="logout"
        class="py-2 px-4 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition duration-200 flex items-center gap-2 text-sm"
    >
      <ion-icon name="log-out-outline"></ion-icon>
      Вийти
    </button>
  </header>
</template>

<script setup lang="ts">
const props = defineProps<{
  title: string;
}>();

// Імітація логауту з перенаправленням на сторінку логіну
const logout = () => {
  // Тут має бути логіка скидання сесії
  // Перенаправлення на сторінку логіну
  window.location.href = '/admin';
};
</script>
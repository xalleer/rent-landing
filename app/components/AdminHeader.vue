<template>
  <header
      class="bg-white shadow-sm h-20 flex items-center px-4 md:px-8 fixed top-0 right-0 z-20 border-b border-gray-200 transition-all duration-300"
      :class="'left-0 md:left-64'"
  >
    <button
        @click="$emit('toggleSidebar')"
        class="mr-4 md:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition"
    >
      <ion-icon name="menu-outline" class="text-2xl"></ion-icon>
    </button>

    <div class="flex-grow">
      <h1 class="text-xl md:text-2xl font-bold text-dark truncate">{{ title }}</h1>
    </div>

    <div class="flex items-center gap-2 md:gap-4">
      <button class="relative p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition">
        <ion-icon name="notifications-outline" class="text-2xl"></ion-icon>
        <span class="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
      </button>

      <div class="flex items-center gap-3 px-2 md:px-3 py-2 hover:bg-gray-50 rounded-lg cursor-pointer transition">
        <div class="w-8 h-8 md:w-10 md:h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
          <ion-icon name="person" class="text-primary text-lg md:text-xl"></ion-icon>
        </div>
        <div class="text-left hidden md:block">
          <div class="text-sm font-semibold text-dark">Адміністратор</div>
          <div class="text-xs text-gray-500">admin@rentora.com</div>
        </div>
      </div>

      <button
          @click="logout"
          class="p-2 md:py-2.5 md:px-5 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition duration-200 flex items-center justify-center gap-2 text-sm"
          title="Вийти"
      >
        <ion-icon name="log-out-outline" class="text-xl md:text-lg"></ion-icon>
        <span class="hidden md:inline">Вийти</span>
      </button>
    </div>
  </header>
</template>

<script setup lang="ts">
const props = defineProps<{
  title: string;
}>();

defineEmits(['toggleSidebar']);

const logout = () => {
  if (confirm('Ви впевнені, що хочете вийти?')) {
    window.location.href = '/admin';

  }
};
</script>
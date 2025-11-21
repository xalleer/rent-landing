<template>
  <div class="min-h-screen flex bg-gray-50">
    <AdminSidebar />
    <div class="flex-1 flex flex-col pl-64">
      <AdminHeader :title="title" />
      <main class="flex-grow pt-20 pb-10 px-6">
        <slot />
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import AdminSidebar from './AdminSidebar.vue';
import AdminHeader from './AdminHeader.vue';

const props = defineProps<{
  title: string;
}>();
</script>
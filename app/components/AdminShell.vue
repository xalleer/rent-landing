<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Sidebar -->
    <AdminSidebar />

    <!-- Main Content Area with left margin for sidebar -->
    <div class="ml-64">
      <!-- Header -->
      <AdminHeader :title="title" />

      <!-- Main Content with top padding for header -->
      <main class="pt-24 px-8 pb-8">
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
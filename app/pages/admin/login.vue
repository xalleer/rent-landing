<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50">
    <AdminLoginForm />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: false,
  middleware: ['auth-admin']
})
</script>
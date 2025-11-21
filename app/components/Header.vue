<template>
  <header class="fixed w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-100 transition-all duration-300">
    <div class="container mx-auto px-6 py-4 flex justify-between items-center">
      <a href="/" class="flex items-center gap-2 text-primary font-bold text-2xl group">
        <div class="bg-primary/10 p-2 rounded-lg group-hover:bg-primary/20 transition">
          <ion-icon name="home" class="text-xl block"></ion-icon>
        </div>
        Rentora
      </a>

      <nav class="hidden md:flex gap-8 font-medium text-gray-600 text-sm">
        <a href="#features" class="hover:text-primary transition py-2">Переваги</a>
        <a href="#how-it-works" class="hover:text-primary transition py-2">Як це працює</a>
        <a href="#pricing" class="hover:text-primary transition py-2">Ціни</a>
        <a href="#faq" class="hover:text-primary transition py-2">FAQ</a>
      </nav>

      <a href="#download" class="btn-primary py-2.5 px-6 text-sm shadow-lg shadow-primary/30 hover:shadow-primary/50 no-underline">
        Встановити
      </a>
    </div>
  </header>
</template>
<script setup lang="ts">
</script>
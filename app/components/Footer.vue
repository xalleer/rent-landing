<template>
  <footer class="bg-dark text-white pt-20 pb-10 mt-auto border-t border-gray-800">
    <div class="container mx-auto px-6">
      <div class="grid md:grid-cols-4 gap-12 mb-16">
        <div class="col-span-1 md:col-span-2">
          <div class="flex items-center gap-2 text-2xl font-bold mb-6 text-white">
            <ion-icon name="home"></ion-icon>
            Rentora
          </div>
          <p class="text-gray-400 max-w-sm leading-relaxed mb-6">
            Сучасний сервіс для оренди нерухомості в Україні.
            Ми робимо ринок прозорим та безпечним.
          </p>
          <div class="flex gap-4">
<!--            <a href="#" class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition"><ion-icon name="logo-instagram"></ion-icon></a>-->
            <a href="https://www.facebook.com/share/19gTqVbhqB/?mibextid=wwXIfr" class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition"><ion-icon name="logo-facebook"></ion-icon></a>
<!--            <a href="#" class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition"><ion-icon name="logo-telegram"></ion-icon></a>-->
          </div>
        </div>

        <div>
          <h4 class="text-lg font-bold mb-6 text-white">Меню</h4>
          <ul class="space-y-4 text-gray-400">
            <li><a href="#features" class="hover:text-primary transition">Переваги</a></li>
            <li><a href="#how-it-works" class="hover:text-primary transition">Як це працює</a></li>
            <li><a href="#faq" class="hover:text-primary transition">Питання</a></li>
          </ul>
        </div>

        <div>
          <h4 class="text-lg font-bold mb-6 text-white">Правова інформація</h4>
          <ul class="space-y-4 text-gray-400">
            <li><NuxtLink to="/privacy" class="hover:text-primary transition">Конфіденційність</NuxtLink></li>
            <li><NuxtLink to="/terms" class="hover:text-primary transition">Умови використання</NuxtLink></li>
          </ul>
        </div>
      </div>

      <div class="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p class="text-gray-500 text-sm">© 2025 Rentora. Всі права захищені.</p>
        <p class="text-gray-600 text-sm">Made in Ukraine 🇺🇦</p>
      </div>
    </div>
  </footer>
</template>
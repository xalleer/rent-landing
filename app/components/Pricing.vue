<template>
  <section id="pricing" class="py-20 bg-gray-50">
    <div class="container mx-auto px-6">
      <div class="text-center max-w-3xl mx-auto mb-16">
        <h2 class="section-title">Прозорі тарифи</h2>
        <p class="section-subtitle">Обирайте план, який підходить саме вам. Жодних прихованих комісій — оплата лише за публікацію.</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 max-w-7xl mx-auto items-stretch">

        <div class="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm hover:shadow-xl transition duration-300 relative flex flex-col h-full">
          <div class="text-center mb-6">
            <div class="w-12 h-12 bg-gray-100 text-gray-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <ion-icon name="flash-outline" class="text-2xl"></ion-icon>
            </div>
            <h3 class="text-xl font-bold text-dark">Безкоштовний</h3>
            <div class="mt-4 flex justify-center items-baseline gap-1">
              <span class="text-4xl font-extrabold text-dark">0</span>
              <span class="text-xl text-gray-500 font-medium">₴</span>
            </div>
            <p class="text-sm text-gray-400 mt-2">7 днів публікації</p>
          </div>

          <ul class="space-y-4 text-gray-600 mb-8 text-sm flex-1">
            <li class="flex items-center gap-3">
              <ion-icon name="checkmark-circle" class="text-gray-400 text-lg flex-shrink-0"></ion-icon>
              Низький пріоритет
            </li>
            <li class="flex items-center gap-3">
              <ion-icon name="checkmark-circle" class="text-gray-400 text-lg flex-shrink-0"></ion-icon>
              Без статистики
            </li>
          </ul>

          <a href="#download" class="btn-outline w-full block text-center py-3 rounded-xl border border-gray-300 text-gray-600 hover:border-gray-800 hover:bg-gray-800 hover:text-white transition-colors mt-auto">
            Обрати
          </a>
        </div>

        <div class="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm hover:shadow-xl transition duration-300 relative flex flex-col h-full">
          <div class="text-center mb-6">
            <div class="w-12 h-12 bg-gray-100 text-gray-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <ion-icon name="flash-outline" class="text-2xl"></ion-icon>
            </div>
            <h3 class="text-xl font-bold text-dark">Базовий</h3>
            <div class="mt-4 flex justify-center items-baseline gap-1">
              <span class="text-4xl font-extrabold text-dark">149</span>
              <span class="text-xl text-gray-500 font-medium">₴</span>
            </div>
            <p class="text-sm text-gray-400 mt-2">14 днів публікації</p>
          </div>

          <ul class="space-y-4 text-gray-600 mb-8 text-sm flex-1">
            <li class="flex items-center gap-3">
              <ion-icon name="checkmark-circle" class="text-gray-400 text-lg flex-shrink-0"></ion-icon>
              Звичайний пріоритет
            </li>
            <li class="flex items-center gap-3">
              <ion-icon name="checkmark-circle" class="text-gray-400 text-lg flex-shrink-0"></ion-icon>
              1 підняття в топ
            </li>
            <li class="flex items-center gap-3">
              <ion-icon name="checkmark-circle" class="text-gray-400 text-lg flex-shrink-0"></ion-icon>
              Базова статистика
            </li>
          </ul>

          <a href="#download" class="btn-outline w-full block text-center py-3 rounded-xl border border-gray-300 text-gray-600 hover:border-gray-800 hover:bg-gray-800 hover:text-white transition-colors mt-auto">
            Обрати
          </a>
        </div>

        <div class="bg-white rounded-3xl p-8 border-2 border-primary shadow-xl relative z-10 flex flex-col h-full">
          <div class="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg whitespace-nowrap">
            Найпопулярніше
          </div>

          <div class="text-center mb-6 pt-2"> <div class="w-12 h-12 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
            <ion-icon name="rocket-outline" class="text-2xl"></ion-icon>
          </div>
            <h3 class="text-xl font-bold text-dark">Стандарт</h3>
            <div class="mt-4 flex justify-center items-baseline gap-1">
              <span class="text-4xl font-extrabold text-primary">279</span>
              <span class="text-xl text-gray-500 font-medium">₴</span>
            </div>
            <p class="text-sm text-gray-400 mt-2">45 днів публікації</p>
          </div>

          <ul class="space-y-4 text-gray-600 mb-8 text-sm flex-1">
            <li class="flex items-center gap-3">
              <ion-icon name="checkmark-circle" class="text-primary text-lg flex-shrink-0"></ion-icon>
              <strong>3 підняття в топ</strong>
            </li>
            <li class="flex items-center gap-3">
              <ion-icon name="checkmark-circle" class="text-primary text-lg flex-shrink-0"></ion-icon>
              Високий пріоритет
            </li>
            <li class="flex items-center gap-3">
              <ion-icon name="checkmark-circle" class="text-primary text-lg flex-shrink-0"></ion-icon>
              Преміум статистика
            </li>
            <li class="flex items-center gap-3">
              <ion-icon name="checkmark-circle" class="text-primary text-lg flex-shrink-0"></ion-icon>
              Відмітка "Рекомендоване"
            </li>
          </ul>

          <a href="#download" class="btn-primary bg-primary text-white w-full block text-center py-3 rounded-xl shadow-lg shadow-primary/30 hover:bg-primary/90 transition-colors mt-auto">
            Спробувати
          </a>
        </div>

        <div class="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm hover:shadow-xl transition duration-300 relative flex flex-col h-full">
          <div class="text-center mb-6">
            <div class="w-12 h-12 bg-red-50 text-red-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <ion-icon name="star-outline" class="text-2xl"></ion-icon>
            </div>
            <h3 class="text-xl font-bold text-dark">Преміум</h3>
            <div class="mt-4 flex justify-center items-baseline gap-1">
              <span class="text-4xl font-extrabold text-dark">549</span>
              <span class="text-xl text-gray-500 font-medium">₴</span>
            </div>
            <p class="text-sm text-gray-400 mt-2">60 днів публікації</p>
          </div>

          <ul class="space-y-4 text-gray-600 mb-8 text-sm flex-1">
            <li class="flex items-center gap-3">
              <ion-icon name="checkmark-circle" class="text-red-500 text-lg flex-shrink-0"></ion-icon>
              <strong>Топ-1 пріоритет</strong>
            </li>
            <li class="flex items-center gap-3">
              <ion-icon name="checkmark-circle" class="text-gray-400 text-lg flex-shrink-0"></ion-icon>
              7 піднять в ТОП
            </li>
            <li class="flex items-center gap-3">
              <ion-icon name="checkmark-circle" class="text-gray-400 text-lg flex-shrink-0"></ion-icon>
              Значок "Преміум" + Рамка
            </li>
            <li class="flex items-center gap-3">
              <ion-icon name="checkmark-circle" class="text-gray-400 text-lg flex-shrink-0"></ion-icon>
              Відеоогляд
            </li>
          </ul>

          <a href="#download" class="btn-outline w-full block text-center py-3 rounded-xl border border-gray-300 text-gray-600 hover:border-red-500 hover:bg-red-500 hover:text-white transition-colors mt-auto">
            Максимум
          </a>
        </div>

      </div>

      <div class="mt-12 text-center flex items-center justify-center gap-6 text-gray-400 grayscale opacity-70">
        <div class="flex items-center gap-2"><ion-icon name="card-outline" class="text-xl"></ion-icon> Apple Pay</div>
        <div class="flex items-center gap-2"><ion-icon name="logo-google" class="text-xl"></ion-icon> Google Pay</div>
        <div class="flex items-center gap-2"><ion-icon name="shield-checkmark-outline" class="text-xl"></ion-icon> LiqPay Secure</div>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
</script>
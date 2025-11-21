<template>
  <section id="pricing" class="py-20 bg-gray-50">
    <div class="container mx-auto px-6">
      <div class="text-center max-w-3xl mx-auto mb-16">
        <h2 class="section-title">Прозорі тарифи</h2>
        <p class="section-subtitle">Обирайте план, який підходить саме вам. Жодних прихованих комісій — оплата лише за публікацію.</p>
      </div>

      <div class="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-start">

        <div class="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm hover:shadow-xl transition duration-300 relative">
          <div class="text-center mb-6">
            <div class="w-12 h-12 bg-gray-100 text-gray-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <ion-icon name="flash-outline" class="text-2xl"></ion-icon>
            </div>
            <h3 class="text-xl font-bold text-dark">Базовий</h3>
            <div class="mt-4 flex justify-center items-baseline gap-1">
              <span class="text-4xl font-extrabold text-dark">149</span>
              <span class="text-xl text-gray-500 font-medium">₴</span>
            </div>
            <p class="text-sm text-gray-400 mt-2">7 днів публікації</p>
          </div>

          <ul class="space-y-4 text-gray-600 mb-8 text-sm">
            <li class="flex items-center gap-3">
              <ion-icon name="checkmark-circle" class="text-gray-400 text-lg"></ion-icon>
              До 5 фото
            </li>
            <li class="flex items-center gap-3">
              <ion-icon name="checkmark-circle" class="text-gray-400 text-lg"></ion-icon>
              Стандартне відображення
            </li>
            <li class="flex items-center gap-3">
              <ion-icon name="checkmark-circle" class="text-gray-400 text-lg"></ion-icon>
              Базова статистика
            </li>
          </ul>

          <a href="#download" class="btn-outline w-full block text-center py-3 rounded-xl border-gray-300 text-gray-600 hover:border-gray-800 hover:bg-gray-800 hover:text-white">
            Обрати
          </a>
        </div>

        <div class="bg-white rounded-3xl p-8 border-2 border-primary shadow-xl transform md:-translate-y-4 relative z-10">
          <div class="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
            Найпопулярніше
          </div>

          <div class="text-center mb-6">
            <div class="w-14 h-14 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
              <ion-icon name="rocket-outline" class="text-3xl"></ion-icon>
            </div>
            <h3 class="text-xl font-bold text-dark">Стандарт</h3>
            <div class="mt-4 flex justify-center items-baseline gap-1">
              <span class="text-5xl font-extrabold text-primary">299</span>
              <span class="text-xl text-gray-500 font-medium">₴</span>
            </div>
            <p class="text-sm text-gray-400 mt-2">30 днів публікації</p>
          </div>

          <ul class="space-y-4 text-gray-600 mb-8 text-sm">
            <li class="flex items-center gap-3">
              <ion-icon name="checkmark-circle" class="text-primary text-lg"></ion-icon>
              <strong>Підняття в топ (1 раз)</strong>
            </li>
            <li class="flex items-center gap-3">
              <ion-icon name="checkmark-circle" class="text-primary text-lg"></ion-icon>
              До 15 фото
            </li>
            <li class="flex items-center gap-3">
              <ion-icon name="checkmark-circle" class="text-primary text-lg"></ion-icon>
              Значок "Рекомендуємо"
            </li>
            <li class="flex items-center gap-3">
              <ion-icon name="checkmark-circle" class="text-primary text-lg"></ion-icon>
              Детальна статистика
            </li>
          </ul>

          <a href="#download" class="btn-primary w-full block text-center py-3 shadow-lg shadow-primary/30">
            Спробувати
          </a>
        </div>

        <div class="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm hover:shadow-xl transition duration-300 relative">
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

          <ul class="space-y-4 text-gray-600 mb-8 text-sm">
            <li class="flex items-center gap-3">
              <ion-icon name="checkmark-circle" class="text-red-500 text-lg"></ion-icon>
              <strong>Топ кожні 3 дні</strong>
            </li>
            <li class="flex items-center gap-3">
              <ion-icon name="checkmark-circle" class="text-gray-400 text-lg"></ion-icon>
              Необмежені фото
            </li>
            <li class="flex items-center gap-3">
              <ion-icon name="checkmark-circle" class="text-gray-400 text-lg"></ion-icon>
              Значок "ТОП" + Рамка
            </li>
            <li class="flex items-center gap-3">
              <ion-icon name="checkmark-circle" class="text-gray-400 text-lg"></ion-icon>
              Просування в соцмережах
            </li>
          </ul>

          <a href="#download" class="btn-outline w-full block text-center py-3 rounded-xl border-gray-300 text-gray-600 hover:border-red-500 hover:bg-red-500 hover:text-white">
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
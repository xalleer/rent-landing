<template>
  <section class="py-20 bg-white">
    <div class="container mx-auto px-6">
      <div class="grid md:grid-cols-2 gap-8">

        <div class="bg-light rounded-3xl p-10 relative overflow-hidden group hover:shadow-lg transition duration-300">
          <div class="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-full -mr-8 -mt-8 transition group-hover:scale-110"></div>

          <div class="relative z-10">
            <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-primary text-sm font-bold mb-6 shadow-sm">
              <ion-icon name="search-outline"></ion-icon>
              Для орендарів
            </div>
            <h3 class="text-3xl font-bold mb-4 text-dark">Шукаєте житло?</h3>
            <ul class="space-y-4 text-gray-600 mb-8">
              <li class="flex items-start gap-3">
                <ion-icon name="checkmark-circle" class="text-primary text-xl mt-0.5"></ion-icon>
                <span><strong>Повністю безкоштовно.</strong> Жодних підписок чи прихованих платежів за користування додатком.</span>
              </li>
              <li class="flex items-start gap-3">
                <ion-icon name="checkmark-circle" class="text-primary text-xl mt-0.5"></ion-icon>
                <span><strong>Безпечні власники.</strong> Ви спілкуєтесь лише з тими, хто підтвердив свою особу документами.</span>
              </li>
              <li class="flex items-start gap-3">
                <ion-icon name="checkmark-circle" class="text-primary text-xl mt-0.5"></ion-icon>
                <span><strong>Прямий зв'язок.</strong> Пишіть у чат або телефонуйте власнику без посередників.</span>
              </li>
            </ul>
            <a href="#download" class="text-primary font-bold flex items-center gap-2 hover:gap-4 transition-all">
              Завантажити додаток <ion-icon name="arrow-forward"></ion-icon>
            </a>
          </div>
        </div>

        <div class="bg-dark rounded-3xl p-10 relative overflow-hidden group hover:shadow-lg transition duration-300">
          <div class="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-bl-full -mr-8 -mt-8 transition group-hover:scale-110"></div>

          <div class="relative z-10">
            <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white text-sm font-bold mb-6 border border-white/20">
              <ion-icon name="key-outline"></ion-icon>
              Для власників
            </div>
            <h3 class="text-3xl font-bold mb-4 text-white">Здаєте квартиру?</h3>
            <ul class="space-y-4 text-gray-400 mb-8">
              <li class="flex items-start gap-3">
                <ion-icon name="checkmark-circle" class="text-primary text-xl mt-0.5"></ion-icon>
                <span><strong>Оплата тільки за оголошення.</strong> Сам додаток безкоштовний. Ви платите лише за активну публікацію.</span>
              </li>
              <li class="flex items-start gap-3">
                <ion-icon name="checkmark-circle" class="text-primary text-xl mt-0.5"></ion-icon>
                <span><strong>Швидка верифікація.</strong> Підтвердіть особу один раз, щоб отримати довіру орендарів.</span>
              </li>
              <li class="flex items-start gap-3">
                <ion-icon name="checkmark-circle" class="text-primary text-xl mt-0.5"></ion-icon>
                <span><strong>Зручне керування.</strong> Отримуйте дзвінки та повідомлення від зацікавлених клієнтів.</span>
              </li>
            </ul>
            <a href="#download" class="text-white font-bold flex items-center gap-2 hover:gap-4 transition-all">
              Опублікувати об'єкт <ion-icon name="arrow-forward"></ion-icon>
            </a>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>
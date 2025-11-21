<template>
  <section class="py-20 bg-gradient-to-b from-white to-gray-50">
    <div class="container mx-auto px-6">
      <h2 class="section-title">Що кажуть користувачі</h2>
      <p class="section-subtitle">Тисячі українців вже знайшли свій дім з Rentora</p>

      <div class="grid md:grid-cols-3 gap-8 mt-12">
        <div v-for="(review, index) in reviews" :key="index" class="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition">
          <div class="flex items-center gap-1 text-yellow-400 mb-4">
            <ion-icon name="star" v-for="i in 5" :key="i"></ion-icon>
          </div>
          <p class="text-gray-600 mb-6 italic">"{{ review.text }}"</p>
          <div class="flex items-center gap-4">
            <div class="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
              {{ review.name.charAt(0) }}
            </div>
            <div>
              <div class="font-bold text-dark">{{ review.name }}</div>
              <div class="text-xs text-gray-400">{{ review.role }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const reviews = [
  {
    name: 'Олена М.',
    role: 'Орендар, Київ',
    text: 'Найкращий додаток для пошуку! Знайшла квартиру на Позняках за 2 дні. Дуже зручно, що можна дивитись карту і писати власнику напряму.'
  },
  {
    name: 'Дмитро К.',
    role: 'Власник, Львів',
    text: 'Здаю через Rentora вже другу квартиру. Подобається, що відразу бачу профіль орендаря. Ніяких зайвих дзвінків від ріелторів, тільки по суті.'
  },
  {
    name: 'Марія В.',
    role: 'Орендар, Одеса',
    text: 'Сподобалась функція верифікації. Точно знаєш, що квартира реальна. Підписали договір прямо в додатку, це дуже зекономило час.'
  }
]
</script>
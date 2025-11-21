<template>
  <section id="faq" class="py-20 bg-white">
    <div class="container mx-auto px-6 max-w-4xl">
      <h2 class="section-title">Часті запитання</h2>
      <p class="section-subtitle">Маєте питання? У нас є відповіді.</p>

      <div class="space-y-4 mt-12">
        <div v-for="(faq, index) in faqs" :key="index"
             class="border border-gray-200 rounded-2xl p-6 cursor-pointer hover:border-primary transition bg-white"
             @click="faq.open = !faq.open">
          <div class="flex justify-between items-center">
            <h3 class="text-lg font-bold text-dark">{{ faq.question }}</h3>
            <ion-icon :name="faq.open ? 'chevron-up' : 'chevron-down'" class="text-gray-400"></ion-icon>
          </div>
          <div v-show="faq.open" class="mt-4 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
            {{ faq.answer }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const faqs = ref([
  {
    question: 'Чи платний додаток?',
    answer: 'Для орендарів користування додатком повністю безкоштовне. Власники платять виключно за розміщення оголошень (від 149 грн).',
    open: true
  },
  {
    question: 'Хто проходить верифікацію?',
    answer: 'Верифікацію проходять тільки орендодавці. Це необхідно для того, щоб орендарі були впевнені, що житло здає реальна людина, а не шахрай.',
    open: false
  },
  {
    question: 'Чи є комісія ріелтора?',
    answer: 'Ні! Rentora — це платформа для прямого зв\'язку. Ви не платите жодних комісій посередникам.',
    open: false
  },
  {
    question: 'Як можна оплатити оголошення?',
    answer: 'Ми приймаємо оплату картками Visa/Mastercard, а також через Google Pay та Apple Pay. Всі платежі захищені.',
    open: false
  }
])
</script>
<template>
  <div class="max-w-7xl mx-auto">
    <!-- Stats -->
    <div class="grid md:grid-cols-4 gap-6 mb-6">
      <div class="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
        <div class="flex items-center justify-between">
          <div>
            <div class="text-3xl font-bold text-dark">23</div>
            <div class="text-sm text-gray-500 mt-1">Всього скарг</div>
          </div>
          <div class="w-12 h-12 bg-red-50 text-red-600 rounded-xl flex items-center justify-center">
            <ion-icon name="flag-outline" class="text-2xl"></ion-icon>
          </div>
        </div>
      </div>

      <div class="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
        <div class="flex items-center justify-between">
          <div>
            <div class="text-3xl font-bold text-dark">3</div>
            <div class="text-sm text-gray-500 mt-1">Нові скарги</div>
          </div>
          <div class="w-12 h-12 bg-orange-50 text-orange-600 rounded-xl flex items-center justify-center">
            <ion-icon name="alert-circle-outline" class="text-2xl"></ion-icon>
          </div>
        </div>
      </div>

      <div class="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
        <div class="flex items-center justify-between">
          <div>
            <div class="text-3xl font-bold text-dark">15</div>
            <div class="text-sm text-gray-500 mt-1">В обробці</div>
          </div>
          <div class="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center">
            <ion-icon name="hourglass-outline" class="text-2xl"></ion-icon>
          </div>
        </div>
      </div>

      <div class="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
        <div class="flex items-center justify-between">
          <div>
            <div class="text-3xl font-bold text-dark">5</div>
            <div class="text-sm text-gray-500 mt-1">Вирішено</div>
          </div>
          <div class="w-12 h-12 bg-green-50 text-green-600 rounded-xl flex items-center justify-center">
            <ion-icon name="checkmark-circle-outline" class="text-2xl"></ion-icon>
          </div>
        </div>
      </div>
    </div>

    <!-- Filters -->
    <div class="bg-white rounded-2xl shadow-sm p-6 mb-6 border border-gray-100">
      <div class="flex flex-col md:flex-row gap-4">
        <div class="flex-grow">
          <div class="relative">
            <ion-icon name="search-outline" class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xl"></ion-icon>
            <input
                type="text"
                placeholder="Пошук скарг..."
                class="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
            />
          </div>
        </div>
        <select class="px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 text-gray-600">
          <option>Всі типи</option>
          <option>Шахрайство</option>
          <option>Неправдива інформація</option>
          <option>Образливий контент</option>
          <option>Інше</option>
        </select>
        <select class="px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 text-gray-600">
          <option>Всі статуси</option>
          <option>Нові</option>
          <option>В обробці</option>
          <option>Вирішено</option>
          <option>Відхилено</option>
        </select>
      </div>
    </div>

    <!-- Reports List -->
    <div class="space-y-4">
      <div v-for="report in reports" :key="report.id" class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div class="p-6">
          <div class="flex items-start justify-between mb-4">
            <div class="flex items-start gap-4 flex-grow">
              <div :class="getStatusColorClass(report.status)" class="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                <ion-icon name="flag" class="text-2xl"></ion-icon>
              </div>
              <div class="flex-grow">
                <div class="flex items-center gap-3 mb-2">
                  <h3 class="font-bold text-dark">{{ report.type }}</h3>
                  <span :class="getStatusBadgeClass(report.status)" class="px-3 py-1 rounded-full text-xs font-semibold">
                    {{ report.status }}
                  </span>
                </div>
                <p class="text-gray-600 text-sm mb-3">{{ report.description }}</p>
                <div class="flex items-center gap-6 text-sm text-gray-500">
                  <div class="flex items-center gap-2">
                    <ion-icon name="person-outline" class="text-base"></ion-icon>
                    <span>Від: {{ report.reporter }}</span>
                  </div>
                  <div class="flex items-center gap-2">
                    <ion-icon name="document-text-outline" class="text-base"></ion-icon>
                    <span>Оголошення: #{{ report.adId }}</span>
                  </div>
                  <div class="flex items-center gap-2">
                    <ion-icon name="time-outline" class="text-base"></ion-icon>
                    <span>{{ report.time }}</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex gap-2 ml-4">
              <button class="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition" title="Переглянути">
                <ion-icon name="eye-outline" class="text-xl"></ion-icon>
              </button>
              <button class="p-2 text-green-600 hover:bg-green-50 rounded-lg transition" title="Вирішити">
                <ion-icon name="checkmark-circle-outline" class="text-xl"></ion-icon>
              </button>
              <button class="p-2 text-red-600 hover:bg-red-50 rounded-lg transition" title="Відхилити">
                <ion-icon name="close-circle-outline" class="text-xl"></ion-icon>
              </button>
            </div>
          </div>

          <!-- Reported Content Preview -->
          <div class="bg-gray-50 rounded-xl p-4 border border-gray-200">
            <div class="flex items-center gap-3">
              <div class="w-16 h-16 bg-gray-200 rounded-lg flex-shrink-0"></div>
              <div>
                <div class="font-semibold text-dark text-sm">{{ report.adTitle }}</div>
                <div class="text-xs text-gray-500">{{ report.adLocation }}</div>
                <div class="text-sm font-bold text-dark mt-1">{{ report.adPrice }} ₴/міс</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Pagination -->
    <div class="mt-6 flex items-center justify-between">
      <div class="text-sm text-gray-600">
        Показано <span class="font-semibold">1-5</span> з <span class="font-semibold">23</span>
      </div>
      <div class="flex gap-2">
        <button class="px-4 py-2 border border-gray-200 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 transition">
          Попередня
        </button>
        <button class="px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium">1</button>
        <button class="px-4 py-2 border border-gray-200 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 transition">2</button>
        <button class="px-4 py-2 border border-gray-200 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 transition">
          Наступна
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

definePageMeta({
  layout: 'admin'
});

const reports = ref([
  {
    id: 1,
    type: 'Шахрайство',
    status: 'Нова',
    description: 'Підозра на шахрайство. Користувач вимагає передоплату на картку перед переглядом.',
    reporter: 'Марія В.',
    adId: 45892,
    adTitle: '2-кімнатна квартира',
    adLocation: 'Київ, Печерськ',
    adPrice: 12000,
    time: '30 хв тому'
  },
  {
    id: 2,
    type: 'Неправдива інформація',
    status: 'В обробці',
    description: 'Фотографії не відповідають реальному стану квартири. Орендар скаржиться на дезінформацію.',
    reporter: 'Олександр К.',
    adId: 45876,
    adTitle: '1-кімнатна квартира',
    adLocation: 'Київ, Позняки',
    adPrice: 8500,
    time: '2 год тому'
  },
  {
    id: 3,
    type: 'Дублікат',
    status: 'В обробці',
    description: 'Це оголошення дублює інше оголошення #45834. Потрібна перевірка.',
    reporter: 'Система',
    adId: 45889,
    adTitle: 'Студія',
    adLocation: 'Одеса, Центр',
    adPrice: 7000,
    time: '5 год тому'
  }
]);

const getStatusColorClass = (status: string) => {
  const classes = {
    'Нова': 'bg-red-50 text-red-600',
    'В обробці': 'bg-blue-50 text-blue-600',
    'Вирішено': 'bg-green-50 text-green-600',
    'Відхилено': 'bg-gray-100 text-gray-600'
  };
  return classes[status] || 'bg-gray-100 text-gray-600';
};

const getStatusBadgeClass = (status: string) => {
  const classes = {
    'Нова': 'bg-red-100 text-red-700',
    'В обробці': 'bg-blue-100 text-blue-700',
    'Вирішено': 'bg-green-100 text-green-700',
    'Відхилено': 'bg-gray-100 text-gray-700'
  };
  return classes[status] || 'bg-gray-100 text-gray-700';
};
</script>
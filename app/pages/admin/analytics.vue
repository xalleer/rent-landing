<template>
  <div class="max-w-7xl mx-auto">

    <div class="mb-8 flex items-center justify-between">
      <div>
        <h1 class="text-2xl font-bold text-dark">Аналітика</h1>
        <p class="text-gray-500 text-sm">Огляд ключових показників</p>
      </div>
      <button @click="refresh" class="p-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition text-gray-600">
        <ion-icon name="refresh-outline" class="text-xl"></ion-icon>
      </button>
    </div>

    <div v-if="pending" class="py-20 text-center text-gray-500">
      <div>Завантаження даних...</div>
    </div>

    <div v-else class="space-y-6">

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

        <div class="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <div class="flex justify-between items-start">
            <div>
              <p class="text-sm font-medium text-gray-500 mb-1">Загальний дохід</p>
              <h3 class="text-2xl font-bold text-dark">{{ formatCurrency(stats.cards.income.value) }}</h3>
            </div>
            <div class="p-3 bg-green-50 text-green-600 rounded-xl flex items-center justify-center">
              <ion-icon name="wallet-outline" class="text-xl"></ion-icon>
            </div>
          </div>
          <div class="mt-4 flex items-center text-sm">
            <span :class="getTrendColor(stats.cards.income.growth)" class="flex items-center font-semibold">
              <ion-icon :name="getTrendIcon(stats.cards.income.growth)" class="mr-1"></ion-icon>
              {{ Math.abs(stats.cards.income.growth) }}%
            </span>
            <span class="text-gray-400 ml-2">ніж минулого місяця</span>
          </div>
        </div>

        <div class="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <div class="flex justify-between items-start">
            <div>
              <p class="text-sm font-medium text-gray-500 mb-1">Користувачів</p>
              <h3 class="text-2xl font-bold text-dark">{{ stats.cards.users.value }}</h3>
            </div>
            <div class="p-3 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center">
              <ion-icon name="people-outline" class="text-xl"></ion-icon>
            </div>
          </div>
          <div class="mt-4 flex items-center text-sm">
            <span :class="getTrendColor(stats.cards.users.growth)" class="flex items-center font-semibold">
              <ion-icon :name="getTrendIcon(stats.cards.users.growth)" class="mr-1"></ion-icon>
              {{ Math.abs(stats.cards.users.growth) }}%
            </span>
            <span class="text-gray-400 ml-2">нових цього місяця</span>
          </div>
        </div>

        <div class="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <div class="flex justify-between items-start">
            <div>
              <p class="text-sm font-medium text-gray-500 mb-1">Активних оголошень</p>
              <h3 class="text-2xl font-bold text-dark">{{ stats.cards.listings.value }}</h3>
            </div>
            <div class="p-3 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center">
              <ion-icon name="home-outline" class="text-xl"></ion-icon>
            </div>
          </div>
          <div class="mt-4 flex items-center text-sm">
            <span :class="getTrendColor(stats.cards.listings.growth)" class="flex items-center font-semibold">
              <ion-icon :name="getTrendIcon(stats.cards.listings.growth)" class="mr-1"></ion-icon>
              {{ Math.abs(stats.cards.listings.growth) }}%
            </span>
            <span class="text-gray-400 ml-2">нових цього місяця</span>
          </div>
        </div>

        <div class="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <div class="flex justify-between items-start">
            <div>
              <p class="text-sm font-medium text-gray-500 mb-1">Переглядів</p>
              <h3 class="text-2xl font-bold text-dark">{{ stats.cards.views.value }}</h3>
            </div>
            <div class="p-3 bg-orange-50 text-orange-600 rounded-xl flex items-center justify-center">
              <ion-icon name="eye-outline" class="text-xl"></ion-icon>
            </div>
          </div>
          <div class="mt-4 flex items-center text-sm">
            <span :class="getTrendColor(stats.cards.views.growth)" class="flex items-center font-semibold">
              <ion-icon :name="getTrendIcon(stats.cards.views.growth)" class="mr-1"></ion-icon>
              {{ Math.abs(stats.cards.views.growth) }}%
            </span>
            <span class="text-gray-400 ml-2">ніж минулого місяця</span>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">

        <div class="lg:col-span-2 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <div class="mb-6">
            <h3 class="text-lg font-bold text-dark">Динаміка Доходу</h3>
          </div>
          <div class="h-80 relative w-full">
            <ClientOnly fallback-tag="div" fallback="Завантаження графіка...">
              <Line v-if="incomeChartConfig.labels.length > 0" :data="incomeChartConfig" :options="mainChartOptions" />
            </ClientOnly>
          </div>
        </div>

        <div class="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <h3 class="text-lg font-bold text-dark mb-6">Топ Міст</h3>
          <div class="h-64 flex items-center justify-center relative">
            <ClientOnly fallback-tag="div" fallback="Завантаження...">
              <Doughnut v-if="cityChartConfig.labels.length > 0" :data="cityChartConfig" :options="doughnutOptions" />
            </ClientOnly>

            <div class="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
              <span class="text-3xl font-bold text-dark">{{ stats.topCities.length }}</span>
              <span class="text-xs text-gray-400">міст</span>
            </div>
          </div>
          <div class="mt-6 space-y-3">
            <div v-for="(city, index) in stats.topCities" :key="city.city" class="flex items-center justify-between text-sm">
              <div class="flex items-center">
                <span class="w-3 h-3 rounded-full mr-2" :style="{ backgroundColor: cityColors[index % cityColors.length] }"></span>
                <span class="text-gray-600">{{ city.city }}</span>
              </div>
              <span class="font-semibold text-gray-800">{{ city.count }}</span>
            </div>
          </div>
        </div>
      </div>

      <div class="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
        <h3 class="text-lg font-bold text-dark mb-6">Нові користувачі</h3>
        <div class="h-64 w-full">
          <ClientOnly fallback-tag="div" fallback="Завантаження...">
            <Bar v-if="userChartConfig.labels.length > 0" :data="userChartConfig" :options="barChartOptions" />
          </ClientOnly>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
// Важливо: імпортуємо Chart.js коректно
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  Filler
} from 'chart.js';
import { Line, Bar, Doughnut } from 'vue-chartjs';

// Реєструємо компоненти Chart.js
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, ArcElement, Title, Tooltip, Legend, Filler);

definePageMeta({ layout: 'admin' });

// --- Interfaces ---
// Описуємо типи даних, щоб TS не сварився
interface StatCard {
  value: number | string;
  growth: number;
  label?: string;
}

interface ChartData {
  labels: string[];
  income: number[];
  users: number[];
}

interface CityStat {
  city: string;
  count: number;
}

interface AnalyticsResponse {
  cards: {
    users: StatCard;
    listings: StatCard;
    income: StatCard;
    views: StatCard;
  };
  charts: ChartData;
  topCities: CityStat[];
}

// --- Data Fetching ---
const { data, pending, refresh } = await useAdminFetch<AnalyticsResponse>('/admin/analytics');

// --- Default Data ---
// Це врятує від помилок "undefined", якщо API ще не відповіло або повернуло null
const defaultStats: AnalyticsResponse = {
  cards: {
    users: { value: 0, growth: 0 },
    listings: { value: 0, growth: 0 },
    income: { value: 0, growth: 0 },
    views: { value: '0', growth: 0 }
  },
  charts: { labels: [], income: [], users: [] },
  topCities: []
};

// Використовуємо computed для безпечного доступу
const stats = computed(() => data.value || defaultStats);

// Colors
const cityColors = ['#1A8C76', '#10B981', '#3B82F6', '#F59E0B', '#EF4444'];

// --- Chart Configs ---

// 1. Income Line Chart
const incomeChartConfig = computed(() => ({
  labels: stats.value.charts.labels || [],
  datasets: [{
    label: 'Дохід (₴)',
    data: stats.value.charts.income || [],
    borderColor: '#1A8C76',
    backgroundColor: (context: any) => {
      const ctx = context.chart.ctx;
      if (!ctx) return 'rgba(26, 140, 118, 0.2)'; // Fallback
      const gradient = ctx.createLinearGradient(0, 0, 0, 300);
      gradient.addColorStop(0, 'rgba(26, 140, 118, 0.2)');
      gradient.addColorStop(1, 'rgba(26, 140, 118, 0)');
      return gradient;
    },
    fill: true,
    tension: 0.4,
    pointBackgroundColor: '#ffffff',
    pointBorderColor: '#1A8C76',
    pointBorderWidth: 2,
    pointRadius: 4,
    pointHoverRadius: 6
  }]
}));

// 2. City Doughnut Chart
const cityChartConfig = computed(() => ({
  labels: (stats.value.topCities || []).map(c => c.city),
  datasets: [{
    data: (stats.value.topCities || []).map(c => c.count),
    backgroundColor: cityColors,
    borderWidth: 0,
    hoverOffset: 4
  }]
}));

// 3. User Bar Chart
const userChartConfig = computed(() => ({
  labels: stats.value.charts.labels || [],
  datasets: [{
    label: 'Користувачі',
    data: stats.value.charts.users || [],
    backgroundColor: '#3B82F6',
    borderRadius: 4,
    barThickness: 20
  }]
}));

// --- Chart Options ---
const mainChartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { display: false },
    tooltip: {
      mode: 'index' as const,
      intersect: false,
      backgroundColor: '#1e293b',
      padding: 12,
      cornerRadius: 8,
      displayColors: false
    }
  },
  scales: {
    y: {
      beginAtZero: true,
      grid: { color: '#f1f5f9' },
      ticks: { color: '#94a3b8', font: { size: 11 } },
      border: { display: false }
    },
    x: {
      grid: { display: false },
      ticks: { color: '#94a3b8', font: { size: 11 } },
      border: { display: false }
    }
  }
};

const doughnutOptions = {
  responsive: true,
  maintainAspectRatio: false,
  cutout: '75%',
  plugins: { legend: { display: false } }
};

const barChartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: { legend: { display: false } },
  scales: {
    y: { display: false, beginAtZero: true },
    x: { grid: { display: false }, ticks: { display: false }, border: { display: false } }
  }
};

// --- Helpers ---
const formatCurrency = (val: number | string) => {
  const num = Number(val);
  if (isNaN(num)) return val;
  return new Intl.NumberFormat('uk-UA', { style: 'currency', currency: 'UAH', maximumFractionDigits: 0 }).format(num);
};

const getTrendColor = (growth: number) => growth >= 0 ? 'text-green-600' : 'text-red-600';
const getTrendIcon = (growth: number) => growth >= 0 ? 'arrow-up-outline' : 'arrow-down-outline';
</script>
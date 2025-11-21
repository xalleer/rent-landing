<template>
  <div class="min-h-screen flex flex-col">
    <Header />

    <main class="flex-grow pt-32 pb-20">
      <div class="container mx-auto px-6 max-w-4xl">
        <div class="flex justify-between items-center mb-6">
          <h1 class="text-4xl font-bold text-primary">Панель Адміністратора</h1>
          <button
              @click="logout"
              class="py-2 px-4 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition duration-200"
          >
            Вийти
          </button>
        </div>
        <p class="text-gray-600 mb-8">Ця сторінка є прихованою від публічної навігації. Доступна лише за прямим посиланням:</p>

        <div class="bg-light p-6 rounded-xl border border-gray-200">
          <p class="font-mono text-lg text-dark">/admin</p>
        </div>

        <div class="mt-10 bg-green-50 border border-green-200 p-4 rounded-lg text-sm text-green-700">
          <strong>Ласкаво просимо, Адміністраторе!</strong> Ви успішно увійшли до системи.
        </div>

        <h3 class="text-2xl font-bold mt-12 mb-4 text-dark">Базовий функціонал (Демо)</h3>
        <ul class="list-disc pl-6 space-y-2 text-gray-700">
          <li>Перегляд статистики оголошень</li>
          <li>Керування верифікованими користувачами</li>
          <li>Модерація контенту</li>
        </ul>
      </div>
    </main>

    <Footer />
  </div>
</template>

<script setup lang="ts">
const router = useRouter();

const adminIsLoggedIn = useState<boolean>('adminIsLoggedIn', () => {
  return process.client ? localStorage.getItem('adminLoggedIn') === 'true' : false;
});

definePageMeta({
  middleware: ['auth-admin']
})

const logout = () => {
  adminIsLoggedIn.value = false;

  if (process.client) {
    localStorage.removeItem('adminLoggedIn');
  }

  router.push('/admin/login');
}
</script>
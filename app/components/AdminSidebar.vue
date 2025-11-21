<template>
  <aside class="w-64 bg-dark fixed h-full z-40 p-4 flex flex-col overflow-y-auto">
    <div class="text-white text-2xl font-bold mb-8 p-2">
      <span class="text-primary">Rent</span>ora
    </div>

    <nav class="flex-grow">
      <ul class="space-y-2">
        <li>
          <NuxtLink
              to="/admin/dashboard"
              class="flex items-center p-3 text-white rounded-lg hover:bg-white/10 transition duration-200"
          >
            <ion-icon name="grid-outline" class="w-5 h-5 mr-3"></ion-icon>
            Дашборд
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
              to="/admin/ads"
              class="flex items-center p-3 text-white rounded-lg hover:bg-white/10 transition duration-200"
          >
            <ion-icon name="document-text-outline" class="w-5 h-5 mr-3"></ion-icon>
            Оголошення <span class="ml-auto text-sm bg-primary/20 text-primary py-0.5 px-2 rounded-full">245</span>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
              to="/admin/users"
              class="flex items-center p-3 text-white rounded-lg hover:bg-white/10 transition duration-200"
          >
            <ion-icon name="people-outline" class="w-5 h-5 mr-3"></ion-icon>
            Користувачі <span class="ml-auto text-sm bg-primary/20 text-primary py-0.5 px-2 rounded-full">1,234</span>
          </NuxtLink>
        </li>
      </ul>
    </nav>

    <div class="mt-8">
      <NuxtLink
          to="/admin/settings"
          class="flex items-center p-3 text-white rounded-lg hover:bg-white/10 transition duration-200"
      >
        <ion-icon name="settings-outline" class="w-5 h-5 mr-3"></ion-icon>
        Налаштування
      </NuxtLink>
    </div>
  </aside>
</template>
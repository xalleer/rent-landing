<template>
  <section id="download" class="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-b from-[#F0FDF9] to-white overflow-hidden relative">
    <div class="absolute top-20 left-[-10%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl"></div>
    <div class="absolute bottom-0 right-[-5%] w-[400px] h-[400px] bg-secondary/5 rounded-full blur-3xl"></div>

    <div class="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center relative z-10">
      <div class="text-center md:text-left">
        <div class="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-white border border-primary/20 text-primary text-xs font-bold mb-8 shadow-sm">
          <span class="relative flex h-2 w-2">
            <span class="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          Новий додаток для оренди
        </div>

        <h1 class="text-4xl md:text-6xl font-extrabold leading-tight mb-6 text-dark tracking-tight">
          Оренда житла <br/>
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-teal-400">без зайвих турбот</span>
        </h1>

        <p class="text-lg text-gray-500 mb-10 leading-relaxed max-w-lg mx-auto md:mx-0">
          Сучасний сервіс для прямого зв'язку між власниками та орендарями. Перевірені користувачі, зручний пошук та жодних посередників.
        </p>

        <div class="flex flex-col sm:flex-row gap-4 justify-center md:justify-start" id="download">
          <a href="#" class="store-button transform hover:scale-105 transition">
            <ion-icon name="logo-apple" class="text-3xl"></ion-icon>
            <div class="text-left">
              <div class="text-[10px] uppercase opacity-70">Coming soon</div>
              <div class="text-lg font-bold leading-none">App Store</div>
            </div>
          </a>
          <a href="#" class="store-button transform hover:scale-105 transition">
            <ion-icon name="logo-google-playstore" class="text-3xl"></ion-icon>
            <div class="text-left">
              <div class="text-[10px] uppercase opacity-70">Coming soon</div>
              <div class="text-lg font-bold leading-none">Google Play</div>
            </div>
          </a>
        </div>

        <div class="mt-10 flex items-center justify-center md:justify-start gap-4 text-sm text-gray-500 font-medium">
          <div class="flex items-center gap-1">
            <ion-icon name="shield-checkmark" class="text-primary text-lg"></ion-icon>
            Тільки верифіковані власники
          </div>
          <div class="flex items-center gap-1">
            <ion-icon name="wallet" class="text-primary text-lg"></ion-icon>
            Прямі угоди
          </div>
        </div>
      </div>

      <div class="relative flex justify-center perspective-1000">
        <div class="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent blur-3xl rounded-full transform translate-y-10 w-3/4 mx-auto"></div>
        <div class="relative bg-gray-900 rounded-[3rem] border-[8px] border-gray-900 h-[650px] w-[320px] shadow-2xl shadow-primary/20 overflow-hidden z-10 transform rotate-y-12 rotate-z-2 hover:rotate-0 transition duration-700 ease-out">
          <div class="absolute top-0 left-1/2 transform -translate-x-1/2 status-bar bg-gray-900 rounded-b-2xl z-20"></div>
          <div class="w-full h-full bg-white flex items-center justify-center bg-gray-100">
            <img src="/mobile.png" alt="Rentora App" class="w-full h-full object-cover image" onerror="this.style.display='none'"/>
<!--            <div class="text-gray-400 text-center px-4 text-sm" onclick="alert('Add image to public/app-screenshot.png')">-->
<!--              <ion-icon name="image" class="text-4xl mb-2"></ion-icon><br>-->
<!--              Скріншот додатку-->
<!--            </div>-->
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.perspective-1000 { perspective: 1000px; }
.status-bar{
  width: 38%;
  height: 22px;
}
.image{
  margin-top: 10px;
}
</style>
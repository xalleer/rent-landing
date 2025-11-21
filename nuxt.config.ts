// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts'
  ],
  googleFonts: {
    families: {
      Montserrat: [400, 500, 600, 700, 800]
    }
  },
  app: {
    head: {
      title: 'Rentora - Оренда житла без стресу',
      meta: [
        { name: 'description', content: 'Знайдіть ідеальну квартиру або здайте житло безпечно з Rentora. Верифіковані користувачі, чат та зручні фільтри.' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'theme-color', content: '#1A8C76' }
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' }
      ],
      script: [
        { type: 'module', src: 'https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js' },
        { nomodule: true, src: 'https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js' }
      ]
    }
  }
})

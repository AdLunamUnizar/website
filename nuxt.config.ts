// https://nuxt.com/docs/api/configuration/nuxt-config
export default({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  app: {
    baseURL: '/website/',
  },
  head: {
    title: 'AlUnizar',
    script: [
    ]
  },
  modules: [
    '@nuxt/content',
    'nuxt-particles'
  ],
})

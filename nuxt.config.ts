// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap',
        },
      ],
    },
  },
  nitro: {
    plugins: ['~/server/db/index.ts'],
  },
  runtimeConfig: {
    databaseUrl: process.env.DATABASE_URL,
  },
});

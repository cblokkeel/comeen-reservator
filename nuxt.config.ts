// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  nitro: {
    plugins: ['~/server/db/index.ts'],
  },
  runtimeConfig: {
    databaseUrl: process.env.DATABASE_URL,
  },
});

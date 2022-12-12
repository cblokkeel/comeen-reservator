// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  nitro: {
    plugins: ['~/server/db/index.ts'],
  },
  runtimeConfig: {
    databaseUrl: process.env.DATABASE_URL,
  },
});

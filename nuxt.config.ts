import { defineNuxtConfig } from 'nuxt'
import messages from './i18n/index.js'
// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    buildModules: ['@pinia/nuxt'],
    modules: [
        '@nuxtjs/i18n',
      ],
      i18n: {
        /* module options */
        strategy: 'no_prefix',
        
        locales: ['en', 'es'],
        defaultLocale: 'es',
        vueI18n: {
            fallbackLocale: 'en',
            messages: messages,
        }

    },
})

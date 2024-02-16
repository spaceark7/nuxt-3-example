import path from 'path'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css', '~/themes/custom/theme.css'],
  modules: ['nuxt-primevue', '@nuxtjs/strapi'],
  strapi: {
    url: process.env.NUXT_STRAPI_URL || 'http://localhost:1337',
    prefix: '/api',
    admin: '/admin',
    version: 'v4',
    cookie: {},
    cookieName: 'strapi_jwt'
  },
  primevue: {
    // unstyled: true,
    // importPT: { from: path.resolve(__dirname, './themes/lara-dark-blue/') }
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },
  components: [
    {
      path: '~/components',
      pathPrefix: false
    }
  ],
  imports: {
    dirs: ['composables/**']
  },
  runtimeConfig: {
    strapi: {
      url: process.env.NUXT_STRAPI_URL // server side strapi
    },
    public: {
      apiUrl: process.env.NUXT_API_URL,
      baseUrl: process.env.NUXT_BASE_URL,

      strapi: {
        url: process.env.NUXT_STRAPI_URL // client side strapi
      }
    }
  }
})

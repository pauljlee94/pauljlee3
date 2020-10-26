export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'pauljlee3',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ]
  },

  css: [
  ],

  plugins: [
    '@/plugins/v-scroll'
  ],

  components: true,

  buildModules: [
    '@nuxtjs/tailwindcss',
  ],

  modules: [
    "@nuxtjs/prismic",
    ['vue-scrollto/nuxt', {duration: 1000}],
    'nuxt-webfontloader',
  ],

  prismic: {
    endpoint: 'https://paulspersonalwebsite.cdn.prismic.io/api/v2',
    linkResolver: '@/plugins/link-resolver',
    htmlSerializer: '@/plugins/html-serializer',
  },

  build: {
  },
  webfontloader: {
    google: {
      families: ['Montserrat:900', 'Work Sans:400,500,700', 'Merriweather:400']
    }
  },
}

import getSiteMeta from './utils/getSiteMeta'

const meta = getSiteMeta()

export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'static',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: 'Climate Cascades',
    meta: [
      ...meta,
      { charset: 'utf-8' },
      { name: 'HandheldFriendly', content: 'True' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { property: 'og:ClimateCascades', content: 'Climate Cascades' },
      {
        hid: 'description',
        name: 'description',
        content: 'Climate change, geopolitics, and technology.'
      },
      { property: 'og:image:width', content: '740' },
      { property: 'og:image:height', content: '300' },

      { name: 'twitter:site', content: '@climatecascades' },
      { name: 'twitter:card', content: 'summary_large_image' }
    ],
    link: [
      {
        hid: 'canonical',
        rel: 'canonical',
        href: 'https://climatecascades.com'
      },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
      {
        rel: 'dns-prefetch',
        href: '//fonts.googleapis.com'
      },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com/'
      },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Crimson+Text:wght@400;700&family=Spectral&Cormorant+Garamond:wght@600&display=swap'
      }
    ]
  },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
    // Doc: https://nuxtjs.org/blog/going-dark-with-nuxtjs-color-mode/
    '@nuxtjs/color-mode'
  ],
  purgeCSS: {
    whitelist: ['dark-mode', 'bg-mayas-green-dark']
  },
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://github.com/nuxt/content
    '@nuxt/content'
  ],
  /*
   ** Content module configuration
   ** See https://content.nuxtjs.org/configuration
   */
  content: {
    markdown: {
      prism: {
        theme: 'prism-themes/themes/prism-material-oceanic.css'
      }
    },
    nestedProperties: ['author.name']
  },
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {}
}

const pkg = require('./package')
const axios = require('axios');

module.exports = {
  loading: false,
  cache: true,
  maxAge: 2628000,
  /*
  ** Headers of the page
  */
  server: {
    port: 3030, // default: 3000
    host: 'localhost', // default: localhost,
  },
  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ],
    link: [
      { rel: 'shortcut icon', type: 'image/x-icon', href: '/favicon.ico' }//
    ]
  },
  env: {
    API_URL: 'https://api.paytoplay.xyz',
    SiteURL: 'https://paytoplay.xyz'
  //  baseURL: 'http://localhost:1337'
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '~/layouts/default.css'
  ],
  /*
  ** Plugins to load before mounting the App

    '@/plugins/vuesax',
  */
  plugins: [
    '@/plugins/Bootstrap',//    '@/plugins/api',
    '@/plugins/videoplayer'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/sitemap'
  ],
  /*
  ** Axios module configuration baseURL: 'http://localhost:1337'
  */
  axios: {
    proxyHeaders: false,
    baseURL: '/'
  },
  /*
  ** SITEMAP
  */
  // sitemap () {
  //   Sitemap.sitemap;
  //   console.log("sitemap OKK");
  // },
  sitemap: {
    path: '/sitemap.xml',
    hostname: 'https://paytoplay.xyz',//'http://paytoplay.xyz',
    cacheTime: 1000 * 60 * 15,
    gzip: true,
    generate: true, // Enable me when using nuxt generate
    exclude: [],
    routes () {
      return axios.get(`https://api.paytoplay.xyz/products?_limit=0`)
      .then((res) => {
       let routes = res.data.map((array) => {
         return {
             url: `/product/${array.url}`,
             changefreq: 'monthly',
             priority: 1
          }
       });
       return routes
     })
      // return Axios.get(`http://162.247.13.93:1337/products`)
      // .then(res => res.data.map((_id) => `/product/${_id.url}`))
    }
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      port: 3030
    }
  }
}

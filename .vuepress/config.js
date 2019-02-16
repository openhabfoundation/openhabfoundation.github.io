const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  title: 'openHAB Foundation',
  description: 'The openHAB Foundation e.V. is a nonprofit organisation with the mission to educate the public about the possibilities and benefits of free and open smart home solutions.',
  dest: 'vuepress',
  host: 'localhost',
  //ga: 'UA-47717934-1',
  head: [
    ['link', { rel: 'stylesheet', href: `/fonts/fonts.css` }],
    ['link', { rel: 'icon', href: `/favicon.ico` }],
    ['link', { rel: 'shortcut icon', href: `/favicon.ico` }],
    ['link', { rel: 'apple-touch-icon', href: `/apple-icon.png` }],
    // ['link', { rel: 'stylesheet', href: `https://fonts.googleapis.com/css?family=Open+Sans:300,400` }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:image', content: 'https://www.openhab.org/og-image.png' }],
    ['meta', { property: 'og:title', content: 'openHAB Foundation e.V.' }],
    ['meta', { property: 'og:description', content: 'The openHAB Foundation e.V. is a nonprofit organisation with the mission to educate the public about the possibilities and benefits of free and open smart home solutions.' }],
    // ['script', { src: `https://identity.netlify.com/v1/netlify-identity-widget.js` }]
  ],
  configureWebpack: (config, isServer) => {
    config.plugins.push(new CopyWebpackPlugin([
      { from: '.vuepress/_redirects', to: '.'},
      // { from: '.vuepress/_headers', to: '.'},
    ]))
  },
  serviceWorker: false,
  themeConfig: {
    logo: `/logo.png`,
    editLinks: false,
    search: false,
    nav: [
      {
        text: 'About',
        link: '/about/'
      },
      {
        text: 'Contact',
        link: '/contact/',
      },
      {
        text: 'Members',
        link: '/members/'
      },
      {
        text: 'Join',
        link: '/join/',
      },
      {
        text: 'openHAB.org',
        link: 'https://www.openhab.org/'
      }
    ]
  }
}

import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "openHAB Foundation e.V.",
  description: "The openHAB Foundation e.V. is a nonprofit organisation with the mission to educate the public about the possibilities and benefits of free and open smart home solutions.",
  head: [
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap' }],
    ['link', { rel: 'stylesheet', href: `/fonts/fonts.css` }],
    ['link', { rel: 'icon', href: `/favicon.ico` }],
    ['link', { rel: 'shortcut icon', href: `/favicon.ico` }],
    ['link', { rel: 'apple-touch-icon', href: `/apple-icon.png` }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:image', content: 'https://www.openhabfoundation.org/og-image.png' }],
  ],
  lang: 'en-US',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: { light: '/logo.svg', dark: '/logo-dark.svg' },
    editLink: undefined,
    search: undefined,
    siteTitle: false,
    aside: false,
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about/' },
      { text: 'Contact', link: '/contact' },
      { text: 'Members' , link: '/members/' },
      { text: 'Join', link: '/join/' },
      { text: 'openHAB.org', link: 'https://www.openhab.org/' },
    ],
    docFooter: undefined
  }
})

// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import { type Theme, useData } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import MemberLayout from '../layouts/MemberPage.vue'
import './style.css'
import './openhab.css'

import Footer from '../components/Footer.vue'

export default {
  extends: DefaultTheme,
  Layout: () => {
    const { page } = useData()
    return h(DefaultTheme.Layout, null, {
      'doc-footer-before': '',
      'layout-bottom': () => (page.value.relativePath === 'index.md' ? null : h(Footer)),
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router, siteData }) {
    app.component('MemberPage', MemberLayout)
  }
} satisfies Theme

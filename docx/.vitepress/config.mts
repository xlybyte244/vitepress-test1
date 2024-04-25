import { defineConfig } from 'vitepress'
import { sides } from './sides'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "web-mid-xlinyi",
  description: "web-mid",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-present Evan You'
    },
    search: {
      provider: 'local'
    },
    aside: 'left',
    outline: [1,6],
    sidebar: sides,
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
  },
})

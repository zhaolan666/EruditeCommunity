import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  outDir: '../dist',

  // 站点语言标题等
  lang: 'zh-CN',
  title: "EruditeCommunity",
  description: "This is a blog question-and-answer site similar to Zhihu and CSDN",
  // 打包输出目录


  /* 主题配置 */
  themeConfig: {
    i18nRouting: false,

    logo: '/logo.png',

    nav: [
      { text: "Guide", link: '/guide' }
    ],
    sidebar: {},
    /* 右侧大纲配置 */
    outline: {
      level: 'deep',
      label: '本页目录'
    },

    socialLinks: [{ icon: 'github', link: 'https://github.com/maomao1996' }],

    footer: {
      copyright: 'Copyright © 2019-present mingdu'
    },

    darkModeSwitchLabel: '外观',
    returnToTopLabel: '返回顶部',
    lastUpdatedText: '上次更新',

    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    }
  }
})

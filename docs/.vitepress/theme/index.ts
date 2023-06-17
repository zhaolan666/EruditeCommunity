import { h, App } from 'vue'
import Theme from 'vitepress/theme'
import { useData } from 'vitepress'
import Visitor from './components/Visitor.vue'

import './styles/index.css'

// export default Object.assign({}, Theme, {
//   Layout: () =>
//     h(Theme.Layout, null, {
//       /**
//        * 相关插槽
//        * https://github.com/vuejs/vitepress/blob/main/src/client/theme-default/Layout.vue
//        */
//       'nav-bar-title-after': () => h(Visitor)
//     })
// })

// enhanceApp({ app, router, siteData }) {
//   // ...
// }

export default Object.assign({}, Theme, {
  Layout: () => {
    const props: Record<string, any> = {}
    // 获取 frontmatter
    const { frontmatter } = useData()

    /* 添加自定义 class */
    if (frontmatter.value?.layoutClass) {
      props.class = frontmatter.value.layoutClass
    }

    return h(Theme.Layout, props)
  }
})


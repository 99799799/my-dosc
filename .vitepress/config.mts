import { defineConfig } from 'vitepress'
// import { set_sidebar } from './utils/auto_sidebar.mjs';	// 改成自己的路径

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/my-dosc/",
  head: [["link", { rel: "icon", href: "/my-dosc/wd.png" }]],
  title: "Bai_0v0的文档",
  description: "A VitePress Site",
  themeConfig: {
    outlineTitle: '目录',
    outline: [2, 6],
    logo: '/images/wd.png',
    // https://vitepress.dev/reference/default-theme-config
    search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: "搜索文档",
            buttonAriaLabel: "搜索文档",
          },
          modal: {
            noResultsText: "无法找到相关结果",
            resetButtonTitle: "清除查询条件",
            footer: {
              selectText: "选择",
              navigateText: "切换",
            },
          },
        },
      },
    },
    nav: [
      {
        text: '导航', link: '/docs/nav/index',
        activeMatch: '/docs/nav/'
      },
      {
        text: '前端', items: [
          { text: 'element-plus', link: '/docs/front-end/technology/element-plus.md' },
          { text: 'typescript', link: '/docs/front-end/technology/typescript.md' },
          { text: 'nest', link: '/docs/front-end/technology/nest.md' }
        ]
      },
      { text: '项目', link: 'docs/my-item/article/微蜂私域' },
      { text: '文章', link: 'docs/front-end/article/数组常用方法总结' },
      { text: '旅行地图', link: '/docs/map' },
    ],

    sidebar: {
      '/docs/front-end/article/': [
        {
          text: '随笔',
          items: [
            { text: 'vite+vue3+ts开发过程遇到的问题', link: '/docs/front-end/article/vite+vue3+ts开发过程遇到的问题' },
            { text: '数组常用方法总结', link: '/docs/front-end/article/数组常用方法总结' },
            { text: '字符串方法总结', link: '/docs/front-end/article/字符串方法总结' },
            { text: '数组去重', link: '/docs/front-end/article/数组去重' },
            { text: '常用工具函数', link: '/docs/front-end/article/常用工具函数' },
            { text: '常用工具函数2', link: '/docs/front-end/article/常用工具函数2' },
            { text: 'js禁止网页复制', link: '/docs/front-end/article/js如何禁止网页复制' },
            { text: 'webpack', link: '/docs/front-end/article/webpack' },
            { text: 'jquery', link: '/docs/front-end/article/jquery' },
            { text: 'git', link: '/docs/front-end/article/git' },
            { text: 'html的使用scss', link: '/docs/front-end/article/html的使用scss' },
            { text: '@scope样式隔离', link: '/docs/front-end/article/@scope样式隔离' },
            { text: '常用的h5标签', link: '/docs/front-end/article/常用的h5标签' },
          ],
        },
      ],
      '/docs/my-item/article/': [
        {
          text: '项目',
          items: [
            { text: '微蜂私域', link: '/docs/my-item/article/微蜂私域' },
            { text: '大海有礼', link: '/docs/my-item/article/大海有礼' },
            { text: '武阔天下', link: '/docs/my-item/article/武阔天下' },
            { text: '七七三好服', link: '/docs/my-item/article/773好服' },
          ],
        }
      ]
    },
    // sidebar: {
    //   "docs/front-end/vue": set_sidebar("docs/front-end/vue"),
    //   "docs/front-end/article": set_sidebar("docs/front-end/article")
    // },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/99799799' },
      {
        icon: {
          svg: '<svg t="1708742180624" class="icon" viewBox="0 0 1316 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4287" width="200" height="200"><path d="M643.181714 247.698286l154.916572-123.172572L643.181714 0.256 643.072 0l-154.660571 124.269714 154.660571 123.245715 0.109714 0.182857z m0 388.461714h0.109715l399.579428-315.245714-108.361143-87.04-291.218285 229.888h-0.146286l-0.109714 0.146285L351.817143 234.093714l-108.251429 87.04 399.433143 315.136 0.146286-0.146285z m-0.146285 215.552l0.146285-0.146286 534.893715-422.034285 108.397714 87.04-243.309714 192L643.145143 1024 10.422857 525.056 0 516.754286l108.251429-86.893715L643.035429 851.748571z" fill="#1E80FF" p-id="4288"></path></svg>',
        },
        link: 'https://juejin.cn/user/2648041114311069'
      },
      {
        icon: {
          svg: '<svg t="1708742405929" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5309" width="200" height="200"><path d="M512 0c282.784 0 512 229.216 512 512s-229.216 512-512 512S0 794.784 0 512 229.216 0 512 0z m189.952 752l11.2-108.224c-31.904 9.536-100.928 16.128-147.712 16.128-134.464 0-205.728-47.296-195.328-146.304 11.584-110.688 113.152-145.696 232.64-145.696 54.784 0 122.432 8.8 151.296 18.336L768 272.704C724.544 262.24 678.272 256 599.584 256c-203.2 0-388.704 94.88-406.4 263.488C178.336 660.96 303.584 768 535.616 768c80.672 0 138.464-6.432 166.336-16z" fill="#CE000D" p-id="5310"></path></svg>',
        },
        link: 'https://blog.csdn.net/m0_48316908?spm=1000.2115.3001.5343'
      },
    ],
    footer: {
      copyright: 'copyright@ 2024 Albert Wang'
    }
  }
})

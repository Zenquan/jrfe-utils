module.exports = {
  title: 'jrfe-utils', // 显示在左上角的网页名称以及首页在浏览器标签显示的title名称
  description: '悦跑h5小分队工具', // meta 中的描述文字，用于SEO
  // 注入到当前页面的 HTML <head> 中的标签
  head: [
    ['link', {
      rel: 'icon',
      href: '/egg.png'
    }], //浏览器的标签栏的网页图标
  ],
  markdown: {
    lineNumbers: true
  },
  serviceWorker: true,
  themeConfig: {
    logo: '/egg.png',
    lastUpdated: 'lastUpdate', // string | boolean
    nav: [{
        text: '首页',
        link: '/'
      },
      {
        text: '分类',
        ariaLabel: '分类',
        items: [{
            text: '安装',
            link: '/pages/folder1/install.md'
          },
          {
            text: 'API',
            link: '/pages/folder1/api.md'
          },
        ]
      },
      {
        text: 'Github',
        link: 'https://github.com/Zenquan/jrfe-utils'
      },
    ],
    sidebar: {
      '/pages/folder1/': [
        'install',
        'api'
      ]
    }
  }
}
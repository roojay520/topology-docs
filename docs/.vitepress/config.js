module.exports = {
  title: '乐吾乐 Topology',
  description: '乐吾乐 Topology文档中心',

  themeConfig: {
    docsDir: 'docs',

    algolia: {
      apiKey: '',
      indexName: 'le5le-topology',
    },

    nav: [
      { text: '教程', link: '/tutorial/start', activeMatch: '^/tutorial/' },
      { text: 'API', link: '/api/topology', activeMatch: '^/api/' },
      { text: '视频教程', link: '/videos/index', activeMatch: '^/videos/' },
      {
        text: '资源',
        link: '/resources/install',
        activeMatch: '^/resources/',
        items: [
          {
            text: '部署试用',
            link: '/resources/install',
          },
          {
            text: '单机版',
            link: '/resources/pc',
          },
          {
            text: '开发者示例',
            link: '/awesome/index',
          },
        ],
      },
      { text: '常见问题', link: '/faq/index', activeMatch: '^/faq/' },
      { text: '博客', link: '/blog/index', activeMatch: '^/blog/' },
      {
        text: '多语言',
        items: [
          {
            text: '中文',
            link: '/tutorial/start',
          },
          {
            text: 'English',
            link: '/en/tutorial/start',
          },
        ],
      },
      {
        text: '社区',
        activeMatch: '^/resources/',
        items: [
          {
            text: 'Github',
            link: 'https://github.com/le5le-com/topology',
          },
          {
            text: 'Issues',
            link: 'https://github.com/le5le-com/issues/issues',
          },
          {
            text: '技术交流群',
            link: '/community/wechat',
          },
          {
            text: '关于我们',
            link: '/community/us',
          },
        ],
      },
    ],

    sidebar: {
      '/tutorial/': getTutorialSidebar(),
      '/api/': getAPISidebar(),
      '/': getTutorialSidebar(),
    },
  },
};

function getTutorialSidebar() {
  return [
    {
      text: 'Introduction',
      children: [
        { text: 'What is VitePress?', link: '/' },
        { text: 'Getting Started', link: '/guide/getting-started' },
        { text: 'Configuration', link: '/guide/configuration' },
        { text: 'Asset Handling', link: '/guide/assets' },
        { text: 'Markdown Extensions', link: '/guide/markdown' },
        { text: 'Using Vue in Markdown', link: '/guide/using-vue' },
        { text: 'Deploying', link: '/guide/deploy' },
      ],
    },
    {
      text: 'Advanced',
      children: [
        { text: 'Frontmatter', link: '/guide/frontmatter' },
        { text: 'Global Computed', link: '/guide/global-computed' },
        { text: 'Global Component', link: '/guide/global-component' },
        { text: 'Customization', link: '/guide/customization' },
        {
          text: 'Differences from Vuepress',
          link: '/guide/differences-from-vuepress',
        },
      ],
    },
  ];
}

function getAPISidebar() {
  return [
    {
      text: 'App Config',
      children: [{ text: 'Basics', link: '/config/basics' }],
    },
    {
      text: 'Theme Config',
      children: [
        { text: 'Homepage', link: '/config/homepage' },
        { text: 'Algolia Search', link: '/config/algolia-search' },
        { text: 'Carbon Ads', link: '/config/carbon-ads' },
      ],
    },
  ];
}

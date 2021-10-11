module.exports = {
  title: '乐吾乐 Topology',
  description: '乐吾乐Topology文档中心',

  themeConfig: {
    logo: '/img/logo.png',

    algolia: {
      apiKey: '',
      indexName: 'le5le-topology',
    },

    nav: [
      { text: '教程', link: '/tutorial/start', activeMatch: '^/tutorial/' },
      { text: 'API', link: '/api/topology-data', activeMatch: '^/api/' },
      {
        text: '视频教程',
        link: '/videos/start',
        activeMatch: '^/videos/',
      },
      {
        text: '资源',
        link: '/awesome/index',
        activeMatch: '^/awesome/',
      },
      { text: '常见问题', link: '/faq/open-source', activeMatch: '^/faq/' },
      { text: '博客', link: '/blog/index', activeMatch: '^/blog/' },
      {
        text: '社区',
        activeMatch: '^/community/',
        items: [
          {
            text: 'Github',
            link: 'https://github.com/le5le-com/topology',
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
    ],

    sidebar: {
      '/tutorial/': getTutorialSidebar(),
      '/api/': getAPISidebar(),
      '/videos/': [
        {
          text: '视频教程',
          children: [
            {
              text: '使用介绍',
              link: '/videos/start',
            },
            {
              text: '基础课程',
              link: '/videos/courses',
            },
            {
              text: '源码解析',
              link: '/videos/advanced',
            },
          ],
        },
      ],
      '/awesome/': [
        {
          text: '资源',
          children: [
            {
              text: '开发者示例',
              link: '/awesome/index',
            },
          ],
        },
      ],
      '/faq/': getFaqSidebar(),
      '/community/': getCommunitySidebar(),
    },
  },
};

function getTutorialSidebar() {
  return [
    {
      text: '使用',
      children: [
        { text: 'Topology介绍', link: '/tutorial/introduction' },
        {
          text: '快速上手',
          children: [
            { text: 'ES5方式', link: '/tutorial/es5' },
            { text: 'ES6方式', link: '/tutorial/es6' },
          ],
        },
        { text: '企业版介绍', link: '/tutorial/commercial' },
      ],
    },
    {
      text: '架构',
      children: [
        { text: '概要', link: '/tutorial/architecture' },
        { text: '画布', link: '/tutorial/topology' },
        { text: '画笔', link: '/tutorial/pen' },
        { text: '实时数据监听', link: '/tutorial/data' },
        { text: '消息事件', link: '/tutorial/events' },
        { text: '生命周期', link: '/tutorial/lifecycle' },
        { text: '动画', link: '/tutorial/animate' },
        { text: '进度条', link: '/tutorial/progress' },
        { text: '视频', link: '/tutorial/video' },
        { text: '排版算法', link: '/tutorial/layout' },
        { text: '注意事项', link: '/tutorial/attention' },
      ],
    },
    {
      text: '进阶',
      children: [
        {
          text: '功能',
          children: [
            { text: '拖拽', link: '/tutorial/drag' },
            { text: '钢笔', link: '/tutorial/pen' },
            { text: '铅笔', link: '/tutorial/pencil' },
            { text: '自动锚点', link: '/tutorial/auto-anchor' },
            { text: '网格', link: '/tutorial/grid' },
            { text: '标尺', link: '/tutorial/rule' },
            { text: '右键菜单', link: '/tutorial/right-menu' },
            { text: '鹰眼地图', link: '/tutorial/map' },
            { text: '放大镜', link: '/tutorial/magnifier' },
            { text: '快捷键', link: '/tutorial/keyboards' },
            { text: '自定义连线算法', link: '/tutorial/line-ai' },
          ],
        },
        {
          text: '图形库',
          children: [
            { text: '图片', link: '/tutorial/image' },
            { text: '字体图标', link: '/tutorial/icon' },
            { text: '自定义图形库', link: '/tutorial/make-component' },
            { text: '使用外部组件', link: '/tutorial/dom' },
          ],
        },
      ],
    },
    {
      text: '企业图形库',
      children: [
        { text: '表单', link: '/tutorial/forms' },
        { text: '图表', link: '/tutorial/charts' },
        { text: '表格', link: '/tutorial/table' },
      ],
    },
  ];
}

function getAPISidebar() {
  return [
    {
      text: 'API',
      children: [
        {
          text: '画布',
          children: [
            { text: '引擎core', link: '/api/core' },
            { text: 'Canvas', link: '/api/canvas' },
            { text: '数据', link: '/api/store' },
            { text: '选项', link: '/api/options' },
            { text: '工具函数', link: '/api/utils' },
          ],
        },
        {
          text: '画笔',
          children: [
            { text: '画笔', link: '/api/pen' },
            { text: '位置', link: '/api/rect' },
            { text: '点', link: '/api/point' },
            { text: '箭头', link: '/api/arrow' },
          ],
        },
        { text: '排版算法', link: '/api/layout' },
      ],
    },
  ];
}

function getFaqSidebar() {
  return [
    {
      text: '常见问题',
      children: [
        { text: '开源引擎和企业版', link: '/faq/open-source' },
        { text: '如何编译源码', link: '/faq/source' },
        { text: '图标不显示', link: '/faq/icon' },
        { text: 'MQTT一直重连', link: '/faq/mqtt' },
        { text: '节点位置错误', link: '/faq/position' },
        { text: '如何保存为svg', link: '/faq/svg' },
        { text: '常见商务问答', link: '/faq/business' },
      ],
    },
  ];
}

function getCommunitySidebar() {
  return [
    {
      text: '社区',
      children: [
        {
          text: 'Github',
          link: 'https://github.com/le5le-com/topology.js',
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
  ];
}
